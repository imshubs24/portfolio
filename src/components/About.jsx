import React from 'react'

const About = () => {
    return (
        <>
            <div id="about" className='h-dvh relative flex flex-col justify-center'>
                <div className="about-bg h-dvh w-full bg-[url(src/assets/about-bg.jpg)] contrast-150 bg-cover bg-no-repeat bg-scroll absolute -z-10" ></div>
                <div className="background-img-tint h-dvh w-full absolute bg-gray-950 opacity-90 -z-10"></div>
                <h2 className='mb-8 text-5xl lg:mx-40 md:mx-20 sm:mx-5 text-white max-sm:mx-2'>About</h2>
                <div className="about-info-box h-96 lg:mx-40 lg:w-[40rem] md:mx-20 md:w-auto sm:mx-5 max-sm:mx-2 border border-white text-white px-4 py-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam est, dolores harum enim similique, ullam fugit iste molestiae eaque doloremque ex aliquam tempora pariatur praesentium suscipit veniam deserunt cum illum in excepturi, ipsum quas. Veniam sequi provident ipsum accusantium optio quis facilis nemo mollitia. Quibusdam culpa eius labore pariatur asperiores dolor magnam omnis magni, saepe ratione rerum molestiae ipsam optio corrupti mollitia error nobis in vero dolore ipsa delectus? Impedit harum officia maiores tempore mollitia eaque voluptas. Aspernatur ratione tempora rem doloremque, pariatur dolorem, perferendis neque aut quod, atque blanditiis accusamus deleniti! Corrupti beatae inventore laudantium iste perspiciatis facilis laboriosam.
                </div>
            </div>
        </>
    )
}

export default About
