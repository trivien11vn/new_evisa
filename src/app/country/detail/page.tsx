'use client'
import { useEffect, useRef, useState } from 'react'
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri'
import { SelectPurpose, SelectCountry, SelectTravel } from '@/components/Select'
import clsx from 'clsx'
import { useRouter } from "next/navigation";
import path from '@/utils/path'
import RecentBlog from '@/components/Blog/RecentBlog';

const japanImage = '/assets/japan_4.jpg'
const flag = '/assets/japan_flag.png'
const image1 = '/assets/japan_1.jpg'
const image2 = '/assets/japan_2.jpg'
const image3 = '/assets/japan_3.jpg'

const CountryDetail = () => {
    const router = useRouter()
    const [imageIndex, setImageIndex] = useState(1)
    const handleNextImage = () => {
        if (imageIndex === 3) {
            setImageIndex(1)
        } else {
            setImageIndex(imageIndex + 1)
        }
    }

    const handlePrevImage = () => {
        if (imageIndex === 1) {
            setImageIndex(3)
        } else {
            setImageIndex(imageIndex - 1)
        }
    }

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
        <div className='my-[24px]  full relative w-full flex flex-col gap-[40px]'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
            <div className='w-main mx-auto h-[40px] flex justify-between items-start'>
                <div className='w-[592px] h-[40px] flex items-center gap-[16px]'>
                    <div onClick={() => { router.push(`/`) }} className='w-[88px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center hover:bg-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Home</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" strokeLinejoin="round" />
                    </svg>
                    <div className='w-[218px] h-[40px] rounded-2xl border border-[#3B7ACC] bg-[#3B7ACC] text-white flex items-center justify-center gap-2'>
                        <span>Country</span>
                        <img src={flag} className='w-[20px] h-[20px] object-cover rounded-full' />
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" strokeLinejoin="round" />
                    </svg>
                    <div onClick={() => { router.push(`/${path.VISA_APPLY}`) }} className='w-[300px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center hover:bg-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>
                        <span className='text-[16px] leading-[28px]'>Get Your Global Evisa Now !</span>
                    </div>
                </div>
            </div>
            <div className='w-main h-[781px] mx-auto relative'>
                <div className="relative w-main h-[781px] bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent">
                    <img
                        className={`w-full h-full absolute transition-opacity duration-500 ${imageIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
                        src={image1}
                        alt="Image 1"
                    />
                    <img
                        className={`w-full h-full absolute transition-opacity duration-500 ${imageIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
                        src={image2}
                        alt="Image 2"
                    />
                    <img
                        className={`w-full h-full absolute transition-opacity duration-500 ${imageIndex === 3 ? 'opacity-100' : 'opacity-0'}`}
                        src={image3}
                        alt="Image 3"
                    />
                </div>


                <div className='absolute top-[52px] left-[55px] flex flex-col'>
                    <span className='uppercase font-extrabold text-[48px] leading-[56px] left-[55px] text-white'>Travel to Japan</span>
                </div>
                <div className='absolute w-[324px] h-[180px] top-[52px] left-[794px] border-2 border-[#FFFCF7] z-[50] flex flex-col items-center justify-center'>
                    <img className='w-full h-full' src={flag} />
                </div>
                <div onClick={() => handlePrevImage()} className='absolute top-[351px] left-[10px] w-[80px] h-[80px] rounded-full border-2 border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition duration-300'>
                    <RiArrowLeftWideFill size={36} />
                </div>
                <div onClick={() => handleNextImage()} className='absolute top-[351px] right-[10px] w-[80px] h-[80px] rounded-full border-2 border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition duration-300'>
                    <RiArrowRightWideFill size={36} />
                </div>

                <div className='w-[96px] h-[4px] absolute bottom-1 left-1/2 transform -translate-x-1/2 flex justify-between'>
                    <div className={clsx('w-[30%]', imageIndex === 1 ? 'bg-white' : 'bg-[#A9A9A9]')}></div>
                    <div className={clsx('w-[30%]', imageIndex === 2 ? 'bg-white' : 'bg-[#A9A9A9]')}></div>
                    <div className={clsx('w-[30%]', imageIndex === 3 ? 'bg-white' : 'bg-[#A9A9A9]')}></div>
                </div>
                <div className='absolute top-[473px] left-[38px] w-[1095px] h-[234px] flex flex-col justify-between'>
                    <div className='flex flex-col gap-1'>
                        <span className='font-extrabold text-[56px] leading-[64px] text-white'>JAPAN</span>
                        <span className='font-extrabold text-[56px] leading-[64px] text-white'>TRAVEL TIPS</span>
                    </div>
                    <span className='text-[#FFFCF7]'>Welcome to Belarus, aWestern European whose owns more than 10 thousand lakes and has about 40% of its land covered by forests. We will provide some of the useful tips for you to enjoy your time spent here! </span>
                </div>
            </div>

            <div className='w-main mx-auto flex gap-[54px] items-end'>
                <div ref={showSelectRef} className='w-[230px] h-[88px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectCountry}>
                    <span className='font-semibold text-[18px] leading-[24px]'>Your Nationality</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                    {showSelectCountry && <SelectCountry />}
                </div>
                <div ref={showSelectTravelRef} className='w-[230px] h-[88px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectTravel}>
                    <span className='font-semibold text-[18px] leading-[24px]'>Travelling to</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                    {showSelectTravel && <SelectTravel />}
                </div>
                <div ref={showSelectPurposeRef} className='w-[230px] h-[88px] flex flex-col gap-2 cursor-pointer relative' onClick={handleShowSelectPurpose}>
                    <span className='font-semibold text-[18px] leading-[24px]'>Purpose</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                    {showSelectPurpose && <SelectPurpose />}
                </div>
                <div onClick={() => { router.push(`/${path.VISA_APPLY}`) }} className='cursor-pointer w-full h-[56px] bg-[#F08921] text-white rounded-lg flex items-center justify-center'>
                    <span className='font-bold text-[16px] leading-[24px]'>APPLY NOW </span>
                </div>
            </div>

            <div className='w-main mx-auto h-[1100px] rounded-md gap-[40px] flex flex-col'>
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
                                <path d="M37.1666 20.0002C37.1666 29.2049 29.7047 36.6668 20.5 36.6668C11.2952 36.6668 3.83331 29.2049 3.83331 20.0002C3.83331 10.7954 11.2952 3.3335 20.5 3.3335C29.7047 3.3335 37.1666 10.7954 37.1666 20.0002Z" fill="#3B7ACC" />
                                <path d="M13.8332 20.0002L18.0577 23.8022C18.7768 24.4494 19.8942 24.3503 20.4882 23.5866L27.1665 15.0002M20.4999 36.6668C29.7046 36.6668 37.1665 29.2049 37.1665 20.0002C37.1665 10.7954 29.7046 3.3335 20.4999 3.3335C11.2951 3.3335 3.83319 10.7954 3.83319 20.0002C3.83319 29.2049 11.2951 36.6668 20.4999 36.6668Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

            <div className='w-main flex flex-col gap-[40px] mx-auto'>
                <div className='flex gap-[96px]'>
                    <div className='w-[595px] flex flex-col gap-[28px]'>
                        <img className='w-full h-[398px]' src={japanImage} />
                        <span className='font-extrabold text-[40px] leading-[52px] text-[#545454] underline'>WELCOME TO LOREM IPSUM DOLOR SIT</span>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /> <br />
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                        <div className='w-[595px] h-[104px] rounded-2xl border border-[#3B7ACC] bg-[#FFFCF7] flex items-center justify-center'>
                            <span className='font-bold text-[20px] leading-[26px] text-[#3B7ACC] uppercase'>{`Check Country's  Required Documents`}</span>
                        </div>
                    </div>
                    <div className='w-[480px] h-[916px] border border-[#5F5348] bg-[#FFFCF7] rounded-2xl relative'>
                        <div className='w-[64px] h-[8px] bg-[#3B7ACC] absolute top-[82px] left-[0.5px]'></div>
                        <div className='w-[302px] h-[52px] flex items-center justify-center absolute top-[43px] left-[89px] font-extrabold text-[40px] leading-[52px] underline'>
                            SCROLL TO
                        </div>
                        <div className='w-[352px] h-[744px] absolute top-[137px] left-[64.5px] flex flex-col gap-[20px]'>
                            <a href="#document-checklist" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                1. Document checklist to enter Japan:
                            </a>
                            <a href="#essential-info" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                2. Essential Japan travel information:
                            </a>
                            <a href="#visa-info" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                3. Visa information for Japan:
                            </a>
                            <a href="#costs-budget" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                4. Costs and budgets:
                            </a>
                            <a href="#transports" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                5. Transports and ways to travel around Japan:
                            </a>
                            <a href="#safety" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                6. Safety in Japan:
                            </a>
                            <a href="#weather" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                7. Weather in Japan:
                            </a>
                            <a href="#top-sites" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                8. Top visiting sites and must-try things:
                            </a>
                            <a href="#local-cuisine" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                9. Local Japanese cuisine to try:
                            </a>
                            <a href="#vaccine-info" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                10. Vaccine information for Japan:
                            </a>
                            <a href="#fun-facts" className='text-[#292941] h-[56px] cursor-pointer hover:underline'>
                                {`11. Japan's fun facts:`}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="document-checklist">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>DOCUMENT CHECKLIST FOR JAPAN </span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="essential-info">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>ESSENTIAL JAPAN TRAVEL INFORMATION</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="visa-info">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>VISA INFORMATION FOR JAPAN</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="costs-budget">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>COSTS AND BUDGETS</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="transports">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>TRANSPORTS AND WAYS TO TRAVEL AROUND JAPAN</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="safety">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>SAFETY IN JAPAN</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="weather">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>WEATHER IN JAPAN</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="top-sites">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>TOP VISITING SITES AND MUST-TRY THINGS IN JAPAN</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="local-cuisine">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>LOCAL JAPANESE CUISINE TO TRY</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="vaccine-info">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>VACCINE INFORMATION FOR JAPAN</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]' id="fun-facts">
                    <span className='font-extrabold text-[40px] leading-[52px] underline'>FUN FACTS ABOUT JAPAN</span>
                    <div>
                        Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                        + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                        + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    </div>
                </div>
                <div className='flex flex-col gap-[40px]'>
                    <span className='font-extrabold text-[40px] leading-[52px]'>RECENT BLOGS</span>
                    <div className='w-full h-[480px] px-8 relative'>
                        <div className='h-[480px] flex justify-between'>
                            <div className='w-[30%] h-full'>
                                <RecentBlog image={image1} title='Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                            </div>
                            <div className='w-[30%] h-full'>
                                <RecentBlog image={image2} title='Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                            </div>
                            <div className='w-[30%] h-full'>
                                <RecentBlog image={image3} title='Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                            </div>
                        </div>
                        <div className='absolute top-1/2 left-[-30px]'>
                            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="28" cy="28" rx="28" ry="28" transform="matrix(-1 8.74228e-08 8.74228e-08 1 56.5 0)" fill="#3B7ACC" />
                                <path d="M30.5 21.4375L26.5 28L30.5 34.5625" stroke="#FFFCF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='absolute top-1/2 right-[-30px]'>
                            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="28" cy="28" rx="28" ry="28" transform="matrix(-1 8.74228e-08 8.74228e-08 1 56.5 0)" fill="#3B7ACC" />
                                <path d="M26.5 34.5625L30.5 28L26.5 21.4375" stroke="#FFFCF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-[342px] mx-auto h-[56px] rounded-lg bg-[#3B7ACC] text-white font-bold text-[16px] leading-6 flex items-center justify-center'>SEE MORE ARTICLES</div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetail