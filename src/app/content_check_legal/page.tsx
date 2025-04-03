'use client'
import clsx from 'clsx'
import { useState } from 'react'

const ContentCheckLegal = () => {
    const [status, setStatus] = useState('')
    return (
        <div className='w-full my-[24px] flex flex-col gap-[40px] relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0 hidden lg:flex'></div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto'>
                <div className='w-full font-extrabold text-[32px] md:text-[48px] lg:text-[56px]'>ELECTRONIC TRAVEL AUTHORIZATION: ABOUT THE PROCESS</div>
            </div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-[40px]'>
                <div className='flex flex-col gap-[20px] justify-between items-center'>
                    <div className='flex flex-col gap-[12px] lg:flex-row w-full lg:gap-[135px]'>
                        <div className='flex-1 flex flex-col gap-4'>
                            <span className='font-semibold text-[18px] leading-[24px]'>Your Nationality</span>
                            <input className='w-full h-[48px] border rounded-md p-2 border-[#7F7F7F]' placeholder='Please Select' />
                        </div>
                        <div className='flex-1 flex flex-col gap-4'>
                            <span className='font-semibold text-[18px] leading-[24px]'>Traveling to</span>
                            <input className='w-full h-[48px] border rounded-md p-2 border-[#7F7F7F]' placeholder='Please Select' />
                        </div>
                        <div className='flex-1 flex flex-col gap-4'>
                            <span className='font-semibold text-[18px] leading-[24px]'>Purpose</span>
                            <input className='w-full h-[48px] border rounded-md p-2 border-[#7F7F7F]' placeholder='Please Select' />
                        </div>
                    </div>
                    <div className='w-full py-4 lg:py-0 rounded-md lg:w-[300px] lg:h-[52px] lg:rounded-2xl bg-[#F08921] flex items-center justify-center'>
                        <span className='font-semibold text-[12px] lg:text-[16px] lg:leading-[72px] text-white'>CHECK</span>
                    </div>
                </div>
                <div className='border border-[#7F7F7F] rounded-md flex flex-col'>
                    <div className='h-[91px] bg-[#3B7ACC] text-white rounded-t-md flex flex-col items-center justify-center'>
                        <span className='font-extrabold text-[24px] leading-[32px]'>LEGAL</span>
                        <span>You are allowed to visit this country</span>
                    </div>
                    <div className='px-8 py-4 flex flex-col gap-[24px]'>
                        <div className='w-full  mx-auto my-[12px] px-[20px] py-[12px] rounded-2xl border border-[#EFA969] bg-[#FFFCF7] flex gap-[25px] items-center'>
                            <svg className='w-[40px] h-[40px] ' viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.6666 20.5002C36.6666 29.7049 29.2047 37.1668 20 37.1668C10.7952 37.1668 3.33331 29.7049 3.33331 20.5002C3.33331 11.2954 10.7952 3.8335 20 3.8335C29.2047 3.8335 36.6666 11.2954 36.6666 20.5002Z" fill="#EFA969" />
                                <path d="M20 13.8335V15.5002M20 19.6668V27.1668M20 37.1668C29.2047 37.1668 36.6666 29.7049 36.6666 20.5002C36.6666 11.2954 29.2047 3.8335 20 3.8335C10.7952 3.8335 3.33331 11.2954 3.33331 20.5002C3.33331 29.7049 10.7952 37.1668 20 37.1668Z" stroke="#EFA969" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.0002 13.8335V15.5002M20.0002 19.6668V27.1668M20.0002 37.1668C29.2049 37.1668 36.6668 29.7049 36.6668 20.5002C36.6668 11.2954 29.2049 3.8335 20.0002 3.8335C10.7954 3.8335 3.3335 11.2954 3.3335 20.5002C3.3335 29.7049 10.7954 37.1668 20.0002 37.1668Z" stroke="#FFFCF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>
                                These below information and documents are the things that you need to bring in order to enter this country.<br />
                                Note*: There are also some other specific requirements for each individual and country.
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[32%] p-8 rounded-2xl border border-[#545454] flex flex-col gap-6 items-center'>
                                <div className='flex justify-center items-center p-1 border border-[#6295D6] rounded-2xl'>
                                    <span className='font-extrabold text-[16px] md:text-[20px] lg:text-[24px] leading-[32px] text-[#2F62A3] text-center'>LOREM IPSUM DOLOR SIT</span>
                                </div>
                                <span className='font-light text-[16px] leading-[24px] text-center'>
                                    Lorem Ipsum Dolor Sit
                                    <br />
                                    Consectetur adipiscing elit
                                </span>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M51.3327 27.9998C51.3327 40.8865 40.886 51.3332 27.9993 51.3332C15.1127 51.3332 4.66602 40.8865 4.66602 27.9998C4.66602 15.1132 15.1127 4.6665 27.9993 4.6665C40.886 4.6665 51.3327 15.1132 51.3327 27.9998Z" fill="#6295D6" />
                                    <path d="M18.666 27.9998L24.5803 33.3227C25.5871 34.2288 27.1514 34.0901 27.983 33.0208L37.3327 20.9998M27.9993 51.3332C40.886 51.3332 51.3327 40.8865 51.3327 27.9998C51.3327 15.1132 40.886 4.6665 27.9993 4.6665C15.1127 4.6665 4.66602 15.1132 4.66602 27.9998C4.66602 40.8865 15.1127 51.3332 27.9993 51.3332Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className='font-light text-[12px] leading-[24px] text-center'>
                                    Lorem Ipsum Dolor Sit
                                    <br />
                                    Consectetur adipiscing elit
                                </span>
                            </div>
                            <div className='w-[32%] p-8 rounded-2xl border border-[#545454] flex flex-col gap-6 items-center'>
                                <div className='flex justify-center items-center p-1 border border-[#545454] rounded-2xl'>
                                    <span className='font-extrabold text-[16px] md:text-[20px] lg:text-[24px] leading-[32px] text-[#272727] text-center'>LOREM IPSUM DOLOR SIT</span>
                                </div>
                                <span className='font-light text-[16px] leading-[24px] text-center'>
                                    Lorem Ipsum Dolor Sit
                                    <br />
                                    Consectetur adipiscing elit
                                </span>
                                <span className='font-bold text-[20px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                                <span className='font-light text-[12px] leading-[24px] text-center'>
                                    Lorem Ipsum Dolor Sit
                                    <br />
                                    Consectetur adipiscing elit
                                </span>
                            </div>
                            <div className='w-[32%] p-8 rounded-2xl border border-[#545454] flex flex-col gap-6 items-center'>
                                <div className='flex justify-center items-center p-1 border border-[#545454] rounded-2xl'>
                                    <span className='font-extrabold text-[16px] md:text-[20px] lg:text-[24px] leading-[32px] text-[#272727] text-center'>LOREM IPSUM DOLOR SIT</span>
                                </div>
                                <span className='font-light text-[16px] leading-[24px] text-center'>
                                    Lorem Ipsum Dolor Sit
                                    <br />
                                    Consectetur adipiscing elit
                                </span>
                                <span className='font-bold text-[20px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                                <span className='font-light text-[12px] leading-[24px] text-center'>
                                    Lorem Ipsum Dolor Sit
                                    <br />
                                    Consectetur adipiscing elit
                                </span>
                            </div>
                        </div>
                        <div className='w-full lg:w-[1068px] mx-auto flex flex-col gap-[12px] text-[#545454]'>
                            <div className='flex flex-col gap-2'>
                                <span className='font-normal text-[16px] leading-[24px]'>How do I get this Visa?</span>
                                <ul className='list-disc pl-5'>
                                    <li>In order to get this Visa, you will need to contact and visit your Local Embassy</li>
                                    <li>iVisa can help by getting you the additional documents below, which make your Embassy visit easier by preparing now.</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-normal text-[16px] leading-[24px]'>Other requirements:</span>
                                <ul className='list-disc pl-5'>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-normal text-[16px] leading-[24px]'>Other things to take note:</span>
                                <ul className='list-disc pl-5'>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[68px] flex justify-between'>
                    <div onClick={() => setStatus('process')} className={clsx('w-[24%] cursor-pointer flex items-center justify-center border-2 border-[#3B7ACC] rounded-2xl transition-all duration-300 ease-in-out', status === 'process' ? 'bg-[#3B7ACC]' : 'hover:bg-[#3B7ACC]')}>
                        <span className={clsx('font-bold text-center text-[10px] md:text-[16px] lg:text-[20px]', status !== 'process' ? 'text-[#2F62A3] hover:text-white' : 'text-white')}>ABOUT THE PROCESS</span>
                    </div>
                    <div onClick={() => setStatus('work')} className={clsx('w-[24%] cursor-pointer flex items-center justify-center border-2 border-[#3B7ACC] rounded-2xl transition-all duration-300 ease-in-out', status === 'work' ? 'bg-[#3B7ACC]' : 'bg-white hover:bg-[#3B7ACC]')}>
                        <span className={clsx('font-bold text-center text-[10px] md:text-[16px] lg:text-[20px]', status !== 'work' ? 'text-[#2F62A3] hover:text-white' : 'text-white')}>HOW IT WORKS?</span>
                    </div>
                    <div onClick={() => setStatus('apply')} className={clsx('w-[24%] cursor-pointer flex items-center justify-center border-2 border-[#3B7ACC] rounded-2xl transition-all duration-300 ease-in-out', status === 'apply' ? 'bg-[#3B7ACC]' : 'bg-white hover:bg-[#3B7ACC]')}>
                        <span className={clsx('font-bold text-center text-[10px] md:text-[16px] lg:text-[20px]', status !== 'apply' ? 'text-[#2F62A3] hover:text-white' : 'text-white')}>HOW TO APPLY</span>
                    </div>
                    <div onClick={() => setStatus('applied')} className={clsx('w-[24%] cursor-pointer flex items-center justify-center border-2 border-[#3B7ACC] rounded-2xl transition-all duration-300 ease-in-out', status === 'applied' ? 'bg-[#3B7ACC]' : 'bg-white hover:bg-[#3B7ACC]')}>
                        <span className={clsx('font-bold text-center text-[10px] md:text-[16px] lg:text-[20px]', status !== 'applied' ? 'text-[#2F62A3] hover:text-white' : 'text-white')}>AFTER APPLIED</span>
                    </div>
                </div>
                {
                    status === 'process' &&
                    <div className='flex flex-col gap-[40px]'>
                        <div className='flex flex-col gap-[16px] '>
                            <span className='font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[52px] underline' style={{ textDecorationThickness: '2px' }}>FREE</span>
                            <div className='w-[64px] h-[8px] bg-[#EFA969]'></div>
                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-montserrat text-[16px] leading-6'>Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :</span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>+ Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                <span className='font-montserrat text-[16px] leading-6'>+ Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.      </span>
                                <span className='font-montserrat text-[16px] leading-6'>+ Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[16px] '>
                            <span className='font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[52px] underline' style={{ textDecorationThickness: '2px' }}>PROCESSING TIME </span>
                            <div className='w-[64px] h-[8px] bg-[#EFA969]'></div>
                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-montserrat text-[16px] leading-6'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :</span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Normal - Within 3 working days:</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Urgent - Within 1 working day:</span>
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Super Urgent -Within 5 working hours:</span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[16px] '>
                            <span className='font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[52px] underline' style={{ textDecorationThickness: '2px' }}>INTRODUCTION ABOUT THE COUNTRY </span>
                            <div className='w-[64px] h-[8px] bg-[#EFA969]'></div>
                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-montserrat text-[16px] leading-6'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :</span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                }
                {
                    status === 'work' &&
                    <div className='flex flex-col gap-[16px] '>
                        <span className='font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[52px] underline' style={{ textDecorationThickness: '2px' }}>INTRODUCTION ABOUT THE PROCESS </span>
                        <div className='w-[64px] h-[8px] bg-[#EFA969]'></div>
                        <div className='flex flex-col gap-[16px]'>
                            <span className='font-montserrat text-[16px] leading-6'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :</span>
                            <span className='font-montserrat text-[16px] leading-6'>
                                <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                            </span>
                            <span className='font-montserrat text-[16px] leading-6'>
                                <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                            </span>
                            <span className='font-montserrat text-[16px] leading-6'>
                                <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </span>
                            <span className='font-montserrat text-[16px] leading-6'>
                                <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                            </span>
                        </div>
                    </div>
                }
                {
                    status === 'apply' &&
                    <div className='flex flex-col gap-[40px]'>
                        <div className='flex flex-col gap-[16px] '>
                            <span className='font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[52px] underline' style={{ textDecorationThickness: '2px' }}>INTRODUCTION ABOUT THE STEPS </span>
                            <div className='w-[64px] h-[8px] bg-[#EFA969]'></div>
                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-montserrat text-[16px] leading-6'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :</span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[16px] '>
                            <span className='font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[52px] underline' style={{ textDecorationThickness: '2px' }}>DOCUMENTS TO APPLY </span>
                            <div className='w-[64px] h-[8px] bg-[#EFA969]'></div>
                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-montserrat text-[16px] leading-6'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :</span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </span>
                                <span className='font-montserrat text-[16px] leading-6'>
                                    <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                }
                {
                    status === 'applied' &&
                    <div className='flex flex-col gap-[16px] '>
                        <span className='font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[52px] underline' style={{ textDecorationThickness: '2px' }}>INTRODUCTION AFTER APPLIED</span>
                        <div className='w-[64px] h-[8px] bg-[#EFA969]'></div>
                        <div className='flex flex-col gap-[16px]'>
                            <span className='font-montserrat text-[16px] leading-6'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :</span>
                            <span className='font-montserrat text-[16px] leading-6'>
                                <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                            </span>
                            <span className='font-montserrat text-[16px] leading-6'>
                                <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                            </span>
                            <span className='font-montserrat text-[16px] leading-6'>
                                <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </span>
                            <span className='font-montserrat text-[16px] leading-6'>
                                <span className='font-bold'>+ Lorem Ipsum Dolor:</span>
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                            </span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ContentCheckLegal