import Image from 'next/image'
import UserImage from '@/public/images/user-40-04.jpg'

export default function ForumPostRightContent() {
  return (
    <div className="w-full hidden xl:block xl:w-[18rem]">
      <div className="lg:sticky lg:top-16 lg:h-[calc(100dvh-64px)] lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
        <div className="md:py-8">
          {/* Button */}
          <div className="mb-6">
            <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">Create Post</button>
          </div>

          {/* Blocks */}
          <div className="space-y-4">

            {/* Block 1 */}
            <div className="bg-slate-50 dark:bg-slate-800/20 p-4 rounded border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-4">About the Author</div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 shrink-0 mr-3">
                  <Image className="rounded-full" src={UserImage} width={40} height={40} alt="User 04" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-100">Kate Merlu</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 italic">Building SquareApp 🚀</div>
                </div>
              </div>
              <ul className="text-sm space-y-2">
                <li>🤟 <span className="font-medium">1798</span> Karma</li>
                <li>🔥 <span className="font-medium">39</span> Posts</li>
                <li>✍️ <span className="font-medium">299</span> Comments</li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-none">Follow</button>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-slate-50 dark:bg-slate-800/20 p-4 rounded border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-4">Popular Stories</div>
              <ul className="space-y-3">
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      I built and sold 2 small SaaS products and quit my job in the last two years — AMA
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      markusj
                    </a>{' '}
                    · 2d · 312 comments
                  </div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Besides Product Hunt, where else should I promote my new project? 🤔
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      katemerlu
                    </a>{' '}
                    · 2h · 7 comments
                  </div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Which are the main channels you use to drive traffic to your website? 📈
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      sophiestar
                    </a>{' '}
                    · 3d · 66 comments
                  </div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Failed for the past 12 years as a tech entrepreneur. My key takeaways.
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      ekuplu89
                    </a>{' '}
                    · 4h · 14 comments
                  </div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      How to build a following on Twitter as a founder - A guide to growing your audience 🚀
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      molliehacks
                    </a>{' '}
                    · 3d · 32 comments
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-none">View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}