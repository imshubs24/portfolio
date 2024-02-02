import React, { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      reason: '',
    });
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
      <div id="contact" className='h-dvh max-md:h-auto bg-[#030610] w-full relative text-white'>
        <div id="contact-section" className='flex flex-col h-full items-center select-none w-full gap-y-12 max-md:gap-y-6 max-md:pb-7'>
          <h3 className='text-5xl mt-36 mb-10 max-md:mb-20 max-md:mt-28'>Contact</h3>
          <form action='post' onSubmit={handleSubmit} className='flex flex-col h-1/2 xl:w-2/6 max-lg: w-[50%] max-md:w-[90%] justify-center items-center' >
            <input value={formData.name} onChange={handleInputChange} type="text" name="name" id="name" placeholder="Enter your name" required className='flex w-full py-1 px-2 rounded-md h-12 placeholder:italic placeholder:text-slate-400 bg-[#030610] border focus:outline-none focus:border-white focus:ring-white focus:ring-1' />
            <br />
            <input value={formData.email} onChange={handleInputChange} type="email" name="email" id="email" placeholder="Enter your email" required className='flex w-full py-1 px-2 rounded-md h-12 placeholder:italic placeholder:text-slate-400 bg-[#030610] border focus:outline-none focus:border-white focus:ring-white focus:ring-1' />
            <br />
            <textarea value={formData.reason} onChange={handleInputChange} name="reason" id="reason" placeholder='Reason for contact' required className='flex w-full py-1 px-2 rounded-md h-40 placeholder:italic placeholder:text-slate-400 bg-[#030610] border focus:outline-none focus:border-white focus:ring-white focus:ring-1' />
            <br />

            <button type="submit" className=' text-black border bg-white py-2 px-6 rounded-md hover:bg-[#030610] hover:text-white hover:border duration-300 ease-out'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
