import Image from 'next/image'
import Head from 'next/head'
import errorCat from '@/images/errorcat.svg'
import { Container } from '@/components/Container'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Error - Andrew Marcuccio</title>
        <meta name="description" content="404 - Page Not Found" />
      </Head>
      <Container>
        <div
          style={{ minHeight: 'calc(75vh)' }}
          className="container flex flex-col items-center justify-center px-5 md:flex-row"
        >
          <div className="max-w-md">
            <h1 className="text-4xl font-bold tracking-tight text-teal-400 dark:text-teal-600 lg:text-5xl">
              404
            </h1>
            <h1 className="text-4xl font-bold tracking-tight dark:text-zinc-100 lg:text-5xl">
              Page not found
            </h1>
            <p className="mt-1 text-base text-gray-500">
              Please check the URL in the address bar and try again.
            </p>
          </div>
          <div className="max-w-lg">
            <Image
              src={errorCat}
              alt="Cat knocking vase of flowers off a table."
            />
          </div>
        </div>
      </Container>
    </>
  )
}
