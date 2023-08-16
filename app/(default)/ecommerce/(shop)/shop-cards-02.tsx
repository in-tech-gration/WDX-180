import Image from 'next/image'
import AppImage05 from '@/public/images/applications-image-05.jpg'
import AppImage06 from '@/public/images/applications-image-06.jpg'
import AppImage07 from '@/public/images/applications-image-07.jpg'
import AppImage08 from '@/public/images/applications-image-08.jpg'

export default function ShopCards02() {
  return (
    <>
      {/* Card 1 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <Image className="w-full" src={AppImage05} width={286} height={160} alt="Application 05" />
            {/* Popular label */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <div className="inline-flex items-center text-xs font-medium text-slate-100 dark:text-slate-300 bg-slate-900/60 dark:bg-slate-800/60 rounded-full text-center px-2 py-0.5">
                <svg className="w-3 h-3 shrink-0 fill-current text-amber-500 mr-1" viewBox="0 0 12 12">
                  <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                </svg>
                <span>Popular</span>
              </div>
            </div>
          </div>
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-2">
                <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1">Form Builder CP</h3>
                <div className="text-sm">Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!</div>
              </header>
              {/* Rating and Price */}
              <div className="flex flex-wrap items-center justify-between mb-5">
                {/* Rating */}
                <div className="flex items-center space-x-2 mr-2">
                  <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                  {/* Rate */}
                  <div className="text-sm font-medium whitespace-nowrap">
                    <span>4.7</span> <span className="text-slate-400 dark:text-slate-500">(478)</span>
                  </div>
                </div>
                {/* Price */}
                <div className="flex items-center space-x-2">
                  <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                </div>
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <Image className="w-full" src={AppImage06} width={286} height={160} alt="Application 06" />
          </div>
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-2">
                <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1">Form Builder CP</h3>
                <div className="text-sm">Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!</div>
              </header>
              {/* Rating and Price */}
              <div className="flex flex-wrap items-center justify-between mb-5">
                {/* Rating */}
                <div className="flex items-center space-x-2 mr-2">
                  <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                  {/* Rate */}
                  <div className="text-sm font-medium whitespace-nowrap">
                    <span>4.7</span> <span className="text-slate-400 dark:text-slate-500">(478)</span>
                  </div>
                </div>
                {/* Price */}
                <div className="flex items-center space-x-2">
                  <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                </div>
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <Image className="w-full" src={AppImage07} width={286} height={160} alt="Application 07" />
          </div>
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-2">
                <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1">Form Builder CP</h3>
                <div className="text-sm">Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!</div>
              </header>
              {/* Rating and Price */}
              <div className="flex flex-wrap items-center justify-between mb-5">
                {/* Rating */}
                <div className="flex items-center space-x-2 mr-2">
                  <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                  {/* Rate */}
                  <div className="text-sm font-medium whitespace-nowrap">
                    <span>4.7</span> <span className="text-slate-400 dark:text-slate-500">(478)</span>
                  </div>
                </div>
                {/* Price */}
                <div className="flex items-center space-x-2">
                  <div className="inline-flex text-sm font-medium bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400 rounded-full text-center px-2 py-0.5">$39.00</div>
                  <div className="inline-flex text-sm font-medium text-slate-500 dark:text-slate-400 line-through">$199.00</div>
                </div>
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <Image className="w-full" src={AppImage08} width={286} height={160} alt="Application 08" />
          </div> {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-2">
                <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1">Form Builder CP</h3>
                <div className="text-sm">Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!</div>
              </header>
              {/* Rating and Price */}
              <div className="flex flex-wrap items-center justify-between mb-5">
                {/* Rating */}
                <div className="flex items-center space-x-2 mr-2">
                  <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                  {/* Rate */}
                  <div className="text-sm font-medium whitespace-nowrap">
                    <span>4.7</span> <span className="text-slate-400 dark:text-slate-500">(478)</span>
                  </div>
                </div>
                {/* Price */}
                <div className="flex items-center space-x-2">
                  <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                </div>
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}