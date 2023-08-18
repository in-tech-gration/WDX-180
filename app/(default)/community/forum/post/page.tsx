export const metadata = {
  title: 'Forum Post - Mosaic',
  description: 'Page description',
}

import ForumLeftContent from '../forum-left-content'
import ForumEntry from './forum-entry'
import ForumPostRightContent from './forum-post-right-content'

export default function ForumPost() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-[96rem] mx-auto">

      <div className="xl:flex">

        {/* Left + Middle content */}
        <div className="md:flex flex-1">

          {/* Left content */}
          <ForumLeftContent />

          {/* Middle content */}
          <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
            <div className="md:py-8">

              {/* Forum entry */}
              <ForumEntry />

            </div>
          </div>

        </div>

        {/* Right content */}
        <ForumPostRightContent />

      </div>

    </div>
  )
}
