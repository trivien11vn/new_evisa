'use client'
import InputField from '@/components/Input/InputField'
import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const DetailCareer = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='w-full my-[24px] flex flex-col gap-2 relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
            <div className='mx-auto w-main h-[40px] flex items-center gap-[16px]'>
                <div className='w-[88px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center'>Career</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" strokeLinejoin="round" />
                </svg>
                <div className='w-[218px] h-[40px] rounded-2xl bg-[#3B7ACC] text-white flex items-center justify-center'>Android Engineer</div>
            </div>
            <div className='mx-auto w-main flex flex-col gap-[40px] items-center'>
                <span className='font-extrabold text-[56px] leading-[64px]'>ANDROID ENGINEER</span>
                <div className='flex flex-col gap-[16px]'>
                    <span className='font-extrabold text-[28px] leading-[36px]'>JOB DECRIPTRION</span>
                    <div className='w-[64px] h-[8px] bg-[#EFA969]'> </div>
                    <span className='font-normal text-[16px] leading-6'>Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                </div>
                <div className='flex flex-col gap-[16px]'>
                    <span className='font-extrabold text-[28px] leading-[36px]'>RESPONSIBILITIES</span>
                    <div className='w-[64px] h-[8px] bg-[#EFA969]'> </div>
                    <span className='font-normal text-[16px] leading-6'>Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                </div>
                <div className='flex flex-col gap-[16px]'>
                    <span className='font-extrabold text-[28px] leading-[36px]'>REQUIREMENTS</span>
                    <div className='w-[64px] h-[8px] bg-[#EFA969]'> </div>
                    <div className='flex flex-wrap gap-8'>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                        <div className='px-4 py-2 border rounded-lg border-[#7F7F7F]'>Lorem Ipsum</div>
                    </div>
                </div>

                <div className='flex flex-col gap-8 items-center'>
                    <span className='font-extrabold text-[40px] leading-[52px]'>INFORMATION FOR APPLICATION</span>
                    <div className='w-full flex flex-col gap-4 p-4'>
                        <InputField title={'Your Full Name'} />
                        <InputField title={'Your Email'} />
                        <div className='flex flex-col gap-2'>
                            <div className='w-1/2'><InputField title={'Phone Number'} isEmptyAllow={false} /></div>
                            <div className='flex gap-2'>
                                <div className='gap-1 border border-[#7F7F7F] rounded-2xl p-2 flex items-center justify-center'>
                                    <span className='text-[#7F7F7F]'>+84</span>
                                    <IoIosArrowDown color='#7F7F7F' />
                                </div>
                                <div className='flex-1 w-full'>
                                    <input className='outline-none w-full h-[40px] rounded-lg border border-[#7F7F7F] flex items-center px-4 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-[#A9A9A9]' placeholder='Enter Value' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-semibold text-[16px] leading-6'> Your CV</span>
                            <div className='w-full h-[107px] rounded-md bg-[#E5E5E5] flex items-center justify-center border border-[#7F7F7F]'>
                                <span className='font-bold text-[14px] leading-[22px] text-[#545454]'>Drag or Drop your CV here or Browse</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="24" height="24" rx="4" fill="#3B7ACC" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7515 7.36894C19.0081 7.59985 19.0289 7.99504 18.798 8.2516L12.35 15.416C11.5379 16.3184 10.163 16.4309 9.21502 15.6725L6.27634 13.3215C6.0068 13.1059 5.9631 12.7126 6.17873 12.4431C6.39436 12.1735 6.78767 12.1298 7.05721 12.3455L9.99589 14.6964C10.4268 15.0411 11.0517 14.99 11.4209 14.5798L17.8689 7.4154C18.0998 7.15883 18.495 7.13803 18.7515 7.36894Z" fill="white" />
                                </svg>
                                <span>{`I agree to the Terms and Conditions as well as the company's Policies .`}</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-2 w-[380px] mx-auto'>
                            <div className='w-full h-[59px] flex items-center justify-center bg-[#F08921] text-white rounded-2xl font-bold text-[16px] leading-6'>APPLY NOW</div>
                            <span>or</span>
                            <div className='w-full h-[59px] flex items-center justify-center bg-[#F08921] text-white rounded-2xl font-bold text-[16px] leading-6'>SAVE FOR LATER</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <div className='flex flex-col gap-2 '>
                        <span className='font-extrabold text-[40px] leading-[52px] text-[#545454] underline'>RELATED JOB TITLES</span>
                        <div className='w-[72px] border-t-[12px] border-[#3B7ACC] ml-[-36px]'></div>
                    </div>
                    <div className='flex w-main justify-between'>
                        <span className='w-[20%] flex-1 uppercase font-bold text-[20px] leading-[26px] text-[#545454]'>iOS Engineer</span>
                        <span className='w-[20%] flex-1 uppercase font-bold text-[20px] leading-[26px] text-[#545454]'>Backend Engineer</span>
                        <span className='w-[20%] flex-1 uppercase font-bold text-[20px] leading-[26px] text-[#545454]'>Frontend Engineer</span>
                        <span className='w-[20%] flex-1 uppercase font-bold text-[20px] leading-[26px] text-[#545454]'>Java Engineer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCareer