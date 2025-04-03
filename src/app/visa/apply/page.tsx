'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from "next/navigation";

import path from '@/utils/path'
import { SelectCountry, SelectTravel, SelectPurpose } from '@/components/Select'

const item1 = '/assets/item1.svg'
const item2 = '/assets/item2.svg'
const item3 = '/assets/item3.svg'
const VisaApply = () => {
    const router = useRouter();
    const [showSelectCountry, setShowSelectCountry] = useState(false)

    const [showSelectTravel, setShowSelectTravel] = useState(false)

    const [showSelectPurpose, setShowSelectPurpose] = useState(false)

    const showSelectRef = useRef(null)
    const showSelectTravelRef = useRef(null)
    const showSelectPurposeRef = useRef(null)

    const handleClickOutside = (event) => {
        if (showSelectRef.current && !showSelectRef.current.contains(event.target)) {
            setShowSelectCountry(false); // Ẩn SelectCountry khi click ra ngoài
        }
    };

    // Đăng ký và hủy bỏ sự kiện khi component được mount/unmount
    useEffect(() => {
        document.addEventListener('click', handleClickOutside); // Thêm sự kiện click toàn cục

        // Cleanup khi component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutsideTravel = (event) => {
        if (showSelectTravelRef.current && !showSelectTravelRef.current.contains(event.target)) {
            setShowSelectTravel(false); // Ẩn SelectCountry khi click ra ngoài
        }
    };

    // Đăng ký và hủy bỏ sự kiện khi component được mount/unmount
    useEffect(() => {
        document.addEventListener('click', handleClickOutsideTravel); // Thêm sự kiện click toàn cục

        // Cleanup khi component unmount
        return () => {
            document.removeEventListener('click', handleClickOutsideTravel);
        };
    }, []);


    const handleClickOutsidePurpose = (event) => {
        if (showSelectPurposeRef.current && !showSelectPurposeRef.current.contains(event.target)) {
            setShowSelectPurpose(false); // Ẩn SelectCountry khi click ra ngoài
        }
    };

    // Đăng ký và hủy bỏ sự kiện khi component được mount/unmount
    useEffect(() => {
        document.addEventListener('click', handleClickOutsidePurpose); // Thêm sự kiện click toàn cục

        // Cleanup khi component unmount
        return () => {
            document.removeEventListener('click', handleClickOutsidePurpose);
        };
    }, []);


    const handleShowSelectCountry = () => {
        setShowSelectCountry(true)
    }

    const handleShowSelectTravel = () => {
        setShowSelectTravel(true)
    }

    const handleShowSelectPurpose = () => {
        setShowSelectPurpose(true)
    }
    return (
        <div className='my-[24px] full relative w-full flex flex-col gap-[40px]'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0 hidden xl:flex'></div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto h-[40px] flex justify-between items-start'>
                <div className='w-full lg:w-[592px] lg:h-[40px] flex overflow-x-auto items-center gap-[8px] md:gap-[12px] lg:gap-[16px]'>
                    <div onClick={() => { router.push(`/`) }} className='px-2 py-1 lg:p-0 lg:w-[88px] lg:h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center hover:bg-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out cursor-pointer text-sm lg:text-lg'>Home</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" strokeLinejoin="round" />
                    </svg>
                    <div onClick={() => { router.push(`/${path.COUNTRY_DETAIL}`) }} className='px-2 py-1 lg:p-0 lg:w-[100px] lg:h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center hover:bg-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out cursor-pointer text-sm lg:text-lg'>Country</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" strokeLinejoin="round" />
                    </svg>
                    <div className='px-2 py-1 lg:p-0 lg:w-[300px] lg:h-[40px] rounded-2xl border border-[#3B7ACC] bg-[#3B7ACC] text-white flex items-center justify-center'>
                        <span className='font-bold text-sm lg:text-[16px]'>Get Your Global Evisa Now !</span>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-[40px]'>
                <div className='w-full flex flex-col gap-4'>
                    <span className='font-extrabold text-[32px] md:text-[48px] lg:text-[56px]'>GET YOUR GLOBAL EVISA NOW!</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className='flex flex-col gap-[12px] lg:flex-row lg:gap-[54px] lg:items-end'>
                    <div ref={showSelectRef} className='w-full lg:w-[230px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectCountry}>
                        <span className='font-semibold text-[18px] leading-[24px]'>Your Nationality</span>
                        <div className='w-full lg:w-[230px] lg:h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                        {showSelectCountry && <SelectCountry />}
                    </div>
                    <div ref={showSelectTravelRef} className='w-full lg:w-[230px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectTravel}>
                        <span className='font-semibold text-[18px] leading-[24px]'>Travelling to</span>
                        <div className='w-full lg:w-[230px] lg:h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                        {showSelectTravel && <SelectTravel />}
                    </div>
                    <div ref={showSelectPurposeRef} className='w-full lg:w-[230px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectPurpose}>
                        <span className='font-semibold text-[18px] leading-[24px]'>Purpose</span>
                        <div className='w-full lg:w-[230px] lg:h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                        {showSelectPurpose && <SelectPurpose />}
                    </div>
                    <div onClick={() => { router.push(`/${path.FILL_INFO_WEB}`) }} className='cursor-pointer w-full py-2 lg:py-0 lg:h-[56px] bg-[#F08921] text-white rounded-lg flex items-center justify-center'>
                        <span className='font-bold text-[16px] lg:leading-[24px]'>APPLY NOW </span>
                    </div>
                </div>
                <div className='rounded-md gap-[40px] flex flex-col'>
                    <div className='w-full rounded-md border border-[#7F7F7F]'>
                        <div className='w-full h-[91px] bg-[#3B7ACC] flex flex-col items-center justify-center text-white'>
                            <span className='font-extrabold text-[16px] md:text-[20px] lg:text-[24px]'>REQUIRED DOCUMENTS</span>
                            <span className='font-normal text-center text-[12px] lg:text-[16px]'>You need to submit these following paper forms in ottder to enter</span>
                        </div>
                        <div className="px-8 py-4 flex flex-col gap-[24px]">
                            <div className='w-full mx-auto my-[12px] px-[20px] py-[12px] rounded-2xl border border-[#3B7ACC] flex gap-[25px] items-center'>
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.6666 20.5002C36.6666 29.7049 29.2047 37.1668 20 37.1668C10.7952 37.1668 3.33331 29.7049 3.33331 20.5002C3.33331 11.2954 10.7952 3.8335 20 3.8335C29.2047 3.8335 36.6666 11.2954 36.6666 20.5002Z" fill="#EFA969" />
                                    <path d="M20 13.8335V15.5002M20 19.6668V27.1668M20 37.1668C29.2047 37.1668 36.6666 29.7049 36.6666 20.5002C36.6666 11.2954 29.2047 3.8335 20 3.8335C10.7952 3.8335 3.33331 11.2954 3.33331 20.5002C3.33331 29.7049 10.7952 37.1668 20 37.1668Z" stroke="#EFA969" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.0002 13.8335V15.5002M20.0002 19.6668V27.1668M20.0002 37.1668C29.2049 37.1668 36.6668 29.7049 36.6668 20.5002C36.6668 11.2954 29.2049 3.8335 20.0002 3.8335C10.7954 3.8335 3.3335 11.2954 3.3335 20.5002C3.3335 29.7049 10.7954 37.1668 20.0002 37.1668Z" stroke="#FFFCF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className='text-center text-[12px] lg:text-[16px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                        </div>
                    </div>
                    <div className='rounded-md flex flex-col border border-[#7F7F7F]'>
                        <div className='rounded-t-md border border-[#3B7ACC] flex flex-col gap-1 items-center justify-center'>
                            <span className='text-[#2F62A3] font-extrabold text-[24px] leading-[32px]'>NOTES</span>
                            <span>Other Notices To Know</span>
                        </div>
                        <div className='flex-1 flex flex-col gap-2 px-8 py-4'>
                            <div className='w-full mx-auto my-[12px] px-[20px] py-[12px] rounded-2xl border border-[#EFA969] bg-[#FFFCF7] flex gap-[25px] items-center'>
                                <svg className='w-[40px] h-[40px] ' viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.6666 20.5002C36.6666 29.7049 29.2047 37.1668 20 37.1668C10.7952 37.1668 3.33331 29.7049 3.33331 20.5002C3.33331 11.2954 10.7952 3.8335 20 3.8335C29.2047 3.8335 36.6666 11.2954 36.6666 20.5002Z" fill="#EFA969" />
                                    <path d="M20 13.8335V15.5002M20 19.6668V27.1668M20 37.1668C29.2047 37.1668 36.6666 29.7049 36.6666 20.5002C36.6666 11.2954 29.2047 3.8335 20 3.8335C10.7952 3.8335 3.33331 11.2954 3.33331 20.5002C3.33331 29.7049 10.7952 37.1668 20 37.1668Z" stroke="#EFA969" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.0002 13.8335V15.5002M20.0002 19.6668V27.1668M20.0002 37.1668C29.2049 37.1668 36.6668 29.7049 36.6668 20.5002C36.6668 11.2954 29.2049 3.8335 20.0002 3.8335C10.7954 3.8335 3.3335 11.2954 3.3335 20.5002C3.3335 29.7049 10.7954 37.1668 20.0002 37.1668Z" stroke="#FFFCF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </span>
                            </div>
                            <div className='text-center lg:text-left lg:w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className='text-center lg:text-left lg:w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            <div className='text-center lg:text-left lg:w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-[24px] lg:gap-[80px]'>
                    <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] underline'>HOW TO APPLY</span>
                    <div className='flex flex-col gap-[40px] justify-center'>
                        <div className='w-full lg:w-[1172px] flex overflow-x-auto gap-[12px] lg:gap-[68px]'>
                            <div className='w-full lg:w-[345px] p-6 flex flex-col gap-[36px] items-center border border-[#F08921] bg-[#FFFCF7] rounded-2xl'>
                                <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px] uppercase'>Step 1: Lorem Ipsum Dolor Sit Amet</span>
                                <div className='w-[160px] h-[160px] rounded-full bg-[#6295D6] text-white flex items-center justify-center'>
                                    <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                        <img src={item1} />
                                    </div>
                                </div>
                                <span className='text-justify'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </span>
                            </div>
                            <div className='w-full lg:w-[345px] h-[480px] p-6 flex flex-col gap-[36px] items-center border border-[#F08921] bg-[#FFFCF7] rounded-2xl'>
                                <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px] uppercase'>Step 2: Lorem Ipsum Dolor Sit Amet</span>
                                <div className='w-[160px] h-[160px] rounded-full bg-[#6295D6] text-white flex items-center justify-center'>
                                    <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                        <img src={item2} />
                                    </div>
                                </div>
                                <span className='text-justify'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </span>
                            </div>
                            <div className='w-full lg:w-[345px] h-[480px] p-6 flex flex-col gap-[36px] items-center border border-[#F08921] bg-[#FFFCF7] rounded-2xl'>
                                <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px] uppercase'>Step 1: Lorem Ipsum Dolor Sit Amet</span>
                                <div className='w-[160px] h-[160px] rounded-full bg-[#6295D6] text-white flex items-center justify-center'>
                                    <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                        <img src={item3} />
                                    </div>
                                </div>
                                <span className='text-justify'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </span>
                            </div>
                        </div>
                        <div onClick={() => { router.push(`/${path.FILL_INFO_WEB}`) }} className='cursor-pointer w-[300px] h-[56px] mx-auto bg-[#F08921] rounded-lg flex items-center justify-center text-white'>
                            <span className='font-bold text-[16px] leading-[24px]'>APPLY NOW</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisaApply