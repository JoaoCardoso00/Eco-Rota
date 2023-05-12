export function CardPayment() {
  return (
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
  );
}

export function PixPayment() {
  return (
    <div className="mt-6">
      <h2 className="font-fredoka">
        Uma chave pix será gerada após a confirmação do pedido
      </h2>
    </div>
  );
}
