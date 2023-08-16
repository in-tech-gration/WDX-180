export const metadata = {
  title: 'KnowledgeBase - Mosaic',
  description: 'Page description',
}

export default function KnowledgeBase() {
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      {/* Search area */}
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16 bg-indigo-500 dark:bg-transparent dark:bg-gradient-to-b dark:from-indigo-500/70 dark:to-indigo-500/30 overflow-hidden">
        {/* Glow */}
        <div className="absolute pointer-events-none" aria-hidden="true">
          <div className="w-64 h-64 rounded-full bg-white bg-opacity-30 dark:bg-opacity-10 blur-3xl"></div>
        </div>
        {/* Illustration */}
        <div className="absolute pointer-events-none" aria-hidden="true">
          <svg width="1280" height="361" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ill2-b">
                <stop stopColor="#A5B4FC" offset="0%" />
                <stop stopColor="#818CF8" offset="100%" />
              </linearGradient>
              <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="ill2-c">
                <stop stopColor="#4338CA" offset="0%" />
                <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
              </linearGradient>
              <path id="ill2-a" d="m64 0 64 128-64-20-64 20z" />
              <path id="ill2-e" d="m40 0 40 80-40-12.5L0 80z" />
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="rotate(51 -92.764 293.763)">
                <mask id="ill2-d" fill="#fff">
                  <use xlinkHref="#ill2-a" />
                </mask>
                <use fill="url(#ill2-b)" xlinkHref="#ill2-a" />
                <path fill="url(#ill2-c)" mask="url(#ill2-d)" d="M64-24h80v152H64z" />
              </g>
              <g transform="rotate(-51 618.151 -940.113)">
                <mask id="ill2-f" fill="#fff">
                  <use xlinkHref="#ill2-e" />
                </mask>
                <use fill="url(#ill2-b)" xlinkHref="#ill2-e" />
                <path fill="url(#ill2-c)" mask="url(#ill2-f)" d="M40.333-15.147h50v95h-50z" />
              </g>
            </g>
          </svg>
        </div>
        <div className="relative w-full max-w-2xl mx-auto text-center">
          <div className="mb-5">
            <h1 className="text-2xl md:text-3xl text-white font-bold">👋 What Can We Help You Find?</h1>
          </div>
          <form className="relative">
            <label htmlFor="action-search" className="sr-only">
              Search
            </label>
            <input id="action-search" className="form-input pl-9 py-3 dark:bg-slate-800 dark:border-slate-800 dark:hover:border-slate-900 focus:border-slate-300 dark:focus:border-slate-900 w-full" type="search" />
            <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
              <svg
                className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Sections */}
        <div className="space-y-8">

          {/* Popular Topics */}
          <div>
            <div className="mb-5">
              <h2 className="text-xl text-slate-800 dark:text-slate-100 font-bold">Popular Topics</h2>
            </div>
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:sidebar-expanded:grid-cols-2 xl:sidebar-expanded:grid-cols-4 gap-6">

              {/* Item */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                <div className="flex flex-col h-full">
                  <div className="grow mb-2">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon1-a">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M19.236 21.995h-3.333c-.46 0-.833.352-.833.786v9.428c0 .434.373.786.833.786h4.167V22.78c0-.434-.374-.786-.834-.786Z"
                            fill="#4F46E5"
                            opacity=".88"
                          />
                          <path
                            d="M34.234 20.073a2.393 2.393 0 0 0-.735-.116h-5v-2.609c0-3.325-2.157-4.297-3.298-4.347a.828.828 0 0 0-.611.24.888.888 0 0 0-.257.63v4.032L21 22.077v10.924h10.19c1.1.005 2.073-.744 2.392-1.842l2.308-7.826a2.711 2.711 0 0 0-.181-1.988 2.528 2.528 0 0 0-1.475-1.272Z"
                            fill="url(#icon1-a)"
                            transform="translate(-.93 -.005)"
                          />
                        </g>
                      </svg>
                    </div>
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Getting Started</h3>
                    <div className="text-sm">Lorem ipsum dolor sit consectetur adipiscing elit sed do.</div>
                  </div>
                  {/* Link */}
                  <div>
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                <div className="flex flex-col h-full">
                  <div className="grow mb-2">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon2-a">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M26.5 19c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V35l-4.108-2.148a10 10 0 0 1-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C18 22.183 21.805 19 26.5 19Z"
                            fill="#4F46E5"
                            opacity=".88"
                          />
                          <path
                            d="M23 13c-5.523 0-10 3.582-10 8 0 1.797.75 3.45 2 4.785V31l4.833-2.416c.996.266 2.059.416 3.167.416 5.523 0 10-3.582 10-8s-4.477-8-10-8Z"
                            fill="url(#icon2-a)"
                          />
                        </g>
                      </svg>
                    </div>
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">In-app Messaging</h3>
                    <div className="text-sm">Lorem ipsum dolor sit consectetur adipiscing elit sed do.</div>
                  </div>
                  {/* Link */}
                  <div>
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                <div className="flex flex-col h-full">
                  <div className="grow mb-2">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon3-a">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fillRule="nonzero" fill="none">
                          <circle fill="url(#icon3-a)" cx="30.5" cy="17.5" r="4.5" />
                          <circle fill="#4F46E5" opacity=".88" cx="17.5" cy="17.5" r="4.5" />
                          <circle fill="#4F46E5" opacity=".88" cx="30.5" cy="30.5" r="4.5" />
                          <circle fill="url(#icon3-a)" cx="17.5" cy="30.5" r="4.5" />
                        </g>
                      </svg>
                    </div>
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Apps &amp; Tools</h3>
                    <div className="text-sm">Lorem ipsum dolor sit consectetur adipiscing elit sed do.</div>
                  </div>
                  {/* Link */}
                  <div>
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                <div className="flex flex-col h-full">
                  <div className="grow mb-2">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon4-a">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M34.327 18.194H10.12c-.495 0-.897.358-.897.798v14.404c0 .44.402.798.897.798h24.207c.495 0 .896-.357.896-.798V18.992c0-.44-.401-.798-.896-.798Z"
                            fill="#4F46E5"
                            opacity=".88"
                          />
                          <path
                            d="M29.09 0H4.883c-.494 0-.896.357-.896.798v14.404c0 .44.402.798.896.798H29.09c.495 0 .897-.357.897-.798V.798c0-.44-.402-.798-.897-.798Z"
                            fill="url(#icon4-a)"
                            transform="rotate(-8 126.748 -40.297)"
                          />
                          <path d="M25.194 25.777a3 3 0 1 1-.835-5.942 3 3 0 0 1 .835 5.942Z" fill="#6366F1" opacity=".72" />
                        </g>
                      </svg>
                    </div>
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Billing &amp; Invoices</h3>
                    <div className="text-sm">Lorem ipsum dolor sit consectetur adipiscing elit sed do.</div>
                  </div>
                  {/* Link */}
                  <div>
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                <div className="flex flex-col h-full">
                  <div className="grow mb-2">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon5-a">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M31.074 20.692a5.516 5.516 0 0 0-7.878-1.107c-.172.133-.311.293-.463.44-.106-.184-.196-.375-.324-.55a5.516 5.516 0 0 0-7.878-1.108c-2.49 1.932-3 5.56-1.14 8.103l7.142 9.207 9.402-6.882c2.49-1.931 3-5.56 1.139-8.103Z"
                            fill="#4F46E5"
                            opacity=".88"
                          />
                          <path
                            d="M20.353 2.998a5.516 5.516 0 0 0-7.955 0c-.152.156-.268.333-.398.5-.13-.167-.246-.344-.398-.5a5.516 5.516 0 0 0-7.955 0c-2.196 2.26-2.196 5.924 0 8.183L12 19.304l8.353-8.123c2.196-2.26 2.196-5.924 0-8.183Z"
                            fill="url(#icon5-a)"
                            transform="rotate(16 -34.482 60.533)"
                          />
                        </g>
                      </svg>
                    </div>
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Support</h3>
                    <div className="text-sm">Lorem ipsum dolor sit consectetur adipiscing elit sed do.</div>
                  </div>
                  {/* Link */}
                  <div>
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                <div className="flex flex-col h-full">
                  <div className="grow mb-2">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon6-a">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M33.83 16.57 9.803 19.52c-.491.06-.846.464-.793.901l1.756 14.297c.054.437.496.743.987.683l24.026-2.95c.492-.06.847-.464.793-.901l-1.755-14.297c-.054-.438-.496-.743-.987-.683Z"
                            fill="#4F46E5"
                            opacity=".88"
                          />
                          <path
                            d="M28.712 0H4.505c-.495 0-.897.357-.897.798v14.404c0 .44.402.798.897.798h24.207c.494 0 .896-.357.896-.798V.798c0-.44-.402-.798-.896-.798Z"
                            fill="url(#icon6-a)"
                            transform="rotate(8 -86.45 77.005)"
                          />
                          <path fill="#6366F1" opacity=".72" d="m23.646 19.765 4.533 3.667-5.368 2.275z" />
                        </g>
                      </svg>
                    </div>
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Multimedia / Files</h3>
                    <div className="text-sm">Lorem ipsum dolor sit consectetur adipiscing elit sed do.</div>
                  </div>
                  {/* Link */}
                  <div>
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                <div className="flex flex-col h-full">
                  <div className="grow mb-2">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon7-a">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g transform="translate(-.186 -.042)" fillRule="nonzero" fill="none">
                          <circle fill="#554FE8" cx="20" cy="26.993" r="10" />
                          <circle fill="url(#icon7-a)" cx="25.122" cy="24" r="11" />
                          <path
                            fill="#6366F1"
                            opacity=".72"
                            d="m26.255 22.605-1.569-3.586-.922 3.804-3.735.327 3.26 2.195-.864 3.91 2.927-2.626 3.339 2.078-1.53-3.7 2.83-2.729z"
                          />
                        </g>
                      </svg>
                    </div>
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">App Rewards</h3>
                    <div className="text-sm">Lorem ipsum dolor sit consectetur adipiscing elit sed do.</div>
                  </div>
                  {/* Link */}
                  <div>
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                <div className="flex flex-col h-full">
                  <div className="grow mb-2">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon8-a">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#A5B4FC" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M18.648 35.069c.232.217.46.322.798.31.337-.012.558-.132.775-.365l1.95-2.094c1.028.414 2.504.813 4.076.758 1.798-.063 3.688-.692 5.426-2.441 3.686-3.956 4.05-12.862 4.038-13.199-.012-.337-.136-.67-.368-.888-.233-.217-.574-.317-.91-.306-.338.012-9.405 1.23-12.875 4.953-2.168 2.327-2.41 5.037-1.883 7.27l6.61-3.946-7.804 8.378a1.206 1.206 0 0 0 .167 1.57Z"
                            fill="#554FE8"
                          />
                          <path
                            d="M.353 17.663c.225.224.45.337.787.337s.562-.113.786-.337l2.024-2.026c1.011.45 2.473.9 4.046.9 1.799 0 3.71-.562 5.508-2.25C17.326 10.462 18 1.575 18 1.237c0-.337-.112-.675-.337-.9C17.438.113 17.1 0 16.763 0c-.337 0-9.441.9-13.038 4.5-2.248 2.25-2.585 4.95-2.136 7.2l6.744-3.712-8.093 8.1a1.206 1.206 0 0 0 .113 1.575Z"
                            fill="url(#icon8-a)"
                            transform="rotate(13 -42.427 83.827)"
                          />
                        </g>
                      </svg>
                    </div>
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Contact Us</h3>
                    <div className="text-sm">Lorem ipsum dolor sit consectetur adipiscing elit sed do.</div>
                  </div>
                  {/* Link */}
                  <div>
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Popular Guides */}
          <div>
            <div className="mb-5">
              <h2 className="text-xl text-slate-800 dark:text-slate-100 font-bold">Popular Guides</h2>
            </div>
            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Item */}
              <div className="w-full p-3 rounded-sm text bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="flex h-full">
                  {/* Icon */}
                  <svg className="w-4 h-4 shrink-0 fill-indigo-500 mt-[3px] mr-3" viewBox="0 0 16 16">
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                  </svg>
                  <div className="flex flex-col h-full">
                    {/* Content */}
                    <div className="grow mb-2">
                      <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Documents For Business Verification</div>
                      <div className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.
                      </div>
                    </div>
                    {/* Link */}
                    <div>
                      <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                        View -&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="w-full p-3 rounded-sm text bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="flex h-full">
                  {/* Icon */}
                  <svg className="w-4 h-4 shrink-0 fill-indigo-500 mt-[3px] mr-3" viewBox="0 0 16 16">
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                  </svg>
                  <div className="flex flex-col h-full">
                    {/* Content */}
                    <div className="grow mb-2">
                      <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Delayed Or Missing Payouts</div>
                      <div className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.
                      </div>
                    </div>
                    {/* Link */}
                    <div>
                      <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                        View -&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="w-full p-3 rounded-sm text bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="flex h-full">
                  {/* Icon */}
                  <svg className="w-4 h-4 shrink-0 fill-indigo-500 mt-[3px] mr-3" viewBox="0 0 16 16">
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                  </svg>
                  <div className="flex flex-col h-full">
                    {/* Content */}
                    <div className="grow mb-2">
                      <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Update Existing Bank Account Information</div>
                      <div className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.
                      </div>
                    </div>
                    {/* Link */}
                    <div>
                      <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                        View -&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="w-full p-3 rounded-sm text bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="flex h-full">
                  {/* Icon */}
                  <svg className="w-4 h-4 shrink-0 fill-indigo-500 mt-[3px] mr-3" viewBox="0 0 16 16">
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                  </svg>
                  <div className="flex flex-col h-full">
                    {/* Content */}
                    <div className="grow mb-2">
                      <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Close A Mosaic Account</div>
                      <div className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.
                      </div>
                    </div>
                    {/* Link */}
                    <div>
                      <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                        View -&gt;
                      </a>
                    </div>
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