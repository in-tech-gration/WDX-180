export const metadata = {
  title: 'Meetup Post - Mosaic',
  description: 'Page description',
}

import Link from 'next/link'
import Image from 'next/image'
import MeetupImage from '@/public/images/meetup-image.jpg'
import MeetupPhoto01 from '@/public/images/meetup-photo-01.jpg'
import MeetupPhoto02 from '@/public/images/meetup-photo-02.jpg'
import MeetupPhoto03 from '@/public/images/meetup-photo-03.jpg'
import MeetupThumb from '@/public/images/meetups-thumb-02.jpg'
import UserImage01 from '@/public/images/user-32-01.jpg'
import UserImage02 from '@/public/images/user-32-02.jpg'
import UserImage03 from '@/public/images/user-32-03.jpg'
import UserImage04 from '@/public/images/user-32-04.jpg'
import UserImage05 from '@/public/images/user-32-05.jpg'
import UserImage06 from '@/public/images/user-32-06.jpg'
import UserImage07 from '@/public/images/user-32-07.jpg'
import UserImage08 from '@/public/images/user-32-08.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'

export default function MeetupPost() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Page content */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
        {/* Content */}
        <div>
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
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">The World of AI and Machine Learning — Open Chat</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</p>
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
                  Monica Fishkin
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
            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Meetup Details</h2>
            <p className="mb-6">In the world of AI, behavioural predictions are leading the charge to better machine learning.</p>
            <p className="mb-6">
              There is so much happening in the AI space. Advances in the economic sectors have seen automated business practices rapidly
              increasing economic value. While the realm of the human sciences has used the power afforded by computational capabilities to
              solve many human based dilemmas. Even the art scene has adopted carefully selected ML applications to usher in the technological
              movement.
            </p>
            <p className="mb-6">
              Join us every second Wednesday as we host an open discussion about the amazing things happening in the world of AI and machine
              learning. Feel free to share your experiences, ask questions, ponder the possibilities, or just listen as we explore new topics
              and revisit old ones.
            </p>
          </div>
          <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

          {/* Photos */}
          <div>
            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Photos (3)</h2>
            <div className="grid grid-cols-3 gap-4 my-6">
              <a className="block" href="#0">
                <Image className="w-full rounded-sm" src={MeetupPhoto01} width={203} height={152} alt="Meetup photo 01" />
              </a>
              <a className="block" href="#0">
                <Image className="w-full rounded-sm" src={MeetupPhoto02} width={203} height={152} alt="Meetup photo 02" />
              </a>
              <a className="block" href="#0">
                <Image className="w-full rounded-sm" src={MeetupPhoto03} width={203} height={152} alt="Meetup photo 03" />
              </a>
            </div>
          </div>

          <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

          {/* Comments */}
          <div>
            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Comments (3)</h2>
            <ul className="space-y-5 my-6">
              {/* Comment */}
              <li className="flex items-start">
                <a className="block mr-3 shrink-0" href="#0">
                  <Image className="rounded-full" src={UserImage07} width={32} height={32} alt="User 07" />
                </a>
                <div className="grow">
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Taylor Nieman</div>
                  <div className="italic">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.”
                  </div>
                </div>
              </li>
              {/* Comment */}
              <li className="flex items-start">
                <a className="block mr-3 shrink-0" href="#0">
                  <Image className="rounded-full" src={UserImage08} width={32} height={32} alt="User 08" />
                </a>
                <div className="grow">
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Meagan Loyst</div>
                  <div className="italic">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.”
                  </div>
                </div>
              </li>
              {/* Comment */}
              <li className="flex items-start">
                <a className="block mr-3 shrink-0" href="#0">
                  <Image className="rounded-full" src={UserImage02} width={32} height={32} alt="User 02" />
                </a>
                <div className="grow">
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Frank Malik</div>
                  <div className="italic">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.”
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

          {/* Similar Meetups */}
          <div>
            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Similar Meetups</h2>
            <div className="space-y-8 sm:space-y-5 my-6 lg:mb-0">
              {/* Related item */}
              <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Image */}
                <a className="relative block w-24 sm:w-[14rem] lg:sidebar-expanded:w-20 xl:sidebar-expanded:w-[14rem] shrink-0" href="#0">
                  <Image
                    className="absolute object-cover object-center w-full h-full"
                    src={MeetupThumb}
                    width={220}
                    height={236}
                    alt="Meetup 02"
                  />
                  {/* Like button */}
                  <button className="absolute top-0 right-0 mt-4 mr-4">
                    <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
                      <span className="sr-only">Like</span>
                      <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                        <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                      </svg>
                    </div>
                  </button>
                </a>
                {/* Content */}
                <div className="grow p-5 flex flex-col">
                  <div className='grow'>
                    <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Mon 27 Dec, 2021</div>
                    <a className="inline-flex mb-2" href="#0">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">New York &amp; New Jersey Virtual Retreat 2021</h3>
                    </a>
                    <div className="text-sm">
                      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="flex justify-between mt-3">
                    {/* Tag */}
                    <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
                      <svg className="w-4 h-3 fill-slate-400 dark:fill-slate-500 mr-2" viewBox="0 0 16 12">
                        <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
                      </svg>
                      <span>Online Event</span>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-3 -ml-0.5">
                        <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={Avatar02} width={28} height={28} alt="User 02" />
                        <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={Avatar03} width={28} height={28} alt="User 03" />
                        <Image className="rounded-full border-2 border-white dark:border-slate-800 box-content" src={Avatar04} width={28} height={28} alt="User 04" />
                      </div>
                      <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+132</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* 1st block */}
          <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[18rem] xl:w-[20rem]">
            <div className="space-y-2">
              <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                  <path d="m2.457 8.516.969-.99 2.516 2.481 5.324-5.304.985.989-6.309 6.284z" />
                </svg>
                <span className="ml-1">Attending</span>
              </button>
              <button className="btn w-full dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
                <svg className="w-4 h-4 fill-rose-500 shrink-0" viewBox="0 0 16 16">
                  <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                </svg>
                <span className="ml-2">Favorite</span>
              </button>
            </div>
          </div>

          {/* 2nd block */}
          <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[18rem] xl:w-[20rem]">
            <div className="flex justify-between space-x-1 mb-5">
              <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold">Attendees (127)</div>
              <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                View All
              </a>
            </div>
            <ul className="space-y-3">
              <li>
                <div className="flex justify-between">
                  <div className="grow flex items-center">
                    <div className="relative mr-3">
                      <Image className="w-8 h-8 rounded-full" src={UserImage08} width={32} height={32} alt="User 08" />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Carolyn McNeail</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                    <span className="sr-only">Menu</span>
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="2" />
                      <circle cx="10" cy="16" r="2" />
                      <circle cx="22" cy="16" r="2" />
                    </svg>
                  </button>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <div className="grow flex items-center">
                    <div className="relative mr-3">
                      <Image className="w-8 h-8 rounded-full" src={UserImage01} width={32} height={32} alt="User 01" />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Dominik Lamakani</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                    <span className="sr-only">Menu</span>
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="2" />
                      <circle cx="10" cy="16" r="2" />
                      <circle cx="22" cy="16" r="2" />
                    </svg>
                  </button>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <div className="grow flex items-center">
                    <div className="relative mr-3">
                      <Image className="w-8 h-8 rounded-full" src={UserImage03} width={32} height={32} alt="User 03" />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Ivan Mesaros</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                    <span className="sr-only">Menu</span>
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="2" />
                      <circle cx="10" cy="16" r="2" />
                      <circle cx="22" cy="16" r="2" />
                    </svg>
                  </button>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <div className="grow flex items-center">
                    <div className="relative mr-3">
                      <Image className="w-8 h-8 rounded-full" src={UserImage05} width={32} height={32} alt="User 05" />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Maria Martinez</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                    <span className="sr-only">Menu</span>
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="2" />
                      <circle cx="10" cy="16" r="2" />
                      <circle cx="22" cy="16" r="2" />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[18rem] xl:w-[20rem]">
            <div className="flex justify-between space-x-1 mb-5">
              <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold">Invite Friends</div>
              <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                View All
              </a>
            </div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow flex items-center">
                    <div className="relative mr-3">
                      <Image className="w-8 h-8 rounded-full" src={UserImage02} width={32} height={32} alt="User 02" />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Haruki Masuno</span>
                    </div>
                  </div>
                  <button className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
                    Invite
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow flex items-center">
                    <div className="relative mr-3">
                      <Image className="w-8 h-8 rounded-full" src={UserImage04} width={32} height={32} alt="User 04" />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Joe Huang</span>
                    </div>
                  </div>
                  <button className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
                    Invite
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow flex items-center">
                    <div className="relative mr-3">
                      <Image className="w-8 h-8 rounded-full" src={UserImage06} width={32} height={32} alt="User 06" />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Carolyn McNeail</span>
                    </div>
                  </div>
                  <button className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
                    Invite
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow flex items-center">
                    <div className="relative mr-3">
                      <Image className="w-8 h-8 rounded-full" src={UserImage08} width={32} height={32} alt="User 08" />
                    </div>
                    <div className="truncate">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Lisa Sitwala</span>
                    </div>
                  </div>
                  <button className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
                    Invite
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
