'use client'
import { LuMapPin } from "react-icons/lu";
import { BiPhoneCall } from "react-icons/bi";
import { SlPhone } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";

const map = '/assets/map.svg'

const ContactUs = () => {
    return (
        <div className='w-full my-[24px] flex flex-col gap-2 relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
            <div className='w-main mx-auto flex flex-col gap-8'>
                <div className='flex items-center'>
                    <div className='w-[860px] font-extrabold text-[56px] leading-[64px]'>CONTACT US</div>
                </div>
                <div className='w-main flex gap-[96px]'>
                    <div className='w-[596px] flex flex-col gap-[40px]'>
                        <div className='flex flex-col gap-[24px]'>
                            <span className='font-extrabold text-[40px] leading-[52px] underline'>LET'S TALK</span>
                            <span className='font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <span className='font-semibold text-[16px] leading-[24px]'>Your Full Name</span>
                            <div className='w-full h-[40px] rounded-lg border border-[#7F7F7F] flex items-center px-4'>
                                <span className='font-normal text-[14px] leading-[20px] text-[#A9A9A9]'>Enter Input</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <span className='font-semibold text-[16px] leading-[24px]'>Your Email</span>
                            <div className='w-full h-[40px] rounded-lg border border-[#7F7F7F] flex items-center px-4'>
                                <span className='font-normal text-[14px] leading-[20px] text-[#A9A9A9]'>Enter Input</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <span className='font-semibold text-[16px] leading-[24px]'>Your Message</span>
                            <div className='w-full h-[160px] rounded-lg border border-[#7F7F7F] flex py-2 px-4'>
                                <textarea className='w-full h-full font-normal text-[14px] leading-[20px] text-[#A9A9A9] border-none resize-none outline-none' placeholder='Enter Input'></textarea>
                            </div>
                        </div>
                        <div className='w-full h-[52px] rounded-2xl flex items-center justify-center border border-transparent bg-[#3B7ACC] text-white hover:bg-white hover:text-[#3B7ACC] hover:border-[#3B7ACC] cursor-pointer transition-all duration-300 ease-in-out'>
                            Send Message
                        </div>
                    </div>
                    <div className='w-[480px] flex flex-col gap-[16px]'>
                        <img className='cursor-pointer' onClick={()=>{window.location.href = 'https://www.google.com/maps/place/40+Thi%C3%AAn+Ph%C6%B0%E1%BB%9Bc,+Ph%C6%B0%E1%BB%9Dng+9,+T%C3%A2n+B%C3%ACnh,+H%E1%BB%93+Ch%C3%AD+Minh/@10.7774956,106.6548317,19z/data=!3m1!4b1!4m6!3m5!1s0x31752eb8e133f271:0xb80bdd892535dd1f!8m2!3d10.7774956!4d106.6548317!16s%2Fg%2F11k9mygtcd?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D';}} src={map} alt='map' />
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex justify-between items-start'>
                                <LuMapPin size={20} color='#28303F'/>
                                <div className='w-[424px] '>
                                    <span className='font-normal text-[14px] leading-6 text-[#272727]'>Address:  No. 123, Street Lorem Ipsum, Ward Lorem Ipsum, District Lorem Ipsum, Lorem Ipsum Country</span>
                                </div>
                            </div>
                            <div className='flex justify-between items-start'>
                                <BiPhoneCall size={20} color='#28303F' />
                                <div className='w-[424px] '>
                                    <span className='font-normal text-[14px] leading-6 text-[#272727]'>Hotline:<br />
                                        (+84) 123-456-789</span>
                                </div>
                            </div>
                            <div className='flex justify-between items-start'>
                                <SlPhone size={20} color='#28303F' />
                                <div className='w-[424px] '>
                                    <span className='font-normal text-[14px] leading-6 text-[#272727]'>Telephone:<br />
                                        (+84) 123-456-789
                                    </span>
                                </div>
                            </div>
                            <div className='flex justify-between items-start'>
                                <HiOutlineMail size={20} color='#28303F' />
                                <div className='w-[424px] '>
                                    <span className='font-normal text-[14px] leading-6 text-[#272727]'>Email:<br />
                                        loremipsum@gmail.com
                                    </span>
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