'use client'
import { LuMapPin } from "react-icons/lu";
import { BiPhoneCall } from "react-icons/bi";
import { SlPhone } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import Image from 'next/image';

const ContactUs = () => {
    return (
        <div className='w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative'>
            {/* Orange accent bar */}
            <div className='w-16 h-4 md:h-5 bg-[#F08921] absolute left-4 sm:left-6 lg:left-8 top-8 md:top-12 lg:top-16'></div>
            
            <div className='max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16'>
                {/* Heading */}
                <div className='flex items-center mt-8 md:mt-12'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight'>
                        CONTACT US
                    </h1>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16'>
                    {/* Contact Form */}
                    <div className='w-full lg:w-1/2 flex flex-col gap-6 md:gap-8'>
                        <div className='flex flex-col gap-4 md:gap-6'>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold underline'>
                                {`LET'S TALK`}
                            </h2>
                            <p className='text-base md:text-lg text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        {/* Form Fields */}
                        <div className='flex flex-col gap-4 md:gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-base md:text-lg'>Your Full Name</label>
                                <input 
                                    className='w-full h-10 md:h-12 rounded-lg border border-gray-400 px-4 focus:outline-none focus:ring-2 focus:ring-[#3B7ACC]'
                                    placeholder='Enter your name'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-base md:text-lg'>Your Email</label>
                                <input 
                                    className='w-full h-10 md:h-12 rounded-lg border border-gray-400 px-4 focus:outline-none focus:ring-2 focus:ring-[#3B7ACC]'
                                    placeholder='Enter your email'
                                    type='email'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-base md:text-lg'>Your Message</label>
                                <textarea 
                                    className='w-full h-32 md:h-40 rounded-lg border border-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-[#3B7ACC] resize-none'
                                    placeholder='Enter your message'
                                />
                            </div>

                            <button className='w-full h-12 md:h-14 rounded-2xl flex items-center justify-center border border-transparent bg-[#3B7ACC] text-white hover:bg-white hover:text-[#3B7ACC] hover:border-[#3B7ACC] cursor-pointer transition-all duration-300 ease-in-out text-base md:text-lg font-medium'>
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className='w-full lg:w-1/2 flex flex-col gap-6 md:gap-8'>
                        {/* Map - Using Next.js Image for optimization */}
                        <div className='w-full h-48 sm:h-64 md:h-80 lg:h-96 relative cursor-pointer' onClick={() => {
                            window.location.href = 'https://www.google.com/maps/place/40+Thi%C3%AAn+Ph%C6%B0%E1%BB%9Bc,+Ph%C6%B0%E1%BB%9Dng+9,+T%C3%A2n+B%C3%ACnh,+H%E1%BB%93+Ch%C3%AD+Minh/@10.7774956,106.6548317,19z/data=!3m1!4b1!4m6!3m5!1s0x31752eb8e133f271:0xb80bdd892535dd1f!8m2!3d10.7774956!4d106.6548317!16s%2Fg%2F11k9mygtcd?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D';
                        }}>
                            <Image 
                                src='/assets/map.svg' 
                                alt='map' 
                                fill
                                className='object-cover rounded-lg'
                            />
                        </div>

                        {/* Contact Details */}
                        <div className='flex flex-col gap-4 md:gap-6'>
                            <div className='flex gap-4 items-start'>
                                <LuMapPin size={24} color='#28303F' className='mt-1 flex-shrink-0'/>
                                <div>
                                    <p className='text-base md:text-lg text-gray-800'>
                                        <span className='font-semibold'>Address:</span> No. 123, Street Lorem Ipsum, Ward Lorem Ipsum, District Lorem Ipsum, Lorem Ipsum Country
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <BiPhoneCall size={24} color='#28303F' className='mt-1 flex-shrink-0'/>
                                <div>
                                    <p className='text-base md:text-lg text-gray-800'>
                                        <span className='font-semibold'>Hotline:</span> (+84) 123-456-789
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <SlPhone size={24} color='#28303F' className='mt-1 flex-shrink-0'/>
                                <div>
                                    <p className='text-base md:text-lg text-gray-800'>
                                        <span className='font-semibold'>Telephone:</span> (+84) 123-456-789
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <HiOutlineMail size={24} color='#28303F' className='mt-1 flex-shrink-0'/>
                                <div>
                                    <p className='text-base md:text-lg text-gray-800'>
                                        <span className='font-semibold'>Email:</span> loremipsum@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs