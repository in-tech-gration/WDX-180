'use client'

type ICalendarTitle = {
  children: React.ReactNode
}

export default function CalendarTitle({ children }: ICalendarTitle) {

  return (
    <div className="my-4">
      <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"><span>{ children }</span></h1>
    </div>
  )
}