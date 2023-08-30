import Link from 'next/link'
import Image from 'next/image'
import MeetupImage from '@/public/images/meetup-image.jpg'
import UserImage07 from '@/public/images/user-32-07.jpg'

type IPost = {
  author?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
}

// TODO: Read Creation/Update Date from Frontmatter < https://youtu.be/Hiabp1GY8fA?t=1208
// TODO: STUDY: https://github.com/remarkjs/remark-gfm
// TODO: STUDY: https://github.com/remarkjs/react-markdown
export default function Post({ author, title, subtitle, children }: IPost) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 m-auto max-w-3xl">

      {/* Page content */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

        {/* Content */}
        <div className="">
          <div className="mb-6">
            <Link className="btn-sm px-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300" href="/community/meetups">
              <svg className="fill-current text-slate-400 dark:text-slate-500 mr-2" width="7" height="12" viewBox="0 0 7 12">
                <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
              </svg>
              <span>Back To Meetups</span>
            </Link>
          </div>
          <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Mon 27 Dec, 2021 - 9:00 PM -&gt; 10:00 PM</div>
          <header className="mb-4">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">{ title }</h1>
            <p>{ subtitle }</p>
          </header>

          {/* Meta */}
          <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
            {/* Author */}
            <div className="flex items-center sm:mr-4">
              <a className="block mr-2 shrink-0" href="#0">
                <Image className="rounded-full" src={UserImage07} width={32} height={32} alt="User 04" />
              </a>
              <div className="text-sm whitespace-nowrap">
                Hosted by{' '}
                <a className="font-semibold text-slate-800 dark:text-slate-100" href="#0">
                  { author }
                </a>
              </div>
            </div>
            {/* Right side */}
            <div className="flex flex-wrap items-center sm:justify-end space-x-2">
              {/* Tags */}
              <div className="text-xs inline-flex items-center font-medium bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
                <svg className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2" viewBox="0 0 16 12">
                  <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
                </svg>
                <span>Online Event</span>
              </div>
              <div className="text-xs inline-flex font-medium uppercase bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
                Free
              </div>
            </div>
          </div>

          {/* Image */}
          <figure className="mb-6">
            <Image className="w-full rounded-sm" src={MeetupImage} width={640} height={360} alt="Meetup" />
          </figure>

          {/* Post content */}
          <div>
            { children }
          </div>
          <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

        </div>

      </div>
    </div>
  )
}