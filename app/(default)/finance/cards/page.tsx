export const metadata = {
  title: 'Credit Cards - Mosaic',
  description: 'Page description',
}

export default function CreditCards() {
  return (
    <div className="lg:relative lg:flex bg-white dark:bg-slate-900">

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-5">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Cards ✨</h1>
          </div>

          {/* Add card button */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">Add Card</span>
          </button>
        </div>

        {/* Filters */}
        <div className="mb-5">
          <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">
                View All
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                Physical Cards
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                Virtual Cards
              </button>
            </li>
          </ul>
        </div>

        {/* Credit cards */}
        <div className="space-y-2">

          {/* Card 1 */}
          <label className="relative block cursor-pointer text-left w-full">
            <input type="radio" name="radio-buttons" className="peer sr-only" defaultChecked />
            <div className="p-4 rounded dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out">
              <div className="grid grid-cols-12 items-center gap-x-2">
                {/* Card */}
                <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-3">
                  <svg className="shrink-0" width="32" height="24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient x1="1.829%" y1="100%" x2="100%" y2="2.925%" id="c1-a">
                        <stop stopColor="#475569" offset="0%" />
                        <stop stopColor="#1E293B" offset="100%" />
                        <stop stopColor="#9FA1FF" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <rect fill="url(#c1-a)" width="32" height="24" rx="3" />
                      <ellipse fill="#E61C24" fillRule="nonzero" cx="12.522" cy="12" rx="5.565" ry="5.647" />
                      <ellipse fill="#F99F1B" fillRule="nonzero" cx="19.432" cy="12" rx="5.565" ry="5.647" />
                      <path
                        d="M15.977 7.578A5.667 5.667 0 0 0 13.867 12c0 1.724.777 3.353 2.11 4.422A5.667 5.667 0 0 0 18.087 12a5.667 5.667 0 0 0-2.11-4.422Z"
                        fill="#F26622"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-100">_Metal</div>
                    <div className="text-xs">**7328</div>
                  </div>
                </div>
                {/* Name */}
                <div className="col-span-6 order-2 sm:order-none sm:col-span-3 text-left sm:text-center lg:sidebar-expanded:hidden xl:sidebar-expanded:block">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">Dominik Lamakani</div>
                </div>
                {/* Card limits */}
                <div className="col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                  <div className="text-sm">$780,00 / $20,000</div>
                </div>
                {/* Card status */}
                <div className="col-span-6 order-2 sm:order-none sm:col-span-2 text-right lg:sidebar-expanded:hidden xl:sidebar-expanded:block">
                  <div className="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500 rounded pointer-events-none"
              aria-hidden="true"
            />
          </label>

          {/* Card 2 */}
          <label className="relative block cursor-pointer text-left w-full">
            <input type="radio" name="radio-buttons" className="peer sr-only" />
            <div className="p-4 rounded dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out">
              <div className="grid grid-cols-12 items-center gap-x-2">
                {/* Card */}
                <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-3">
                  <svg className="shrink-0" width="32" height="24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient x1="1.829%" y1="100%" x2="100%" y2="2.925%" id="c2a">
                        <stop stopColor="#6366F1" offset="0%" />
                        <stop stopColor="#9FA1FF" offset="100%" />
                        <stop stopColor="#9FA1FF" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <rect fill="url(#c2a)" width="32" height="24" rx="3" />
                      <ellipse fill="#E61C24" fillRule="nonzero" cx="12.522" cy="12" rx="5.565" ry="5.647" />
                      <ellipse fill="#F99F1B" fillRule="nonzero" cx="19.432" cy="12" rx="5.565" ry="5.647" />
                      <path
                        d="M15.977 7.578A5.667 5.667 0 0 0 13.867 12c0 1.724.777 3.353 2.11 4.422A5.667 5.667 0 0 0 18.087 12a5.667 5.667 0 0 0-2.11-4.422Z"
                        fill="#F26622"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-100">_Virtual</div>
                    <div className="text-xs">**7377</div>
                  </div>
                </div>
                {/* Name */}
                <div className="col-span-6 order-2 sm:order-none sm:col-span-3 text-left sm:text-center lg:sidebar-expanded:hidden xl:sidebar-expanded:block">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">Dominik Lamakani</div>
                </div>
                {/* Card limits */}
                <div className="col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                  <div className="text-sm">$0 / $20,000</div>
                </div>
                {/* Card status */}
                <div className="col-span-6 order-2 sm:order-none sm:col-span-2 text-right lg:sidebar-expanded:hidden xl:sidebar-expanded:block">
                  <div className="text-xs inline-flex font-medium bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 rounded-full text-center px-2.5 py-1">
                    Blocked
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500 rounded pointer-events-none"
              aria-hidden="true"
            />
          </label>

        </div>

      </div>

      {/* Sidebar */}
      <div>
        <div className="lg:sticky lg:top-16 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:w-[390px] lg:h-[calc(100dvh-64px)]">
          <div className="py-8 px-4 lg:px-8">
            <div className="max-w-sm mx-auto lg:max-w-none">

              <div className="text-slate-800 dark:text-slate-100 font-semibold text-center mb-6">Physical Metal Card Summary</div>

              {/* Credit Card */}
              <div className="relative aspect-[7/4] bg-gradient-to-tr from-slate-600 to-slate-800 p-5 rounded-xl shadow-lg overflow-hidden">
                {/* Illustration on card */}
                <div className="absolute inset-0 w-full h-full" aria-hidden="true">
                  <svg className="w-full h-full" width="326" height="190" viewBox="0 0 326 190" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter x="-59.5%" y="-73.1%" width="219%" height="246.3%" filterUnits="objectBoundingBox" id="ccill-a">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-34.5%" y="-62.5%" width="169%" height="225.1%" filterUnits="objectBoundingBox" id="ccill-b">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-23.3%" y="-43.5%" width="146.7%" height="186.9%" filterUnits="objectBoundingBox" id="ccill-c">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-15.9%" y="-46.1%" width="131.7%" height="192.1%" filterUnits="objectBoundingBox" id="ccill-d">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-21.8%" y="-58.4%" width="143.6%" height="216.8%" filterUnits="objectBoundingBox" id="ccill-e">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-21.1%" y="-77.5%" width="142.1%" height="254.9%" filterUnits="objectBoundingBox" id="ccill-f">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-19.1%" y="-66%" width="138.3%" height="232.1%" filterUnits="objectBoundingBox" id="ccill-g">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-20%" y="-75.6%" width="140%" height="251.3%" filterUnits="objectBoundingBox" id="ccill-h">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-32.1%" y="-78.2%" width="164.1%" height="256.5%" filterUnits="objectBoundingBox" id="ccill-i">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-24.3%" y="-48.7%" width="148.6%" height="197.4%" filterUnits="objectBoundingBox" id="ccill-j">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-29.7%" y="-67.7%" width="159.4%" height="235.4%" filterUnits="objectBoundingBox" id="ccill-k">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-22.9%" y="-39.7%" width="145.9%" height="179.3%" filterUnits="objectBoundingBox" id="ccill-l">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-27.4%" y="-72%" width="154.8%" height="243.9%" filterUnits="objectBoundingBox" id="ccill-m">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-20.4%" y="-66.7%" width="140.9%" height="233.3%" filterUnits="objectBoundingBox" id="ccill-n">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-70.1%" y="-93.6%" width="240.1%" height="287.2%" filterUnits="objectBoundingBox" id="ccill-o">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-52.4%" y="-122.3%" width="204.7%" height="344.6%" filterUnits="objectBoundingBox" id="ccill-p">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-38.5%" y="-87.5%" width="177%" height="275%" filterUnits="objectBoundingBox" id="ccill-q">
                        <feGaussianBlur stdDeviation="7" in="SourceGraphic" />
                      </filter>
                      <filter x="-46.2%" y="-46.4%" width="192.4%" height="192.8%" filterUnits="objectBoundingBox" id="ccill-r">
                        <feGaussianBlur stdDeviation="48" in="SourceGraphic" />
                      </filter>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g stroke="#FFF">
                        <path d="m74.649 51.429 35.813-29.245" filter="url(#ccill-a)" transform="translate(23.168 10.2)" />
                        <path
                          d="m95.001 48.454 61.614-34.273"
                          style={{ mixBlendMode: 'overlay' }}
                          filter="url(#ccill-b)"
                          transform="translate(23.168 10.2)"
                        />
                        <path d="m102.738 59.711 90.966-49.333" filter="url(#ccill-c)" transform="translate(23.168 10.2)" />
                        <path
                          d="M132.402 56.164c51.89-27.442 9.677-6.22 133.867-46.582"
                          style={{ mixBlendMode: 'overlay' }}
                          filter="url(#ccill-d)"
                          transform="translate(23.168 10.2)"
                        />
                        <path
                          d="M192.973 49.441c63.823-28.1 31.403-15.88 97.219-36.765"
                          filter="url(#ccill-e)"
                          transform="translate(23.168 10.2)"
                        />
                        <path d="M174.906 63.986 275.21 36.252" filter="url(#ccill-f)" transform="translate(23.168 10.2)" />
                        <path
                          d="M78.484 90.425 188.905 57.9"
                          style={{ mixBlendMode: 'overlay' }}
                          filter="url(#ccill-g)"
                          transform="translate(23.168 10.2)"
                        />
                        <path d="M107.59 120.722 213.167 92.32" filter="url(#ccill-h)" transform="translate(23.168 10.2)" />
                        <path d="m44.001 139.184 66.091-27.432" filter="url(#ccill-i)" transform="translate(23.168 10.2)" />
                        <path d="m25.233 108.035 87.289-44.052" filter="url(#ccill-j)" transform="translate(23.168 10.2)" />
                        <path d="m0 78.862 71.407-31.693" filter="url(#ccill-k)" transform="translate(23.168 10.2)" />
                        <path d="M41.3 54.036 133.926 0" filter="url(#ccill-l)" transform="translate(23.168 10.2)" />
                        <path
                          d="M177.385 128.372c38.41-17.811 13.059-6.784 77.387-29.83"
                          style={{ mixBlendMode: 'overlay' }}
                          filter="url(#ccill-m)"
                          transform="translate(23.168 10.2)"
                        />
                        <path d="m190.745 154.661 103.507-32.222" filter="url(#ccill-n)" transform="translate(23.168 10.2)" />
                        <path d="m235.764 74.579 30.397-22.87" filter="url(#ccill-o)" transform="translate(23.168 10.2)" />
                        <path
                          d="M29.686 21.19 70.172 3.645"
                          style={{ mixBlendMode: 'overlay' }}
                          filter="url(#ccill-p)"
                          transform="translate(23.168 10.2)"
                        />
                        <path d="M17.977 79.61 73.04 55.091" filter="url(#ccill-q)" transform="translate(23.168 10.2)" />
                      </g>
                      <path
                        fillOpacity=".24"
                        fill="#FFF"
                        style={{ mixBlendMode: 'overlay' }}
                        filter="url(#ccill-r)"
                        d="M156 .573 331.59 311H75L20 .573z"
                        transform="translate(0 -40)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="relative h-full flex flex-col justify-between">
                  {/* Logo on card */}
                  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon1-b">
                        <stop stopColor="#E2E8F0" offset="0%" />
                        <stop stopColor="#94A3B8" offset="100%" />
                      </linearGradient>
                      <linearGradient x1="50%" y1="24.537%" x2="50%" y2="99.142%" id="icon1-c">
                        <stop stopColor="#334155" offset="0%" />
                        <stop stopColor="#334155" stopOpacity="0" offset="100%" />
                      </linearGradient>
                      <path id="icon1-a" d="M16 0l16 32-16-5-16 5z" />
                    </defs>
                    <g transform="rotate(90 16 16)" fill="none" fillRule="evenodd">
                      <mask id="icon1-d" fill="#fff">
                        <use xlinkHref="#icon1-a" />
                      </mask>
                      <use fill="url(#icon1-b)" xlinkHref="#icon1-a" />
                      <path fill="url(#icon1-c)" mask="url(#icon1-d)" d="M16-6h20v38H16z" />
                    </g>
                  </svg>
                  {/* Card number */}
                  <div className="flex justify-between text-lg font-bold text-slate-200 tracking-widest drop-shadow-sm">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>7328</span>
                  </div>
                  {/* Card footer */}
                  <div className="relative flex justify-between items-center z-10 mb-0.5">
                    {/* Card expiration */}
                    <div className="text-sm font-bold text-slate-200 tracking-widest drop-shadow-sm space-x-3">
                      <span>EXP 12/24</span>
                      <span>CVC ***</span>
                    </div>
                  </div>
                  {/* Mastercard logo */}
                  <svg className="absolute bottom-0 right-0" width="48" height={28} viewBox="0 0 48 28">
                    <circle fill="#F59E0B" cx="34" cy="14" r="14" fillOpacity=".8" />
                    <circle fill="#F43F5E" cx="14" cy="14" r="14" fillOpacity=".8" />
                  </svg>
                </div>
              </div>

              {/* Details */}
              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Details</div>
                <ul>
                  <li className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div className="text-sm">Card Name</div>
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-100 ml-2">Physical Metal Card</div>
                  </li>
                  <li className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div className="text-sm">Status</div>
                    <div className="flex items-center whitespace-nowrap">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Active</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Payment Limits */}
              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Payment Limits</div>
                <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between text-sm mb-2">
                    <div>Spent This Month</div>
                    <div className="italic">
                      $750,00 <span className="text-slate-400 dark:text-slate-500">/</span> $1,500.00
                    </div>
                  </div>
                  <div className="relative w-full h-2 bg-slate-300 dark:bg-slate-700">
                    <div className="absolute inset-0 bg-emerald-500" aria-hidden="true" style={{ width: '50%' }} />
                  </div>
                </div>
              </div>

              {/* Withdrawal Limits */}
              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Withdrawal Limits</div>
                <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between text-sm mb-2">
                    <div>Withdrawn This Month</div>
                    <div className="italic">
                      $100,00 <span className="text-slate-400 dark:text-slate-500">/</span> $1,500.00
                    </div>
                  </div>
                  <div className="relative w-full h-2 bg-slate-300 dark:bg-slate-700">
                    <div className="absolute inset-0 bg-emerald-500" aria-hidden="true" style={{ width: '7.5%' }} />
                  </div>
                </div>
              </div>

              {/* Edit / Delete */}
              <div className="flex items-center space-x-3 mt-6">
                <div className="w-1/2">
                  <button className="btn w-full dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 shrink-0" viewBox="0 0 16 16">
                      <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                    </svg>
                    <span className="ml-2">Edit Card</span>
                  </button>
                </div>
                <div className="w-1/2">
                  <button className="btn w-full dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-rose-500">
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                      <path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z" />
                    </svg>
                    <span className="ml-2">Block Card</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
