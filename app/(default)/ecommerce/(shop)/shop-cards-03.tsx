import Image from 'next/image'
import AppImage09 from '@/public/images/applications-image-09.jpg'
import AppImage10 from '@/public/images/applications-image-10.jpg'
import AppImage11 from '@/public/images/applications-image-11.jpg'
import AppImage12 from '@/public/images/applications-image-12.jpg'

export default function ShopCards03() {
  return (
    <>
      {/* Card 1 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <Image className="w-full" src={AppImage09} width={286} height={160} alt="Application 09" />
            {/* Like button */}
            <button className="absolute top-0 right-0 mt-4 mr-4">
              <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
                <span className="sr-only">Like</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                  <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-2">
                <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold">Health and Happiness Workshop</h3>
              </header>
              {/* List */}
              <ul className="text-sm space-y-2 mb-5 dark:text-slate-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                    <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                  </svg>
                  <div className="text-rose-500">Fri 7 Aug 2021 23:00 CEST</div>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                    <path d="M8 6c2.9 0 6-.9 6-3s-3.1-3-6-3-6 .9-6 3 3.1 3 6 3zM2 6.5V8c0 2.1 3.1 3 6 3s6-.9 6-3V6.5C12.6 7.4 10.5 8 8 8s-4.6-.6-6-1.5zM2 11.5V13c0 2.1 3.1 3 6 3s6-.9 6-3v-1.5c-1.4 1-3.5 1.5-6 1.5s-4.6-.6-6-1.5z" />
                  </svg>
                  <div>Starts at $16.24 / person</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Tickets</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <Image className="w-full" src={AppImage10} width={286} height={160} alt="Application 10" />
            {/* Like button */}
            <button className="absolute top-0 right-0 mt-4 mr-4">
              <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
                <span className="sr-only">Like</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                  <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-2">
                <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold">Health and Happiness Workshop</h3>
              </header>
              {/* List */}
              <ul className="text-sm space-y-2 mb-5 dark:text-slate-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                    <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                  </svg>
                  <div className="text-rose-500">Fri 7 Aug 2021 23:00 CEST</div>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                    <path d="M8 6c2.9 0 6-.9 6-3s-3.1-3-6-3-6 .9-6 3 3.1 3 6 3zM2 6.5V8c0 2.1 3.1 3 6 3s6-.9 6-3V6.5C12.6 7.4 10.5 8 8 8s-4.6-.6-6-1.5zM2 11.5V13c0 2.1 3.1 3 6 3s6-.9 6-3v-1.5c-1.4 1-3.5 1.5-6 1.5s-4.6-.6-6-1.5z" />
                  </svg>
                  <div>Starts at $16.24 / person</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Tickets</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <Image className="w-full" src={AppImage11} width={286} height={160} alt="Application 11" />
            {/* Like button */}
            <button className="absolute top-0 right-0 mt-4 mr-4">
              <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
                <span className="sr-only">Like</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                  <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-2">
                <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold">Health and Happiness Workshop</h3>
              </header>
              {/* List */}
              <ul className="text-sm space-y-2 mb-5 dark:text-slate-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                    <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                  </svg>
                  <div className="text-rose-500">Fri 7 Aug 2021 23:00 CEST</div>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                    <path d="M8 6c2.9 0 6-.9 6-3s-3.1-3-6-3-6 .9-6 3 3.1 3 6 3zM2 6.5V8c0 2.1 3.1 3 6 3s6-.9 6-3V6.5C12.6 7.4 10.5 8 8 8s-4.6-.6-6-1.5zM2 11.5V13c0 2.1 3.1 3 6 3s6-.9 6-3v-1.5c-1.4 1-3.5 1.5-6 1.5s-4.6-.6-6-1.5z" />
                  </svg>
                  <div>Starts at $16.24 / person</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Tickets</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative">
            <Image className="w-full" src={AppImage12} width={286} height={160} alt="Application 12" />
            {/* Like button */}
            <button className="absolute top-0 right-0 mt-4 mr-4">
              <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
                <span className="sr-only">Like</span>
                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                  <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-2">
                <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold">Health and Happiness Workshop</h3>
              </header>
              {/* List */}
              <ul className="text-sm space-y-2 mb-5 dark:text-slate-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                    <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                  </svg>
                  <div className="text-rose-500">Fri 7 Aug 2021 23:00 CEST</div>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 mr-3" viewBox="0 0 16 16">
                    <path d="M8 6c2.9 0 6-.9 6-3s-3.1-3-6-3-6 .9-6 3 3.1 3 6 3zM2 6.5V8c0 2.1 3.1 3 6 3s6-.9 6-3V6.5C12.6 7.4 10.5 8 8 8s-4.6-.6-6-1.5zM2 11.5V13c0 2.1 3.1 3 6 3s6-.9 6-3v-1.5c-1.4 1-3.5 1.5-6 1.5s-4.6-.6-6-1.5z" />
                  </svg>
                  <div>Starts at $16.24 / person</div>
                </li>
              </ul>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Tickets</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}