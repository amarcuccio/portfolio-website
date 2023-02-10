import Head from 'next/head'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE,
      process.env.NEXT_PUBLIC_TEMPLATE,
      form.current,
      process.env.NEXT_PUBLIC_USER
    )
    e.target.reset()
  }

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
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                htmlFor="user_email"
                className="mb-2 block text-base text-zinc-600 dark:text-zinc-400"
              >
                Your email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-zinc-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                placeholder="email@domain.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message_subject"
                className="mb-2 block text-base text-zinc-600 dark:text-zinc-400"
              >
                Subject
              </label>
              <input
                type="text"
                id="message_subject"
                name="message_subject"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm outline-none focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-zinc-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email_message"
                className="mb-2 block text-base text-zinc-600 dark:text-zinc-400"
              >
                Your message
              </label>
              <textarea
                id="email_message"
                name="email_message"
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
