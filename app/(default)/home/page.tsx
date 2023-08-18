import fs from "node:fs";
import path from "node:path";
import fse from 'fs-extra';

import Link from 'next/link'
import Image from 'next/image'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import WelcomeBanner from './welcome-banner'
import SearchForm from '@/components/search-form'
import PaginationNumeric from '@/components/pagination-numeric'
import MeetupsThumb01 from '@/public/images/meetups-thumb-01.jpg'
import MeetupsThumb02 from '@/public/images/meetups-thumb-02.jpg'
import UserImage01 from '@/public/images/avatar-01.jpg'
import UserImage02 from '@/public/images/avatar-02.jpg'
import UserImage03 from '@/public/images/avatar-03.jpg'
import UserImage04 from '@/public/images/avatar-04.jpg'
import UserImage05 from '@/public/images/avatar-05.jpg'
import MeetupImage from '@/public/images/meetup-image.jpg'
import UserImage07 from '@/public/images/user-32-07.jpg'

import Survey from "../../../components/surveyjs/Survey";

// TODO: Add E-Commerce > Shop2
// TODO: Community > Users Tabs (YouTubers?) or Users Tiles
// TODO: Community > Forum + Forum Post (FAQ, Q&A?)
// TODO: Jobs > Listing
// TODO: Tasks > Kanban or List (Progress?)
// TODO: Inbox > Messages from Headquarters? e.g. Updated Parent repo, need to sync?
// TODO: Calendar
// TODO: Campaigns (Tips?)
// TODO: Settings > My Account, Notifications, Connected Apps, Feedback
// TODO: Utility > Changelog
// TODO: Utility > Roadmap
// TODO: Utility > FAQ
// TODO: Utility > Knowledge base
// TODO: Authentication > Sign in, Sign up, Reset Password
// TODO: Onboarding

function RecentActivity() {
    return(
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">Recent Activity</h2>
        </header>
        <div className="p-3">
  
          {/* Card content */}
          {/* "Today" group */}
          <div>
            <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">Today</header>
            <ul className="my-1">
              {/* Item */}
              <li className="flex px-2">
                <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                  <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
                    <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                  </svg>
                </div>
                <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                  <div className="grow flex justify-between">
                    <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Nick Mark</a> mentioned <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Sara Smith</a> in a new post</div>
                    <div className="shrink-0 self-end ml-2">
                      <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                    </div>
                  </div>
                </div>
              </li>
              {/* Item */}
              <li className="flex px-2">
                <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                  <svg className="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                    <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                  </svg>
                </div>
                <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                  <div className="grow flex justify-between">
                    <div className="self-center">The post <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Post Name</a> was removed by <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Nick Mark</a></div>
                    <div className="shrink-0 self-end ml-2">
                      <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                    </div>
                  </div>
                </div>
              </li>
              {/* Item */}
              <li className="flex px-2">
                <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
                  <svg className="w-9 h-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                    <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
                  </svg>
                </div>
                <div className="grow flex items-center text-sm py-2">
                  <div className="grow flex justify-between">
                    <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Patrick Sullivan</a> published a new <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">post</a></div>
                    <div className="shrink-0 self-end ml-2">
                      <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* "Yesterday" group */}
          <div>
            <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">Yesterday</header>
            <ul className="my-1">
              {/* Item */}
              <li className="flex px-2">
                <div className="w-9 h-9 rounded-full shrink-0 bg-sky-500 my-2 mr-3">
                  <svg className="w-9 h-9 fill-current text-sky-50" viewBox="0 0 36 36">
                    <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
                  </svg>
                </div>
                <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                  <div className="grow flex justify-between">
                    <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">240+</a> users have subscribed to <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Newsletter #1</a></div>
                    <div className="shrink-0 self-end ml-2">
                      <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                    </div>
                  </div>
                </div>
              </li>
              {/* Item */}
              <li className="flex px-2">
                <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                  <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
                    <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                  </svg>
                </div>
                <div className="grow flex items-center text-sm py-2">
                  <div className="grow flex justify-between">
                    <div className="self-center">The post <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Post Name</a> was suspended by <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">Nick Mark</a></div>
                    <div className="shrink-0 self-end ml-2">
                      <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
  
        </div>
      </div>
    )
}

function MeetupsPosts() {
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

    </div>
  )
}

type IPost = {
    author?: string
    title?: string
    subtitle?: string
    children: React.ReactNode
}

// TODO: Read Creation/Update Date from Frontmatter < https://youtu.be/Hiabp1GY8fA?t=1208
// TODO: STUDY: https://github.com/remarkjs/remark-gfm
// TODO: STUDY: https://github.com/remarkjs/react-markdown
function Post({ author, title, subtitle, children }: IPost) {
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

// TODO: WiP > Loading Markdown Content
const getPostMetaData = function(){
    const folder = "curriculum/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter( file => file.endsWith(".md") );
    const slugs = markdownPosts.map( file => file.replace(".md", "") );
    return slugs;
}
const getPostContentFromFolder = (folder:string)=>{

    const destinationFolderBase = path.join( process.cwd(), "public", "images", folder );

    function byImage( file:string ){
        return /\.(jpg|jpeg|png|gif)$/i.test(file);
    }

    try {

        // process.cwd() => /Users/kostasx/WebServer/plethoralabs/GITHUB/WDX-180
        const files = fs.readdirSync(folder);
        const markdownPosts = files.filter( file => file.endsWith(".md") );
        // console.log(markdownPosts[0]);
        const tmpFolder = markdownPosts[0];
        const content = fs.readFileSync(path.join(folder,tmpFolder), "utf8");
        const assetsFolder = path.join(folder,"assets");
        const assets = fs.readdirSync(assetsFolder, "utf8");
        // console.log({ assets });

        assets.filter(byImage).forEach( asset =>{
            const srcFolder = path.join( process.cwd(), assetsFolder, asset );
            const dstFolder = path.join( destinationFolderBase, asset );

             console.log({ 
                vscode: "file://" + srcFolder.replaceAll(" ", "%20"), // VSCode manual debugging
                srcFolder,
                dstFolder 
            });

            // DOCS: https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md
            fse.copy(srcFolder, dstFolder, { overwrite: false }, (err:any) => {
                if (err) return console.error("Error: while trying to copy " + srcFolder + " to " + dstFolder );

                // console.log( "Successfully copied " + srcFolder + " to " + dstFolder )
              })
        })
        return content;

    } catch(e){

        // @ts-ignore
        throw new Error("Error with reading folder. Message: " +  e.message);

    }
}

// TODO: Hide Frontmatter data when using ReactMarkdown
function Curriculum(){
    const postMetaData = getPostMetaData();
    const folder = path.join("curriculum", "week01", "resources", "How the Internet works");
    const markdown = getPostContentFromFolder(folder);
    return (
        <section>
            <Post>
                <ReactMarkdown 
                    // components={{
                    //     img: (props) => {
                    //         return (
                    //             <Image src={require(path.join(process.cwd(), props.src))} alt={props.alt} width={1200} height={200} />
                    //         )}
                    //   }}
                    transformImageUri={(src, alt, title) => {
                        console.log(src,alt,title);
                        // src: assets/internet-schema-2.png 
                        // alt: Ten computers all together 
                        // title: null
                        return path.join( "/", folder, src );
                        
                        // process.cwd() => /Users/kostasx/WebServer/plethoralabs/GITHUB/WDX-180
                        // __dirname => /Users/kostasx/WebServer/plethoralabs/GITHUB/WDX-180/.next/server/app/(default)/home
                        
                        // return "DEBUG";
                    }} 
                    children={markdown} 
                    remarkPlugins={[remarkGfm]} 
                    />
            </Post>
            <ul>
                {postMetaData.map( file =>{
                    return (
                        <li>
                            <Link href={`/posts/${file}`} className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white">{ file }</Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default function Home() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

            <WelcomeBanner />

            {/* TODO: WORK IN PROGRESS: Import Static Images from Markdown curriculum/ folder into public and then into .next/ */}
            {/* <Curriculum /> */}

            <Post
                author={"Kostas Minaidis"}
                title={"The World of AI and Machine Learning — Open Chat"}
                subtitle={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."}
            >
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
            </Post>

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Discover Meetups ✨</h1>
                </div>

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                {/* Search form */}
                <SearchForm placeholder="Search…" />

                {/* Add meetup button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add Meetup</span>
                </button>

                </div>

            </div>

            {/* Filters */}
            <div className="mb-5">
                <ul className="flex flex-wrap -m-1">
                <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">
                    View All
                    </button>
                </li>
                <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                    Online
                    </button>
                </li>
                <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                    Local
                    </button>
                </li>
                <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                    This Week
                    </button>
                </li>
                <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                    This Month
                    </button>
                </li>
                <li className="m-1">
                    <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                    Following
                    </button>
                </li>
                </ul>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 italic mb-4">289 Meetups</div>

            {/* Content */}
            <MeetupsPosts />

            {/* Pagination */}
            <div className="my-8">
                <PaginationNumeric />
            </div>

            <div className="grid grid-cols-12 gap-6">
                <RecentActivity />
            </div>

            <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

            {/* EXERCISES / QUIZZES */}
            {/* <Survey /> */}

        </div>
    )
}