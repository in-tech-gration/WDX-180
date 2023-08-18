export const metadata = {
  title: 'Tooltip - Mosaic',
  description: 'Page description',
}

import Tooltip from '@/components/tooltip'

export default function TooltipLibrary() {
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Tooltip ✨</h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Components */}
          <div className="space-y-8 mt-8">

            {/* Tooltip Types */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Tooltip Types</h2>
              <div className="flex flex-wrap items-center -m-4">

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip bg="light">
                      <div className="text-xs whitespace-nowrap">Just a tip</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Label White</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip bg="dark">
                      <div className="text-xs text-slate-200 whitespace-nowrap">Just a tip</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Label Dark</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip size="md" bg="light">
                      <div className="text-xs">Excepteur sint occaecat cupidata non proident, sunt in.</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Basic White</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip size="md" bg="dark">
                      <div className="text-xs text-slate-200">Excepteur sint occaecat cupidata non proident, sunt in.</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Basic Dark</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip size="lg" bg="light">
                      <div className="text-sm font-medium text-slate-500 dark:text-slate-500">Excepteur sint occaecat cupidata non proident, sunt in.</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Large White</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip size="lg" bg="dark">
                      <div className="text-sm font-medium text-slate-200">Excepteur sint occaecat cupidata non proident, sunt in.</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Large Dark</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip size="lg" bg="light">
                      <div className="text-xs">
                        <div className="font-medium text-slate-800 mb-0.5">Let's Talk Paragraph</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                      </div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500">Rich White</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip size="lg" bg="dark">
                      <div className="text-xs">
                        <div className="font-medium text-slate-200 mb-0.5">Let's Talk Paragraph</div>
                        <div className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                      </div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Rich Dark</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Tooltip Position */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Tooltip Position</h2>
              <div className="flex flex-wrap items-center -m-4">

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip>
                      <div className="text-xs whitespace-nowrap">Just a tip</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Top</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip position="bottom">
                      <div className="text-xs whitespace-nowrap">Just a tip</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Bottom</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip position="left">
                      <div className="text-xs whitespace-nowrap">Just a tip</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Left</div>
                  </div>
                </div>

                <div className="m-4">
                  <div className="flex items-center space-x-2">
                    {/* Start */}
                    <Tooltip position="right">
                      <div className="text-xs whitespace-nowrap">Just a tip</div>
                    </Tooltip>
                    {/* End */}
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-500">Right</div>
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
