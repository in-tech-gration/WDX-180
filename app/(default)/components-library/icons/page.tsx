export const metadata = {
  title: 'Icons - Mosaic',
  description: 'Page description',
}

export default function IconsLibrary() {
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Icons ✨</h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Components */}
          <div className="space-y-8 mt-8">

            <div className="text-sm">If you need more icons than what we currently support in Mosaic, check out these great packs 👇</div>

            {/* Nucleo */}
            <div>
              <div className="flex items-start space-x-3 mb-6">
                <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">Nucleo</h2>
                <div className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">Recommended</div>
              </div>
              <div className="px-6 py-8 bg-slate-800 rounded-sm text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center">
                <div className="text-slate-300 mb-4 xl:mb-0 max-w-lg mx-auto xl:mx-0 2xl:max-w-none">99% of the icons used in Mosaic come from Nucleo; a huge library of 3K+ vector icons!</div>
                <div className="inline-flex space-x-3">
                  <a className="btn bg-indigo-500 hover:bg-indigo-600 text-white" href="https://nucleoapp.com/pricing" target="_blank" rel="noreferrer">Buy Nucleo</a>
                  <a className="btn bg-slate-700 hover:bg-slate-600 text-white" href="https://nucleoapp.com/free-icons" target="_blank" rel="noreferrer">Download Free Pack</a>
                </div>
              </div>
            </div>

            {/* Tabler Icons */}
            <div>
              <div className="flex items-start space-x-3 mb-6">
                <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">Tabler Icons</h2>
                <div className="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">Free Alternative</div>
              </div>
              <div className="px-6 py-8 bg-slate-800 rounded-sm text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center">
                <div className="text-slate-300 mb-4 xl:mb-0 max-w-lg mx-auto xl:mx-0 2xl:max-w-none">A set of 1250+ icons that are visually consistent with the style used in Mosaic!</div>
                <div className="inline-flex space-x-3">
                  <a className="btn bg-indigo-500 hover:bg-indigo-600 text-white" href="https://tablericons.com/" target="_blank" rel="noreferrer">Download Tabler Icons</a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
