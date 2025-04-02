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
        <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
        <div className='w-main mx-auto h-[40px] flex justify-between items-start'>
            <div className='w-[592px] h-[40px] flex items-center gap-[16px]'>
                <div onClick={()=>{router.push(`/`)}} className='w-[88px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center hover:bg-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Home</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" strokeLinejoin="round" />
                </svg>
                <div onClick={()=>{router.push(`/${path.COUNTRY_DETAIL}`)}} className='w-[100px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center hover:bg-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Country</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" strokeLinejoin="round" />
                </svg>
                <div className='w-[300px] h-[40px] rounded-2xl border border-[#3B7ACC] bg-[#3B7ACC] text-white flex items-center justify-center'>
                      <span className='font-bold text-[16px] leading-[28px]'>Get Your Global Evisa Now !</span>
                </div>
            </div>
        </div>
        <div className='w-main mx-auto flex flex-col gap-[40px]'>
            <div className='w-full flex flex-col gap-4'>
                <span className='font-extrabold text-[56px] leading-[64px]'>GET YOUR GLOBAL EVISA NOW!</span>
                <span className='font-normal text-[20px] text-[#272727] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className='flex gap-[54px] items-end'>
                <div ref={showSelectRef} className='w-[230px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectCountry}>
                    <span className='font-semibold text-[18px] leading-[24px]'>Your Nationality</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                    {showSelectCountry && <SelectCountry />}
                </div>
                <div ref={showSelectTravelRef} className='w-[230px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectTravel}>
                    <span className='font-semibold text-[18px] leading-[24px]'>Travelling to</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                    {showSelectTravel && <SelectTravel />}
                </div>
                <div ref={showSelectPurposeRef} className='w-[230px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectPurpose}>
                    <span className='font-semibold text-[18px] leading-[24px]'>Purpose</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                    {showSelectPurpose && <SelectPurpose />}
                </div>
                <div onClick={()=>{router.push(`/${path.FILL_INFO_WEB}`)}} className='cursor-pointer w-full h-[56px] bg-[#F08921] text-white rounded-lg flex items-center justify-center'>
                    <span className='font-bold text-[16px] leading-[24px]'>APPLY NOW </span>
                </div>
            </div>
            <div className='h-[1100px] rounded-md gap-[40px] flex flex-col'>
                <div className='w-full h-[640px] rounded-md border border-[#7F7F7F]'>
                    <div className='w-full h-[91px] bg-[#3B7ACC] flex flex-col items-center justify-center text-white'>
                        <span className='font-extrabold text-[24px] leading-[32px]'>REQUIRED DOCUMENTS</span>
                        <span className='font-normal text-[16px] leading-[24px]'>You need to submit these following paper forms in ottder to enter</span>
                    </div>
                    <div className='w-[1068px] mx-auto my-[12px] px-[20px] py-[12px] h-[81px] rounded-2xl border border-[#3B7ACC] flex gap-[25px] items-center'>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.6666 20.5002C36.6666 29.7049 29.2047 37.1668 20 37.1668C10.7952 37.1668 3.33331 29.7049 3.33331 20.5002C3.33331 11.2954 10.7952 3.8335 20 3.8335C29.2047 3.8335 36.6666 11.2954 36.6666 20.5002Z" fill="#EFA969" />
                            <path d="M20 13.8335V15.5002M20 19.6668V27.1668M20 37.1668C29.2047 37.1668 36.6666 29.7049 36.6666 20.5002C36.6666 11.2954 29.2047 3.8335 20 3.8335C10.7952 3.8335 3.33331 11.2954 3.33331 20.5002C3.33331 29.7049 10.7952 37.1668 20 37.1668Z" stroke="#EFA969" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.0002 13.8335V15.5002M20.0002 19.6668V27.1668M20.0002 37.1668C29.2049 37.1668 36.6668 29.7049 36.6668 20.5002C36.6668 11.2954 29.2049 3.8335 20.0002 3.8335C10.7954 3.8335 3.3335 11.2954 3.3335 20.5002C3.3335 29.7049 10.7954 37.1668 20.0002 37.1668Z" stroke="#FFFCF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                    </div>
                    <div className='w-[1129px] h-[370px] flex gap-[45px] mx-auto justify-center'>
                        <div className='w-[326px] h-[370px] border border-[#545454] rounded-2xl flex flex-col items-center gap-4 justify-center'>
                            <div className='w-[247px] h-[74px] rounded-2xl border border-[#3B7ACC] flex flex-col gap-1 items-center justify-center'>
                                <span className='font-bold text-[20px] leading-[26px] text-[#2F62A3]'>VISA FOR</span>
                                <span className='font-bold text-[20px] leading-[26px] text-[#2F62A3]'>LOREM IPSUM</span>
                            </div>
                            <div className='w-[246px] h-[64px] flex flex-col gap-1 items-center justify-center'>
                                <span className='font-normal text-[16px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                                <span className='font-normal text-[16px] leading-[24px]'>Consectetur adipiscing elit</span>
                            </div>
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.1666 20.0002C37.1666 29.2049 29.7047 36.6668 20.5 36.6668C11.2952 36.6668 3.83331 29.2049 3.83331 20.0002C3.83331 10.7954 11.2952 3.3335 20.5 3.3335C29.7047 3.3335 37.1666 10.7954 37.1666 20.0002Z" fill="#3B7ACC"/>
                                <path d="M13.8332 20.0002L18.0577 23.8022C18.7768 24.4494 19.8942 24.3503 20.4882 23.5866L27.1665 15.0002M20.4999 36.6668C29.7046 36.6668 37.1665 29.2049 37.1665 20.0002C37.1665 10.7954 29.7046 3.3335 20.4999 3.3335C11.2951 3.3335 3.83319 10.7954 3.83319 20.0002C3.83319 29.2049 11.2951 36.6668 20.4999 36.6668Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className='w-[246px] h-[64px] flex flex-col items-center'>
                                <span className='font-light text-[12px] leading-[22px]'>Lorem Ipsum Dolor Sit</span>
                                <span className='font-light text-[12px] leading-[22px]'>Consectetur adipiscing elit</span>
                            </div>

                        </div>
                        <div className='w-[326px] h-[370px] border border-[#545454] rounded-2xl flex flex-col items-center gap-4 justify-center'>
                            <div className='w-[247px] h-[74px] rounded-2xl border border-[#545454] flex flex-col gap-1 items-center justify-center'>
                                <span className='font-bold text-[20px] leading-[26px]'>HEALTH</span>
                                <span className='font-bold text-[20px] leading-[26px]'>DECLARATION</span>
                            </div>
                            <div className='w-[246px] h-[64px] flex flex-col gap-1 items-center justify-center'>
                                <span className='font-normal text-[16px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                                <span className='font-normal text-[16px] leading-[24px]'>Consectetur adipiscing elit</span>
                            </div>
                            <span className='font-semibold text-[20px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                            <div className='w-[246px] h-[64px] flex flex-col items-center'>
                                <span className='font-light text-[12px] leading-[22px]'>Lorem Ipsum Dolor Sit</span>
                                <span className='font-light text-[12px] leading-[22px]'>Consectetur adipiscing elit</span>
                            </div>

                        </div>
                        <div className='w-[326px] h-[370px] border border-[#545454] rounded-2xl flex flex-col items-center gap-4 justify-center'>
                            <div className='w-[247px] h-[74px] rounded-2xl border border-[#545454] flex flex-col gap-1 items-center justify-center'>
                                <span className='font-bold text-[20px] leading-[26px]'>PASSPORT FOR </span>
                                <span className='font-bold text-[20px] leading-[26px]'>LOREM IPUSM</span>
                            </div>
                            <div className='w-[246px] h-[64px] flex flex-col gap-1 items-center justify-center'>
                                <span className='font-normal text-[16px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                                <span className='font-normal text-[16px] leading-[24px]'>Consectetur adipiscing elit</span>
                            </div>
                            <span className='font-semibold text-[20px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                            <div className='w-[246px] h-[64px] flex flex-col items-center'>
                                <span className='font-light text-[12px] leading-[22px]'>Lorem Ipsum Dolor Sit</span>
                                <span className='font-light text-[12px] leading-[22px]'>Consectetur adipiscing elit</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='h-[420px] rounded-md flex flex-col border border-[#7F7F7F]'>
                    <div className='h-[91px] rounded-t-md border border-[#3B7ACC] flex flex-col gap-1 items-center justify-center'>
                        <span className='text-[#2F62A3] font-extrabold text-[24px] leading-[32px]'>NOTES</span>
                        <span>Other Notices To Know</span>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <div className='w-[1046px] mx-auto my-[12px] px-[20px] py-[12px] h-[81px] rounded-2xl border border-[#EFA969] flex gap-[25px] items-center'>
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.6666 20.5002C36.6666 29.7049 29.2047 37.1668 20 37.1668C10.7952 37.1668 3.33331 29.7049 3.33331 20.5002C3.33331 11.2954 10.7952 3.8335 20 3.8335C29.2047 3.8335 36.6666 11.2954 36.6666 20.5002Z" fill="#EFA969" />
                                <path d="M20 13.8335V15.5002M20 19.6668V27.1668M20 37.1668C29.2047 37.1668 36.6666 29.7049 36.6666 20.5002C36.6666 11.2954 29.2047 3.8335 20 3.8335C10.7952 3.8335 3.33331 11.2954 3.33331 20.5002C3.33331 29.7049 10.7952 37.1668 20 37.1668Z" stroke="#EFA969" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.0002 13.8335V15.5002M20.0002 19.6668V27.1668M20.0002 37.1668C29.2049 37.1668 36.6668 29.7049 36.6668 20.5002C36.6668 11.2954 29.2049 3.8335 20.0002 3.8335C10.7954 3.8335 3.3335 11.2954 3.3335 20.5002C3.3335 29.7049 10.7954 37.1668 20.0002 37.1668Z" stroke="#FFFCF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </div>
                        <div className='w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div className='w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                        <div className='w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    
                    </div>
                </div>
            </div>
            <div className='w-main mx-auto flex flex-col gap-[80px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>HOW TO APPLY</span>
                <div className='flex flex-col gap-[40px] justify-center'>
                    <div className='w-[1172px] h-[576px] flex gap-[68px]'>
                        <div className='w-[345px] h-[480px] p-6 flex flex-col gap-[36px] items-center border border-[#F08921] bg-[#FFFCF7] rounded-2xl'>
                            <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px] uppercase'>Step 1: Lorem Ipsum Dolor Sit Amet</span>
                            <div className='w-[160px] h-[160px] rounded-full bg-[#6295D6] text-white flex items-center justify-center'>
                                <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                    <img src={item1}/>
                                </div>
                            </div>
                            <span className='text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </div>
                        <div className='w-[345px] h-[480px] p-6 flex flex-col gap-[36px] items-center border border-[#F08921] bg-[#FFFCF7] rounded-2xl'>
                            <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px] uppercase'>Step 2: Lorem Ipsum Dolor Sit Amet</span>
                            <div className='w-[160px] h-[160px] rounded-full bg-[#6295D6] text-white flex items-center justify-center'>
                                <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                    <img src={item2}/>
                                </div>
                            </div>
                            <span className='text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </div>
                        <div className='w-[345px] h-[480px] p-6 flex flex-col gap-[36px] items-center border border-[#F08921] bg-[#FFFCF7] rounded-2xl'>
                            <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px] uppercase'>Step 1: Lorem Ipsum Dolor Sit Amet</span>
                            <div className='w-[160px] h-[160px] rounded-full bg-[#6295D6] text-white flex items-center justify-center'>
                            <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                    <img src={item3}/>
                                </div>
                            </div>
                            <span className='text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </div>
                    </div>
                    <div onClick={()=>{router.push(`/${path.FILL_INFO_WEB}`)}} className='cursor-pointer w-[300px] h-[56px] mx-auto bg-[#F08921] rounded-lg flex items-center justify-center text-white'>
                        <span className='font-bold text-[16px] leading-[24px]'>APPLY NOW</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisaApply