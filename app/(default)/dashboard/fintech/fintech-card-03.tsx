'use client'

import BarChart05 from '@/components/charts/bar-chart-05'

// Import utilities
import { tailwindConfig } from '@/components/utils/utils'

export default function FintechCard03() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021'
    ],
    datasets: [
      // Indigo bars
      {
        label: 'Inflow',
        data: [800, 2600, 4000, 1200, 3200, 1700],
        backgroundColor: tailwindConfig.theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Grey bars
      {
        label: 'Outflow',
        data: [2800, 1700, 900, 2900, 1950, 3100],
        backgroundColor: tailwindConfig.theme.colors.slate[300],
        hoverBackgroundColor: tailwindConfig.theme.colors.slate[400],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return(
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Cash Flow</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart05 data={chartData} width={595} height={248} />
    </div>
  )
}
