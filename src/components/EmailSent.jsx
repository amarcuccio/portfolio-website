import { CheckCircleIcon } from '@heroicons/react/20/solid'

export function EmailSent() {
  return (
    <div className="rounded-md bg-teal-200 p-4 dark:bg-teal-300">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-7 w-7 text-teal-800"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-teal-800">
            Your message has been sent successfully!
          </p>
        </div>
      </div>
    </div>
  )
}
