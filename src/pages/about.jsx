import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Andrew Marcuccio</title>
        <meta
          name="description"
          content="I'm Andrew Marcuccio. I live in Sudbury, Ontario, where I study data analytics."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Andrew Marcuccio. I live in Sudbury, Ontario, where I study
              data analytics.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                As a child, I never had a good answer when asked: ’What do you
                want to be when you grow up?’ I found it challenging to identify
                an interest or hobby that I wanted to pursue as a career (aside
                from becoming a professional hockey player!)
              </p>
              <p>
                In my early twenties, I studied computer engineering at my local
                college. To be honest, I can’t remember how I stumbled upon the
                program. Over the next twelve years, I had the privilege of
                putting my expertise into practice and gained experience working
                in the mining, healthcare, and education sectors.
              </p>
              <p>
                My career has presented me with countless opportunities to make
                discretionary decisions and independent recommendations. These
                occasions have taught me that I infallibly apply quantitative
                data analysis, and rely on measurable statistics before
                selecting a course of action.
              </p>
              <p>
                I am a firm believer in evidence-based decision-making and
                anyone who knows me will attest that I face challenges
                analytically and with precision. Data analytics gives me the
                ultimate outlet to exercise my skill set, and to share my
                visualizations and insights with the world.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/a_marcuccio"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/andrew.marcuccio/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/amarcuccio"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/amarcuccio/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
