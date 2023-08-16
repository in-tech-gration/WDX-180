export const metadata = {
  title: 'Tabs - Mosaic',
  description: 'Page description',
}

export default function TabsLibrary() {
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Tabs ✨</h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Components */}
          <div className="space-y-8 mt-8">

            {/* Simple */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Simple</h2>
              {/* Start */}
              <div className="mb-8 border-b border-slate-200 dark:border-slate-700">
                <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-indigo-500 whitespace-nowrap" href="#0">Account</a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Notifications</a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Integrations</a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Plans</a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Billing</a>
                  </li>
                </ul>
              </div>
              {/* End */}
            </div>

            {/* With Underline */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">With Underline</h2>
              {/* Start */}
              <div className="relative mb-8">
                <div className="absolute bottom-0 w-full h-px bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                <ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                  <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="block pb-3 text-indigo-500 whitespace-nowrap border-b-2 border-indigo-500" href="#0">Account</a>
                  </li>
                  <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="block pb-3 text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Notifications</a>
                  </li>
                  <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="block pb-3 text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Integrations</a>
                  </li>
                  <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="block pb-3 text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Plans</a>
                  </li>
                  <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="block pb-3 text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Billing</a>
                  </li>
                </ul>
              </div>
              {/* End */}
            </div>

            {/* With Icons */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">With Icons</h2>
              {/* Start */}
              <div className="mb-8 border-b border-slate-200 dark:border-slate-700">
                <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-indigo-500 whitespace-nowrap flex items-center" href="#0">
                      <svg className="w-4 h-4 shrink-0 fill-current mr-2" viewBox=" 0 0 16 16">
                        <path d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z" />
                      </svg>
                      <span>Account</span>
                    </a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap flex items-center" href="#0">
                      <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 mr-2" viewBox=" 0 0 16 16">
                        <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8zM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1z" />
                      </svg>
                      <span>Notifications</span>
                    </a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap flex items-center" href="#0">
                      <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 mr-2" viewBox=" 0 0 16 16">
                        <path d="M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z" />
                      </svg>
                      <span>Integrations</span>
                    </a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap flex items-center" href="#0">
                      <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 mr-2" viewBox=" 0 0 16 16">
                        <path d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z" />
                      </svg>
                      <span>Plans</span>
                    </a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap flex items-center" href="#0">
                      <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 mr-2" viewBox=" 0 0 16 16">
                        <path d="M15 4c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h7c.6 0 1 .4 1 1v3h4zM2 3v1h7V2H3c-.6 0-1 .4-1 1zm12 11V6H2v7c0 .6.4 1 1 1h11zm-3-5h2v2h-2V9z" />
                      </svg>
                      <span>Billing</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* End */}
            </div>

            {/* With Container */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">With Container</h2>
              {/* Start */}
              <ul className="flex flex-wrap -m-1">
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">Account</button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">Notifications</button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">Integrations</button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">Plans</button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">Billing</button>
                </li>
              </ul>
              {/* End */}
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
