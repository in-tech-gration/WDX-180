import { useFlyoutContext } from '@/app/flyout-context'

export default function Channels() {
  const { setFlyoutOpen } = useFlyoutContext()

  return (
    <div className="mt-4">
      <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-3">Channels</div>
      <ul className="mb-6">
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center">
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">#New Leads</span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center truncate">
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">#Development Team</span>
              </div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => setFlyoutOpen(false)}>
            <div className="flex items-center truncate">
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">#Product Tips</span>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  )
}