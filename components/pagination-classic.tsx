export default function PaginationClassic() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav className="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="Navigation">
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <span className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600">&lt;- Previous</span>
          </li>
          <li className="ml-3 first:ml-0">
            <a className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500" href="#0">Next -&gt;</a>
          </li>
        </ul>
      </nav>
      <div className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
        Showing <span className="font-medium text-slate-600 dark:text-slate-300">1</span> to <span className="font-medium text-slate-600 dark:text-slate-300">10</span> of <span className="font-medium text-slate-600 dark:text-slate-300">467</span> results
      </div>
    </div>
  )
}