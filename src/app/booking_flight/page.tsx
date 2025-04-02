'use client'
import { FaExchangeAlt } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { LuMoveUpRight } from 'react-icons/lu';
import path from '@/utils/path';
import { useRouter } from "next/navigation";
import InputField from "@/components/Input/InputField";
import PictureImage from "@/components/Picture/PictureImage";

const scenery1 = '/assets/image_13.jpg'
const scenery2 = '/assets/image_1.jpg'
const scenery3 = '/assets/image_12.jpg'
const scenery4 = '/assets/image_14.jpg'
const image4 = '/assets/imge_4.jpg'

const BookFlight = () => {
    const router = useRouter()
    return (
        <div className='w-full my-[24px] flex flex-col gap-8 relative'>
            <div className='w-main mx-auto flex flex-col gap-8'>
                <span className='font-extrabold text-[56px] leading-[64px]'>BOOK YOUR FLIGHT!</span>
                <div className='flex items-center'>
                    <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
                    <span className='font-normal text-[32px] leading-9'>Where do you wanna go?</span>
                </div>
                <div className="w-full bg-[#3B7ACC] flex flex-col items-center gap-8 px-16 py-8">
                    {/* Tab Selection */}
                    <div className="flex gap-16 items-center">
                        <button className="bg-[#F08921] border-2 border-white rounded-xl px-6 py-3 text-white text-lg font-bold">
                            One-way/ Round Trip
                        </button>
                        <button className="bg-white border-2 border-white rounded-xl px-16 py-3 text-[#272727] text-lg font-normal">
                            Multi-city
                        </button>
                    </div>

                    {/* Search Form */}
                    <div className="w-full flex justify-between relative">
                        {/* Location Inputs */}
                        <div className="w-[24%]">
                            <InputField titleColor='#fff' title={'Location 1'} />
                        </div>
                        <div className='border border-[#FFFCF7] absolute top-[60%] left-[23%] transform -translate-y-1/2 cursor-pointer bg-[#F08921] flex items-center justify-center p-2 rounded-md'>
                            <FaExchangeAlt className="text-white" />
                        </div>

                        <div className="w-[24%]">
                            <InputField titleColor='#fff' title={'Location 2'} />
                        </div>

                        {/* Date Inputs */}
                        <div className='w-[24%]'>
                            <InputField titleColor='#fff' title={'Date of Departure'} placeholder='DD/MM/YYYY' />
                        </div>

                        <div className='w-[24%]'>
                            <InputField titleColor='#fff' title={'Round-trip'} placeholder='DD/MM/YYYY' checkbox />
                        </div>
                    </div>

                    <div className='w-full flex justify-between'>
                        <div className='w-[49%]'>
                            <InputField titleColor='#fff' title={'Class of Passenger'} />
                        </div>
                        <div className='w-[49%]'>
                            <InputField titleColor='#fff' title={'Number of Passenger'} />
                        </div>
                    </div>
                    <button onClick={() => { router.push(`/${path.SEARCH_FLIGHT}`) }} className="bg-[#F08921] border-2 border-white rounded-xl px-6 py-2 text-white text-lg font-bold flex gap-8 items-center">
                        <span>SEARCH YOUR FLIGHT</span>
                        <LuMoveUpRight />
                    </button>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-[100px] h-[20px] bg-[#FFA852]'></div>
                        <span className='font-extrabold text-[40px] leading-[52px] underline text-[#272727]'>TOP DESTINATIONS</span>
                        <span className='font-extrabold text-[24px] leading-[32px] text-[#545454]'>BEST LOCATIONS</span>
                    </div>
                    <span className='w-[596px] text-right font-normal text-[16px] leading-[20px] text-[#272727]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
                <div className='flex justify-between h-[690px]'>
                    <div className='w-[38%] h-full flex flex-col justify-between'>
                        <div className='w-full h-[48%] relative'>
                            <img src={scenery2} alt="Image" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent"></div>

                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-all duration-300 ease-in-out"></div>

                            <div className='absolute left-[60px] bottom-[30px] flex flex-col gap-1'>
                                <span className='font-bold text-[18px] leading-[24px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
                                <span className='font-medium text-[14px] leading-6 text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
                            </div>
                        </div>

                        <div className='w-full h-[48%] relative'>
                            <img src={scenery3} alt="Image" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent"></div>

                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-all duration-300 ease-in-out"></div>

                            <div className='absolute left-[60px] bottom-[30px] flex flex-col gap-1'>
                                <span className='font-bold text-[18px] leading-[24px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
                                <span className='font-medium text-[14px] leading-6 text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[60%] h-full">
                        <img src={scenery1} alt="Image" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent"></div>

                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-all duration-300 ease-in-out"></div>

                        <div className='absolute left-[60px] bottom-[30px] flex flex-col gap-1'>
                            <span className='font-bold text-[18px] leading-[24px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
                            <span className='font-medium text-[14px] leading-6 text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2'>
                        <img src={scenery4} className='w-full h-[640px] object-cover' />
                    </div>
                    <div className='w-1/2 flex flex-col gap-4 items-end'>
                        <div className='w-[100px] h-[20px] bg-[#FFA852]'></div>
                        <span className='font-extrabold text-[40px] leading-[52px] underline text-[#272727]'>HOW IT WORKS</span>
                        <span className='font-extrabold text-[24px] leading-[32px] text-[#545454]'>BEST LOCATIONS</span>
                        <div className='flex flex-col gap-[16px] items-end'>
                            <div className='w-[80%] flex gap-[40px] items-start transition-all duration-300 ease-in-out hover:bg-blue-200 hover:p-2 rounded-md'>
                                <div className='min-w-[64px] h-[64px] text-white bg-[#3B7ACC] rounded-lg flex items-center justify-center'>
                                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0001 23.0014L14.0001 21.0014M20.0001 18.3347C20.0001 20.1757 18.5077 21.6681 16.6667 21.6681C14.8258 21.6681 13.3334 20.1757 13.3334 18.3347C13.3334 16.4938 14.8258 15.0014 16.6667 15.0014C18.5077 15.0014 20.0001 16.4938 20.0001 18.3347ZM26.6667 8.33464V9.66797H5.33341V5.66797C5.33341 3.45883 7.12427 1.66797 9.33341 1.66797H12.759C13.6497 1.66797 14.515 1.96528 15.2176 2.51277L16.4715 3.48984C17.1741 4.03733 18.0393 4.33464 18.9301 4.33464H22.6667C24.8759 4.33464 26.6667 6.1255 26.6667 8.33464ZM4.63204 9.66797H27.3681C29.0658 9.66797 30.3313 11.2333 29.9756 12.8934L27.5701 24.1188C27.0432 26.5778 24.8701 28.3346 22.3552 28.3346H9.64496C7.13009 28.3346 4.95695 26.5778 4.43001 24.1188L2.02457 12.8934C1.66885 11.2333 2.93432 9.66797 4.63204 9.66797Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <span className='font-bold text-[20px] leading-[24px]'>Find your destination</span>
                                    <span className='font-normal text-[14px] leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                </div>
                            </div>
                            <div className='w-[80%] flex gap-[40px] items-start transition-all duration-300 ease-in-out hover:bg-blue-200 hover:p-2 rounded-md'>
                                <div className='min-w-[64px] h-[64px] text-white bg-[#3B7ACC] rounded-lg flex items-center justify-center'>
                                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0001 23.0014L14.0001 21.0014M20.0001 18.3347C20.0001 20.1757 18.5077 21.6681 16.6667 21.6681C14.8258 21.6681 13.3334 20.1757 13.3334 18.3347C13.3334 16.4938 14.8258 15.0014 16.6667 15.0014C18.5077 15.0014 20.0001 16.4938 20.0001 18.3347ZM26.6667 8.33464V9.66797H5.33341V5.66797C5.33341 3.45883 7.12427 1.66797 9.33341 1.66797H12.759C13.6497 1.66797 14.515 1.96528 15.2176 2.51277L16.4715 3.48984C17.1741 4.03733 18.0393 4.33464 18.9301 4.33464H22.6667C24.8759 4.33464 26.6667 6.1255 26.6667 8.33464ZM4.63204 9.66797H27.3681C29.0658 9.66797 30.3313 11.2333 29.9756 12.8934L27.5701 24.1188C27.0432 26.5778 24.8701 28.3346 22.3552 28.3346H9.64496C7.13009 28.3346 4.95695 26.5778 4.43001 24.1188L2.02457 12.8934C1.66885 11.2333 2.93432 9.66797 4.63204 9.66797Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <span className='font-bold text-[20px] leading-[24px]'>Book a ticket</span>
                                    <span className='font-normal text-[14px] leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                </div>
                            </div>
                            <div className='w-[80%] flex gap-[40px] items-start transition-all duration-300 ease-in-out hover:bg-blue-200 hover:p-2 rounded-md'>
                                <div className='min-w-[64px] h-[64px] text-white bg-[#3B7ACC] rounded-lg flex items-center justify-center'>
                                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0001 23.0014L14.0001 21.0014M20.0001 18.3347C20.0001 20.1757 18.5077 21.6681 16.6667 21.6681C14.8258 21.6681 13.3334 20.1757 13.3334 18.3347C13.3334 16.4938 14.8258 15.0014 16.6667 15.0014C18.5077 15.0014 20.0001 16.4938 20.0001 18.3347ZM26.6667 8.33464V9.66797H5.33341V5.66797C5.33341 3.45883 7.12427 1.66797 9.33341 1.66797H12.759C13.6497 1.66797 14.515 1.96528 15.2176 2.51277L16.4715 3.48984C17.1741 4.03733 18.0393 4.33464 18.9301 4.33464H22.6667C24.8759 4.33464 26.6667 6.1255 26.6667 8.33464ZM4.63204 9.66797H27.3681C29.0658 9.66797 30.3313 11.2333 29.9756 12.8934L27.5701 24.1188C27.0432 26.5778 24.8701 28.3346 22.3552 28.3346H9.64496C7.13009 28.3346 4.95695 26.5778 4.43001 24.1188L2.02457 12.8934C1.66885 11.2333 2.93432 9.66797 4.63204 9.66797Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <span className='font-bold text-[20px] leading-[24px]'>Make payment</span>
                                    <span className='font-normal text-[14px] leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                </div>
                            </div>
                            <div className='w-[80%] flex gap-[40px] items-start transition-all duration-300 ease-in-out hover:bg-blue-200 hover:p-2 rounded-md'>
                                <div className='min-w-[64px] h-[64px] text-white bg-[#3B7ACC] rounded-lg flex items-center justify-center'>
                                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0001 23.0014L14.0001 21.0014M20.0001 18.3347C20.0001 20.1757 18.5077 21.6681 16.6667 21.6681C14.8258 21.6681 13.3334 20.1757 13.3334 18.3347C13.3334 16.4938 14.8258 15.0014 16.6667 15.0014C18.5077 15.0014 20.0001 16.4938 20.0001 18.3347ZM26.6667 8.33464V9.66797H5.33341V5.66797C5.33341 3.45883 7.12427 1.66797 9.33341 1.66797H12.759C13.6497 1.66797 14.515 1.96528 15.2176 2.51277L16.4715 3.48984C17.1741 4.03733 18.0393 4.33464 18.9301 4.33464H22.6667C24.8759 4.33464 26.6667 6.1255 26.6667 8.33464ZM4.63204 9.66797H27.3681C29.0658 9.66797 30.3313 11.2333 29.9756 12.8934L27.5701 24.1188C27.0432 26.5778 24.8701 28.3346 22.3552 28.3346H9.64496C7.13009 28.3346 4.95695 26.5778 4.43001 24.1188L2.02457 12.8934C1.66885 11.2333 2.93432 9.66797 4.63204 9.66797Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <span className='font-bold text-[20px] leading-[24px]'>Explore destinations</span>
                                    <span className='font-normal text-[14px] leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-[100px] h-[20px] bg-[#FFA852]'></div>
                        <span className='font-extrabold text-[40px] leading-[52px] underline text-[#272727]'>TOUR PACKAGES</span>
                        <span className='font-extrabold text-[24px] leading-[32px] text-[#545454] uppercase'>Our Destination List</span>
                    </div>
                    <span className='w-[596px] text-right font-normal text-[16px] leading-[20px] text-[#272727]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
                <div className='w-full flex justify-between relative'>
                    <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center text-white bg-[#3B7ACC] border border-[#3B7ACC] absolute left-[-90px] top-1/2 hover:bg-white hover:text-[#3B7ACC] cursor-pointer transition-all duration-300 ease-in-out'>
                        <SlArrowLeft />
                    </div>
                    <div className='w-[32%] transition-all transform hover:scale-105 duration-300 ease-in-out cursor-pointer'>
                        <PictureImage image={image4} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'} />
                    </div>
                    <div className='w-[32%] transition-all transform hover:scale-105 duration-300 ease-in-out cursor-pointer'>
                        <PictureImage image={image4} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'} />
                    </div>
                    <div className='w-[32%] transition-all transform hover:scale-105 duration-300 ease-in-out cursor-pointer'>
                        <PictureImage image={image4} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'} />
                    </div>
                    <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center text-white bg-[#3B7ACC] border border-[#3B7ACC] absolute right-[-90px] top-1/2 hover:bg-white hover:text-[#3B7ACC] cursor-pointer transition-all duration-300 ease-in-out'>
                        <SlArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookFlight