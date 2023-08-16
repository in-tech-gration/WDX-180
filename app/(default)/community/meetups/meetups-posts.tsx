import Link from 'next/link'
import Image from 'next/image'
import MeetupsThumb01 from '@/public/images/meetups-thumb-01.jpg'
import MeetupsThumb02 from '@/public/images/meetups-thumb-02.jpg'
import MeetupsThumb03 from '@/public/images/meetups-thumb-03.jpg'
import MeetupsThumb04 from '@/public/images/meetups-thumb-04.jpg'
import MeetupsThumb05 from '@/public/images/meetups-thumb-05.jpg'
import MeetupsThumb06 from '@/public/images/meetups-thumb-06.jpg'
import MeetupsThumb07 from '@/public/images/meetups-thumb-07.jpg'
import MeetupsThumb08 from '@/public/images/meetups-thumb-08.jpg'
import UserImage01 from '@/public/images/avatar-01.jpg'
import UserImage02 from '@/public/images/avatar-02.jpg'
import UserImage03 from '@/public/images/avatar-03.jpg'
import UserImage04 from '@/public/images/avatar-04.jpg'
import UserImage05 from '@/public/images/avatar-05.jpg'
import UserImage06 from '@/public/images/avatar-06.jpg'

export default function MeetupsPosts() {
  return (
    <div className="grid xl:grid-cols-2 gap-6">

      {/* Item 1 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link className="relative block w-24 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem] shrink-0" href="/community/meetups/post">
          <Image
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb01}
            width={220}
            height={236}
            alt="Meetup 01"
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
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Mon 27 Dec, 2021</div>
            <Link className="inline-flex mb-2" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Silicon Valley Bootstrapper Breakfast Online for 2021</h3>
            </Link>
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
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage01}
                  width={28}
                  height={28}
                  alt="User 01"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage04}
                  width={28}
                  height={28}
                  alt="User 04"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage05}
                  width={28}
                  height={28}
                  alt="User 05"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+22</div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 2 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link className="relative block w-24 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem] shrink-0" href="/community/meetups/post">
          <Image
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb02}
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
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Mon 27 Dec, 2021</div>
            <Link className="inline-flex mb-2" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">New York &amp; New Jersey Virtual Retreat 2021</h3>
            </Link>
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
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage02}
                  width={28}
                  height={28}
                  alt="User 02"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage03}
                  width={28}
                  height={28}
                  alt="User 03"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage04}
                  width={28}
                  height={28}
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+132</div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 3 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link className="relative block w-24 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem] shrink-0" href="/community/meetups/post">
          <Image
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb03}
            width={220}
            height={236}
            alt="Meetup 03"
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
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Wed 29 Dec, 2021</div>
            <Link className="inline-flex mb-2" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">The World of AI and Machine Learning — Open Chat</h3>
            </Link>
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
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage06}
                  width={28}
                  height={28}
                  alt="User 06"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage03}
                  width={28}
                  height={28}
                  alt="User 03"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage01}
                  width={28}
                  height={28}
                  alt="User 01"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+12</div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 4 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link className="relative block w-24 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem] shrink-0" href="/community/meetups/post">
          <Image
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb04}
            width={220}
            height={236}
            alt="Meetup 04"
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
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Wed 29 Dec, 2021</div>
            <Link className="inline-flex mb-2" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">NYC Code &amp; Coffee 2.0 @ Freehold Brooklyn</h3>
            </Link>
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
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage05}
                  width={28}
                  height={28}
                  alt="User 05"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage02}
                  width={28}
                  height={28}
                  alt="User 02"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+17</div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 5 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link className="relative block w-24 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem] shrink-0" href="/community/meetups/post">
          <Image
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb05}
            width={220}
            height={236}
            alt="Meetup 05"
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
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Mon 3 Jan, 2022</div>
            <Link className="inline-flex mb-2" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Acme Inc. London Meetup: Women in Tech Night</h3>
            </Link>
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
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage02}
                  width={28}
                  height={28}
                  alt="User 02"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage01}
                  width={28}
                  height={28}
                  alt="User 01"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+117</div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 6 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link className="relative block w-24 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem] shrink-0" href="/community/meetups/post">
          <Image
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb06}
            width={220}
            height={236}
            alt="Meetup 06"
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
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Thu 6 Jan, 2022</div>
            <Link className="inline-flex mb-2" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Founder Worldwide - First Meetup of 2022!</h3>
            </Link>
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
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage03}
                  width={28}
                  height={28}
                  alt="User 03"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage05}
                  width={28}
                  height={28}
                  alt="User 05"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage04}
                  width={28}
                  height={28}
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+64</div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 7 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link className="relative block w-24 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem] shrink-0" href="/community/meetups/post">
          <Image
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb07}
            width={220}
            height={236}
            alt="Meetup 07"
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
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Thu 6 Jan, 2022</div>
            <Link className="inline-flex mb-2" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">NYC Blockchain Network - Monthly 3rd Thursday Meetup</h3>
            </Link>
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
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage02}
                  width={28}
                  height={28}
                  alt="User 02"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage04}
                  width={28}
                  height={28}
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+112</div>
            </div>
          </div>
        </div>
      </article>

      {/* Item 8 */}
      <article className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Image */}
        <Link className="relative block w-24 sm:w-[14rem] xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-[14rem] shrink-0" href="/community/meetups/post">
          <Image
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb08}
            width={220}
            height={236}
            alt="Meetup 08"
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
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Fri 7 Jan, 2022</div>
            <Link className="inline-flex mb-2" href="/community/meetups/post">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Build a Personal Brand and Boost Your Career in AI!</h3>
            </Link>
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
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage01}
                  width={28}
                  height={28}
                  alt="User 01"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage05}
                  width={28}
                  height={28}
                  alt="User 05"
                />
                <Image
                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                  src={UserImage06}
                  width={28}
                  height={28}
                  alt="User 06"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 italic">+32</div>
            </div>
          </div>
        </div>
      </article>

    </div>
  )
}
