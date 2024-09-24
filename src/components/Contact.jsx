import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false); // for debouncing
  const [submitted, setSubmitted] = useState(false); // to change button text

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent spamming by setting loading state
    if (loading) return;

    setLoading(true);

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
      publicKey: 'VxdCdkqg9VqJhC5BG',
    })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitted(true); // change to "Submitted" after success
          setFormData({}); // clear form data
          setLoading(false); // reset loading state
        },
        (error) => {
          console.log('FAILED...', error);
          setLoading(false); // reset loading state if there's an error
        },
      );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div id="contact" className='h-dvh max-md:h-dvh bg-[#030610] w-full relative text-white'>
        <div id="contact-section" className='flex flex-col h-full items-center select-none w-full gap-y-12 max-md:gap-y-6 max-md:pb-7'>
          <h3 className='text-5xl mt-36 mb-10 max-md:mb-20 max-md:mt-28'>Contact</h3>
          <form ref={form} onSubmit={handleSubmit} className='flex flex-col h-1/2 xl:w-2/5 max-lg: w-[60%] max-md:w-[90%] justify-center items-center' >
            <input
              value={formData.user_name || ''}
              onChange={handleInputChange}
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Enter your name"
              required
              className='contact-input h-12' />
            <br />
            <input
              value={formData.user_email || ''}
              onChange={handleInputChange}
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Enter your email"
              required
              className='contact-input h-12' />
            <br />
            <textarea
              value={formData.message || ''}
              onChange={handleInputChange}
              name="message"
              id="message"
              placeholder='Reason for contact'
              required
              className='contact-input h-40' />
            <br />

            <button
              type="submit"
              disabled={loading || submitted} // Disable when loading or submitted
              className=' text-black border bg-white py-2 px-6 rounded-md hover:bg-[#030610] hover:text-white hover:border duration-300 ease-out'>
              {submitted ? 'Submitted' : (loading ? 'Submitting...' : 'Submit')} {/* Update button text */}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
