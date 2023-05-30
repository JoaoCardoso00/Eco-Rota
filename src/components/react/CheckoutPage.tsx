import { UserGroupIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import type { Route } from '../../types/Route';
import { useState } from 'react';
import { CardPayment, PixPayment } from './PaymentTypes';
import { api } from '../../services/api';

const schema = z.object({
  quantityOfPeople: z.string(),
  time: z.string(),
  email: z
    .string()
    .email({ message: 'Favor inserir um email valido' })
    .min(1, { message: 'Email é obrigatório' }),
  firstName: z.string().min(1, { message: 'Nome é obrigatório' }),
  lastName: z.string().min(1, { message: 'Sobrenome é obrigatório' }),
  cpf: z.string().min(11, { message: 'CPF é obrigatório' }),
  gender: z.string(),
  phone: z.string().min(11, { message: 'Telefone é obrigatório' }),
});

type FormData = z.infer<typeof schema>;

const paymentMethods = [
  { id: 'credit-card', title: 'Cartão de crédito' },
  { id: 'pix', title: 'PIX' },
] as const;

type PaymentMethods = (typeof paymentMethods)[number]['id'] | null;

type Props = {
  routeData: Route;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}

export function CheckoutPage({ routeData }: Props) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethods>(null);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const SubTotalPrice = routeData.priceWithDiscount * numOfPeople;
  const AssurancePrice = 10 * numOfPeople;
  const fullPrice = SubTotalPrice + AssurancePrice;
  const formattedSubTotalPrice = formatPrice(SubTotalPrice);
  const formattedAssurancePrice = formatPrice(AssurancePrice);
  const formattedFullPrice = formatPrice(fullPrice);

  async function handleConfirmPurchase(data: FormData) {
    setIsLoading(true);
    const paymentMethod =
      selectedPaymentMethod === 'credit-card' ? 'Credit card' : 'Pix';
    const name = `${data.firstName} ${data.lastName}`;

    const response = await api.post('/orders/', {
      package: routeData.name,
      name: name,
      email: data.email,
      price: fullPrice,
      quantity: numOfPeople,
      paymentMethod: paymentMethod,
      hasDiscount: true,
    });

    if (response.status === 201) {
      setIsLoading(false);
    }

    window.location.href = '/checkout/success';
  }

  let currentPayment;

  if (selectedPaymentMethod === 'credit-card') {
    currentPayment = <CardPayment />;
  }

  if (selectedPaymentMethod === 'pix') {
    currentPayment = <PixPayment />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form
          className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          onSubmit={handleSubmit(handleConfirmPurchase)}
        >
          <div>
            <div>
              <h2 className="font-fredoka text-lg font-medium text-gray-900">
                Informações da viagem
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label className="block font-fredoka text-sm font-medium text-gray-700">
                    Quantidade de pessoas
                  </label>
                  <div className="mt-1">
                    <select
                      {...register('quantityOfPeople')}
                      autoComplete="quantity-of-people"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                      onChange={(e) => setNumOfPeople(Number(e.target.value))}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-fredoka text-sm font-medium text-gray-700">
                    Horário de partida
                  </label>
                  <div className="mt-1">
                    <select
                      {...register('time')}
                      autoComplete="time"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                      defaultValue="09:00"
                    >
                      {routeData.availableHours.map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="font-fredoka text-lg font-medium text-gray-900">
                Informações para contato
              </h2>
              <span className="font-fredoka text-xs text-gray-500">
                Pedimos as informações de uma pessoa que irá para viagem para
                melhor organização do nosso time.
              </span>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div className="col-span-2 mt-4">
                  <label
                    className={`block font-fredoka text-sm font-medium text-gray-700 ${
                      errors.email ? 'text-red-500' : ''
                    }`}
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      {...register('email')}
                      autoComplete="email"
                      className={`block w-full rounded-md border-gray-300 font-fredoka shadow-sm placeholder:text-red-500 focus:border-green-800 focus:ring-green-800 sm:text-sm ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      placeholder={errors.email?.message ?? ''}
                    />
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    className={`block font-fredoka text-sm font-medium text-gray-700 ${
                      errors.firstName ? 'text-red-500' : ''
                    }`}
                  >
                    Primeiro nome
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      {...register('firstName')}
                      autoComplete="given-name"
                      className={`block w-full rounded-md border-gray-300 font-fredoka shadow-sm placeholder:text-red-500 focus:border-green-800 focus:ring-green-800 sm:text-sm ${
                        errors.firstName ? 'border-red-500' : ''
                      }`}
                      placeholder={errors.firstName?.message ?? ''}
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    className={`block font-fredoka text-sm font-medium text-gray-700 ${
                      errors.lastName ? 'text-red-500' : ''
                    }`}
                  >
                    Último nome
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      {...register('lastName')}
                      autoComplete="family-name"
                      className={`block w-full rounded-md border-gray-300 font-fredoka shadow-sm placeholder:text-red-500 focus:border-green-800 focus:ring-green-800 sm:text-sm ${
                        errors.lastName ? 'border-red-500' : ''
                      }`}
                      placeholder={errors.lastName?.message ?? ''}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block font-fredoka text-sm font-medium text-gray-700 ${
                      errors.cpf ? 'text-red-500' : ''
                    }`}
                  >
                    CPF
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="CPF"
                      {...register('cpf')}
                      autoComplete="CPF"
                      className={`block w-full rounded-md border-gray-300 font-fredoka shadow-sm placeholder:text-red-500 focus:border-green-800 focus:ring-green-800 sm:text-sm ${
                        errors.cpf ? 'border-red-500' : ''
                      }`}
                      placeholder={errors.cpf?.message ?? ''}
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block font-fredoka text-sm font-medium text-gray-700">
                    Gênero
                  </label>
                  <div className="mt-1">
                    <select
                      id="gender"
                      {...register('gender')}
                      autoComplete="gender"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                      defaultValue="Masculino"
                    >
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    className={`block font-fredoka text-sm font-medium text-gray-700 ${
                      errors.phone ? 'text-red-500' : ''
                    }`}
                  >
                    Telefone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      {...register('phone')}
                      id="phone"
                      autoComplete="tel"
                      className={`block w-full rounded-md border-gray-300 font-fredoka shadow-sm placeholder:text-red-500 focus:border-green-800 focus:ring-green-800 sm:text-sm ${
                        errors.phone ? 'border-red-500' : ''
                      }`}
                      placeholder={errors.phone?.message ?? ''}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="font-fredoka text-lg font-medium text-gray-900">
                Pagamento
              </h2>

              <fieldset className="mt-4">
                <legend className="sr-only">Tipo de pagamento</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      <input
                        id={paymentMethod.id}
                        name="payment-type"
                        type="radio"
                        onChange={() =>
                          setSelectedPaymentMethod(paymentMethod.id)
                        }
                        className="h-4 w-4 border-gray-300 text-green-800 focus:ring-green-800"
                      />

                      <label className="ml-3 block font-fredoka text-sm font-medium text-gray-700">
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              {currentPayment}
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="font-fredoka text-lg font-medium text-gray-900">
              Resumo da compra
            </h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Rota Selecionada</h3>
              <div className="flex flex-col px-4 py-6 sm:flex-row sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    src={routeData.images[0]}
                    className="mx-auto w-full rounded-md sm:w-48"
                  />
                </div>
                <div className="mx-auto mt-10 flex flex-1 flex-col sm:ml-6 sm:mt-0 sm:mr-0">
                  <div className="flex">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-center sm:text-start">
                        <a
                          href={`/routes/${routeData.slug}`}
                          className="text-2xl font-medium text-gray-700 hover:text-gray-800 sm:text-xl"
                        >
                          {routeData.name}
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="my-1" />
                  <div className="flex items-center gap-2 sm:ml-0 sm:flex-col sm:items-start sm:gap-0">
                    <div className="flex items-center gap-2">
                      <UserGroupIcon className="h-4 w-4 text-green-800" />
                      <span className="font-fredoka text-sm">
                        {numOfPeople} pessoas
                      </span>
                    </div>
                    <div className="my-1" />
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-green-800" />
                      <span className="font-fredoka text-sm">
                        {new Intl.DateTimeFormat('pt-BR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        }).format(new Date(routeData.dueDate))}
                      </span>
                    </div>
                    <div className="flex flex-1 items-end justify-between sm:pt-2">
                      <p className="font-fredoka text-sm font-medium text-gray-900 sm:mt-1">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(routeData.priceWithDiscount)}{' '}
                        / pessoa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="font-fredoka text-sm font-medium text-gray-900">
                    {formattedSubTotalPrice}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Seguro</dt>
                  <dd className="font-fredoka text-sm font-medium text-gray-900">
                    {formattedAssurancePrice}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="font-fredoka text-base font-medium text-gray-900">
                    {formattedFullPrice}
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-green-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  {isLoading ? <Loading /> : <>Confirmar Compra</>}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function Loading() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="mr-2 inline h-8 w-8 animate-spin fill-white text-gray-200 dark:text-gray-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </>
  );
}
