export default function BillingPanel() {
  return (
    <div className="grow">

      {/* Panel body */}
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-4">Billing & Invoices</h2>
          <div className="text-sm">This workspace's Basic Plan is set to <strong className="font-medium">$34</strong> per month and will renew on <strong className="font-medium">July 9, 2021</strong>.</div>
        </div>

        {/* Billing Information */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">Billing Information</h3>
          <ul>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">Payment Method</div>
              {/* Right */}
              <div className="text-sm text-slate-600 dark:text-slate-400 ml-4">
                <span className="mr-3">Mastercard ending 9282</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Edit</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">Billing Interval</div>
              {/* Right */}
              <div className="text-sm text-slate-600 dark:text-slate-400 ml-4">
                <span className="mr-3">Annually</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Edit</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">VAT/GST Number</div>
              {/* Right */}
              <div className="text-sm text-slate-600 dark:text-slate-400 ml-4">
                <span className="mr-3">UK849700927</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Edit</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">Your Address</div>
              {/* Right */}
              <div className="text-sm text-slate-600 dark:text-slate-400 ml-4">
                <span className="mr-3">34 Savoy Street, London, UK, 24E8X</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Edit</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">Billing Address</div>
              {/* Right */}
              <div className="text-sm text-slate-600 dark:text-slate-400 ml-4">
                <span className="mr-3">hello@cruip.com</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Edit</a>
              </div>
            </li>
          </ul>
        </section>

        {/* Invoices */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">Invoices</h3>
          {/* Table */}
          <table className="table-auto w-full dark:text-slate-400">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500">
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap">
                <th className="w-full block md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Year</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Plan</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-right"></div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm">
              {/* Row */}
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 dark:border-slate-700 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800 dark:text-slate-100">2021</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Basic Plan - Annualy</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium">$349.00</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-right flex items-center md:justify-end">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">HTML</a>
                    <span className="block w-px h-4 bg-slate-200 dark:bg-slate-700 mx-2" aria-hidden="true"></span>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">PDF</a>
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 dark:border-slate-700 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800 dark:text-slate-100">2020</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Basic Plan - Annualy</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium">$349.00</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-right flex items-center md:justify-end">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">HTML</a>
                    <span className="block w-px h-4 bg-slate-200 dark:bg-slate-700 mx-2" aria-hidden="true"></span>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">PDF</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">Cancel</button>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
          </div>
        </div>
      </footer>

    </div>
  )
}