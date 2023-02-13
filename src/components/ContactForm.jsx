import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export function ContactForm() {
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
    <form ref={form} onSubmit={sendEmail} className="space-y-8">
      <div>
        <label
          htmlFor="user_name"
          className="mb-2 block text-base text-zinc-600 dark:text-zinc-400"
        >
          Your name
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm outline-none focus:border-violet-600 focus:ring-violet-600 dark:border-gray-600 dark:bg-zinc-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-violet-600 dark:focus:ring-violet-600"
          placeholder="Full name"
          maxLength={70}
          required
        />
      </div>
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
          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-violet-600 focus:ring-violet-600 dark:border-gray-600 dark:bg-zinc-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-violet-600 dark:focus:ring-violet-600"
          placeholder="email@domain.com"
          maxLength={100}
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
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-violet-600 focus:ring-violet-600 dark:border-gray-600 dark:bg-zinc-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-violet-600 dark:focus:ring-violet-600"
          placeholder="Leave a comment..."
          maxLength={1000}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="rounded-lg bg-violet-600 py-3 px-5 text-center text-base text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-700 sm:w-fit"
      >
        Send message
      </button>
    </form>
  )
}
