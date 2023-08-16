export const metadata = {
  title: 'Empty State - Mosaic',
  description: 'Page description',
}

export default function EmptyState() {
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Empty State ✨</h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

            {/* Add board button */}
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2">Add Event</span>
            </button>

          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-2xl m-auto mt-16">

            <div className="text-center px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 mb-4">
                <svg className="w-5 h-6 fill-current" viewBox="0 0 20 24">
                  <path className="text-slate-500 dark:text-slate-600" d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z" />
                  <path className="text-slate-300 dark:text-slate-400" d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z" />
                  <path className="text-slate-400 dark:text-slate-500" d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z" />
                </svg>
              </div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-2">Pay your bills in just a few clicks</h2>
              <div className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="ml-2">Add Event</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}