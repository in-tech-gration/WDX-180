'use client'

import LineChart08 from '@/components/charts/line-chart-08'

// Import utilities
import { tailwindConfig, hexToRGB } from '@/components/utils/utils'

export default function FintechCard13() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      // Line
      {
        data: [
          245, 288, 332, 404, 404, 314, 314,
          314, 314, 314, 234, 314, 234, 234,
          314, 314, 314, 388, 314, 202, 202,
          202, 202, 514, 720, 642,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.emerald[500])}, 0.08)`,
        borderColor: tailwindConfig.theme.colors.emerald[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig.theme.colors.emerald[500],
        pointHoverBackgroundColor: tailwindConfig.theme.colors.emerald[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,        
        clip: 20,
      },
    ],
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header>
          <h3 className="text-sm font-semibold text-slate-500 uppercase mb-1">
            <span className="text-slate-800 dark:text-slate-100">Facebook</span> - Meta Inc.
          </h3>
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">$333.79</div>
          <div className="text-sm">
            <span className="font-medium text-emerald-500">+$19,70 (4%)</span> - Today
          </div>
        </header>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart08 data={chartData} width={286} height={98} />
      </div>
    </div>
  )
}
