import React from "react"

function ContactForm() {
  return (
      <section id='Contact' className='py-20 bg-gray-100'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Get in Touch</h2>
          <form className='max-w-lg mx-auto'>
            <div className='mb-4'>
              <input className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your name' />
            </div>
            <div className='mb-4'>
              <input className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Your email' />
            </div>
            <div className='mb-6'>
              <textarea className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' rows='5' placeholder='Your message'></textarea>
            </div>
            <div className='flex items-center justify-center'>
              <button className='bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
  )
}

export default ContactForm