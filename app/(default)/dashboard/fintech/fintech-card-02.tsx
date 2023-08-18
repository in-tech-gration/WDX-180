import EditMenu from '@/components/edit-menu-card'

export default function FintechCard02() {
  return(
    <div className="flex flex-col col-span-full xl:col-span-4 bg-gradient-to-b from-slate-700  to-slate-800 dark:bg-none dark:bg-slate-800 shadow-lg rounded-sm border border-slate-700">
      <header className="px-5 py-4 border-b border-slate-600 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-200">Active Cards</h2>
      </header>
      <div className="h-full flex flex-col px-5 py-6">
        {/* CC container */}
        <div className="relative w-full max-w-sm mx-auto bg-slate-800 dark:bg-slate-900 p-3 rounded-2xl">
          {/* Credit Card */}
          <div className="relative aspect-[7/4] bg-gradient-to-tr from-indigo-500 to-indigo-400 p-5 rounded-xl overflow-hidden">
            {/* Gradients */}
            <div className="absolute left-0 -bottom-1/3 w-[398px] aspect-square" aria-hidden="true">
              <svg className="w-full h-full" width="398" height="392" viewBox="0 0 398 392" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter x="-88.2%" y="-88.2%" width="276.5%" height="276.5%" filterUnits="objectBoundingBox" id="glow-a">
                    <feGaussianBlur stdDeviation="50" in="SourceGraphic" />
                  </filter>
                </defs>
                <circle className="fill-indigo-100 opacity-60" filter="url(#glow-a)" cx="85" cy="85" r="85" transform="translate(0 216)" />
              </svg>
            </div>
            <div className="absolute right-0 -top-1/3 w-[398px] aspect-square" aria-hidden="true">
              <svg className="w-full h-full" width="398" height="392" viewBox="0 0 398 392" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter x="-88.2%" y="-88.2%" width="276.5%" height="276.5%" filterUnits="objectBoundingBox" id="glow-b">
                    <feGaussianBlur stdDeviation="50" in="SourceGraphic" />
                  </filter>
                </defs>
                <circle className="fill-sky-400 opacity-60" filter="url(#glow-b)" cx="85" cy="85" r="85" transform="translate(228 0)" />
              </svg>
            </div>
            <div className="relative h-full flex flex-col justify-between">
              {/* Logo on card */}
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon1-b">
                    <stop stopColor="#A5B4FC" offset="0%" />
                    <stop stopColor="#E0E7FF" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="icon1-c">
                    <stop stopColor="#4338CA" offset="0%" />
                    <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
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
              <svg className="absolute bottom-0 right-0" width="48" height="28" viewBox="0 0 48 28">
                <circle fill="#F59E0B" cx="34" cy="14" r="14" fillOpacity=".8" />
                <circle fill="#F43F5E" cx="14" cy="14" r="14" fillOpacity=".8" />
              </svg>
            </div>
          </div>
          {/* Options button */}
          <div className="absolute top-0 right-0">
            <EditMenu align="right" />
          </div>
        </div>
        {/* Details */}
        <div className="grow flex flex-col justify-center mt-3">
          <div className="text-xs text-slate-500 font-semibold uppercase mb-3">Details</div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <div className="text-slate-300">Payment Limits</div>
                <div className="text-slate-400 italic">
                  $780,00 <span className="text-slate-500 dark:text-slate-400">/</span> $1,500.00
                </div>
              </div>
              <div className="relative w-full h-2 bg-slate-600">
                <div className="absolute inset-0 bg-emerald-500" aria-hidden="true" style={{ width: '50%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <div className="text-slate-300">ATM Limits</div>
                <div className="text-slate-400 italic">
                  $179,00 <span className="text-slate-500 dark:text-slate-400">/</span> $1,000.00
                </div>
              </div>
              <div className="relative w-full h-2 bg-slate-600">
                <div className="absolute inset-0 bg-emerald-500" aria-hidden="true" style={{ width: '35%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
