export const metadata = {
  title: 'Product - Mosaic',
  description: 'Page description',
}

import Link from 'next/link'
import Image from 'next/image'
import ProductImage from '@/public/images/product-image.jpg'
import User03 from '@/public/images/user-32-03.jpg'
import User04 from '@/public/images/user-32-04.jpg'
import User05 from '@/public/images/user-32-05.jpg'
import User07 from '@/public/images/user-32-07.jpg'
import Related01 from '@/public/images/related-product-01.jpg'
import Related02 from '@/public/images/related-product-02.jpg'
import Related03 from '@/public/images/related-product-03.jpg'

export default function Product() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

        {/* Content */}
        <div>
          <div className="mb-3">
            <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="/ecommerce/shop/">&lt;- Back To Listing</Link>
          </div>
          <header className="mb-4">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">Front-End Learning: Hands-On HTML & CSS In Real Web Apps ✨</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
          </header>

          {/* Meta */}
          <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
            {/* Author */}
            <div className="flex items-center sm:mr-4">
              <a className="block mr-2 shrink-0" href="#0">
                <Image className="rounded-full" src={User07} width={32} height={32} alt="User 04" />
              </a>
              <a className="block text-sm font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap" href="#0">
                Simona Lürwer
              </a>
            </div>
            {/* Right side */}
            <div className="flex flex-wrap items-center sm:justify-end space-x-4">
              {/* Tag */}
              <div className="inline-flex items-center text-xs font-medium text-slate-100 dark:text-slate-300 bg-slate-900/60 dark:bg-slate-800/60 rounded-full text-center px-2 py-0.5">
                <svg className="w-3 h-3 shrink-0 fill-current text-amber-500 mr-1" viewBox="0 0 12 12">
                  <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                </svg>
                <span>Special Offer</span>
              </div>
              {/* Rating */}
              <div className="flex items-center space-x-2 mr-2">
                {/* Stars */}
                <div className="flex space-x-1">
                  <button>
                    <span className="sr-only">1 star</span>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </button>
                  <button>
                    <span className="sr-only">2 stars</span>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </button>
                  <button>
                    <span className="sr-only">3 stars</span>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </button>
                  <button>
                    <span className="sr-only">4 stars</span>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </button>
                  <button>
                    <span className="sr-only">5 stars</span>
                    <svg className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </button>
                </div>
                {/* Rate */}
                <div className="inline-flex text-sm font-medium text-amber-600">4.2</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <figure className="mb-6">
            <Image className="w-full rounded-sm" src={ProductImage} width="640" height="360" alt="Product" />
          </figure>

          {/* Product content */}
          <div>
            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Overview</h2>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua u t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul className="list-disc list-inside space-y-1 mb-6">
              <li>E-commerce: Better lorem ipsum generator.</li>
              <li>Booking: Lorem ipsum post generator.</li>
              <li>Retail: Better lorem ipsum generator.</li>
              <li>Services: Better lorem ipsum generator.</li>
            </ul>
            <blockquote className="italic mb-6">
              “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </blockquote>
          </div>

          <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

          {/* Reviews */}
          <div>
            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Featured Reviews (44)</h2>
            <ul className="space-y-5 my-6">
              {/* Review */}
              <li>
                <div className="flex items-center mb-2">
                  <Image className="w-8 h-8 rounded-full mr-3" src={User07} width={32} height={32} alt="User 07" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Danielle Mark</div>
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">4.6</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm italic">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
              </li>
              {/* Review */}
              <li>
                <div className="flex items-center mb-2">
                  <Image className="w-8 h-8 rounded-full mr-3" src={User05} width={32} height={32} alt="User 05" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Marija Urkjulz</div>
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">4.9</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm italic">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
              </li>
              {/* Review */}
              <li>
                <div className="flex items-center mb-2">
                  <Image className="w-8 h-8 rounded-full mr-3" src={User03} width={32} height={32} alt="User 03" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Rodrigo Pantoja</div>
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">4.4</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm italic">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
              </li>
              {/* Review */}
              <li>
                <div className="flex items-center mb-2">
                  <Image className="w-8 h-8 rounded-full mr-3" src={User04} width={32} height={32} alt="User 04" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Juan Johnson</div>
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">4.9</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm italic">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
              </li>
            </ul>
            {/* Load More */}
            <div className="text-center">
              <button className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500">Load More Reviews</button>
            </div>
          </div>

          <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

          {/* Related */}
          <div>
            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Frequently Bought Together</h2>
            <ul className="space-y-8 sm:space-y-5 my-6">
              {/* Related item */}
              <li className="sm:flex items-center">
                <a className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0" href="#0">
                  <Image className="rounded-sm" src={Related01} width="200" height="142" alt="Product 01" />
                </a>
                <div className="grow">
                  <a href="#0">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">The Complete Front-End Development Course!</h3>
                  </a>
                  <div className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</div>
                  {/* Rating and price */}
                  <div className="flex flex-wrap items-center space-x-2">
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">4.2</div>
                    </div>
                    <div className="text-slate-400 dark:text-slate-600">·</div>
                    {/* Price */}
                    <div>
                      <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Related item */}
              <li className="sm:flex items-center">
                <a className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0" href="#0">
                  <Image className="rounded-sm" src={Related02} width="200" height="142" alt="Product 02" />
                </a>
                <div className="grow">
                  <a href="#0">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Web Development Ultimate Course 2021</h3>
                  </a>
                  <div className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</div>
                  {/* Rating and price */}
                  <div className="flex flex-wrap items-center space-x-2">
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">4.2</div>
                    </div>
                    <div className="text-slate-400 dark:text-slate-600">·</div>
                    {/* Price */}
                    <div>
                      <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Related item */}
              <li className="sm:flex items-center">
                <a className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0" href="#0">
                  <Image className="rounded-sm" src={Related03} width="200" height="142" alt="Product 03" />
                </a>
                <div className="grow">
                  <a href="#0">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Full-Stack JavaScript Course!</h3>
                  </a>
                  <div className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</div>
                  {/* Rating and price */}
                  <div className="flex flex-wrap items-center space-x-2">
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">4.2</div>
                    </div>
                    <div className="text-slate-400 dark:text-slate-600">·</div>
                    {/* Price */}
                    <div>
                      <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* Load More */}
            <div className="text-center">
              <button className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500">Load More Stuff</button>
            </div>
          </div>

          <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[18rem] xl:w-[20rem]">
            <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold mb-3">Select a Package</div>
            <ul className="space-y-2 sm:flex sm:space-y-0 sm:space-x-2 lg:space-y-2 lg:space-x-0 lg:flex-col mb-4">
              <li>
                <button className="w-full h-full text-left py-3 px-4 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out">
                  <div className="flex flex-wrap items-center justify-between mb-0.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">Essential</span>
                    <span className="font-medium text-emerald-600">$39.00</span>
                  </div>
                  <div className="text-sm">Lorem ipsum dolor sit amet elit sed do eiusmod.</div>
                </button>
              </li>
              <li>
                <button className="w-full h-full text-left py-3 px-4 rounded bg-white dark:bg-slate-800 border-2 border-indigo-400 dark:border-indigo-500 shadow-sm duration-150 ease-in-out">
                  <div className="flex flex-wrap items-center justify-between mb-0.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">Premium <span className="text-xs italic text-indigo-500 align-top">Best Value ✨</span></span>
                    <span className="font-medium text-emerald-600">$69.00</span>
                  </div>
                  <div className="text-sm">Lorem ipsum dolor sit amet elit sed do eiusmod.</div>
                </button>
              </li>
              <li>
                <button className="w-full h-full text-left py-3 px-4 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out">
                  <div className="flex flex-wrap items-center justify-between mb-0.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">Complete</span>
                    <span className="font-medium text-emerald-600">$89.00</span>
                  </div>
                  <div className="text-sm">Lorem ipsum dolor sit amet elit sed do eiusmod.</div>
                </button>
              </li>
            </ul>
            <div className="mb-4">
              <a className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Now - $69.00</a>
            </div>
            <div className="text-xs text-slate-500 italic text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <a className="underline hover:no-underline" href="#0">Terms</a>.</div>
          </div>
        </div>

      </div>
    </div>
  )
}