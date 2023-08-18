'use client'

import LineChart05 from '@/components/charts/line-chart-05'

// Import utilities
import { tailwindConfig, hexToRGB } from '@/components/utils/utils'

export default function FintechCard01() {

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
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
      '06-01-2023', '07-01-2023', '08-01-2023',
      '09-01-2023', '10-01-2023', '11-01-2023',
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Mosaic Portfolio',
        data: [
          0, 2.5, 2.5, 4, 2.5, 3.8, 5, 9, 7.5, 11,
          14, 15, 17, 15, 14, 9, 15, 26, 16, 18,
          15, 20, 18, 19, 19, 24, 29, 26, 39, 27,
          35, 32, 29, 35, 36, 34, 39, 36, 41, 41,
          48,
        ],
        borderColor: tailwindConfig.theme.colors.indigo[500],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.blue[500])}, 0.08)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig.theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig.theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      // Yellow line
      {
        label: 'Expected Return',
        data: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
          30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
          40,
        ],
        borderColor: tailwindConfig.theme.colors.amber[400],
        borderDash: [4, 4],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig.theme.colors.amber[400],
        pointHoverBackgroundColor: tailwindConfig.theme.colors.amber[400],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,        
        clip: 20,
      },
      // gray line
      {
        label: 'Competitors',
        data: [
          0.7, 3.5, 4.5, 3.5, 4.2, 4.6, 6, 7, 6, 6,
          11, 13, 14, 18, 17, 15, 13, 16, 20, 21,
          24, 22, 20, 22, 25, 18, 21, 23, 24, 32,
          28, 29, 35, 37, 42, 32, 32, 33, 33, 37,
          32,
        ],
        borderColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,        
        clip: 20,
      },
    ],
  }

  return(
    <div className="flex flex-col col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Portfolio Returns</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart05 data={chartData} width={800} height={300} />
    </div>
  )
}
