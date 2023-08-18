export const metadata = {
  title: 'Breadcrumb - Mosaic',
  description: 'Page description',
}

export default function BreadcrumbLibrary() {
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Breadcrumb ✨</h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Components */}
          <div className="space-y-8 mt-8">

            {/* With Slashes */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">With Slashes</h2>
              <div className="px-6 py-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm">
                <div className="text-center">
                  {/* Start */}
                  <ul className="inline-flex flex-wrap text-sm font-medium">
                    <li className="after:content-['/'] last:after:hidden after:text-slate-400 dark:after:text-slate-600 after:px-2">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Home</a>
                    </li>
                    <li className="after:content-['/'] last:after:hidden after:text-slate-400 dark:after:text-slate-600 after:px-2">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Settings</a>
                    </li>
                    <li className="after:content-['/'] last:after:hidden after:text-slate-400 dark:after:text-slate-600 after:px-2">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Notifications</a>
                    </li>
                  </ul>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* With Dots */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">With Dots</h2>
              <div className="px-6 py-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm">
                <div className="text-center">
                  {/* Start */}
                  <ul className="inline-flex flex-wrap text-sm font-medium">
                    <li className="after:content-['·'] last:after:hidden after:text-slate-400 dark:after:text-slate-600 after:px-2">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Home</a>
                    </li>
                    <li className="after:content-['·'] last:after:hidden after:text-slate-400 dark:after:text-slate-600 after:px-2">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Settings</a>
                    </li>
                    <li className="after:content-['·'] last:after:hidden after:text-slate-400 dark:after:text-slate-600 after:px-2">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Notifications</a>
                    </li>
                  </ul>
                  {/* End */}
                </div>
              </div>
            </div>

            {/* With Chevrons */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">With Chevrons</h2>
              <div className="px-6 py-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm">
                <div className="text-center">
                  {/* Start */}
                  <ul className="inline-flex flex-wrap text-sm font-medium">
                    <li className="flex items-center">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Home</a>
                      <svg className="h-4 w-4 fill-current text-slate-400 dark:text-slate-600 mx-3" viewBox="0 0 16 16">
                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                      </svg>
                    </li>
                    <li className="flex items-center">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Settings</a>
                      <svg className="h-4 w-4 fill-current text-slate-400 dark:text-slate-600 mx-3" viewBox="0 0 16 16">
                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                      </svg>
                    </li>
                    <li className="flex items-center">
                      <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">Notifications</a>
                    </li>
                  </ul>
                  {/* End */}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
