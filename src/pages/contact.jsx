import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Andrew Marcuccio</title>
        <meta
          name="description"
          content="Have an idea? Is there a dataset you think I should analyze? Get in touch with me."
        />
      </Head>
      <SimpleLayout
        title="Want help with a special project? Have suggestions or recommendations? Get in touch with me."
        intro="Follow my developments on GitHub, message me on LinkedIn, or get a hold of me by 
        email using the form below. I look forward to hearing your thoughts, suggestions, and ideas."
      >
        <div className="max-w-screen-sm">
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-base text-zinc-600 dark:text-zinc-400"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-zinc-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                placeholder="email@domain.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-base text-zinc-600 dark:text-zinc-400"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm outline-none focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-zinc-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-base text-zinc-600 dark:text-zinc-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-zinc-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-teal-400 py-3 px-5 text-center text-base text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-700 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </SimpleLayout>
    </>
  )
}
