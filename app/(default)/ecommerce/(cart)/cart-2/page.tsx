export const metadata = {
  title: 'Cart 2 - Mosaic',
  description: 'Page description',
}

import CartItems from '../cart-items'

export default function Cart2() {
  return (
    <div className="lg:relative lg:flex">

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
        <div className="lg:max-w-[640px] lg:mx-auto">

          {/* Cart items */}
          <div className="mb-6 lg:mb-0">
            <div className="mb-3">
              <div className="flex text-sm font-medium text-slate-400 dark:text-slate-500 space-x-2">
                <span className="text-slate-500 dark:text-slate-400">Review</span>
                <span>-&gt;</span>
                <span className="text-indigo-500">Payment</span>
                <span>-&gt;</span>
                <span className="text-slate-500 dark:text-slate-400">Confirm</span>
              </div>
            </div>
            <header className="mb-2">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Shopping Cart (3) ✨</h1>
            </header>
            <CartItems />
          </div>

        </div>
      </div>

      {/* Sidebar */}
      <div>
        <div className="lg:sticky lg:top-16 bg-slate-50 dark:bg-slate-800/20 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100dvh-64px)]">
          <div className="py-8 px-4 lg:px-8 2xl:px-12">
            <div className="max-w-sm mx-auto lg:max-w-none">
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Review & Pay</h2>
              <div className="space-y-6">

                {/* Order summary */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold mb-2">Order Summary</div>
                  <ul className="mb-4">
                    <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <div>Subtotal</div>
                      <div className="font-medium text-slate-800 dark:text-slate-100">$205</div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <div>Total due (including taxes)</div>
                      <div className="font-medium text-emerald-600">$253</div>
                    </li>
                  </ul>
                </div>

                {/* Payment Details */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold mb-4">Payment Details</div>
                  <div className="space-y-4">
                    {/* Card Number */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="card-nr">Card Number <span className="text-rose-500">*</span></label>
                      <input id="card-nr" className="form-input w-full" type="text" placeholder="1234 1234 1234 1234" />
                    </div>
                    {/* Expiry and CVC */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">Expiry Date <span className="text-rose-500">*</span></label>
                        <input id="card-expiry" className="form-input w-full" type="text" placeholder="MM/YY" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="card-cvc">CVC <span className="text-rose-500">*</span></label>
                        <input id="card-cvc" className="form-input w-full" type="text" placeholder="CVC" />
                      </div>
                    </div>
                    {/* Name on Card */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="card-name">Name on Card <span className="text-rose-500">*</span></label>
                      <input id="card-name" className="form-input w-full" type="text" placeholder="John Doe" />
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold mb-4">Additional Details</div>
                  <div className="space-y-4">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="card-email">Email <span className="text-rose-500">*</span></label>
                      <input id="card-email" className="form-input w-full" type="email" placeholder="john@company.com" />
                    </div>
                    {/* Country */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="card-country">Country <span className="text-rose-500">*</span></label>
                      <select id="card-country" className="form-select w-full">
                        <option>Italy</option>
                        <option>USA</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-4">
                    <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">Pay $253.00</button>
                  </div>
                  <div className="text-xs text-slate-500 italic text-center">You'll be charged $253, including $48 for VAT in Italy</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}