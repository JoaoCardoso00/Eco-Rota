import { UserGroupIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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

const products = [
  {
    id: 1,
    title: 'Praia vai quem quer',
    href: '#',
    price: 'R$ 32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: '/img/vai-quem-quer.webp',
    imageAlt: "Front of men's Basic Tee in black.",
  },
];
const paymentMethods = [
  { id: 'credit-card', title: 'Cartão de crédito' },
  { id: 'pix', title: 'PIX' },
];

export function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  console.log(errors);

  function handleConfirmPurchase(data: FormData) {
    console.log(data);
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
                      <option value="17:00">17:00</option>
                      <option value="20:00">20:00</option>
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
                <div>
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

                <div>
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

                <div>
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
                <legend className="sr-only">Payment type</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      {paymentMethodIdx === 0 ? (
                        <input
                          id={paymentMethod.id}
                          type="radio"
                          defaultChecked
                          className="h-4 w-4 border-gray-300 text-green-800 focus:ring-green-800"
                        />
                      ) : (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-green-800 focus:ring-green-800"
                        />
                      )}

                      <label className="ml-3 block font-fredoka text-sm font-medium text-gray-700">
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div className="col-span-4">
                  <label className="block font-fredoka text-sm font-medium text-gray-700">
                    Número do cartão
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-4">
                  <label className="block font-fredoka text-sm font-medium text-gray-700">
                    Nome no cartão
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autoComplete="cc-name"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-3">
                  <label className="block font-fredoka text-sm font-medium text-gray-700">
                    Validade (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autoComplete="cc-exp"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-fredoka text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autoComplete="csc"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="font-fredoka text-lg font-medium text-gray-900">
              Resumo da compra
            </h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex px-4 py-6 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-48 rounded-md"
                      />
                    </div>
                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a
                              href={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.title}
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="my-1" />
                      <div className="flex items-center gap-2">
                        <UserGroupIcon className="h-4 w-4 text-green-800" />
                        <span className="font-fredoka text-sm">1 pessoas</span>
                      </div>
                      <div className="my-1" />
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-green-800" />
                        <span className="font-fredoka text-sm">24 mar</span>
                      </div>
                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p className="mt-1 font-fredoka text-sm font-medium text-gray-900">
                          {product.price} / pessoa
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="font-fredoka text-sm font-medium text-gray-900">
                    R$ 64.00
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Seguro</dt>
                  <dd className="font-fredoka text-sm font-medium text-gray-900">
                    R$ 5.00
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="font-fredoka text-base font-medium text-gray-900">
                    R$ 75.52
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-green-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Confirmar Compra
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
