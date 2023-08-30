export const metadata = {
  title: 'Analytics - Mosaic',
  description: 'Page description',
}

import Datepicker from '@/components/datepicker'
import AnalyticsCard01 from './analytics-card-01'
import AnalyticsCard02 from './analytics-card-02'
import AnalyticsCard03 from './analytics-card-03'
import AnalyticsCard04 from './analytics-card-04'
import AnalyticsCard05 from './analytics-card-05'
import AnalyticsCard06 from './analytics-card-06'
import AnalyticsCard07 from './analytics-card-07'
import AnalyticsCard08 from './analytics-card-08'
import AnalyticsCard09 from './analytics-card-09'
import AnalyticsCard10 from './analytics-card-10'
import AnalyticsCard11 from './analytics-card-11'

import DashboardCard01 from '../dashboard-card-01'
import DashboardCard02 from '../dashboard-card-02'
import DashboardCard03 from '../dashboard-card-03'
import DashboardCard04 from '../dashboard-card-04'
import DashboardCard05 from '../dashboard-card-05'
import DashboardCard06 from '../dashboard-card-06'
import DashboardCard07 from '../dashboard-card-07'
import DashboardCard08 from '../dashboard-card-08'
import DashboardCard09 from '../dashboard-card-09'
import DashboardCard10 from '../dashboard-card-10'
import DashboardCard11 from '../dashboard-card-11'

import FintechIntro from '../fintech/fintech-intro'
import FintechCard01 from '../fintech/fintech-card-01'
import FintechCard02 from '../fintech/fintech-card-02'
import FintechCard03 from '../fintech/fintech-card-03'
import FintechCard04 from '../fintech/fintech-card-04'
import FintechCard05 from '../fintech/fintech-card-05'
import FintechCard06 from '../fintech/fintech-card-06'
import FintechCard07 from '../fintech/fintech-card-07'
import FintechCard08 from '../fintech/fintech-card-08'
import FintechCard09 from '../fintech/fintech-card-09'
import FintechCard10 from '../fintech/fintech-card-10'
import FintechCard11 from '../fintech/fintech-card-11'
import FintechCard12 from '../fintech/fintech-card-12'
import FintechCard13 from '../fintech/fintech-card-13'
import FintechCard14 from '../fintech/fintech-card-14'

export default function Analytics() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Analytics ✨</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

          {/* Datepicker built with flatpickr */}
          <Datepicker align="right" />

        </div>

      </div>
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">

        {/* Page Intro */}
        <FintechIntro />
        {/* Line chart (Portfolio Returns) */}
        <FintechCard01 />
        {/* Credit Card */}
        <FintechCard02 />
        {/* Bar chart (Cash Flow) */}
        <FintechCard03 />
        {/* Horizontal bar chart (Cash Flow by Account) */}
        <FintechCard04 />
        {/* Table (Recent Expenses) */}
        <FintechCard05 />
        {/* Table (Recent Earnings) */}
        <FintechCard06 />
        {/* Line chart (Saving Goals) */}
        <FintechCard07 />
        {/* Line chart (Growth Portfolio) */}
        <FintechCard08 />
        {/* Pie chart (Portfolio Value) */}
        <FintechCard09 />
        {/* Line charts (Stock graphs) */}
        <FintechCard10 />
        <FintechCard11 />
        <FintechCard12 />
        <FintechCard13 />
        {/* Table (Market Trends) */}
        <FintechCard14 />

      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">

        {/* Line chart (Acme Plus) */}
        <DashboardCard01 />
        {/* Line chart (Acme Advanced) */}
        <DashboardCard02 />
        {/* Line chart (Acme Professional) */}
        <DashboardCard03 />
        {/* Bar chart (Direct vs Indirect) */}
        <DashboardCard04 />
        {/* Line chart (Real Time Value) */}
        <DashboardCard05 />
        {/* Doughnut chart (Top Countries) */}
        <DashboardCard06 />
        {/* Table (Top Channels) */}
        <DashboardCard07 />
        {/* Line chart (Sales Over Time) */}
        <DashboardCard08 />
        {/* Stacked bar chart (Sales VS Refunds) */}
        <DashboardCard09 />
        {/* Card (Recent Activity) */}
        <DashboardCard10 />
        {/* Card (Income/Expenses) */}
        <DashboardCard11 />

      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">

        {/* Line chart (Analytics) */}
        <AnalyticsCard01 />
        {/*  Line chart (Active Users Right Now) */}
        <AnalyticsCard02 />
        {/* Stacked bar chart (Acquisition Channels) */}
        <AnalyticsCard03 />
        {/* Horizontal bar chart (Audience Overview) */}
        <AnalyticsCard04 />
        {/* Report card (Top Channels) */}
        <AnalyticsCard05 />
        {/* Report card (Top Pages) */}
        <AnalyticsCard06 />
        {/* Report card (Top Countries) */}
        <AnalyticsCard07 />
        {/* Doughnut chart (Sessions By Device) */}
        <AnalyticsCard08 />
        {/* Doughnut chart (Visit By Age Category) */}
        <AnalyticsCard09 />
        {/* Polar chart (Sessions By Gender) */}
        <AnalyticsCard10 />
        {/* Table (Top Products) */}
        <AnalyticsCard11 />

      </div>
    </div>
  )
}
