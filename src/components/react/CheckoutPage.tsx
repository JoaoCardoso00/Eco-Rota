import { UserGroupIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';

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
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <div>
              <h2 className="font-fredoka text-lg font-medium text-gray-900">
                Informações da viagem
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label
                    htmlFor="quantity-of-people"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
                    Quantidade de pessoas
                  </label>
                  <div className="mt-1">
                    <select
                      id="quantity-of-people"
                      name="quantity-of-people"
                      autoComplete="quantity-of-people"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
                    Horário de partida
                  </label>
                  <div className="mt-1">
                    <select
                      id="time"
                      name="time"
                      autoComplete="time"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    >
                      <option>17:00</option>
                      <option>20:00</option>
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
                    htmlFor="email-address"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
                    Primeiro nome
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
                    Último nome
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="CPF"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
                    CPF
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="CPF"
                      id="CPF"
                      autoComplete="CPF"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
                    Gênero
                  </label>
                  <div className="mt-1">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
                    >
                      <option>Masculino</option>
                      <option>Feminino</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
                    Telefone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 font-fredoka shadow-sm focus:border-green-800 focus:ring-green-800 sm:text-sm"
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
                          name="payment-type"
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

                      <label
                        htmlFor={paymentMethod.id}
                        className="ml-3 block font-fredoka text-sm font-medium text-gray-700"
                      >
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div className="col-span-4">
                  <label
                    htmlFor="card-number"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="name-on-card"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="expiration-date"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="cvc"
                    className="block font-fredoka text-sm font-medium text-gray-700"
                  >
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
