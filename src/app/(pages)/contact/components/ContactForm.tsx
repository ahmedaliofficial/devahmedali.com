import Image from 'next/image'

import contactImage from '@/assets/images/locations/contact-image.webp'
import phoneImage from '@/assets/images/workspace/phone-image.png'

const ContactForm = () => {
  return (
    <section className="pt-32.5 md:pt-36 lg:pt-50">
      <div className="container">
        <div className="mb-12 text-center lg:mb-20">
          <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5">Contact Us</span>

          <h1 className="text-default-900 my-2.5 text-4xl font-medium tracking-tight md:text-5xl lg:text-[90px]">We're here to help</h1>

          <p className="mx-auto md:w-lg">If you have questions, feedback, or need support, reach out, and we’ll get back to you as soon as we can.</p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl md:flex">
          <div className="relative order-2! flex min-h-90 items-center justify-center overflow-hidden md:order-1 md:min-h-125 md:w-6/8 lg:w-2/5" style={{ backgroundImage: `url(${contactImage.src})` }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <Image src={phoneImage} alt="Dashboard Image" className="relative z-10 -mb-67 w-full max-w-65 drop-shadow-2xl lg:max-w-84" />
          </div>

          <div className="order-1! px-5 py-7.5 md:order-2 md:p-5 lg:w-3/5 lg:p-12.5">
            <form id="contact-form" className="space-y-3.5 md:space-y-8">
              <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:gap-8">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-default-600 mb-2.5 text-sm font-medium">
                    Your name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Dennis Barrett"
                    required
                    className="bg-default-200/80 text-default-800 placeholder:text-default-600 w-full rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-default-600 mb-2.5 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Topic of your request"
                    className="bg-default-200/80 text-default-800 placeholder:text-default-600 w-full rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-default-600 mb-2.5 text-sm font-medium">
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="dannis@example.com"
                  required
                  className="bg-default-200/80 text-default-800 placeholder:text-default-600 w-full rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-default-600 mb-2.5 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message"
                  className="bg-default-200/80 text-default-800 placeholder:text-default-600 w-full resize-none rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="bg-default-900 rounded-full px-8 py-4 font-medium text-white shadow-xl transition-all hover:scale-95">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
