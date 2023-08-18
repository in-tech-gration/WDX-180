'use client'

import { useState } from 'react'
import Image from 'next/image'
import ModalBasic from '@/components/modal-basic'
import ModalAction from '@/components/modal-action'
import ModalBlank from '@/components/modal-blank'
import SearchModal from '@/components/search-modal'
import AnnouncementIcon from '@/public/images/announcement-icon.svg'
import ModalImage from '@/public/images/modal-image.jpg'

export default function ProductExamples() {

  const [feedbackModalOpen, setFeedbackModalOpen] = useState<boolean>(false)
  const [newsletterModalOpen, setNewsletterModalOpen] = useState<boolean>(false)
  const [announcementModalOpen, setAnnouncementModalOpen] = useState<boolean>(false)
  const [integrationModalOpen, setIntegrationModalOpen] = useState<boolean>(false)
  const [newsModalOpen, setNewsModalOpen] = useState<boolean>(false)
  const [planModalOpen, setPlanModalOpen] = useState<boolean>(false)
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false)

  return (
    <div>
      <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Product</h2>
      <div className="flex flex-wrap items-center -m-1.5">

        {/* Send Feedback */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={() => { setFeedbackModalOpen(true) }}>Send Feedback</button>
          <ModalBasic isOpen={feedbackModalOpen} setIsOpen={setFeedbackModalOpen} title="Send Feedback">
            {/* Modal content */}
            <div className="px-5 py-4">
              <div className="text-sm">
                <div className="font-medium text-slate-800 dark:text-slate-100 mb-3">Let us know what you think 🙌</div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Name <span className="text-rose-500">*</span></label>
                  <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
                  <input id="email" className="form-input w-full px-2 py-1" type="email" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="feedback">Message <span className="text-rose-500">*</span></label>
                  <textarea id="feedback" className="form-textarea w-full px-2 py-1" rows={4} required></textarea>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap justify-end space-x-2">
                <button className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300" onClick={() => { setFeedbackModalOpen(false) }}>Cancel</button>
                <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Send</button>
              </div>
            </div>
          </ModalBasic>
          {/* End */}
        </div>

        {/* Newsletter */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="newsletter-modal" onClick={() => { setNewsletterModalOpen(true) }}>Newsletter</button>
          <ModalAction isOpen={newsletterModalOpen} setIsOpen={setNewsletterModalOpen}>
            {/* Modal header */}
            <div className="mb-2 text-center">
              {/* Icon */}
              <div className="mb-3">
                <svg className="inline-flex w-12 h-12 rounded-full shrink-0 fill-current" viewBox="0 0 48 48">
                  <rect className="text-indigo-100 dark:text-indigo-500/30" width="48" height="48" rx="24" />
                  <path className="text-indigo-300" d="M19 16h7a8 8 0 110 16h-7V16z" />
                  <path className="text-indigo-500" d="M26 24l-7-6v5h-8v2h8v5z" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Subscribe to the Newsletter!</div>
            </div>
            {/* Modal content */}
            <div className="text-center">
              <div className="text-sm mb-6">
                Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.
              </div>
              {/* Submit form */}
              <form className="flex max-w-sm m-auto">
                <div className="grow mr-2">
                  <label htmlFor="subscribe-form" className="sr-only">Leave your Email</label>
                  <input id="subscribe-form" className="form-input w-full px-2 py-1" type="email" />
                </div>
                <button type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">Subscribe</button>
              </form>
              <div className="text-xs text-slate-500 italic mt-3">
                I respect your privacy. No spam. Unsubscribe at any time!
              </div>
            </div>
          </ModalAction>
          {/* End */}
        </div>

        {/* Announcement */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="announcement-modal" onClick={() => { setAnnouncementModalOpen(true) }}>Announcement</button>
          <ModalAction isOpen={announcementModalOpen} setIsOpen={setAnnouncementModalOpen}>
            {/* Modal header */}
            <div className="mb-2 text-center">
              {/* Icon */}
              <div className="inline-flex rounded-full bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-700/30 dark:to-slate-700 mb-2">
                <Image src={AnnouncementIcon} width={80} height={80} alt="Announcement" />
              </div>
              <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">You Unlocked Level 2!</div>
            </div>
            {/* Modal content */}
            <div className="text-center">
              <div className="text-sm mb-5">
                Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.
              </div>
              {/* CTAs */}
              <div className="space-y-3">
                <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Claim your Reward -&gt;</button>
                <div>
                  <a className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0" onClick={(e) => { e.preventDefault(); setAnnouncementModalOpen(true) }}>Not Now!</a>
                </div>
              </div>
            </div>
          </ModalAction>
          {/* End */}
        </div>

        {/* Integration */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="integration-modal" onClick={() => { setIntegrationModalOpen(true) }}>Integration</button>
          <ModalAction isOpen={integrationModalOpen} setIsOpen={setIntegrationModalOpen}>
            {/* Modal header */}
            <div className="mb-5 text-center">
              {/* Icons */}
              <div className="inline-flex items-center justify-center space-x-3 mb-4">
                {/* Mosaic logo */}
                <svg width="48" height="48" viewBox="0 0 32 32">
                  <defs>
                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="nl-a">
                      <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                      <stop stopColor="#A5B4FC" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="nl-b">
                      <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                      <stop stopColor="#38BDF8" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect fill="#6366F1" width="32" height="32" rx="16" />
                  <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                  <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#nl-a)" />
                  <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#nl-b)" />
                </svg>
                {/* Arrows */}
                <svg className="h-4 w-4 fill-current text-slate-400" viewBox="0 0 16 16">
                  <path d="M5 3V0L0 4l5 4V5h8a1 1 0 000-2H5zM11 11H3a1 1 0 000 2h8v3l5-4-5-4v3z" />
                </svg>
                {/* Cruip logo */}
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <rect className="fill-slate-100 dark:fill-indigo-500/30" width="48" height="48" rx="24" />
                  <path d="M34 24c0-1.38-1.126-2.5-2.515-2.5A2.507 2.507 0 0028.97 24c0 1.38 1.126 2.5 2.515 2.5A2.507 2.507 0 0034 24" fill="#34D399" />
                  <path d="M31.112 31.07a10.024 10.024 0 01-4.582 2.615c-.8.205-1.64.315-2.506.315a10.007 10.007 0 01-7.553-3.426A9.943 9.943 0 0114 24c0-2.517.932-4.816 2.471-6.574A10.007 10.007 0 0124.024 14a10.024 10.024 0 017.088 2.93l-3.544 3.535A5.003 5.003 0 0024.024 19a5.006 5.006 0 00-5.012 5l.001.13A5.007 5.007 0 0024.024 29c1.384 0 2.637-.56 3.544-1.465l3.544 3.536z" fill="#6366F1" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Connect Mosaic with your Cruip account</div>
            </div>
            {/* Modal content */}
            <div className="text-sm mb-5">
              <div className="font-medium text-slate-800 dark:text-slate-100 mb-3">Mosaic would like to:</div>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div>Lorem ipsum dolor sit amet</div>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div>Semper eget duis at tellus at urna</div>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div>Lorem ipsum dolor sit amet</div>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div>Suspendisse faucibus interdum</div>
                </li>
              </ul>
              <div className="text-xs text-slate-500">By clicking on Allow access, you authorize Mosaic to use your information in accordance with its <a className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Privacy Policy</a>. You can stop it at any time on the integrations page of your Mosaic account.</div>
            </div>
            {/* Modal footer */}
            <div className="flex flex-wrap justify-end space-x-2">
              <button className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300" onClick={() => { setIntegrationModalOpen(false) }}>Cancel</button>
              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Allow Access</button>
            </div>
          </ModalAction>
          {/* End */}
        </div>

        {/* What's New */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="news-modal" onClick={() => { setNewsModalOpen(true) }}>What's New</button>
          <ModalBlank isOpen={newsModalOpen} setIsOpen={setNewsModalOpen}>
            <div className="relative">
              <Image className="w-full" src={ModalImage} width={460} height="200" alt="New on Mosaic" />
              {/* Close button */}
              <button className="absolute top-0 right-0 mt-5 mr-5 text-slate-50 hover:text-white" onClick={() => { setNewsModalOpen(false) }}>
                <div className="sr-only">Close</div>
                <svg className="w-4 h-4 fill-current">
                  <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                </svg>
              </button>
            </div>
            <div className="p-5">
              {/* Modal header */}
              <div className="mb-2">
                <div className="mb-3">
                  <div className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">New on Mosaic</div>
                </div>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Help your team work faster with X 🏃‍♂️</div>
              </div>
              {/* Modal content */}
              <div className="text-sm mb-5">
                <div className="space-y-2">
                  <p>You might not be aware of this fact, but every frame, digital video, canvas, responsive design, and image often has a rectangular shape that is exceptionally precise in proportion (or ratio).</p>
                  <p>The ratio has to be well-defined to make shapes fit into different and distinct mediums, such as computer, movies, television and camera screens.</p>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex flex-wrap justify-end space-x-2">
                <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => { setNewsModalOpen(false) }}>Cool, I Got it</button>
              </div>
            </div>
          </ModalBlank>
          {/* End */}
        </div>

        {/* Change your Plan */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={() => { setPlanModalOpen(true) }}>Change your Plan</button>
          <ModalBasic isOpen={planModalOpen} setIsOpen={setPlanModalOpen} title="Change your Plan">
            {/* Modal content */}
            <div className="px-5 pt-4 pb-1">
              <div className="text-sm">
                <div className="mb-4">Upgrade or downgrade your plan:</div>
                {/* Options */}
                <ul className="space-y-2 mb-4">
                  <li>
                    <button className="w-full h-full text-left py-3 px-4 rounded bg-white dark:bg-slate-800 border-2 border-indigo-400 dark:border-indigo-500 shadow-sm duration-150 ease-in-out">
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-4 bg-white border-indigo-500 rounded-full mr-3"></div>
                        <div className="grow">
                          <div className="flex flex-wrap items-center justify-between mb-0.5">
                            <span className="font-medium text-slate-800 dark:text-slate-100">Mosaic Light <span className="text-xs italic text-slate-500 align-top">Current Plan</span></span>
                            <span className="text-slate-600"><span className="font-medium text-emerald-600">$39.00</span>/mo</span>
                          </div>
                          <div className="text-sm">2 MB · 1 member · 500 block limits</div>
                        </div>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="w-full h-full text-left py-3 px-4 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out">
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full mr-3"></div>
                        <div className="grow">
                          <div className="flex flex-wrap items-center justify-between mb-0.5">
                            <span className="font-semibold text-slate-800 dark:text-slate-100">Mosaic Basic <span className="text-xs italic text-indigo-500 align-top">Best Value ✨</span></span>
                            <span className="text-slate-600"><span className="font-medium text-emerald-600">$59.00</span>/mo</span>
                          </div>
                          <div className="text-sm">5 MB · 2 members · 1000 block limits</div>
                        </div>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="w-full h-full text-left py-3 px-4 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out">
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full mr-3"></div>
                        <div className="grow">
                          <div className="flex flex-wrap items-center justify-between mb-0.5">
                            <span className="font-semibold text-slate-800 dark:text-slate-100">Mosaic Plus</span>
                            <span className="text-slate-600"><span className="font-medium text-emerald-600">$79.00</span>/mo</span>
                          </div>
                          <div className="text-sm">10 MB · 5 members · Unlimited block limits</div>
                        </div>
                      </div>
                    </button>
                  </li>
                </ul>
                <div className="text-xs text-slate-500">Your workspace's Mosaic Light Plan is set to $39 per month and will renew on August 9, 2021.</div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="px-5 py-4">
              <div className="flex flex-wrap justify-end space-x-2">
                <button className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300" onClick={() => { setPlanModalOpen(false) }}>Cancel</button>
                <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Change Plan</button>
              </div>
            </div>
          </ModalBasic>
          {/* End */}
        </div>
        
        {/* Quick Find */}
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="quick-find-modal" onClick={(e) => { e.stopPropagation(); setSearchModalOpen(true); }}>Quick Find</button>
          <SearchModal isOpen={searchModalOpen} setIsOpen={setSearchModalOpen} />
          {/* End */}
        </div>        

      </div>
    </div>
  )
}
