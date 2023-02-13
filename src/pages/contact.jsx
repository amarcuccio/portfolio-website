import Head from 'next/head'
import { ContactForm } from '@/components/ContactForm'
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
          <ContactForm />
        </div>
      </SimpleLayout>
    </>
  )
}
