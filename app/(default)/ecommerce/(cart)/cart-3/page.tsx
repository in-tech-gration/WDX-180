export const metadata = {
  title: 'Cart 3 - Mosaic',
  description: 'Page description',
}

import Link from 'next/link'
import Image from 'next/image'
import ProductImage01 from '@/public/images/related-product-01.jpg'
import ProductImage02 from '@/public/images/related-product-02.jpg'
import ProductImage03 from '@/public/images/related-product-03.jpg'

export default function Cart3() {
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
                <span className="text-slate-500 dark:text-slate-400">Payment</span>
                <span>-&gt;</span>
                <span className="text-indigo-500">Confirm</span>
              </div>
            </div>
            <header className="mb-6">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">Thank you for your order ✨</h1>
              <p>You will soon receive a confirmation email with details of your order and a link to download the files.</p>
            </header>
            {/* Billing Information */}
            <div>
              <div className="text-slate-800 dark:text-slate-100 font-semibold mb-4">Billing Information</div>
              <form>
                <div className="space-y-4">
                  {/* 1st row */}
                  <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-name">
                        Name
                      </label>
                      <input id="card-name" className="form-input w-full" type="text" defaultValue="Patrick" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-surname">
                        Surname
                      </label>
                      <input id="card-surname" className="form-input w-full" type="text" defaultValue="Sullivan" />
                    </div>
                  </div>
                  {/* 2nd row */}
                  <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-address">
                        Address
                      </label>
                      <input id="card-address" className="form-input w-full" type="text" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-city">
                        Town/City
                      </label>
                      <input id="card-city" className="form-input w-full" type="text" />
                    </div>
                  </div>
                  {/* 3rd row */}
                  <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-state">
                        State/Country
                      </label>
                      <input id="card-state" className="form-input w-full" type="text" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-country">
                        Country <span className="text-rose-500">*</span>
                      </label>
                      <select id="card-country" className="form-select w-full">
                        <option>Italy</option>
                        <option>USA</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                  {/* 4th row */}
                  <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-postcode">
                        Postcode
                      </label>
                      <input id="card-postcode" className="form-input w-full" type="text" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-vat">
                        VAT ID
                      </label>
                      <input id="card-vat" className="form-input w-full" type="text" />
                    </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500">
                      Download Invoice
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Divider */}
            <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />
            {/* Billing footer */}
            <div className="bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 p-4">
              <div className="text-center md:text-left md:flex md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-2">
                <div className="text-sm">
                  Enjoy a <span className="font-medium text-slate-800 dark:text-slate-100">20% OFF</span> discount on your next order 🎉
                </div>
                <div className="relative inline-flex text-center px-3 py-1 rounded bg-emerald-500">
                  <div
                    className="absolute w-3 h-3 rounded-full bg-white dark:bg-slate-800 left-0 -translate-x-1/2 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute w-3 h-3 rounded-full bg-white dark:bg-slate-800 right-0 translate-x-1/2 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-emerald-50 font-medium uppercase">XMAS22</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sidebar */}
      <div>
        <div className="lg:sticky lg:top-16 bg-slate-50 dark:bg-slate-800/20 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100dvh-64px)]">
          <div className="py-8 px-4 lg:px-8 2xl:px-12">
            <div className="max-w-sm mx-auto lg:max-w-none">
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Order Summary</h2>
              <div className="space-y-6">

                {/* Order Details */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold mb-2">Order Details</div>
                  {/* Cart items */}
                  <ul>
                    {/* Cart item */}
                    <li className="flex items-center py-3 border-b border-slate-200 dark:border-slate-700">
                      <a className="block mr-2 xl:mr-4 shrink-0" href="#0">
                        <Image className="w-16 xl:w-20" src={ProductImage01} width={200} height={142} alt="Product 01" />
                      </a>
                      <div className="grow">
                        <a href="#0">
                          <h4 className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-tight">The Complete Front-End Development Course!</h4>
                        </a>
                      </div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 ml-2">$69</div>
                    </li>
                    {/* Cart item */}
                    <li className="flex items-center py-3 border-b border-slate-200 dark:border-slate-700">
                      <a className="block mr-2 xl:mr-4 shrink-0" href="#0">
                        <Image className="w-16 xl:w-20" src={ProductImage02} width={200} height={142} alt="Product 02" />
                      </a>
                      <div className="grow">
                        <a href="#0">
                          <h4 className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-tight">Web Development Ultimate Course 2021</h4>
                        </a>
                      </div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 ml-2">$69</div>
                    </li>
                    {/* Cart item */}
                    <li className="flex items-center py-3 border-b border-slate-200 dark:border-slate-700">
                      <a className="block mr-2 xl:mr-4 shrink-0" href="#0">
                        <Image className="w-16 xl:w-20" src={ProductImage03} width={200} height={142} alt="Product 03" />
                      </a>
                      <div className="grow">
                        <a href="#0">
                          <h4 className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-tight">Full-Stack JavaScript Course!</h4>
                        </a>
                      </div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 ml-2">$69</div>
                    </li>
                  </ul>
                  {/* Fees, discount and total */}
                  <ul>
                    <li className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <div className="text-sm">Subtotal</div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 ml-2">$205</div>
                    </li>
                    <li className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <div className="text-sm">Taxes</div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 ml-2">$48</div>
                    </li>
                    <li className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <div className="flex items-center">
                        <span className="text-sm mr-2">Discount</span>
                        <span className="text-xs inline-flex whitespace-nowrap font-medium uppercase bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
                          XMAS22
                        </span>
                      </div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 ml-2">-$25</div>
                    </li>
                    <li className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <div className="text-sm">Total</div>
                      <div className="text-sm font-medium text-emerald-600 ml-2">$205</div>
                    </li>
                  </ul>
                </div>

                {/* Payment Details */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold mb-4">Payment Details</div>
                  <div className="text-sm rounded border border-slate-200 dark:border-slate-700 p-3">
                    <div className="flex items-center justify-between space-x-2">
                      {/* CC details */}
                      <div className="flex items-center">
                        {/* Mastercard icon */}
                        <svg className="shrink-0 mr-3" width="32" height="24" xmlns="http://www.w3.org/2000/svg">
                          <rect fill="#1E293B" width="32" height="24" rx="3" />
                          <ellipse fill="#E61C24" cx="12.522" cy="12" rx="5.565" ry="5.647" />
                          <ellipse fill="#F99F1B" cx="19.432" cy="12" rx="5.565" ry="5.647" />
                          <path
                            d="M15.977 7.578A5.667 5.667 0 0 0 13.867 12c0 1.724.777 3.353 2.11 4.422A5.667 5.667 0 0 0 18.087 12a5.667 5.667 0 0 0-2.11-4.422Z"
                            fill="#F26622"
                          />
                        </svg>
                        <div>
                          Ending with <span className="text-slate-800 dark:text-slate-100">2478</span>
                        </div>
                      </div>
                      {/* Expiry */}
                      <div className="italic ml-2">Expires 12/23</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-4">
                    <Link href="/ecommerce/pay" className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                      View Your Order
                    </Link>
                  </div>
                  <div className="text-xs text-slate-500 italic text-center">
                    Should you ever change your mind, we offer a 14-day, no-questions-asked refund policy.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}