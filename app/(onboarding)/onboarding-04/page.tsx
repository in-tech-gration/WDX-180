export const metadata = {
  title: "Company information - Mosaic",
  description: 'Page description',
}

import Link from 'next/link'
import OnboardingHeader from '../onboarding-header'
import OnboardingImage from '../onboarding-image'
import OnboardingProgress from '../onboarding-progress'

export default function Onboarding04() {
  return (
    <main className="bg-white dark:bg-slate-900">

      <div className="relative flex">

        {/* Content */}
        <div className="w-full md:w-1/2">

          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            <div className="flex-1">

              <OnboardingHeader />
              <OnboardingProgress step={4} />

            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">

                <div className="text-center">
                  <svg className="inline-flex w-16 h-16 fill-current mb-6" viewBox="0 0 64 64">
                    <circle className="text-emerald-100 dark:text-emerald-400/30" cx="32" cy="32" r="32" />
                    <path className="text-emerald-500 dark:text-emerald-400" d="m28.5 41-8-8 3-3 5 5 12-12 3 3z" />
                  </svg>
                  <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-8">Nice to have you, Acme Inc. 🙌</h1>
                  <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white" href="/dashboards">Go To Dashboard -&gt;</Link>
                </div>

              </div>
            </div>

          </div>

        </div>

        <OnboardingImage />

      </div>

    </main>
  )
}
