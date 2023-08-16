export const metadata = {
  title: 'Kanban - Mosaic',
  description: 'Page description',
}

import Link from 'next/link'
import TasksGroups from './tasks-groups'
import Task01 from './task-01'
import Task02 from './task-02'
import Task03 from './task-03'
import Task04 from './task-04'
import Task05 from './task-05'
import Task06 from './task-06'
import Task07 from './task-07'
import Task08 from './task-08'
import Task09 from './task-09'

export default function Kanban() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Acme Inc. Kanban ✨</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Add board button */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="ml-2">Add Board</span>
          </button>

        </div>

      </div>

      {/* Filters */}
      <div className="mb-4 border-b border-slate-200 dark:border-slate-700">
        <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <Link className="text-indigo-500 whitespace-nowrap" href="#0">View All</Link>
          </li>
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <Link className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Web Sprint</Link>
          </li>
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <Link className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Marketing</Link>
          </li>
          <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            <Link className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap" href="#0">Development</Link>
          </li>
        </ul>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-x-4 gap-y-8">
        {/* Tasks column */}
        <TasksGroups title="To Do's 🖋️">
          <Task01 />
          <Task02 />
          <Task03 />
        </TasksGroups>
        {/* Tasks column */}
        <TasksGroups title="In Progress ✌️">
          <Task04 />
          <Task05 />
        </TasksGroups>
        {/* Tasks column */}
        <TasksGroups title="Completed 🎉">
          <Task06 />
          <Task07 />
        </TasksGroups>
        {/* Tasks column */}
        <TasksGroups title="Notes 📒">
          <Task08 />
          <Task09 />
        </TasksGroups>
      </div>

    </div>
  )
}
