'use client'
import { useRef, useState } from 'react'
import InputField from '@/components/Input/InputField';

import { FaExchangeAlt, FaLongArrowAltRight } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa6';
import { IoCloseCircle } from "react-icons/io5";

const airAsia = '/assets/air_asia.png'
const airCanada = '/assets/air_canada.svg'
const airBamBoo = '/assets/airBamBoo.png'
const vietnamAir = '/assets/vietnamAir.png'
const vietjetAir = '/assets/vietjetAir.png'
const unitedAir = '/assets/unitedAir.svg'
const singaporeAir = '/assets/singoporeAir.png'
const japanAir = '/assets/japanAir.png'


const SearchFlight = () => {
    const [value, setValue] = useState(50);
    const [value1] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [isDragging1, setIsDragging1] = useState(false);
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const sliderRef1 = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
            const slider = sliderRef.current;
            if (!slider) return;

            const rect = slider.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const newValue = Math.min(Math.max(0, (offsetX / rect.width) * 100), 100);
            setValue(newValue);
        }
    };

    const handleMouseDown = () => {
        setIsDragging(true); // Bắt đầu kéo
    };

    const handleMouseUp = () => {
        setIsDragging(false); // Dừng kéo khi thả chuột
    };

    const handleMouseMove1 = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging1) {
            const slider = sliderRef1.current;
            if (!slider) return;

            const rect = slider.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const newValue = Math.min(Math.max(0, (offsetX / rect.width) * 100), 100);
            setValue(newValue);
        }
    };

    const handleMouseDown1 = () => {
        setIsDragging1(true); // Bắt đầu kéo
    };

    const handleMouseUp1 = () => {
        setIsDragging1(false); // Dừng kéo khi thả chuột
    };
    return (
        <div className='w-full my-[24px] flex flex-col gap-8 relative'>
            <div className='w-full p-4 xl:w-main xl:p-0 mx-auto flex flex-col gap-8'>
                <div className='flex items-end'>
                    <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0 hidden xl:flex'></div>
                    <span className='font-extrabold text-[32px] md:text-[48px] lg:text-[56px]'>SEARCH YOUR FLIGHT!</span>
                </div>
                <div className="w-full bg-[#3B7ACC] flex flex-col items-center gap-8 px-16 py-8">
                    {/* Tab Selection */}
                    <div className="flex gap-[12px] lg:gap-16 items-center">
                        <button className="bg-[#F08921] border-2 border-white rounded-xl px-6 py-3 text-white text-sm md:text-md lg:text-lg font-bold">
                            One-way/ Round Trip
                        </button>
                        <button className="bg-white border-2 border-white rounded-xl px-6 py-3 lg:px-16 lg:py-3 text-[#272727] text-sm md:text-md lg:text-lg font-normal">
                            Multi-city
                        </button>
                    </div>

                    {/* Search Form */}
                    <div className="w-full flex flex-col lg:flex-row gap-[12px] lg:justify-between relative">
                        {/* Location Inputs */}
                        <div className="w-full lg:w-[24%]">
                            <InputField titleColor='#fff' title={'Location 1'} />
                        </div>
                        <div className='hidden lg:flex border border-[#FFFCF7] absolute top-[60%] left-[23%] transform -translate-y-1/2 cursor-pointer bg-[#F08921] items-center justify-center p-2 rounded-md'>
                            <FaExchangeAlt className="text-white" />
                        </div>
                        <div className="w-full lg:w-[24%]">
                            <InputField titleColor='#fff' title={'Location 2'} />
                        </div>

                        {/* Date Inputs */}
                        <div className='w-full lg:w-[24%]'>
                            <InputField titleColor='#fff' title={'Date of Departure'} placeholder='DD/MM/YYYY' />
                        </div>

                        <div className='w-full lg:w-[24%]'>
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
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-[18%] py-2 px-2 lg:px-0 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[90%]'>
                        <span className='font-semibold text-[10px] md:text-[12px] lg:text-[16px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[8px] md:text-[10px] lg:text-[12px]'>From 000,000,000 Currency</span>
                    </div>
                    <div className='w-[18%] py-2 px-2 lg:px-0 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[90%]'>
                        <span className='font-semibold text-[10px] md:text-[12px] lg:text-[16px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[8px] md:text-[10px] lg:text-[12px]'>From 000,000,000 Currency</span>
                    </div>
                    <div className='w-[18%] py-2 px-2 lg:px-0 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[130%] shadow-xl shadow-blue-300'>
                        <span className='font-semibold text-[10px] md:text-[12px] lg:text-[16px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[8px] md:text-[10px] lg:text-[12px]'>From 000,000,000 Currency</span>
                    </div>
                    <div className='w-[18%] py-2 px-2 lg:px-0 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[90%]'>
                        <span className='font-semibold text-[10px] md:text-[12px] lg:text-[16px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[8px] md:text-[10px] lg:text-[12px]'>From 000,000,000 Currency</span>
                    </div>
                    <div className='w-[18%] py-2 px-2 lg:px-0 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[90%]'>
                        <span className='font-semibold text-[10px] md:text-[12px] lg:text-[16px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[8px] md:text-[10px] lg:text-[12px]'>From 000,000,000 Currency</span>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='w-[25%] flex flex-col gap-8'>
                        <div className='flex flex-col items-center rounded-xl border border-[#A9A9A9] relative gap-[16px] p-1 md:p-2 lg:p-4'>
                            <div className='hidden lg:flex lg:w-[60px] lg:h-[8px] md:w-[40px] md:h-[6px] absolute top-[45px] left-0 bg-[#F08921]'></div>
                            <span className='text-center w-full lg:w-1/4 font-extrabold text-[12px] md:text-[20px] lg:text-[28px]'>YOUR FLIGHT</span>
                            <div onClick={() => setOpen1(true)} className='cursor-pointer w-full border border-[#6295D6] rounded-xl p-1 md:p-2 lg:p-4 flex flex-wrap gap-1 md:gap-2 lg:gap-4'>
                                <div className='w-[20px] h-[20px] md:w-[28px] md:h-[28px] lg:w-[40px] lg:h-[40px] rounded-full bg-[#3B7ACC] text-white flex items-center justify-center'>
                                    <span className='font-bold text-[12px] md:text-[16px] ld:text-[20px]'>1</span>
                                </div>
                                <div className='w-full flex flex-col gap-2 justify-start'>
                                    <span className='text-[#2F62A3] font-bold text-[8px] md:text-[10px] lg:text-[14px]'>Wed, 06 Dec, 2023</span>
                                    <div className='flex gap-1 items-center font-montserrat'>
                                        <span className='font-bold text-[8px] md:text-[10px] lg:text-[14px]'>TP HCM</span>
                                        <FaLongArrowAltRight />
                                        <span className='font-bold text-[8px] md:text-[10px] lg:text-[14px]'>Singapore</span>
                                    </div>
                                </div>
                                {
                                    open1 &&
                                    <div className='w-full flex flex-col gap-[16px]'>
                                        <div className='w-full flex justify-between items-center'>
                                            <img src={airBamBoo} className='w-[30%] h-[24px] object-contain' />
                                            <span className='w-[50%] font-bold text-[12px] leading-7 text-[#545454]'>Bamboo Airlines</span>
                                            <svg onClick={(e) => { e.stopPropagation(); setOpen1(false) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="11.5" transform="rotate(90 12 12)" fill="white" stroke="#6295D6" />
                                                <path d="M13.759 14.5L10.241 14.5C9.46925 14.5 8.98837 13.6628 9.37726 12.9961L11.1362 9.98076C11.5221 9.31926 12.4779 9.31926 12.8638 9.98076L14.6227 12.9961C15.0116 13.6628 14.5308 14.5 13.759 14.5Z" fill="#3B7ACC" stroke="#6295D6" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className='flex gap-[8px]'>
                                            <div className='flex flex-col gap-[6px]'>
                                                <span className='font-bold text-[14px] leading-[22px]'>17:20</span>
                                                <div className='bg-[#E5E5E5] px-1 rounded-l-2xl rounded-r-2xl flex justify-center items-center'>
                                                    <span className='text-[#7F7F7F] font-semibold text-[12px]'>SGN</span>
                                                </div>
                                            </div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.07755 13.9034L5.21481 12.3312C5.51196 12.1127 5.86109 11.996 6.21822 11.996L8.38391 11.996C8.88343 11.996 9.28837 12.4428 9.28837 12.994L9.28837 16.5002C9.28837 17.5029 10.4782 17.8794 10.9598 17.0292L13.2793 12.9341C13.6099 12.3505 14.1896 11.996 14.8133 11.996L16.337 11.996C17.4394 11.996 18.333 11.1024 18.333 10C18.333 8.89763 17.4394 8.00399 16.337 8.00399L14.8133 8.00399C14.1896 8.00399 13.6099 7.64946 13.2793 7.06586L10.9598 2.97084C10.4782 2.12056 9.28837 2.49709 9.28837 3.49978L9.28837 7.00598C9.28837 7.55716 8.88343 8.00399 8.38391 8.00399L6.21822 8.00399C5.86109 8.00399 5.51196 7.88734 5.21481 7.66876L3.07755 6.09656C2.30583 5.52886 1.35208 6.45789 1.76687 7.37327L2.55264 9.10736C2.80727 9.66929 2.80727 10.3307 2.55264 10.8926L1.76687 12.6267C1.35208 13.5421 2.30583 14.4711 3.07755 13.9034Z" fill="#E5E5E5" />
                                            </svg>
                                            <div className='flex flex-col gap-[6px]'>
                                                <span className='font-bold text-[14px] leading-[22px]'>01:00</span>
                                                <div className='bg-[#E5E5E5] px-1 rounded-l-2xl rounded-r-2xl flex justify-center items-center'>
                                                    <span className='text-[#7F7F7F] font-semibold text-[12px]'>HND</span>
                                                </div>
                                            </div>
                                            <span className='font-normal text-[12px] leading-[22px]'>+1day</span>
                                            <div className='flex flex-col gap-[6px]'>
                                                <span className='font-bold text-[14px] leading-[22px]'>5h 40m</span>
                                                <span className='font-montserrat font-normal text-[11px] leading-[22px] text-[#000000]'>Direct flight</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div onClick={() => setOpen2(true)} className='cursor-pointer w-full border border-[#6295D6] rounded-xl p-1 md:p-2 lg:p-4 flex flex-wrap gap-1 md:gap-2 lg:gap-4'>
                                <div className='w-[20px] h-[20px] md:w-[28px] md:h-[28px] lg:w-[40px] lg:h-[40px] rounded-full bg-[#3B7ACC] text-white flex items-center justify-center'>
                                    <span className='font-bold text-[12px] md:text-[16px] ld:text-[20px]'>2</span>
                                </div>
                                <div className='w-full flex flex-col gap-2 justify-start'>
                                    <span className='text-[#2F62A3] font-bold text-[8px] md:text-[10px] lg:text-[14px]'>Sat, 23 Dec, 2023</span>
                                    <div className='flex gap-1 items-center font-montserrat'>
                                        <span className='font-bold text-[8px] md:text-[10px] lg:text-[14px]'>Singapore</span>
                                        <FaLongArrowAltRight />
                                        <span className='font-bold text-[8px] md:text-[10px] lg:text-[14px]'>TP HCM</span>
                                    </div>
                                </div>
                                {
                                    open2 &&
                                    <div className='w-full flex flex-col gap-[16px]'>
                                        <div className='w-full flex justify-between items-center'>
                                            <img src={airBamBoo} className='w-[30%] h-[24px] object-contain' />
                                            <span className='w-[50%] font-bold text-[12px] leading-7 text-[#545454]'>Bamboo Airlines</span>
                                            <svg onClick={(e) => { e.stopPropagation(); setOpen2(false) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="11.5" transform="rotate(90 12 12)" fill="white" stroke="#6295D6" />
                                                <path d="M13.759 14.5L10.241 14.5C9.46925 14.5 8.98837 13.6628 9.37726 12.9961L11.1362 9.98076C11.5221 9.31926 12.4779 9.31926 12.8638 9.98076L14.6227 12.9961C15.0116 13.6628 14.5308 14.5 13.759 14.5Z" fill="#3B7ACC" stroke="#6295D6" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className='flex gap-[8px]'>
                                            <div className='flex flex-col gap-[6px]'>
                                                <span className='font-bold text-[14px] leading-[22px]'>17:20</span>
                                                <div className='bg-[#E5E5E5] px-1 rounded-l-2xl rounded-r-2xl flex justify-center items-center'>
                                                    <span className='text-[#7F7F7F] font-semibold text-[12px]'>SGN</span>
                                                </div>
                                            </div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.07755 13.9034L5.21481 12.3312C5.51196 12.1127 5.86109 11.996 6.21822 11.996L8.38391 11.996C8.88343 11.996 9.28837 12.4428 9.28837 12.994L9.28837 16.5002C9.28837 17.5029 10.4782 17.8794 10.9598 17.0292L13.2793 12.9341C13.6099 12.3505 14.1896 11.996 14.8133 11.996L16.337 11.996C17.4394 11.996 18.333 11.1024 18.333 10C18.333 8.89763 17.4394 8.00399 16.337 8.00399L14.8133 8.00399C14.1896 8.00399 13.6099 7.64946 13.2793 7.06586L10.9598 2.97084C10.4782 2.12056 9.28837 2.49709 9.28837 3.49978L9.28837 7.00598C9.28837 7.55716 8.88343 8.00399 8.38391 8.00399L6.21822 8.00399C5.86109 8.00399 5.51196 7.88734 5.21481 7.66876L3.07755 6.09656C2.30583 5.52886 1.35208 6.45789 1.76687 7.37327L2.55264 9.10736C2.80727 9.66929 2.80727 10.3307 2.55264 10.8926L1.76687 12.6267C1.35208 13.5421 2.30583 14.4711 3.07755 13.9034Z" fill="#E5E5E5" />
                                            </svg>
                                            <div className='flex flex-col gap-[6px]'>
                                                <span className='font-bold text-[14px] leading-[22px]'>01:00</span>
                                                <div className='bg-[#E5E5E5] px-1 rounded-l-2xl rounded-r-2xl flex justify-center items-center'>
                                                    <span className='text-[#7F7F7F] font-semibold text-[12px]'>HND</span>
                                                </div>
                                            </div>
                                            <span className='font-normal text-[12px] leading-[22px]'>+1day</span>
                                            <div className='flex flex-col gap-[6px]'>
                                                <span className='font-bold text-[14px] leading-[22px]'>5h 40m</span>
                                                <span className='font-montserrat font-normal text-[11px] leading-[22px] text-[#000000]'>Direct flight</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className='flex flex-col gap-[4px] w-full'>
                                <div className='flex w-full justify-between'>
                                    <span className='font-semibold text-[8px] md:text-[10px] lg:text-[14px]'>Price</span>
                                    <span ><FaChevronUp className="text-black text-xs sm:text-sm md:text-base lg:text-lg" /></span>
                                </div>
                                <span className='font-extrabold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#F08921]'>1,999,000 VND</span>
                                <span className='font-light text-[8px] md:text-[10px] lg:text-[12px]'>/ per customer</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[24px] items-center rounded-xl border border-[#272727] p-1 md:p-2 lg:p-4'>
                            <div className='flex flex-col md:flex-row gap-[12px] items-center lg:justify-between'>
                                <span className='font-normal text-[8px] md:text-[10px] lg:text-[12px] text-[#272727] underline'>Reset</span>
                                <div className='flex gap-[12px] items-center'>
                                    <span className='font-extrabold text-[12px] sm:text-[16px] md:text-[24px] lg:text-[32px] text-[#272727] '>FILTER</span>
                                    <IoCloseCircle color='#F08921' className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-[16px] w-full'>
                                <div className='flex flex-col items-center gap-[8px] w-full'>
                                    <div className='w-full flex justify-between'>
                                        <span className='font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#545454]'>Prices</span>
                                        <FaChevronUp className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                    </div>
                                    <div className='flex flex-col gap-[12px] w-[90%] items-center font-montserrat'>
                                        <div
                                            ref={sliderRef}
                                            className="w-full h-1 bg-gray-300 rounded-lg cursor-pointer relative"
                                            onMouseDown={handleMouseDown}
                                            onMouseUp={handleMouseUp}
                                            onMouseMove={handleMouseMove}
                                        >
                                            <div
                                                className="absolute top-0 left-0 h-full bg-blue-400 rounded-lg"
                                                style={{ width: `${value}%` }}
                                            ></div>

                                            <div
                                                className="absolute top-0 left-0 h-full bg-gray-400 rounded-lg"
                                                style={{ width: `${100 - value}%`, left: `${value}%` }}
                                            ></div>

                                            <div
                                                className="absolute top-0 left-0 w-4 h-4 bg-white border border-blue-400 rounded-full cursor-pointer"
                                                style={{ left: `${value}%`, transform: 'translate(-50%, -40%)' }}
                                            ></div>
                                        </div>
                                        <span className='text-center lg:text-left font-light text-[10px] lg:text-[12px]'>Up to 1,000,000,000 Currency Value</span>
                                    </div>
                                </div>
                                <div className='w-full h-[1px] bg-[#A9A9A9]'></div>
                                <div className='w-full flex flex-col items-center gap-[8px]'>
                                    <div className='w-full flex justify-between'>
                                        <span className='font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#545454]'>Airlines</span>
                                        <FaChevronUp className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                    </div>
                                    <div className='w-full p-1 md:p-2 lg:p-4 flex flex-col gap-[8px] md:gap-[12px] lg:gap-[16px] items-start'>
                                        <div className='w-full flex gap-[2px] md:gap-[4px] lg:gap-[8px] items-center'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <img className='w-[40%] lg:w-[40px] lg:h-[18px] object-content' src={airAsia} />
                                            <span className='font-montserrat font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Air Asia</span>
                                        </div>
                                        <div className='w-full flex gap-[2px] md:gap-[4px] lg:gap-[8px] items-center'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <img className='w-[40%] lg:w-[80px] lg:h-[10px] object-content' src={airCanada} />
                                            <span className='font-montserrat font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Air Canada</span>
                                        </div>
                                        <div className='w-full flex gap-[2px] md:gap-[4px] lg:gap-[8px] items-center'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <img className='w-[40%] lg:w-[60px] lg:h-[15px] object-content' src={airBamBoo} />
                                            <span className='font-montserrat font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Bamboo Airlines</span>
                                        </div>
                                        <div className='w-full flex gap-[2px] md:gap-[4px] lg:gap-[8px] items-center'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <img className='w-[40%] lg:w-[80px] lg:h-[7.3px] object-content' src={japanAir} />
                                            <span className='font-montserrat font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Japan Airlines</span>
                                        </div>
                                        <div className='w-full flex gap-[2px] md:gap-[4px] lg:gap-[8px] items-center'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <img className='w-[40%] lg:w-[60px] lg:h-[22px] object-content' src={singaporeAir} />
                                            <span className='font-montserrat font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Singapore Airlines</span>
                                        </div>
                                        <div className='w-full flex gap-[2px] md:gap-[4px] lg:gap-[8px] items-center'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <img className='w-[40%] lg:w-[60px] lg:h-[16px] object-content' src={unitedAir} />
                                            <span className='font-montserrat font-normal text-[8px] md:text-[10px] lg:text-[12px]'>United Airlines</span>
                                        </div>
                                        <div className='w-full flex gap-[2px] md:gap-[4px] lg:gap-[8px] items-center'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <img className='w-[40%] lg:w-[60px] lg:h-[10.37px] object-content' src={vietjetAir} />
                                            <span className='font-montserrat font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Vietjet Air</span>
                                        </div>
                                        <div className='w-full flex gap-[2px] md:gap-[4px] lg:gap-[8px] items-center'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <img className='w-[40%] lg:w-[80px] lg:h-[10.67px] object-contain' src={vietnamAir} />
                                            <span className='font-montserrat font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Vietnam Airlines</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-[1px] bg-[#A9A9A9]'></div>
                                <div className='w-full flex flex-col items-center gap-[8px]'>
                                    <div className='w-full flex justify-between'>
                                        <span className='font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] text-[#545454]'>Number of stops</span>
                                        <FaChevronUp className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                    </div>
                                    <div className='w-full p-1 md:p-2 lg:p-4 flex flex-col gap-[12px]'>
                                        <div className='flex gap-[8px] items-center text-[#272727]'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <span className='font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Direct</span>
                                        </div>
                                        <div className='flex gap-[8px] items-center text-[#272727]'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <span className='font-normal text-[8px] md:text-[10px] lg:text-[12px]'>1 stop</span>
                                        </div>
                                        <div className='flex gap-[8px] items-center text-[#272727]'>
                                            <div className='w-[8px] flex-shrink-0 h-[8px] md:w-[12px] md:h-[12px] lg:w-[16px] lg:h-[16px] rounded-[4px] border border-[#545454]'></div>
                                            <span className='font-normal text-[8px] md:text-[10px] lg:text-[12px]'>2 stops</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-[1px] bg-[#A9A9A9]'></div>
                                <div className='w-full flex flex-col items-center gap-[8px]'>
                                    <div className='w-full flex justify-between'>
                                        <span className='font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] text-[#545454]'>Take-off Time</span>
                                        <FaChevronUp className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                    </div>
                                    <div className='w-full p-1 md:p-2 lg:p-4 flex flex-col gap-[12px]'>
                                        <span className='font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Depart from:  Lorem Ipsum Dolor Sit Amet  Aonsectetur Adipiscing Elit</span>
                                        <svg width="100%" height="auto" viewBox="0 0 208 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="9" width="208" height="2.7668" rx="1.3834" fill="#F3BF8F" />
                                            <rect x="0.000976562" y="9" width="145.6" height="2.7668" rx="1.3834" fill="#3B7ACC" />
                                            <g filter="url(#filter0_d_6342_16149)">
                                                <ellipse cx="145.982" cy="10.3863" rx="8.30041" ry="8.30041" fill="white" />
                                                <path d="M153.937 10.3863C153.937 14.7795 150.375 18.3409 145.982 18.3409C141.589 18.3409 138.027 14.7795 138.027 10.3863C138.027 5.99317 141.589 2.43179 145.982 2.43179C150.375 2.43179 153.937 5.99317 153.937 10.3863Z" stroke="#3B7ACC" strokeWidth="0.691701" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_6342_16149" x="135.607" y="0.702536" width="20.7508" height="20.7518" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="0.691701" />
                                                    <feGaussianBlur stdDeviation="1.03755" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6342_16149" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6342_16149" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                        <div className='flex justify-between'>
                                            <span className='font-light text-[8px] md:text-[10px] lg:text-[12px] leading-[24px] font-montserrat'>Between 0:00</span>
                                            <span className='font-light text-[8px] md:text-[10px] lg:text-[12px] leading-[24px] font-montserrat'>and</span>
                                            <span className='font-light text-[8px] md:text-[10px] lg:text-[12px] leading-[24px] font-montserrat'>24:00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-[1px] bg-[#A9A9A9]'></div>
                                <div className='w-full flex flex-col items-center gap-[8px]'>
                                    <div className='w-full flex justify-between'>
                                        <span className='font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] text-[#545454]'>Landing Time</span>
                                        <FaChevronUp className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                    </div>
                                    <div className='w-full p-1 md:p-2 lg:p-4 flex flex-col gap-[12px]'>
                                        <span className='font-normal text-[8px] md:text-[10px] lg:text-[12px]'>Depart from:  Lorem Ipsum Dolor Sit Amet  Aonsectetur Adipiscing Elit</span>
                                        <svg width="100%" height="auto" viewBox="0 0 208 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="9" width="208" height="2.7668" rx="1.3834" fill="#F3BF8F" />
                                            <rect x="0.000976562" y="9" width="145.6" height="2.7668" rx="1.3834" fill="#3B7ACC" />
                                            <g filter="url(#filter0_d_6342_16149)">
                                                <ellipse cx="145.982" cy="10.3863" rx="8.30041" ry="8.30041" fill="white" />
                                                <path d="M153.937 10.3863C153.937 14.7795 150.375 18.3409 145.982 18.3409C141.589 18.3409 138.027 14.7795 138.027 10.3863C138.027 5.99317 141.589 2.43179 145.982 2.43179C150.375 2.43179 153.937 5.99317 153.937 10.3863Z" stroke="#3B7ACC" strokeWidth="0.691701" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_6342_16149" x="135.607" y="0.702536" width="20.7508" height="20.7518" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="0.691701" />
                                                    <feGaussianBlur stdDeviation="1.03755" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6342_16149" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6342_16149" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                        <div className='flex justify-between'>
                                            <span className='font-light text-[8px] md:text-[10px] lg:text-[12px] leading-[24px] font-montserrat'>Between 0:00</span>
                                            <span className='font-light text-[8px] md:text-[10px] lg:text-[12px] leading-[24px] font-montserrat'>and</span>
                                            <span className='font-light text-[8px] md:text-[10px] lg:text-[12px] leading-[24px] font-montserrat'>24:00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-[1px] bg-[#A9A9A9]'></div>
                                <div className='w-full flex flex-col items-center gap-[8px]'>
                                    <div className='w-full flex justify-between'>
                                        <span className='font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] text-[#545454]'>Landing Time</span>
                                        <FaChevronUp className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                    </div>
                                    <div className='flex flex-col gap-[12px] w-[90%] items-start font-montserrat'>
                                        <div
                                            ref={sliderRef1}
                                            className="w-full h-1 bg-gray-300 rounded-lg cursor-pointer relative"
                                            onMouseDown={handleMouseDown1}
                                            onMouseUp={handleMouseUp1}
                                            onMouseMove={handleMouseMove1}
                                        >
                                            <div
                                                className="absolute top-0 left-0 h-full bg-blue-400 rounded-lg"
                                                style={{ width: `${value1}%` }}
                                            ></div>

                                            <div
                                                className="absolute top-0 left-0 h-full bg-gray-400 rounded-lg"
                                                style={{ width: `${100 - value1}%`, left: `${value1}%` }}
                                            ></div>

                                            <div
                                                className="absolute top-0 left-0 w-4 h-4 bg-white border border-blue-400 rounded-full cursor-pointer"
                                                style={{ left: `${value1}%`, transform: 'translate(-50%, -40%)' }}
                                            ></div>
                                        </div>
                                        <span className='font-light text-[8px] md:text-[10px] lg:text-[12px]'>Under 48 hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[70%] flex flex-col gap-[44px]'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] underline'>SELECTED RESULT</span>
                                <span className='font-normal text-[12px] md:text-[14px] lg:text-[16px]'>Results after having applied filter, prices include taxes and fees.</span>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-[8px] lg:items-center'>
                                <div className='flex gap-[8px] items-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 17H21M12 11H18M12 5H15M3 14.625L4.50518 16.3183C5.30076 17.2134 6.69924 17.2134 7.49482 16.3183L9 14.625M6 17V5" stroke="#272727" strokeWidth="2.2268" strokeLinecap="round" />
                                    </svg>
                                    <span className='font-bold text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]'>SORTED BY:</span>
                                </div>
                                <div className='p-2 lg:px-[25px] lg:py-[10px] rounded-2xl bg-[#3B7ACC] flex justify-center items-center'>
                                    <span className='text-center font-bold text-[10px] md:text-[12px] lg:text-[14px] text-white'>Lowest Price</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='w-full rounded-t-xl bg-[#3B7ACC] py-[10px] flex justify-center'>
                                <span className='font-montserrat text-white font-bold text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]'>Most suitable with the filtered results</span>
                            </div>
                            <div className='flex flex-col gap-[40px]'>
                                <div className='w-full rounded-b-xl border border-[#2F62A3] px-4 py-6 flex flex-col gap-[4px] sm:gap-[8px] md:gap-[12px] lg:gap-[24px]'>
                                    <div className='flex flex-col gap-[12px] lg:flex-row lg:justify-between'>
                                        <div className='flex gap-[8px] items-center'>
                                            <div className='p-2 rounded-xl border border-[#7F7F7F] bg-[#FFFCF7]'>
                                                <img src={airBamBoo} className='w-[46px] h-[21px] object-contain' />
                                            </div>
                                            <span className='font-bold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#272727]'>Bamboo Airlines</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='p-1 md:px-2 lg:px-4 lg:py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center text-xs sm:text-sm md:text-md lg:text-lg'>BB303</div>
                                            <div className='p-1 md:px-2 lg:px-4 lg:py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center text-xs sm:text-sm md:text-md lg:text-lg'>BOEING 777</div>
                                            <div className='p-1 md:px-2 lg:px-4 lg:py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center text-xs sm:text-sm md:text-md lg:text-lg'>Economy Class</div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-[40%] p-4 flex gap-4 rounded-md border border-[#7F7F7F]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 18.3326H18.3337M5.30033 14.4993L3.33366 14.166L1.66699 10.8326L2.58366 10.3743C2.81629 10.2571 3.07316 10.196 3.33366 10.196C3.59416 10.196 3.85103 10.2571 4.08366 10.3743L4.22533 10.4576C4.45796 10.5748 4.71483 10.6359 4.97533 10.6359C5.23582 10.6359 5.49269 10.5748 5.72533 10.4576L6.66699 9.99929L4.16699 4.99929L4.91699 4.62429C5.19422 4.48791 5.5039 4.43127 5.81145 4.4607C6.11901 4.49014 6.41233 4.60448 6.65866 4.79096L10.0087 7.29096C10.2558 7.47905 10.5507 7.59432 10.8599 7.62377C11.1691 7.65322 11.4804 7.59568 11.7587 7.45762L15.2503 5.74096C15.6965 5.51603 16.2105 5.46552 16.692 5.59929L17.5003 5.83262C17.6673 5.879 17.8219 5.96202 17.9528 6.07563C18.0837 6.18924 18.1877 6.33059 18.2571 6.48941C18.3266 6.64823 18.3597 6.82052 18.3542 6.99377C18.3487 7.16702 18.3047 7.33686 18.2253 7.49096L17.9087 8.12429C17.717 8.50762 17.4087 8.82429 17.017 9.02429L6.31699 14.3326C6.00236 14.4885 5.64655 14.541 5.30033 14.4826V14.4993Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className='flex flex-col gap-2'>
                                                <span className='font-semibold text-[16px] leading-[24px]'>Tan Son Nhat International Airport</span>
                                                <div className='flex gap-[24px]'>
                                                    <span>Terminal 3</span>
                                                    <span>Singapore</span>
                                                    <span>9:00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[10%]'>
                                            <svg width="86" height="62" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 6.5L76 6.5" stroke="#7F7F7F" />
                                                <circle cx="6" cy="6.5" r="5.5" fill="white" stroke="#7F7F7F" />
                                                <circle cx="80" cy="6.5" r="5.5" fill="#3B7ACC" stroke="#3B7ACC" />
                                                <path d="M10.6306 36.5V35.282L14.5226 31.586C14.8493 31.278 15.092 31.0073 15.2506 30.774C15.4093 30.5407 15.512 30.326 15.5586 30.13C15.6146 29.9247 15.6426 29.7333 15.6426 29.556C15.6426 29.108 15.4886 28.7627 15.1806 28.52C14.8726 28.268 14.42 28.142 13.8226 28.142C13.3466 28.142 12.9126 28.226 12.5206 28.394C12.138 28.562 11.8066 28.8187 11.5266 29.164L10.2526 28.184C10.6353 27.6707 11.1486 27.274 11.7926 26.994C12.446 26.7047 13.174 26.56 13.9766 26.56C14.686 26.56 15.302 26.6767 15.8246 26.91C16.3566 27.134 16.7626 27.456 17.0426 27.876C17.332 28.296 17.4766 28.7953 17.4766 29.374C17.4766 29.6913 17.4346 30.0087 17.3506 30.326C17.2666 30.634 17.108 30.9607 16.8746 31.306C16.6413 31.6513 16.3006 32.0387 15.8526 32.468L12.5066 35.646L12.1286 34.96H17.8546V36.5H10.6306ZM20.1338 36.598C19.8164 36.598 19.5458 36.4907 19.3218 36.276C19.0978 36.052 18.9858 35.772 18.9858 35.436C18.9858 35.0813 19.0978 34.8013 19.3218 34.596C19.5458 34.3813 19.8164 34.274 20.1338 34.274C20.4511 34.274 20.7218 34.3813 20.9458 34.596C21.1698 34.8013 21.2818 35.0813 21.2818 35.436C21.2818 35.772 21.1698 36.052 20.9458 36.276C20.7218 36.4907 20.4511 36.598 20.1338 36.598ZM25.7078 36.64C25.0171 36.64 24.3404 36.542 23.6778 36.346C23.0244 36.1407 22.4738 35.8607 22.0258 35.506L22.7958 34.092C23.1504 34.3813 23.5798 34.6147 24.0838 34.792C24.5971 34.9693 25.1291 35.058 25.6798 35.058C26.3238 35.058 26.8278 34.9227 27.1918 34.652C27.5651 34.3813 27.7518 34.0173 27.7518 33.56C27.7518 33.252 27.6724 32.9813 27.5138 32.748C27.3644 32.5147 27.0938 32.3373 26.7018 32.216C26.3191 32.0947 25.7918 32.034 25.1198 32.034H22.7538L23.2578 26.7H29.0118V28.226H23.9298L24.8818 27.358L24.5038 31.348L23.5518 30.494H25.5258C26.4964 30.494 27.2758 30.6247 27.8638 30.886C28.4611 31.138 28.8951 31.4927 29.1658 31.95C29.4458 32.398 29.5858 32.9113 29.5858 33.49C29.5858 34.0593 29.4458 34.582 29.1658 35.058C28.8858 35.534 28.4564 35.9167 27.8778 36.206C27.3084 36.4953 26.5851 36.64 25.7078 36.64ZM42.0927 26.7H43.9127V36.5H42.0927V26.7ZM37.0247 36.5H35.2047V26.7H37.0247V36.5ZM42.2327 32.3H36.8707V30.746H42.2327V32.3ZM49.7307 36.598C48.9653 36.598 48.284 36.4347 47.6867 36.108C47.0893 35.772 46.618 35.3147 46.2727 34.736C45.9273 34.1573 45.7547 33.4993 45.7547 32.762C45.7547 32.0153 45.9273 31.3573 46.2727 30.788C46.618 30.2093 47.0893 29.7567 47.6867 29.43C48.284 29.1033 48.9653 28.94 49.7307 28.94C50.5053 28.94 51.1913 29.1033 51.7887 29.43C52.3953 29.7567 52.8667 30.2047 53.2027 30.774C53.548 31.3433 53.7207 32.006 53.7207 32.762C53.7207 33.4993 53.548 34.1573 53.2027 34.736C52.8667 35.3147 52.3953 35.772 51.7887 36.108C51.1913 36.4347 50.5053 36.598 49.7307 36.598ZM49.7307 35.1C50.16 35.1 50.5427 35.0067 50.8787 34.82C51.2147 34.6333 51.476 34.3627 51.6627 34.008C51.8587 33.6533 51.9567 33.238 51.9567 32.762C51.9567 32.2767 51.8587 31.8613 51.6627 31.516C51.476 31.1613 51.2147 30.8907 50.8787 30.704C50.5427 30.5173 50.1647 30.424 49.7447 30.424C49.3153 30.424 48.9327 30.5173 48.5967 30.704C48.27 30.8907 48.0087 31.1613 47.8127 31.516C47.6167 31.8613 47.5187 32.2767 47.5187 32.762C47.5187 33.238 47.6167 33.6533 47.8127 34.008C48.0087 34.3627 48.27 34.6333 48.5967 34.82C48.9327 35.0067 49.3107 35.1 49.7307 35.1ZM58.5581 36.598C57.9234 36.598 57.3634 36.4813 56.8781 36.248C56.3928 36.0053 56.0148 35.6413 55.7441 35.156C55.4734 34.6613 55.3381 34.0407 55.3381 33.294V29.024H57.0881V33.056C57.0881 33.728 57.2374 34.232 57.5361 34.568C57.8441 34.8947 58.2781 35.058 58.8381 35.058C59.2488 35.058 59.6034 34.974 59.9021 34.806C60.2101 34.638 60.4481 34.386 60.6161 34.05C60.7934 33.714 60.8821 33.2987 60.8821 32.804V29.024H62.6321V36.5H60.9661V34.484L61.2601 35.1C61.0081 35.5853 60.6394 35.9587 60.1541 36.22C59.6688 36.472 59.1368 36.598 58.5581 36.598ZM64.9234 36.5V29.024H66.5894V31.082L66.3934 30.48C66.6174 29.976 66.9674 29.5933 67.4434 29.332C67.9287 29.0707 68.5307 28.94 69.2494 28.94V30.606C69.1747 30.5873 69.1047 30.578 69.0394 30.578C68.9741 30.5687 68.9087 30.564 68.8434 30.564C68.1807 30.564 67.6534 30.76 67.2614 31.152C66.8694 31.5347 66.6734 32.1087 66.6734 32.874V36.5H64.9234ZM73.1123 36.598C72.487 36.598 71.885 36.5187 71.3063 36.36C70.737 36.192 70.2843 35.9913 69.9483 35.758L70.6203 34.428C70.9563 34.6427 71.3576 34.82 71.8243 34.96C72.291 35.1 72.7576 35.17 73.2243 35.17C73.775 35.17 74.1716 35.0953 74.4143 34.946C74.6663 34.7967 74.7923 34.596 74.7923 34.344C74.7923 34.1387 74.7083 33.9847 74.5403 33.882C74.3723 33.77 74.153 33.686 73.8823 33.63C73.6116 33.574 73.3083 33.5227 72.9723 33.476C72.6456 33.4293 72.3143 33.3687 71.9783 33.294C71.6516 33.21 71.353 33.0933 71.0823 32.944C70.8116 32.7853 70.5923 32.5753 70.4243 32.314C70.2563 32.0527 70.1723 31.7073 70.1723 31.278C70.1723 30.802 70.3076 30.3913 70.5783 30.046C70.849 29.6913 71.227 29.4207 71.7123 29.234C72.207 29.038 72.7903 28.94 73.4623 28.94C73.9663 28.94 74.475 28.996 74.9883 29.108C75.5016 29.22 75.9263 29.3787 76.2623 29.584L75.5903 30.914C75.2356 30.6993 74.8763 30.5547 74.5123 30.48C74.1576 30.396 73.803 30.354 73.4483 30.354C72.9163 30.354 72.5196 30.4333 72.2583 30.592C72.0063 30.7507 71.8803 30.9513 71.8803 31.194C71.8803 31.418 71.9643 31.586 72.1323 31.698C72.3003 31.81 72.5196 31.8987 72.7903 31.964C73.061 32.0293 73.3596 32.0853 73.6863 32.132C74.0223 32.1693 74.3536 32.23 74.6803 32.314C75.007 32.398 75.3056 32.5147 75.5763 32.664C75.8563 32.804 76.0803 33.0047 76.2483 33.266C76.4163 33.5273 76.5003 33.868 76.5003 34.288C76.5003 34.7547 76.3603 35.1607 76.0803 35.506C75.8096 35.8513 75.4223 36.122 74.9183 36.318C74.4143 36.5047 73.8123 36.598 73.1123 36.598Z" fill="#545454" />
                                                <path d="M6.83426 59.5V52.5H9.60426C10.3443 52.5 10.9943 52.65 11.5543 52.95C12.1143 53.25 12.5476 53.6633 12.8543 54.19C13.1676 54.7167 13.3243 55.32 13.3243 56C13.3243 56.68 13.1676 57.2833 12.8543 57.81C12.5476 58.3367 12.1143 58.75 11.5543 59.05C10.9943 59.35 10.3443 59.5 9.60426 59.5H6.83426ZM7.34426 59.04H9.56426C10.2243 59.04 10.7976 58.91 11.2843 58.65C11.7709 58.39 12.1476 58.0333 12.4143 57.58C12.6809 57.12 12.8143 56.5933 12.8143 56C12.8143 55.4067 12.6809 54.8833 12.4143 54.43C12.1476 53.97 11.7709 53.61 11.2843 53.35C10.7976 53.09 10.2243 52.96 9.56426 52.96H7.34426V59.04ZM14.936 59.5V54.28H15.436V59.5H14.936ZM15.186 53.01C15.0726 53.01 14.976 52.97 14.896 52.89C14.816 52.81 14.776 52.7167 14.776 52.61C14.776 52.4967 14.816 52.4 14.896 52.32C14.976 52.24 15.0726 52.2 15.186 52.2C15.306 52.2 15.4026 52.24 15.476 52.32C15.556 52.3933 15.596 52.4867 15.596 52.6C15.596 52.7133 15.556 52.81 15.476 52.89C15.4026 52.97 15.306 53.01 15.186 53.01ZM17.5434 59.5V54.28H18.0234V55.71L17.9734 55.55C18.1201 55.13 18.3667 54.8067 18.7134 54.58C19.0601 54.3533 19.4934 54.24 20.0134 54.24V54.73C19.9934 54.73 19.9734 54.73 19.9534 54.73C19.9334 54.7233 19.9134 54.72 19.8934 54.72C19.3134 54.72 18.8601 54.9033 18.5334 55.27C18.2067 55.63 18.0434 56.1333 18.0434 56.78V59.5H17.5434ZM23.4722 59.54C22.9456 59.54 22.4789 59.4267 22.0722 59.2C21.6656 58.9733 21.3456 58.66 21.1122 58.26C20.8856 57.86 20.7722 57.4033 20.7722 56.89C20.7722 56.37 20.8822 55.9133 21.1022 55.52C21.3222 55.12 21.6222 54.8067 22.0022 54.58C22.3822 54.3533 22.8189 54.24 23.3122 54.24C23.7789 54.24 24.1889 54.3467 24.5422 54.56C24.9022 54.7667 25.1889 55.0533 25.4022 55.42C25.6222 55.7867 25.7422 56.2033 25.7622 56.67L21.2022 57.56L21.1522 57.18L25.4722 56.34L25.2822 56.62C25.2689 56.2733 25.1789 55.9533 25.0122 55.66C24.8456 55.3667 24.6156 55.13 24.3222 54.95C24.0356 54.77 23.6989 54.68 23.3122 54.68C22.9122 54.68 22.5556 54.7733 22.2422 54.96C21.9356 55.14 21.6956 55.3933 21.5222 55.72C21.3489 56.0467 21.2622 56.4233 21.2622 56.85C21.2622 57.2967 21.3556 57.69 21.5422 58.03C21.7289 58.3633 21.9889 58.6233 22.3222 58.81C22.6556 58.9967 23.0422 59.09 23.4822 59.09C23.8156 59.09 24.1256 59.03 24.4122 58.91C24.7056 58.79 24.9522 58.6067 25.1522 58.36L25.4422 58.69C25.2156 58.97 24.9289 59.1833 24.5822 59.33C24.2422 59.47 23.8722 59.54 23.4722 59.54ZM29.379 59.54C28.8724 59.54 28.419 59.4267 28.019 59.2C27.6257 58.9733 27.3124 58.66 27.079 58.26C26.8524 57.86 26.739 57.4033 26.739 56.89C26.739 56.37 26.8524 55.91 27.079 55.51C27.3124 55.11 27.6257 54.8 28.019 54.58C28.419 54.3533 28.8724 54.24 29.379 54.24C29.799 54.24 30.179 54.32 30.519 54.48C30.8657 54.64 31.1457 54.88 31.359 55.2L30.989 55.47C30.8024 55.2033 30.569 55.0067 30.289 54.88C30.009 54.7533 29.7057 54.69 29.379 54.69C28.9724 54.69 28.6057 54.7833 28.279 54.97C27.959 55.15 27.7057 55.4067 27.519 55.74C27.339 56.0667 27.249 56.45 27.249 56.89C27.249 57.33 27.339 57.7167 27.519 58.05C27.7057 58.3767 27.959 58.6333 28.279 58.82C28.6057 59 28.9724 59.09 29.379 59.09C29.7057 59.09 30.009 59.0267 30.289 58.9C30.569 58.7733 30.8024 58.5767 30.989 58.31L31.359 58.58C31.1457 58.9 30.8657 59.14 30.519 59.3C30.179 59.46 29.799 59.54 29.379 59.54ZM34.128 59.54C33.668 59.54 33.3147 59.4133 33.068 59.16C32.828 58.9067 32.708 58.56 32.708 58.12V53.14H33.208V58.07C33.208 58.4033 33.2913 58.66 33.458 58.84C33.6247 59.02 33.8647 59.11 34.178 59.11C34.5047 59.11 34.7747 59.0133 34.988 58.82L35.198 59.17C35.0647 59.2967 34.9013 59.39 34.708 59.45C34.5213 59.51 34.328 59.54 34.128 59.54ZM32.978 54.71V54.28H34.868V54.71H32.978ZM40.3547 61.44C39.9881 60.8333 39.7047 60.1333 39.5047 59.34C39.3114 58.5467 39.2147 57.6867 39.2147 56.76C39.2147 55.8333 39.3114 54.97 39.5047 54.17C39.7047 53.3633 39.9881 52.6667 40.3547 52.08H40.8347C40.4414 52.7467 40.1547 53.4667 39.9747 54.24C39.7947 55.0133 39.7047 55.8533 39.7047 56.76C39.7047 57.6667 39.7947 58.5067 39.9747 59.28C40.1547 60.0533 40.4414 60.7733 40.8347 61.44H40.3547ZM44.9176 54.24C45.3443 54.24 45.7143 54.3233 46.0276 54.49C46.3476 54.65 46.5943 54.8967 46.7676 55.23C46.9476 55.5567 47.0376 55.9633 47.0376 56.45V59.5H46.5376V56.49C46.5376 55.9033 46.3876 55.4567 46.0876 55.15C45.7943 54.8433 45.381 54.69 44.8476 54.69C44.441 54.69 44.0876 54.7733 43.7876 54.94C43.4876 55.1067 43.2576 55.34 43.0976 55.64C42.9443 55.94 42.8676 56.3 42.8676 56.72V59.5H42.3676V54.28H42.8476V55.73L42.7776 55.57C42.9376 55.1567 43.201 54.8333 43.5676 54.6C43.9343 54.36 44.3843 54.24 44.9176 54.24ZM51.1361 59.54C50.6361 59.54 50.1895 59.4267 49.7961 59.2C49.4095 58.9733 49.0995 58.66 48.8661 58.26C48.6395 57.86 48.5261 57.4033 48.5261 56.89C48.5261 56.37 48.6395 55.9133 48.8661 55.52C49.0995 55.12 49.4095 54.8067 49.7961 54.58C50.1895 54.3533 50.6361 54.24 51.1361 54.24C51.6361 54.24 52.0828 54.3533 52.4761 54.58C52.8695 54.8067 53.1795 55.12 53.4061 55.52C53.6328 55.9133 53.7461 56.37 53.7461 56.89C53.7461 57.4033 53.6328 57.86 53.4061 58.26C53.1795 58.66 52.8695 58.9733 52.4761 59.2C52.0828 59.4267 51.6361 59.54 51.1361 59.54ZM51.1361 59.09C51.5361 59.09 51.8961 59 52.2161 58.82C52.5361 58.6333 52.7861 58.3733 52.9661 58.04C53.1461 57.7067 53.2361 57.3233 53.2361 56.89C53.2361 56.45 53.1461 56.0667 52.9661 55.74C52.7861 55.4067 52.5361 55.15 52.2161 54.97C51.8961 54.7833 51.5361 54.69 51.1361 54.69C50.7361 54.69 50.3761 54.7833 50.0561 54.97C49.7428 55.15 49.4928 55.4067 49.3061 55.74C49.1261 56.0667 49.0361 56.45 49.0361 56.89C49.0361 57.3233 49.1261 57.7067 49.3061 58.04C49.4928 58.3733 49.7428 58.6333 50.0561 58.82C50.3761 59 50.7361 59.09 51.1361 59.09ZM59.1857 59.54C58.7523 59.54 58.3457 59.4767 57.9657 59.35C57.5923 59.2233 57.3023 59.0633 57.0957 58.87L57.3257 58.47C57.5257 58.6433 57.7923 58.7933 58.1257 58.92C58.459 59.04 58.819 59.1 59.2057 59.1C59.7523 59.1 60.1457 59.01 60.3857 58.83C60.6257 58.65 60.7457 58.4133 60.7457 58.12C60.7457 57.9067 60.6823 57.74 60.5557 57.62C60.4357 57.4933 60.2723 57.3967 60.0657 57.33C59.859 57.2633 59.6323 57.21 59.3857 57.17C59.139 57.1233 58.8923 57.0733 58.6457 57.02C58.399 56.9667 58.1723 56.89 57.9657 56.79C57.759 56.69 57.5923 56.5533 57.4657 56.38C57.3457 56.2 57.2857 55.9633 57.2857 55.67C57.2857 55.4033 57.359 55.1633 57.5057 54.95C57.6523 54.7367 57.8723 54.5667 58.1657 54.44C58.459 54.3067 58.8257 54.24 59.2657 54.24C59.5923 54.24 59.919 54.2867 60.2457 54.38C60.579 54.4733 60.849 54.5967 61.0557 54.75L60.8257 55.15C60.6057 54.9833 60.359 54.8633 60.0857 54.79C59.8123 54.7167 59.5357 54.68 59.2557 54.68C58.749 54.68 58.3757 54.7733 58.1357 54.96C57.9023 55.1467 57.7857 55.38 57.7857 55.66C57.7857 55.88 57.8457 56.0567 57.9657 56.19C58.0923 56.3167 58.259 56.4167 58.4657 56.49C58.6723 56.5567 58.899 56.6133 59.1457 56.66C59.3923 56.7 59.639 56.7467 59.8857 56.8C60.1323 56.8533 60.359 56.93 60.5657 57.03C60.7723 57.1233 60.9357 57.2567 61.0557 57.43C61.1823 57.5967 61.2457 57.8233 61.2457 58.11C61.2457 58.3967 61.1657 58.6467 61.0057 58.86C60.8523 59.0733 60.6223 59.24 60.3157 59.36C60.009 59.48 59.6323 59.54 59.1857 59.54ZM64.0011 59.54C63.5411 59.54 63.1877 59.4133 62.9411 59.16C62.7011 58.9067 62.5811 58.56 62.5811 58.12V53.14H63.0811V58.07C63.0811 58.4033 63.1644 58.66 63.3311 58.84C63.4977 59.02 63.7377 59.11 64.0511 59.11C64.3777 59.11 64.6477 59.0133 64.8611 58.82L65.0711 59.17C64.9377 59.2967 64.7744 59.39 64.5811 59.45C64.3944 59.51 64.2011 59.54 64.0011 59.54ZM62.8511 54.71V54.28H64.7411V54.71H62.8511ZM68.3139 59.54C67.8139 59.54 67.3672 59.4267 66.9739 59.2C66.5872 58.9733 66.2772 58.66 66.0439 58.26C65.8172 57.86 65.7039 57.4033 65.7039 56.89C65.7039 56.37 65.8172 55.9133 66.0439 55.52C66.2772 55.12 66.5872 54.8067 66.9739 54.58C67.3672 54.3533 67.8139 54.24 68.3139 54.24C68.8139 54.24 69.2605 54.3533 69.6539 54.58C70.0472 54.8067 70.3572 55.12 70.5839 55.52C70.8105 55.9133 70.9239 56.37 70.9239 56.89C70.9239 57.4033 70.8105 57.86 70.5839 58.26C70.3572 58.66 70.0472 58.9733 69.6539 59.2C69.2605 59.4267 68.8139 59.54 68.3139 59.54ZM68.3139 59.09C68.7139 59.09 69.0739 59 69.3939 58.82C69.7139 58.6333 69.9639 58.3733 70.1439 58.04C70.3239 57.7067 70.4139 57.3233 70.4139 56.89C70.4139 56.45 70.3239 56.0667 70.1439 55.74C69.9639 55.4067 69.7139 55.15 69.3939 54.97C69.0739 54.7833 68.7139 54.69 68.3139 54.69C67.9139 54.69 67.5539 54.7833 67.2339 54.97C66.9205 55.15 66.6705 55.4067 66.4839 55.74C66.3039 56.0667 66.2139 56.45 66.2139 56.89C66.2139 57.3233 66.3039 57.7067 66.4839 58.04C66.6705 58.3733 66.9205 58.6333 67.2339 58.82C67.5539 59 67.9139 59.09 68.3139 59.09ZM75.095 59.54C74.635 59.54 74.2184 59.4333 73.845 59.22C73.4784 59.0067 73.185 58.7033 72.965 58.31C72.7517 57.91 72.645 57.4367 72.645 56.89C72.645 56.3433 72.7517 55.8733 72.965 55.48C73.185 55.08 73.4784 54.7733 73.845 54.56C74.2184 54.3467 74.635 54.24 75.095 54.24C75.5884 54.24 76.0284 54.3533 76.415 54.58C76.8084 54.8 77.115 55.11 77.335 55.51C77.5617 55.91 77.675 56.37 77.675 56.89C77.675 57.41 77.5617 57.87 77.335 58.27C77.115 58.67 76.8084 58.9833 76.415 59.21C76.0284 59.43 75.5884 59.54 75.095 59.54ZM72.475 61.44V54.28H72.955V55.99L72.875 56.9L72.975 57.81V61.44H72.475ZM75.065 59.09C75.465 59.09 75.825 59 76.145 58.82C76.465 58.6333 76.715 58.3733 76.895 58.04C77.0817 57.7067 77.175 57.3233 77.175 56.89C77.175 56.45 77.0817 56.0667 76.895 55.74C76.715 55.4067 76.465 55.15 76.145 54.97C75.825 54.7833 75.465 54.69 75.065 54.69C74.665 54.69 74.305 54.7833 73.985 54.97C73.6717 55.15 73.4217 55.4067 73.235 55.74C73.055 56.0667 72.965 56.45 72.965 56.89C72.965 57.3233 73.055 57.7067 73.235 58.04C73.4217 58.3733 73.6717 58.6333 73.985 58.82C74.305 59 74.665 59.09 75.065 59.09ZM79.1131 61.44H78.6431C79.0298 60.7733 79.3131 60.0533 79.4931 59.28C79.6731 58.5067 79.7631 57.6667 79.7631 56.76C79.7631 55.8533 79.6731 55.0133 79.4931 54.24C79.3131 53.4667 79.0298 52.7467 78.6431 52.08H79.1131C79.4798 52.6667 79.7631 53.3633 79.9631 54.17C80.1631 54.97 80.2631 55.8333 80.2631 56.76C80.2631 57.6867 80.1631 58.5467 79.9631 59.34C79.7631 60.1333 79.4798 60.8333 79.1131 61.44Z" fill="#7F7F7F" />
                                            </svg>
                                        </div>
                                        <div className='w-[40%] h-full p-4 flex gap-4 rounded-md border border-[#7F7F7F]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 18.3326H18.3337M5.30033 14.4993L3.33366 14.166L1.66699 10.8326L2.58366 10.3743C2.81629 10.2571 3.07316 10.196 3.33366 10.196C3.59416 10.196 3.85103 10.2571 4.08366 10.3743L4.22533 10.4576C4.45796 10.5748 4.71483 10.6359 4.97533 10.6359C5.23582 10.6359 5.49269 10.5748 5.72533 10.4576L6.66699 9.99929L4.16699 4.99929L4.91699 4.62429C5.19422 4.48791 5.5039 4.43127 5.81145 4.4607C6.11901 4.49014 6.41233 4.60448 6.65866 4.79096L10.0087 7.29096C10.2558 7.47905 10.5507 7.59432 10.8599 7.62377C11.1691 7.65322 11.4804 7.59568 11.7587 7.45762L15.2503 5.74096C15.6965 5.51603 16.2105 5.46552 16.692 5.59929L17.5003 5.83262C17.6673 5.879 17.8219 5.96202 17.9528 6.07563C18.0837 6.18924 18.1877 6.33059 18.2571 6.48941C18.3266 6.64823 18.3597 6.82052 18.3542 6.99377C18.3487 7.16702 18.3047 7.33686 18.2253 7.49096L17.9087 8.12429C17.717 8.50762 17.4087 8.82429 17.017 9.02429L6.31699 14.3326C6.00236 14.4885 5.64655 14.541 5.30033 14.4826V14.4993Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className='flex flex-col justify-between'>
                                                <span className='font-semibold text-[16px] leading-[24px]'>Changi International Airport</span>
                                                <div className='flex gap-[24px]'>
                                                    <span>Terminal 3</span>
                                                    <span>Singapore</span>
                                                    <span>11:30</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-start'>
                                        <div className='flex gap-[24px] items-center'>
                                            <span className='line-through font-semibold text-[16px] leading-[22px] text-[#7F7F7F] font-montserrat'>2,599,000 VND</span>
                                            <span className='text-[#3B7ACC] font-extrabold text-[24px] leading-[22px]'>2,399,000 VND</span>
                                        </div>
                                        <div className='flex flex-col gap-[8px] items-end'>
                                            <div className='px-20 py-2 rounded-xl w-fit h-fit bg-[#F08921]'>
                                                <span className='font-extrabold text-[24px] leading-[22px] text-white'>SELECT</span>
                                            </div>
                                            <span className='font-semibold text-[16px] leading-[22px] text-[#2F62A3] underline'>View Details</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full rounded-xl border border-[#272727] px-4 py-6 flex flex-col gap-[24px]'>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-[8px] items-center'>
                                            <div className='p-2 rounded-xl border border-[#7F7F7F] bg-[#FFFCF7]'>
                                                <img src={airBamBoo} className='w-[46px] h-[21px] object-contain' />
                                            </div>
                                            <span className='font-bold text-[24px] leading-[28px] text-[#272727]'>Bamboo Airlines</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>BB303</div>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>BOEING 777</div>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>Economy Class</div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-[40%] p-4 flex gap-4 rounded-md border border-[#7F7F7F]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 18.3326H18.3337M5.30033 14.4993L3.33366 14.166L1.66699 10.8326L2.58366 10.3743C2.81629 10.2571 3.07316 10.196 3.33366 10.196C3.59416 10.196 3.85103 10.2571 4.08366 10.3743L4.22533 10.4576C4.45796 10.5748 4.71483 10.6359 4.97533 10.6359C5.23582 10.6359 5.49269 10.5748 5.72533 10.4576L6.66699 9.99929L4.16699 4.99929L4.91699 4.62429C5.19422 4.48791 5.5039 4.43127 5.81145 4.4607C6.11901 4.49014 6.41233 4.60448 6.65866 4.79096L10.0087 7.29096C10.2558 7.47905 10.5507 7.59432 10.8599 7.62377C11.1691 7.65322 11.4804 7.59568 11.7587 7.45762L15.2503 5.74096C15.6965 5.51603 16.2105 5.46552 16.692 5.59929L17.5003 5.83262C17.6673 5.879 17.8219 5.96202 17.9528 6.07563C18.0837 6.18924 18.1877 6.33059 18.2571 6.48941C18.3266 6.64823 18.3597 6.82052 18.3542 6.99377C18.3487 7.16702 18.3047 7.33686 18.2253 7.49096L17.9087 8.12429C17.717 8.50762 17.4087 8.82429 17.017 9.02429L6.31699 14.3326C6.00236 14.4885 5.64655 14.541 5.30033 14.4826V14.4993Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className='flex flex-col gap-2'>
                                                <span className='font-semibold text-[16px] leading-[24px]'>Tan Son Nhat International Airport</span>
                                                <div className='flex gap-[24px]'>
                                                    <span>Terminal 3</span>
                                                    <span>Singapore</span>
                                                    <span>9:00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[10%]'>
                                            <svg width="86" height="62" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 6.5L76 6.5" stroke="#7F7F7F" />
                                                <circle cx="6" cy="6.5" r="5.5" fill="white" stroke="#7F7F7F" />
                                                <circle cx="80" cy="6.5" r="5.5" fill="#3B7ACC" stroke="#3B7ACC" />
                                                <path d="M10.6306 36.5V35.282L14.5226 31.586C14.8493 31.278 15.092 31.0073 15.2506 30.774C15.4093 30.5407 15.512 30.326 15.5586 30.13C15.6146 29.9247 15.6426 29.7333 15.6426 29.556C15.6426 29.108 15.4886 28.7627 15.1806 28.52C14.8726 28.268 14.42 28.142 13.8226 28.142C13.3466 28.142 12.9126 28.226 12.5206 28.394C12.138 28.562 11.8066 28.8187 11.5266 29.164L10.2526 28.184C10.6353 27.6707 11.1486 27.274 11.7926 26.994C12.446 26.7047 13.174 26.56 13.9766 26.56C14.686 26.56 15.302 26.6767 15.8246 26.91C16.3566 27.134 16.7626 27.456 17.0426 27.876C17.332 28.296 17.4766 28.7953 17.4766 29.374C17.4766 29.6913 17.4346 30.0087 17.3506 30.326C17.2666 30.634 17.108 30.9607 16.8746 31.306C16.6413 31.6513 16.3006 32.0387 15.8526 32.468L12.5066 35.646L12.1286 34.96H17.8546V36.5H10.6306ZM20.1338 36.598C19.8164 36.598 19.5458 36.4907 19.3218 36.276C19.0978 36.052 18.9858 35.772 18.9858 35.436C18.9858 35.0813 19.0978 34.8013 19.3218 34.596C19.5458 34.3813 19.8164 34.274 20.1338 34.274C20.4511 34.274 20.7218 34.3813 20.9458 34.596C21.1698 34.8013 21.2818 35.0813 21.2818 35.436C21.2818 35.772 21.1698 36.052 20.9458 36.276C20.7218 36.4907 20.4511 36.598 20.1338 36.598ZM25.7078 36.64C25.0171 36.64 24.3404 36.542 23.6778 36.346C23.0244 36.1407 22.4738 35.8607 22.0258 35.506L22.7958 34.092C23.1504 34.3813 23.5798 34.6147 24.0838 34.792C24.5971 34.9693 25.1291 35.058 25.6798 35.058C26.3238 35.058 26.8278 34.9227 27.1918 34.652C27.5651 34.3813 27.7518 34.0173 27.7518 33.56C27.7518 33.252 27.6724 32.9813 27.5138 32.748C27.3644 32.5147 27.0938 32.3373 26.7018 32.216C26.3191 32.0947 25.7918 32.034 25.1198 32.034H22.7538L23.2578 26.7H29.0118V28.226H23.9298L24.8818 27.358L24.5038 31.348L23.5518 30.494H25.5258C26.4964 30.494 27.2758 30.6247 27.8638 30.886C28.4611 31.138 28.8951 31.4927 29.1658 31.95C29.4458 32.398 29.5858 32.9113 29.5858 33.49C29.5858 34.0593 29.4458 34.582 29.1658 35.058C28.8858 35.534 28.4564 35.9167 27.8778 36.206C27.3084 36.4953 26.5851 36.64 25.7078 36.64ZM42.0927 26.7H43.9127V36.5H42.0927V26.7ZM37.0247 36.5H35.2047V26.7H37.0247V36.5ZM42.2327 32.3H36.8707V30.746H42.2327V32.3ZM49.7307 36.598C48.9653 36.598 48.284 36.4347 47.6867 36.108C47.0893 35.772 46.618 35.3147 46.2727 34.736C45.9273 34.1573 45.7547 33.4993 45.7547 32.762C45.7547 32.0153 45.9273 31.3573 46.2727 30.788C46.618 30.2093 47.0893 29.7567 47.6867 29.43C48.284 29.1033 48.9653 28.94 49.7307 28.94C50.5053 28.94 51.1913 29.1033 51.7887 29.43C52.3953 29.7567 52.8667 30.2047 53.2027 30.774C53.548 31.3433 53.7207 32.006 53.7207 32.762C53.7207 33.4993 53.548 34.1573 53.2027 34.736C52.8667 35.3147 52.3953 35.772 51.7887 36.108C51.1913 36.4347 50.5053 36.598 49.7307 36.598ZM49.7307 35.1C50.16 35.1 50.5427 35.0067 50.8787 34.82C51.2147 34.6333 51.476 34.3627 51.6627 34.008C51.8587 33.6533 51.9567 33.238 51.9567 32.762C51.9567 32.2767 51.8587 31.8613 51.6627 31.516C51.476 31.1613 51.2147 30.8907 50.8787 30.704C50.5427 30.5173 50.1647 30.424 49.7447 30.424C49.3153 30.424 48.9327 30.5173 48.5967 30.704C48.27 30.8907 48.0087 31.1613 47.8127 31.516C47.6167 31.8613 47.5187 32.2767 47.5187 32.762C47.5187 33.238 47.6167 33.6533 47.8127 34.008C48.0087 34.3627 48.27 34.6333 48.5967 34.82C48.9327 35.0067 49.3107 35.1 49.7307 35.1ZM58.5581 36.598C57.9234 36.598 57.3634 36.4813 56.8781 36.248C56.3928 36.0053 56.0148 35.6413 55.7441 35.156C55.4734 34.6613 55.3381 34.0407 55.3381 33.294V29.024H57.0881V33.056C57.0881 33.728 57.2374 34.232 57.5361 34.568C57.8441 34.8947 58.2781 35.058 58.8381 35.058C59.2488 35.058 59.6034 34.974 59.9021 34.806C60.2101 34.638 60.4481 34.386 60.6161 34.05C60.7934 33.714 60.8821 33.2987 60.8821 32.804V29.024H62.6321V36.5H60.9661V34.484L61.2601 35.1C61.0081 35.5853 60.6394 35.9587 60.1541 36.22C59.6688 36.472 59.1368 36.598 58.5581 36.598ZM64.9234 36.5V29.024H66.5894V31.082L66.3934 30.48C66.6174 29.976 66.9674 29.5933 67.4434 29.332C67.9287 29.0707 68.5307 28.94 69.2494 28.94V30.606C69.1747 30.5873 69.1047 30.578 69.0394 30.578C68.9741 30.5687 68.9087 30.564 68.8434 30.564C68.1807 30.564 67.6534 30.76 67.2614 31.152C66.8694 31.5347 66.6734 32.1087 66.6734 32.874V36.5H64.9234ZM73.1123 36.598C72.487 36.598 71.885 36.5187 71.3063 36.36C70.737 36.192 70.2843 35.9913 69.9483 35.758L70.6203 34.428C70.9563 34.6427 71.3576 34.82 71.8243 34.96C72.291 35.1 72.7576 35.17 73.2243 35.17C73.775 35.17 74.1716 35.0953 74.4143 34.946C74.6663 34.7967 74.7923 34.596 74.7923 34.344C74.7923 34.1387 74.7083 33.9847 74.5403 33.882C74.3723 33.77 74.153 33.686 73.8823 33.63C73.6116 33.574 73.3083 33.5227 72.9723 33.476C72.6456 33.4293 72.3143 33.3687 71.9783 33.294C71.6516 33.21 71.353 33.0933 71.0823 32.944C70.8116 32.7853 70.5923 32.5753 70.4243 32.314C70.2563 32.0527 70.1723 31.7073 70.1723 31.278C70.1723 30.802 70.3076 30.3913 70.5783 30.046C70.849 29.6913 71.227 29.4207 71.7123 29.234C72.207 29.038 72.7903 28.94 73.4623 28.94C73.9663 28.94 74.475 28.996 74.9883 29.108C75.5016 29.22 75.9263 29.3787 76.2623 29.584L75.5903 30.914C75.2356 30.6993 74.8763 30.5547 74.5123 30.48C74.1576 30.396 73.803 30.354 73.4483 30.354C72.9163 30.354 72.5196 30.4333 72.2583 30.592C72.0063 30.7507 71.8803 30.9513 71.8803 31.194C71.8803 31.418 71.9643 31.586 72.1323 31.698C72.3003 31.81 72.5196 31.8987 72.7903 31.964C73.061 32.0293 73.3596 32.0853 73.6863 32.132C74.0223 32.1693 74.3536 32.23 74.6803 32.314C75.007 32.398 75.3056 32.5147 75.5763 32.664C75.8563 32.804 76.0803 33.0047 76.2483 33.266C76.4163 33.5273 76.5003 33.868 76.5003 34.288C76.5003 34.7547 76.3603 35.1607 76.0803 35.506C75.8096 35.8513 75.4223 36.122 74.9183 36.318C74.4143 36.5047 73.8123 36.598 73.1123 36.598Z" fill="#545454" />
                                                <path d="M6.83426 59.5V52.5H9.60426C10.3443 52.5 10.9943 52.65 11.5543 52.95C12.1143 53.25 12.5476 53.6633 12.8543 54.19C13.1676 54.7167 13.3243 55.32 13.3243 56C13.3243 56.68 13.1676 57.2833 12.8543 57.81C12.5476 58.3367 12.1143 58.75 11.5543 59.05C10.9943 59.35 10.3443 59.5 9.60426 59.5H6.83426ZM7.34426 59.04H9.56426C10.2243 59.04 10.7976 58.91 11.2843 58.65C11.7709 58.39 12.1476 58.0333 12.4143 57.58C12.6809 57.12 12.8143 56.5933 12.8143 56C12.8143 55.4067 12.6809 54.8833 12.4143 54.43C12.1476 53.97 11.7709 53.61 11.2843 53.35C10.7976 53.09 10.2243 52.96 9.56426 52.96H7.34426V59.04ZM14.936 59.5V54.28H15.436V59.5H14.936ZM15.186 53.01C15.0726 53.01 14.976 52.97 14.896 52.89C14.816 52.81 14.776 52.7167 14.776 52.61C14.776 52.4967 14.816 52.4 14.896 52.32C14.976 52.24 15.0726 52.2 15.186 52.2C15.306 52.2 15.4026 52.24 15.476 52.32C15.556 52.3933 15.596 52.4867 15.596 52.6C15.596 52.7133 15.556 52.81 15.476 52.89C15.4026 52.97 15.306 53.01 15.186 53.01ZM17.5434 59.5V54.28H18.0234V55.71L17.9734 55.55C18.1201 55.13 18.3667 54.8067 18.7134 54.58C19.0601 54.3533 19.4934 54.24 20.0134 54.24V54.73C19.9934 54.73 19.9734 54.73 19.9534 54.73C19.9334 54.7233 19.9134 54.72 19.8934 54.72C19.3134 54.72 18.8601 54.9033 18.5334 55.27C18.2067 55.63 18.0434 56.1333 18.0434 56.78V59.5H17.5434ZM23.4722 59.54C22.9456 59.54 22.4789 59.4267 22.0722 59.2C21.6656 58.9733 21.3456 58.66 21.1122 58.26C20.8856 57.86 20.7722 57.4033 20.7722 56.89C20.7722 56.37 20.8822 55.9133 21.1022 55.52C21.3222 55.12 21.6222 54.8067 22.0022 54.58C22.3822 54.3533 22.8189 54.24 23.3122 54.24C23.7789 54.24 24.1889 54.3467 24.5422 54.56C24.9022 54.7667 25.1889 55.0533 25.4022 55.42C25.6222 55.7867 25.7422 56.2033 25.7622 56.67L21.2022 57.56L21.1522 57.18L25.4722 56.34L25.2822 56.62C25.2689 56.2733 25.1789 55.9533 25.0122 55.66C24.8456 55.3667 24.6156 55.13 24.3222 54.95C24.0356 54.77 23.6989 54.68 23.3122 54.68C22.9122 54.68 22.5556 54.7733 22.2422 54.96C21.9356 55.14 21.6956 55.3933 21.5222 55.72C21.3489 56.0467 21.2622 56.4233 21.2622 56.85C21.2622 57.2967 21.3556 57.69 21.5422 58.03C21.7289 58.3633 21.9889 58.6233 22.3222 58.81C22.6556 58.9967 23.0422 59.09 23.4822 59.09C23.8156 59.09 24.1256 59.03 24.4122 58.91C24.7056 58.79 24.9522 58.6067 25.1522 58.36L25.4422 58.69C25.2156 58.97 24.9289 59.1833 24.5822 59.33C24.2422 59.47 23.8722 59.54 23.4722 59.54ZM29.379 59.54C28.8724 59.54 28.419 59.4267 28.019 59.2C27.6257 58.9733 27.3124 58.66 27.079 58.26C26.8524 57.86 26.739 57.4033 26.739 56.89C26.739 56.37 26.8524 55.91 27.079 55.51C27.3124 55.11 27.6257 54.8 28.019 54.58C28.419 54.3533 28.8724 54.24 29.379 54.24C29.799 54.24 30.179 54.32 30.519 54.48C30.8657 54.64 31.1457 54.88 31.359 55.2L30.989 55.47C30.8024 55.2033 30.569 55.0067 30.289 54.88C30.009 54.7533 29.7057 54.69 29.379 54.69C28.9724 54.69 28.6057 54.7833 28.279 54.97C27.959 55.15 27.7057 55.4067 27.519 55.74C27.339 56.0667 27.249 56.45 27.249 56.89C27.249 57.33 27.339 57.7167 27.519 58.05C27.7057 58.3767 27.959 58.6333 28.279 58.82C28.6057 59 28.9724 59.09 29.379 59.09C29.7057 59.09 30.009 59.0267 30.289 58.9C30.569 58.7733 30.8024 58.5767 30.989 58.31L31.359 58.58C31.1457 58.9 30.8657 59.14 30.519 59.3C30.179 59.46 29.799 59.54 29.379 59.54ZM34.128 59.54C33.668 59.54 33.3147 59.4133 33.068 59.16C32.828 58.9067 32.708 58.56 32.708 58.12V53.14H33.208V58.07C33.208 58.4033 33.2913 58.66 33.458 58.84C33.6247 59.02 33.8647 59.11 34.178 59.11C34.5047 59.11 34.7747 59.0133 34.988 58.82L35.198 59.17C35.0647 59.2967 34.9013 59.39 34.708 59.45C34.5213 59.51 34.328 59.54 34.128 59.54ZM32.978 54.71V54.28H34.868V54.71H32.978ZM40.3547 61.44C39.9881 60.8333 39.7047 60.1333 39.5047 59.34C39.3114 58.5467 39.2147 57.6867 39.2147 56.76C39.2147 55.8333 39.3114 54.97 39.5047 54.17C39.7047 53.3633 39.9881 52.6667 40.3547 52.08H40.8347C40.4414 52.7467 40.1547 53.4667 39.9747 54.24C39.7947 55.0133 39.7047 55.8533 39.7047 56.76C39.7047 57.6667 39.7947 58.5067 39.9747 59.28C40.1547 60.0533 40.4414 60.7733 40.8347 61.44H40.3547ZM44.9176 54.24C45.3443 54.24 45.7143 54.3233 46.0276 54.49C46.3476 54.65 46.5943 54.8967 46.7676 55.23C46.9476 55.5567 47.0376 55.9633 47.0376 56.45V59.5H46.5376V56.49C46.5376 55.9033 46.3876 55.4567 46.0876 55.15C45.7943 54.8433 45.381 54.69 44.8476 54.69C44.441 54.69 44.0876 54.7733 43.7876 54.94C43.4876 55.1067 43.2576 55.34 43.0976 55.64C42.9443 55.94 42.8676 56.3 42.8676 56.72V59.5H42.3676V54.28H42.8476V55.73L42.7776 55.57C42.9376 55.1567 43.201 54.8333 43.5676 54.6C43.9343 54.36 44.3843 54.24 44.9176 54.24ZM51.1361 59.54C50.6361 59.54 50.1895 59.4267 49.7961 59.2C49.4095 58.9733 49.0995 58.66 48.8661 58.26C48.6395 57.86 48.5261 57.4033 48.5261 56.89C48.5261 56.37 48.6395 55.9133 48.8661 55.52C49.0995 55.12 49.4095 54.8067 49.7961 54.58C50.1895 54.3533 50.6361 54.24 51.1361 54.24C51.6361 54.24 52.0828 54.3533 52.4761 54.58C52.8695 54.8067 53.1795 55.12 53.4061 55.52C53.6328 55.9133 53.7461 56.37 53.7461 56.89C53.7461 57.4033 53.6328 57.86 53.4061 58.26C53.1795 58.66 52.8695 58.9733 52.4761 59.2C52.0828 59.4267 51.6361 59.54 51.1361 59.54ZM51.1361 59.09C51.5361 59.09 51.8961 59 52.2161 58.82C52.5361 58.6333 52.7861 58.3733 52.9661 58.04C53.1461 57.7067 53.2361 57.3233 53.2361 56.89C53.2361 56.45 53.1461 56.0667 52.9661 55.74C52.7861 55.4067 52.5361 55.15 52.2161 54.97C51.8961 54.7833 51.5361 54.69 51.1361 54.69C50.7361 54.69 50.3761 54.7833 50.0561 54.97C49.7428 55.15 49.4928 55.4067 49.3061 55.74C49.1261 56.0667 49.0361 56.45 49.0361 56.89C49.0361 57.3233 49.1261 57.7067 49.3061 58.04C49.4928 58.3733 49.7428 58.6333 50.0561 58.82C50.3761 59 50.7361 59.09 51.1361 59.09ZM59.1857 59.54C58.7523 59.54 58.3457 59.4767 57.9657 59.35C57.5923 59.2233 57.3023 59.0633 57.0957 58.87L57.3257 58.47C57.5257 58.6433 57.7923 58.7933 58.1257 58.92C58.459 59.04 58.819 59.1 59.2057 59.1C59.7523 59.1 60.1457 59.01 60.3857 58.83C60.6257 58.65 60.7457 58.4133 60.7457 58.12C60.7457 57.9067 60.6823 57.74 60.5557 57.62C60.4357 57.4933 60.2723 57.3967 60.0657 57.33C59.859 57.2633 59.6323 57.21 59.3857 57.17C59.139 57.1233 58.8923 57.0733 58.6457 57.02C58.399 56.9667 58.1723 56.89 57.9657 56.79C57.759 56.69 57.5923 56.5533 57.4657 56.38C57.3457 56.2 57.2857 55.9633 57.2857 55.67C57.2857 55.4033 57.359 55.1633 57.5057 54.95C57.6523 54.7367 57.8723 54.5667 58.1657 54.44C58.459 54.3067 58.8257 54.24 59.2657 54.24C59.5923 54.24 59.919 54.2867 60.2457 54.38C60.579 54.4733 60.849 54.5967 61.0557 54.75L60.8257 55.15C60.6057 54.9833 60.359 54.8633 60.0857 54.79C59.8123 54.7167 59.5357 54.68 59.2557 54.68C58.749 54.68 58.3757 54.7733 58.1357 54.96C57.9023 55.1467 57.7857 55.38 57.7857 55.66C57.7857 55.88 57.8457 56.0567 57.9657 56.19C58.0923 56.3167 58.259 56.4167 58.4657 56.49C58.6723 56.5567 58.899 56.6133 59.1457 56.66C59.3923 56.7 59.639 56.7467 59.8857 56.8C60.1323 56.8533 60.359 56.93 60.5657 57.03C60.7723 57.1233 60.9357 57.2567 61.0557 57.43C61.1823 57.5967 61.2457 57.8233 61.2457 58.11C61.2457 58.3967 61.1657 58.6467 61.0057 58.86C60.8523 59.0733 60.6223 59.24 60.3157 59.36C60.009 59.48 59.6323 59.54 59.1857 59.54ZM64.0011 59.54C63.5411 59.54 63.1877 59.4133 62.9411 59.16C62.7011 58.9067 62.5811 58.56 62.5811 58.12V53.14H63.0811V58.07C63.0811 58.4033 63.1644 58.66 63.3311 58.84C63.4977 59.02 63.7377 59.11 64.0511 59.11C64.3777 59.11 64.6477 59.0133 64.8611 58.82L65.0711 59.17C64.9377 59.2967 64.7744 59.39 64.5811 59.45C64.3944 59.51 64.2011 59.54 64.0011 59.54ZM62.8511 54.71V54.28H64.7411V54.71H62.8511ZM68.3139 59.54C67.8139 59.54 67.3672 59.4267 66.9739 59.2C66.5872 58.9733 66.2772 58.66 66.0439 58.26C65.8172 57.86 65.7039 57.4033 65.7039 56.89C65.7039 56.37 65.8172 55.9133 66.0439 55.52C66.2772 55.12 66.5872 54.8067 66.9739 54.58C67.3672 54.3533 67.8139 54.24 68.3139 54.24C68.8139 54.24 69.2605 54.3533 69.6539 54.58C70.0472 54.8067 70.3572 55.12 70.5839 55.52C70.8105 55.9133 70.9239 56.37 70.9239 56.89C70.9239 57.4033 70.8105 57.86 70.5839 58.26C70.3572 58.66 70.0472 58.9733 69.6539 59.2C69.2605 59.4267 68.8139 59.54 68.3139 59.54ZM68.3139 59.09C68.7139 59.09 69.0739 59 69.3939 58.82C69.7139 58.6333 69.9639 58.3733 70.1439 58.04C70.3239 57.7067 70.4139 57.3233 70.4139 56.89C70.4139 56.45 70.3239 56.0667 70.1439 55.74C69.9639 55.4067 69.7139 55.15 69.3939 54.97C69.0739 54.7833 68.7139 54.69 68.3139 54.69C67.9139 54.69 67.5539 54.7833 67.2339 54.97C66.9205 55.15 66.6705 55.4067 66.4839 55.74C66.3039 56.0667 66.2139 56.45 66.2139 56.89C66.2139 57.3233 66.3039 57.7067 66.4839 58.04C66.6705 58.3733 66.9205 58.6333 67.2339 58.82C67.5539 59 67.9139 59.09 68.3139 59.09ZM75.095 59.54C74.635 59.54 74.2184 59.4333 73.845 59.22C73.4784 59.0067 73.185 58.7033 72.965 58.31C72.7517 57.91 72.645 57.4367 72.645 56.89C72.645 56.3433 72.7517 55.8733 72.965 55.48C73.185 55.08 73.4784 54.7733 73.845 54.56C74.2184 54.3467 74.635 54.24 75.095 54.24C75.5884 54.24 76.0284 54.3533 76.415 54.58C76.8084 54.8 77.115 55.11 77.335 55.51C77.5617 55.91 77.675 56.37 77.675 56.89C77.675 57.41 77.5617 57.87 77.335 58.27C77.115 58.67 76.8084 58.9833 76.415 59.21C76.0284 59.43 75.5884 59.54 75.095 59.54ZM72.475 61.44V54.28H72.955V55.99L72.875 56.9L72.975 57.81V61.44H72.475ZM75.065 59.09C75.465 59.09 75.825 59 76.145 58.82C76.465 58.6333 76.715 58.3733 76.895 58.04C77.0817 57.7067 77.175 57.3233 77.175 56.89C77.175 56.45 77.0817 56.0667 76.895 55.74C76.715 55.4067 76.465 55.15 76.145 54.97C75.825 54.7833 75.465 54.69 75.065 54.69C74.665 54.69 74.305 54.7833 73.985 54.97C73.6717 55.15 73.4217 55.4067 73.235 55.74C73.055 56.0667 72.965 56.45 72.965 56.89C72.965 57.3233 73.055 57.7067 73.235 58.04C73.4217 58.3733 73.6717 58.6333 73.985 58.82C74.305 59 74.665 59.09 75.065 59.09ZM79.1131 61.44H78.6431C79.0298 60.7733 79.3131 60.0533 79.4931 59.28C79.6731 58.5067 79.7631 57.6667 79.7631 56.76C79.7631 55.8533 79.6731 55.0133 79.4931 54.24C79.3131 53.4667 79.0298 52.7467 78.6431 52.08H79.1131C79.4798 52.6667 79.7631 53.3633 79.9631 54.17C80.1631 54.97 80.2631 55.8333 80.2631 56.76C80.2631 57.6867 80.1631 58.5467 79.9631 59.34C79.7631 60.1333 79.4798 60.8333 79.1131 61.44Z" fill="#7F7F7F" />
                                            </svg>
                                        </div>
                                        <div className='w-[40%] h-full p-4 flex gap-4 rounded-md border border-[#7F7F7F]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 18.3326H18.3337M5.30033 14.4993L3.33366 14.166L1.66699 10.8326L2.58366 10.3743C2.81629 10.2571 3.07316 10.196 3.33366 10.196C3.59416 10.196 3.85103 10.2571 4.08366 10.3743L4.22533 10.4576C4.45796 10.5748 4.71483 10.6359 4.97533 10.6359C5.23582 10.6359 5.49269 10.5748 5.72533 10.4576L6.66699 9.99929L4.16699 4.99929L4.91699 4.62429C5.19422 4.48791 5.5039 4.43127 5.81145 4.4607C6.11901 4.49014 6.41233 4.60448 6.65866 4.79096L10.0087 7.29096C10.2558 7.47905 10.5507 7.59432 10.8599 7.62377C11.1691 7.65322 11.4804 7.59568 11.7587 7.45762L15.2503 5.74096C15.6965 5.51603 16.2105 5.46552 16.692 5.59929L17.5003 5.83262C17.6673 5.879 17.8219 5.96202 17.9528 6.07563C18.0837 6.18924 18.1877 6.33059 18.2571 6.48941C18.3266 6.64823 18.3597 6.82052 18.3542 6.99377C18.3487 7.16702 18.3047 7.33686 18.2253 7.49096L17.9087 8.12429C17.717 8.50762 17.4087 8.82429 17.017 9.02429L6.31699 14.3326C6.00236 14.4885 5.64655 14.541 5.30033 14.4826V14.4993Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className='flex flex-col justify-between'>
                                                <span className='font-semibold text-[16px] leading-[24px]'>Changi International Airport</span>
                                                <div className='flex gap-[24px]'>
                                                    <span>Terminal 3</span>
                                                    <span>Singapore</span>
                                                    <span>11:30</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-start'>
                                        <div className='flex gap-[24px] items-center'>
                                            <span className='line-through font-semibold text-[16px] leading-[22px] text-[#7F7F7F] font-montserrat'>2,599,000 VND</span>
                                            <span className='text-[#F08921] font-extrabold text-[24px] leading-[22px]'>2,399,000 VND</span>
                                        </div>
                                        <div className='flex flex-col gap-[8px] items-end'>
                                            <div className='px-20 py-2 rounded-xl w-fit h-fit bg-[#3B7ACC]'>
                                                <span className='font-extrabold text-[24px] leading-[22px] text-white'>SELECT</span>
                                            </div>
                                            <span className='font-semibold text-[16px] leading-[22px] text-[#2F62A3] underline'>View Details</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full rounded-xl border border-[#272727] px-4 py-6 flex flex-col gap-[24px]'>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-[8px] items-center'>
                                            <div className='p-2 rounded-xl border border-[#7F7F7F] bg-[#FFFCF7]'>
                                                <img src={airBamBoo} className='w-[46px] h-[21px] object-contain' />
                                            </div>
                                            <span className='font-bold text-[24px] leading-[28px] text-[#272727]'>Bamboo Airlines</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>BB303</div>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>BOEING 777</div>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>Economy Class</div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-[40%] p-4 flex gap-4 rounded-md border border-[#7F7F7F]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 18.3326H18.3337M5.30033 14.4993L3.33366 14.166L1.66699 10.8326L2.58366 10.3743C2.81629 10.2571 3.07316 10.196 3.33366 10.196C3.59416 10.196 3.85103 10.2571 4.08366 10.3743L4.22533 10.4576C4.45796 10.5748 4.71483 10.6359 4.97533 10.6359C5.23582 10.6359 5.49269 10.5748 5.72533 10.4576L6.66699 9.99929L4.16699 4.99929L4.91699 4.62429C5.19422 4.48791 5.5039 4.43127 5.81145 4.4607C6.11901 4.49014 6.41233 4.60448 6.65866 4.79096L10.0087 7.29096C10.2558 7.47905 10.5507 7.59432 10.8599 7.62377C11.1691 7.65322 11.4804 7.59568 11.7587 7.45762L15.2503 5.74096C15.6965 5.51603 16.2105 5.46552 16.692 5.59929L17.5003 5.83262C17.6673 5.879 17.8219 5.96202 17.9528 6.07563C18.0837 6.18924 18.1877 6.33059 18.2571 6.48941C18.3266 6.64823 18.3597 6.82052 18.3542 6.99377C18.3487 7.16702 18.3047 7.33686 18.2253 7.49096L17.9087 8.12429C17.717 8.50762 17.4087 8.82429 17.017 9.02429L6.31699 14.3326C6.00236 14.4885 5.64655 14.541 5.30033 14.4826V14.4993Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className='flex flex-col gap-2'>
                                                <span className='font-semibold text-[16px] leading-[24px]'>Tan Son Nhat International Airport</span>
                                                <div className='flex gap-[24px]'>
                                                    <span>Terminal 3</span>
                                                    <span>Singapore</span>
                                                    <span>9:00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[10%]'>
                                            <svg width="86" height="62" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 6.5L76 6.5" stroke="#7F7F7F" />
                                                <circle cx="6" cy="6.5" r="5.5" fill="white" stroke="#7F7F7F" />
                                                <circle cx="80" cy="6.5" r="5.5" fill="#3B7ACC" stroke="#3B7ACC" />
                                                <path d="M10.6306 36.5V35.282L14.5226 31.586C14.8493 31.278 15.092 31.0073 15.2506 30.774C15.4093 30.5407 15.512 30.326 15.5586 30.13C15.6146 29.9247 15.6426 29.7333 15.6426 29.556C15.6426 29.108 15.4886 28.7627 15.1806 28.52C14.8726 28.268 14.42 28.142 13.8226 28.142C13.3466 28.142 12.9126 28.226 12.5206 28.394C12.138 28.562 11.8066 28.8187 11.5266 29.164L10.2526 28.184C10.6353 27.6707 11.1486 27.274 11.7926 26.994C12.446 26.7047 13.174 26.56 13.9766 26.56C14.686 26.56 15.302 26.6767 15.8246 26.91C16.3566 27.134 16.7626 27.456 17.0426 27.876C17.332 28.296 17.4766 28.7953 17.4766 29.374C17.4766 29.6913 17.4346 30.0087 17.3506 30.326C17.2666 30.634 17.108 30.9607 16.8746 31.306C16.6413 31.6513 16.3006 32.0387 15.8526 32.468L12.5066 35.646L12.1286 34.96H17.8546V36.5H10.6306ZM20.1338 36.598C19.8164 36.598 19.5458 36.4907 19.3218 36.276C19.0978 36.052 18.9858 35.772 18.9858 35.436C18.9858 35.0813 19.0978 34.8013 19.3218 34.596C19.5458 34.3813 19.8164 34.274 20.1338 34.274C20.4511 34.274 20.7218 34.3813 20.9458 34.596C21.1698 34.8013 21.2818 35.0813 21.2818 35.436C21.2818 35.772 21.1698 36.052 20.9458 36.276C20.7218 36.4907 20.4511 36.598 20.1338 36.598ZM25.7078 36.64C25.0171 36.64 24.3404 36.542 23.6778 36.346C23.0244 36.1407 22.4738 35.8607 22.0258 35.506L22.7958 34.092C23.1504 34.3813 23.5798 34.6147 24.0838 34.792C24.5971 34.9693 25.1291 35.058 25.6798 35.058C26.3238 35.058 26.8278 34.9227 27.1918 34.652C27.5651 34.3813 27.7518 34.0173 27.7518 33.56C27.7518 33.252 27.6724 32.9813 27.5138 32.748C27.3644 32.5147 27.0938 32.3373 26.7018 32.216C26.3191 32.0947 25.7918 32.034 25.1198 32.034H22.7538L23.2578 26.7H29.0118V28.226H23.9298L24.8818 27.358L24.5038 31.348L23.5518 30.494H25.5258C26.4964 30.494 27.2758 30.6247 27.8638 30.886C28.4611 31.138 28.8951 31.4927 29.1658 31.95C29.4458 32.398 29.5858 32.9113 29.5858 33.49C29.5858 34.0593 29.4458 34.582 29.1658 35.058C28.8858 35.534 28.4564 35.9167 27.8778 36.206C27.3084 36.4953 26.5851 36.64 25.7078 36.64ZM42.0927 26.7H43.9127V36.5H42.0927V26.7ZM37.0247 36.5H35.2047V26.7H37.0247V36.5ZM42.2327 32.3H36.8707V30.746H42.2327V32.3ZM49.7307 36.598C48.9653 36.598 48.284 36.4347 47.6867 36.108C47.0893 35.772 46.618 35.3147 46.2727 34.736C45.9273 34.1573 45.7547 33.4993 45.7547 32.762C45.7547 32.0153 45.9273 31.3573 46.2727 30.788C46.618 30.2093 47.0893 29.7567 47.6867 29.43C48.284 29.1033 48.9653 28.94 49.7307 28.94C50.5053 28.94 51.1913 29.1033 51.7887 29.43C52.3953 29.7567 52.8667 30.2047 53.2027 30.774C53.548 31.3433 53.7207 32.006 53.7207 32.762C53.7207 33.4993 53.548 34.1573 53.2027 34.736C52.8667 35.3147 52.3953 35.772 51.7887 36.108C51.1913 36.4347 50.5053 36.598 49.7307 36.598ZM49.7307 35.1C50.16 35.1 50.5427 35.0067 50.8787 34.82C51.2147 34.6333 51.476 34.3627 51.6627 34.008C51.8587 33.6533 51.9567 33.238 51.9567 32.762C51.9567 32.2767 51.8587 31.8613 51.6627 31.516C51.476 31.1613 51.2147 30.8907 50.8787 30.704C50.5427 30.5173 50.1647 30.424 49.7447 30.424C49.3153 30.424 48.9327 30.5173 48.5967 30.704C48.27 30.8907 48.0087 31.1613 47.8127 31.516C47.6167 31.8613 47.5187 32.2767 47.5187 32.762C47.5187 33.238 47.6167 33.6533 47.8127 34.008C48.0087 34.3627 48.27 34.6333 48.5967 34.82C48.9327 35.0067 49.3107 35.1 49.7307 35.1ZM58.5581 36.598C57.9234 36.598 57.3634 36.4813 56.8781 36.248C56.3928 36.0053 56.0148 35.6413 55.7441 35.156C55.4734 34.6613 55.3381 34.0407 55.3381 33.294V29.024H57.0881V33.056C57.0881 33.728 57.2374 34.232 57.5361 34.568C57.8441 34.8947 58.2781 35.058 58.8381 35.058C59.2488 35.058 59.6034 34.974 59.9021 34.806C60.2101 34.638 60.4481 34.386 60.6161 34.05C60.7934 33.714 60.8821 33.2987 60.8821 32.804V29.024H62.6321V36.5H60.9661V34.484L61.2601 35.1C61.0081 35.5853 60.6394 35.9587 60.1541 36.22C59.6688 36.472 59.1368 36.598 58.5581 36.598ZM64.9234 36.5V29.024H66.5894V31.082L66.3934 30.48C66.6174 29.976 66.9674 29.5933 67.4434 29.332C67.9287 29.0707 68.5307 28.94 69.2494 28.94V30.606C69.1747 30.5873 69.1047 30.578 69.0394 30.578C68.9741 30.5687 68.9087 30.564 68.8434 30.564C68.1807 30.564 67.6534 30.76 67.2614 31.152C66.8694 31.5347 66.6734 32.1087 66.6734 32.874V36.5H64.9234ZM73.1123 36.598C72.487 36.598 71.885 36.5187 71.3063 36.36C70.737 36.192 70.2843 35.9913 69.9483 35.758L70.6203 34.428C70.9563 34.6427 71.3576 34.82 71.8243 34.96C72.291 35.1 72.7576 35.17 73.2243 35.17C73.775 35.17 74.1716 35.0953 74.4143 34.946C74.6663 34.7967 74.7923 34.596 74.7923 34.344C74.7923 34.1387 74.7083 33.9847 74.5403 33.882C74.3723 33.77 74.153 33.686 73.8823 33.63C73.6116 33.574 73.3083 33.5227 72.9723 33.476C72.6456 33.4293 72.3143 33.3687 71.9783 33.294C71.6516 33.21 71.353 33.0933 71.0823 32.944C70.8116 32.7853 70.5923 32.5753 70.4243 32.314C70.2563 32.0527 70.1723 31.7073 70.1723 31.278C70.1723 30.802 70.3076 30.3913 70.5783 30.046C70.849 29.6913 71.227 29.4207 71.7123 29.234C72.207 29.038 72.7903 28.94 73.4623 28.94C73.9663 28.94 74.475 28.996 74.9883 29.108C75.5016 29.22 75.9263 29.3787 76.2623 29.584L75.5903 30.914C75.2356 30.6993 74.8763 30.5547 74.5123 30.48C74.1576 30.396 73.803 30.354 73.4483 30.354C72.9163 30.354 72.5196 30.4333 72.2583 30.592C72.0063 30.7507 71.8803 30.9513 71.8803 31.194C71.8803 31.418 71.9643 31.586 72.1323 31.698C72.3003 31.81 72.5196 31.8987 72.7903 31.964C73.061 32.0293 73.3596 32.0853 73.6863 32.132C74.0223 32.1693 74.3536 32.23 74.6803 32.314C75.007 32.398 75.3056 32.5147 75.5763 32.664C75.8563 32.804 76.0803 33.0047 76.2483 33.266C76.4163 33.5273 76.5003 33.868 76.5003 34.288C76.5003 34.7547 76.3603 35.1607 76.0803 35.506C75.8096 35.8513 75.4223 36.122 74.9183 36.318C74.4143 36.5047 73.8123 36.598 73.1123 36.598Z" fill="#545454" />
                                                <path d="M6.83426 59.5V52.5H9.60426C10.3443 52.5 10.9943 52.65 11.5543 52.95C12.1143 53.25 12.5476 53.6633 12.8543 54.19C13.1676 54.7167 13.3243 55.32 13.3243 56C13.3243 56.68 13.1676 57.2833 12.8543 57.81C12.5476 58.3367 12.1143 58.75 11.5543 59.05C10.9943 59.35 10.3443 59.5 9.60426 59.5H6.83426ZM7.34426 59.04H9.56426C10.2243 59.04 10.7976 58.91 11.2843 58.65C11.7709 58.39 12.1476 58.0333 12.4143 57.58C12.6809 57.12 12.8143 56.5933 12.8143 56C12.8143 55.4067 12.6809 54.8833 12.4143 54.43C12.1476 53.97 11.7709 53.61 11.2843 53.35C10.7976 53.09 10.2243 52.96 9.56426 52.96H7.34426V59.04ZM14.936 59.5V54.28H15.436V59.5H14.936ZM15.186 53.01C15.0726 53.01 14.976 52.97 14.896 52.89C14.816 52.81 14.776 52.7167 14.776 52.61C14.776 52.4967 14.816 52.4 14.896 52.32C14.976 52.24 15.0726 52.2 15.186 52.2C15.306 52.2 15.4026 52.24 15.476 52.32C15.556 52.3933 15.596 52.4867 15.596 52.6C15.596 52.7133 15.556 52.81 15.476 52.89C15.4026 52.97 15.306 53.01 15.186 53.01ZM17.5434 59.5V54.28H18.0234V55.71L17.9734 55.55C18.1201 55.13 18.3667 54.8067 18.7134 54.58C19.0601 54.3533 19.4934 54.24 20.0134 54.24V54.73C19.9934 54.73 19.9734 54.73 19.9534 54.73C19.9334 54.7233 19.9134 54.72 19.8934 54.72C19.3134 54.72 18.8601 54.9033 18.5334 55.27C18.2067 55.63 18.0434 56.1333 18.0434 56.78V59.5H17.5434ZM23.4722 59.54C22.9456 59.54 22.4789 59.4267 22.0722 59.2C21.6656 58.9733 21.3456 58.66 21.1122 58.26C20.8856 57.86 20.7722 57.4033 20.7722 56.89C20.7722 56.37 20.8822 55.9133 21.1022 55.52C21.3222 55.12 21.6222 54.8067 22.0022 54.58C22.3822 54.3533 22.8189 54.24 23.3122 54.24C23.7789 54.24 24.1889 54.3467 24.5422 54.56C24.9022 54.7667 25.1889 55.0533 25.4022 55.42C25.6222 55.7867 25.7422 56.2033 25.7622 56.67L21.2022 57.56L21.1522 57.18L25.4722 56.34L25.2822 56.62C25.2689 56.2733 25.1789 55.9533 25.0122 55.66C24.8456 55.3667 24.6156 55.13 24.3222 54.95C24.0356 54.77 23.6989 54.68 23.3122 54.68C22.9122 54.68 22.5556 54.7733 22.2422 54.96C21.9356 55.14 21.6956 55.3933 21.5222 55.72C21.3489 56.0467 21.2622 56.4233 21.2622 56.85C21.2622 57.2967 21.3556 57.69 21.5422 58.03C21.7289 58.3633 21.9889 58.6233 22.3222 58.81C22.6556 58.9967 23.0422 59.09 23.4822 59.09C23.8156 59.09 24.1256 59.03 24.4122 58.91C24.7056 58.79 24.9522 58.6067 25.1522 58.36L25.4422 58.69C25.2156 58.97 24.9289 59.1833 24.5822 59.33C24.2422 59.47 23.8722 59.54 23.4722 59.54ZM29.379 59.54C28.8724 59.54 28.419 59.4267 28.019 59.2C27.6257 58.9733 27.3124 58.66 27.079 58.26C26.8524 57.86 26.739 57.4033 26.739 56.89C26.739 56.37 26.8524 55.91 27.079 55.51C27.3124 55.11 27.6257 54.8 28.019 54.58C28.419 54.3533 28.8724 54.24 29.379 54.24C29.799 54.24 30.179 54.32 30.519 54.48C30.8657 54.64 31.1457 54.88 31.359 55.2L30.989 55.47C30.8024 55.2033 30.569 55.0067 30.289 54.88C30.009 54.7533 29.7057 54.69 29.379 54.69C28.9724 54.69 28.6057 54.7833 28.279 54.97C27.959 55.15 27.7057 55.4067 27.519 55.74C27.339 56.0667 27.249 56.45 27.249 56.89C27.249 57.33 27.339 57.7167 27.519 58.05C27.7057 58.3767 27.959 58.6333 28.279 58.82C28.6057 59 28.9724 59.09 29.379 59.09C29.7057 59.09 30.009 59.0267 30.289 58.9C30.569 58.7733 30.8024 58.5767 30.989 58.31L31.359 58.58C31.1457 58.9 30.8657 59.14 30.519 59.3C30.179 59.46 29.799 59.54 29.379 59.54ZM34.128 59.54C33.668 59.54 33.3147 59.4133 33.068 59.16C32.828 58.9067 32.708 58.56 32.708 58.12V53.14H33.208V58.07C33.208 58.4033 33.2913 58.66 33.458 58.84C33.6247 59.02 33.8647 59.11 34.178 59.11C34.5047 59.11 34.7747 59.0133 34.988 58.82L35.198 59.17C35.0647 59.2967 34.9013 59.39 34.708 59.45C34.5213 59.51 34.328 59.54 34.128 59.54ZM32.978 54.71V54.28H34.868V54.71H32.978ZM40.3547 61.44C39.9881 60.8333 39.7047 60.1333 39.5047 59.34C39.3114 58.5467 39.2147 57.6867 39.2147 56.76C39.2147 55.8333 39.3114 54.97 39.5047 54.17C39.7047 53.3633 39.9881 52.6667 40.3547 52.08H40.8347C40.4414 52.7467 40.1547 53.4667 39.9747 54.24C39.7947 55.0133 39.7047 55.8533 39.7047 56.76C39.7047 57.6667 39.7947 58.5067 39.9747 59.28C40.1547 60.0533 40.4414 60.7733 40.8347 61.44H40.3547ZM44.9176 54.24C45.3443 54.24 45.7143 54.3233 46.0276 54.49C46.3476 54.65 46.5943 54.8967 46.7676 55.23C46.9476 55.5567 47.0376 55.9633 47.0376 56.45V59.5H46.5376V56.49C46.5376 55.9033 46.3876 55.4567 46.0876 55.15C45.7943 54.8433 45.381 54.69 44.8476 54.69C44.441 54.69 44.0876 54.7733 43.7876 54.94C43.4876 55.1067 43.2576 55.34 43.0976 55.64C42.9443 55.94 42.8676 56.3 42.8676 56.72V59.5H42.3676V54.28H42.8476V55.73L42.7776 55.57C42.9376 55.1567 43.201 54.8333 43.5676 54.6C43.9343 54.36 44.3843 54.24 44.9176 54.24ZM51.1361 59.54C50.6361 59.54 50.1895 59.4267 49.7961 59.2C49.4095 58.9733 49.0995 58.66 48.8661 58.26C48.6395 57.86 48.5261 57.4033 48.5261 56.89C48.5261 56.37 48.6395 55.9133 48.8661 55.52C49.0995 55.12 49.4095 54.8067 49.7961 54.58C50.1895 54.3533 50.6361 54.24 51.1361 54.24C51.6361 54.24 52.0828 54.3533 52.4761 54.58C52.8695 54.8067 53.1795 55.12 53.4061 55.52C53.6328 55.9133 53.7461 56.37 53.7461 56.89C53.7461 57.4033 53.6328 57.86 53.4061 58.26C53.1795 58.66 52.8695 58.9733 52.4761 59.2C52.0828 59.4267 51.6361 59.54 51.1361 59.54ZM51.1361 59.09C51.5361 59.09 51.8961 59 52.2161 58.82C52.5361 58.6333 52.7861 58.3733 52.9661 58.04C53.1461 57.7067 53.2361 57.3233 53.2361 56.89C53.2361 56.45 53.1461 56.0667 52.9661 55.74C52.7861 55.4067 52.5361 55.15 52.2161 54.97C51.8961 54.7833 51.5361 54.69 51.1361 54.69C50.7361 54.69 50.3761 54.7833 50.0561 54.97C49.7428 55.15 49.4928 55.4067 49.3061 55.74C49.1261 56.0667 49.0361 56.45 49.0361 56.89C49.0361 57.3233 49.1261 57.7067 49.3061 58.04C49.4928 58.3733 49.7428 58.6333 50.0561 58.82C50.3761 59 50.7361 59.09 51.1361 59.09ZM59.1857 59.54C58.7523 59.54 58.3457 59.4767 57.9657 59.35C57.5923 59.2233 57.3023 59.0633 57.0957 58.87L57.3257 58.47C57.5257 58.6433 57.7923 58.7933 58.1257 58.92C58.459 59.04 58.819 59.1 59.2057 59.1C59.7523 59.1 60.1457 59.01 60.3857 58.83C60.6257 58.65 60.7457 58.4133 60.7457 58.12C60.7457 57.9067 60.6823 57.74 60.5557 57.62C60.4357 57.4933 60.2723 57.3967 60.0657 57.33C59.859 57.2633 59.6323 57.21 59.3857 57.17C59.139 57.1233 58.8923 57.0733 58.6457 57.02C58.399 56.9667 58.1723 56.89 57.9657 56.79C57.759 56.69 57.5923 56.5533 57.4657 56.38C57.3457 56.2 57.2857 55.9633 57.2857 55.67C57.2857 55.4033 57.359 55.1633 57.5057 54.95C57.6523 54.7367 57.8723 54.5667 58.1657 54.44C58.459 54.3067 58.8257 54.24 59.2657 54.24C59.5923 54.24 59.919 54.2867 60.2457 54.38C60.579 54.4733 60.849 54.5967 61.0557 54.75L60.8257 55.15C60.6057 54.9833 60.359 54.8633 60.0857 54.79C59.8123 54.7167 59.5357 54.68 59.2557 54.68C58.749 54.68 58.3757 54.7733 58.1357 54.96C57.9023 55.1467 57.7857 55.38 57.7857 55.66C57.7857 55.88 57.8457 56.0567 57.9657 56.19C58.0923 56.3167 58.259 56.4167 58.4657 56.49C58.6723 56.5567 58.899 56.6133 59.1457 56.66C59.3923 56.7 59.639 56.7467 59.8857 56.8C60.1323 56.8533 60.359 56.93 60.5657 57.03C60.7723 57.1233 60.9357 57.2567 61.0557 57.43C61.1823 57.5967 61.2457 57.8233 61.2457 58.11C61.2457 58.3967 61.1657 58.6467 61.0057 58.86C60.8523 59.0733 60.6223 59.24 60.3157 59.36C60.009 59.48 59.6323 59.54 59.1857 59.54ZM64.0011 59.54C63.5411 59.54 63.1877 59.4133 62.9411 59.16C62.7011 58.9067 62.5811 58.56 62.5811 58.12V53.14H63.0811V58.07C63.0811 58.4033 63.1644 58.66 63.3311 58.84C63.4977 59.02 63.7377 59.11 64.0511 59.11C64.3777 59.11 64.6477 59.0133 64.8611 58.82L65.0711 59.17C64.9377 59.2967 64.7744 59.39 64.5811 59.45C64.3944 59.51 64.2011 59.54 64.0011 59.54ZM62.8511 54.71V54.28H64.7411V54.71H62.8511ZM68.3139 59.54C67.8139 59.54 67.3672 59.4267 66.9739 59.2C66.5872 58.9733 66.2772 58.66 66.0439 58.26C65.8172 57.86 65.7039 57.4033 65.7039 56.89C65.7039 56.37 65.8172 55.9133 66.0439 55.52C66.2772 55.12 66.5872 54.8067 66.9739 54.58C67.3672 54.3533 67.8139 54.24 68.3139 54.24C68.8139 54.24 69.2605 54.3533 69.6539 54.58C70.0472 54.8067 70.3572 55.12 70.5839 55.52C70.8105 55.9133 70.9239 56.37 70.9239 56.89C70.9239 57.4033 70.8105 57.86 70.5839 58.26C70.3572 58.66 70.0472 58.9733 69.6539 59.2C69.2605 59.4267 68.8139 59.54 68.3139 59.54ZM68.3139 59.09C68.7139 59.09 69.0739 59 69.3939 58.82C69.7139 58.6333 69.9639 58.3733 70.1439 58.04C70.3239 57.7067 70.4139 57.3233 70.4139 56.89C70.4139 56.45 70.3239 56.0667 70.1439 55.74C69.9639 55.4067 69.7139 55.15 69.3939 54.97C69.0739 54.7833 68.7139 54.69 68.3139 54.69C67.9139 54.69 67.5539 54.7833 67.2339 54.97C66.9205 55.15 66.6705 55.4067 66.4839 55.74C66.3039 56.0667 66.2139 56.45 66.2139 56.89C66.2139 57.3233 66.3039 57.7067 66.4839 58.04C66.6705 58.3733 66.9205 58.6333 67.2339 58.82C67.5539 59 67.9139 59.09 68.3139 59.09ZM75.095 59.54C74.635 59.54 74.2184 59.4333 73.845 59.22C73.4784 59.0067 73.185 58.7033 72.965 58.31C72.7517 57.91 72.645 57.4367 72.645 56.89C72.645 56.3433 72.7517 55.8733 72.965 55.48C73.185 55.08 73.4784 54.7733 73.845 54.56C74.2184 54.3467 74.635 54.24 75.095 54.24C75.5884 54.24 76.0284 54.3533 76.415 54.58C76.8084 54.8 77.115 55.11 77.335 55.51C77.5617 55.91 77.675 56.37 77.675 56.89C77.675 57.41 77.5617 57.87 77.335 58.27C77.115 58.67 76.8084 58.9833 76.415 59.21C76.0284 59.43 75.5884 59.54 75.095 59.54ZM72.475 61.44V54.28H72.955V55.99L72.875 56.9L72.975 57.81V61.44H72.475ZM75.065 59.09C75.465 59.09 75.825 59 76.145 58.82C76.465 58.6333 76.715 58.3733 76.895 58.04C77.0817 57.7067 77.175 57.3233 77.175 56.89C77.175 56.45 77.0817 56.0667 76.895 55.74C76.715 55.4067 76.465 55.15 76.145 54.97C75.825 54.7833 75.465 54.69 75.065 54.69C74.665 54.69 74.305 54.7833 73.985 54.97C73.6717 55.15 73.4217 55.4067 73.235 55.74C73.055 56.0667 72.965 56.45 72.965 56.89C72.965 57.3233 73.055 57.7067 73.235 58.04C73.4217 58.3733 73.6717 58.6333 73.985 58.82C74.305 59 74.665 59.09 75.065 59.09ZM79.1131 61.44H78.6431C79.0298 60.7733 79.3131 60.0533 79.4931 59.28C79.6731 58.5067 79.7631 57.6667 79.7631 56.76C79.7631 55.8533 79.6731 55.0133 79.4931 54.24C79.3131 53.4667 79.0298 52.7467 78.6431 52.08H79.1131C79.4798 52.6667 79.7631 53.3633 79.9631 54.17C80.1631 54.97 80.2631 55.8333 80.2631 56.76C80.2631 57.6867 80.1631 58.5467 79.9631 59.34C79.7631 60.1333 79.4798 60.8333 79.1131 61.44Z" fill="#7F7F7F" />
                                            </svg>
                                        </div>
                                        <div className='w-[40%] h-full p-4 flex gap-4 rounded-md border border-[#7F7F7F]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 18.3326H18.3337M5.30033 14.4993L3.33366 14.166L1.66699 10.8326L2.58366 10.3743C2.81629 10.2571 3.07316 10.196 3.33366 10.196C3.59416 10.196 3.85103 10.2571 4.08366 10.3743L4.22533 10.4576C4.45796 10.5748 4.71483 10.6359 4.97533 10.6359C5.23582 10.6359 5.49269 10.5748 5.72533 10.4576L6.66699 9.99929L4.16699 4.99929L4.91699 4.62429C5.19422 4.48791 5.5039 4.43127 5.81145 4.4607C6.11901 4.49014 6.41233 4.60448 6.65866 4.79096L10.0087 7.29096C10.2558 7.47905 10.5507 7.59432 10.8599 7.62377C11.1691 7.65322 11.4804 7.59568 11.7587 7.45762L15.2503 5.74096C15.6965 5.51603 16.2105 5.46552 16.692 5.59929L17.5003 5.83262C17.6673 5.879 17.8219 5.96202 17.9528 6.07563C18.0837 6.18924 18.1877 6.33059 18.2571 6.48941C18.3266 6.64823 18.3597 6.82052 18.3542 6.99377C18.3487 7.16702 18.3047 7.33686 18.2253 7.49096L17.9087 8.12429C17.717 8.50762 17.4087 8.82429 17.017 9.02429L6.31699 14.3326C6.00236 14.4885 5.64655 14.541 5.30033 14.4826V14.4993Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className='flex flex-col justify-between'>
                                                <span className='font-semibold text-[16px] leading-[24px]'>Changi International Airport</span>
                                                <div className='flex gap-[24px]'>
                                                    <span>Terminal 3</span>
                                                    <span>Singapore</span>
                                                    <span>11:30</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-start'>
                                        <div className='flex gap-[24px] items-center'>
                                            <span className='line-through font-semibold text-[16px] leading-[22px] text-[#7F7F7F] font-montserrat'>2,599,000 VND</span>
                                            <span className='text-[#F08921] font-extrabold text-[24px] leading-[22px]'>2,399,000 VND</span>
                                        </div>
                                        <div className='flex flex-col gap-[8px] items-end'>
                                            <div className='px-20 py-2 rounded-xl w-fit h-fit bg-[#3B7ACC]'>
                                                <span className='font-extrabold text-[24px] leading-[22px] text-white'>SELECT</span>
                                            </div>
                                            <span className='font-semibold text-[16px] leading-[22px] text-[#2F62A3] underline'>View Details</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full rounded-xl border border-[#272727] px-4 py-6 flex flex-col gap-[24px]'>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-[8px] items-center'>
                                            <div className='p-2 rounded-xl border border-[#7F7F7F] bg-[#FFFCF7]'>
                                                <img src={airBamBoo} className='w-[46px] h-[21px] object-contain' />
                                            </div>
                                            <span className='font-bold text-[24px] leading-[28px] text-[#272727]'>Bamboo Airlines</span>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>BB303</div>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>BOEING 777</div>
                                            <div className='px-4 py-1 border border-[#7F7F7F] rounded-xl flex justify-center items-center'>Economy Class</div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-[40%] p-4 flex gap-4 rounded-md border border-[#7F7F7F]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 18.3326H18.3337M5.30033 14.4993L3.33366 14.166L1.66699 10.8326L2.58366 10.3743C2.81629 10.2571 3.07316 10.196 3.33366 10.196C3.59416 10.196 3.85103 10.2571 4.08366 10.3743L4.22533 10.4576C4.45796 10.5748 4.71483 10.6359 4.97533 10.6359C5.23582 10.6359 5.49269 10.5748 5.72533 10.4576L6.66699 9.99929L4.16699 4.99929L4.91699 4.62429C5.19422 4.48791 5.5039 4.43127 5.81145 4.4607C6.11901 4.49014 6.41233 4.60448 6.65866 4.79096L10.0087 7.29096C10.2558 7.47905 10.5507 7.59432 10.8599 7.62377C11.1691 7.65322 11.4804 7.59568 11.7587 7.45762L15.2503 5.74096C15.6965 5.51603 16.2105 5.46552 16.692 5.59929L17.5003 5.83262C17.6673 5.879 17.8219 5.96202 17.9528 6.07563C18.0837 6.18924 18.1877 6.33059 18.2571 6.48941C18.3266 6.64823 18.3597 6.82052 18.3542 6.99377C18.3487 7.16702 18.3047 7.33686 18.2253 7.49096L17.9087 8.12429C17.717 8.50762 17.4087 8.82429 17.017 9.02429L6.31699 14.3326C6.00236 14.4885 5.64655 14.541 5.30033 14.4826V14.4993Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className='flex flex-col gap-2'>
                                                <span className='font-semibold text-[16px] leading-[24px]'>Tan Son Nhat International Airport</span>
                                                <div className='flex gap-[24px]'>
                                                    <span>Terminal 3</span>
                                                    <span>Singapore</span>
                                                    <span>9:00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[10%]'>
                                            <svg width="86" height="62" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 6.5L76 6.5" stroke="#7F7F7F" />
                                                <circle cx="6" cy="6.5" r="5.5" fill="white" stroke="#7F7F7F" />
                                                <circle cx="80" cy="6.5" r="5.5" fill="#3B7ACC" stroke="#3B7ACC" />
                                                <path d="M10.6306 36.5V35.282L14.5226 31.586C14.8493 31.278 15.092 31.0073 15.2506 30.774C15.4093 30.5407 15.512 30.326 15.5586 30.13C15.6146 29.9247 15.6426 29.7333 15.6426 29.556C15.6426 29.108 15.4886 28.7627 15.1806 28.52C14.8726 28.268 14.42 28.142 13.8226 28.142C13.3466 28.142 12.9126 28.226 12.5206 28.394C12.138 28.562 11.8066 28.8187 11.5266 29.164L10.2526 28.184C10.6353 27.6707 11.1486 27.274 11.7926 26.994C12.446 26.7047 13.174 26.56 13.9766 26.56C14.686 26.56 15.302 26.6767 15.8246 26.91C16.3566 27.134 16.7626 27.456 17.0426 27.876C17.332 28.296 17.4766 28.7953 17.4766 29.374C17.4766 29.6913 17.4346 30.0087 17.3506 30.326C17.2666 30.634 17.108 30.9607 16.8746 31.306C16.6413 31.6513 16.3006 32.0387 15.8526 32.468L12.5066 35.646L12.1286 34.96H17.8546V36.5H10.6306ZM20.1338 36.598C19.8164 36.598 19.5458 36.4907 19.3218 36.276C19.0978 36.052 18.9858 35.772 18.9858 35.436C18.9858 35.0813 19.0978 34.8013 19.3218 34.596C19.5458 34.3813 19.8164 34.274 20.1338 34.274C20.4511 34.274 20.7218 34.3813 20.9458 34.596C21.1698 34.8013 21.2818 35.0813 21.2818 35.436C21.2818 35.772 21.1698 36.052 20.9458 36.276C20.7218 36.4907 20.4511 36.598 20.1338 36.598ZM25.7078 36.64C25.0171 36.64 24.3404 36.542 23.6778 36.346C23.0244 36.1407 22.4738 35.8607 22.0258 35.506L22.7958 34.092C23.1504 34.3813 23.5798 34.6147 24.0838 34.792C24.5971 34.9693 25.1291 35.058 25.6798 35.058C26.3238 35.058 26.8278 34.9227 27.1918 34.652C27.5651 34.3813 27.7518 34.0173 27.7518 33.56C27.7518 33.252 27.6724 32.9813 27.5138 32.748C27.3644 32.5147 27.0938 32.3373 26.7018 32.216C26.3191 32.0947 25.7918 32.034 25.1198 32.034H22.7538L23.2578 26.7H29.0118V28.226H23.9298L24.8818 27.358L24.5038 31.348L23.5518 30.494H25.5258C26.4964 30.494 27.2758 30.6247 27.8638 30.886C28.4611 31.138 28.8951 31.4927 29.1658 31.95C29.4458 32.398 29.5858 32.9113 29.5858 33.49C29.5858 34.0593 29.4458 34.582 29.1658 35.058C28.8858 35.534 28.4564 35.9167 27.8778 36.206C27.3084 36.4953 26.5851 36.64 25.7078 36.64ZM42.0927 26.7H43.9127V36.5H42.0927V26.7ZM37.0247 36.5H35.2047V26.7H37.0247V36.5ZM42.2327 32.3H36.8707V30.746H42.2327V32.3ZM49.7307 36.598C48.9653 36.598 48.284 36.4347 47.6867 36.108C47.0893 35.772 46.618 35.3147 46.2727 34.736C45.9273 34.1573 45.7547 33.4993 45.7547 32.762C45.7547 32.0153 45.9273 31.3573 46.2727 30.788C46.618 30.2093 47.0893 29.7567 47.6867 29.43C48.284 29.1033 48.9653 28.94 49.7307 28.94C50.5053 28.94 51.1913 29.1033 51.7887 29.43C52.3953 29.7567 52.8667 30.2047 53.2027 30.774C53.548 31.3433 53.7207 32.006 53.7207 32.762C53.7207 33.4993 53.548 34.1573 53.2027 34.736C52.8667 35.3147 52.3953 35.772 51.7887 36.108C51.1913 36.4347 50.5053 36.598 49.7307 36.598ZM49.7307 35.1C50.16 35.1 50.5427 35.0067 50.8787 34.82C51.2147 34.6333 51.476 34.3627 51.6627 34.008C51.8587 33.6533 51.9567 33.238 51.9567 32.762C51.9567 32.2767 51.8587 31.8613 51.6627 31.516C51.476 31.1613 51.2147 30.8907 50.8787 30.704C50.5427 30.5173 50.1647 30.424 49.7447 30.424C49.3153 30.424 48.9327 30.5173 48.5967 30.704C48.27 30.8907 48.0087 31.1613 47.8127 31.516C47.6167 31.8613 47.5187 32.2767 47.5187 32.762C47.5187 33.238 47.6167 33.6533 47.8127 34.008C48.0087 34.3627 48.27 34.6333 48.5967 34.82C48.9327 35.0067 49.3107 35.1 49.7307 35.1ZM58.5581 36.598C57.9234 36.598 57.3634 36.4813 56.8781 36.248C56.3928 36.0053 56.0148 35.6413 55.7441 35.156C55.4734 34.6613 55.3381 34.0407 55.3381 33.294V29.024H57.0881V33.056C57.0881 33.728 57.2374 34.232 57.5361 34.568C57.8441 34.8947 58.2781 35.058 58.8381 35.058C59.2488 35.058 59.6034 34.974 59.9021 34.806C60.2101 34.638 60.4481 34.386 60.6161 34.05C60.7934 33.714 60.8821 33.2987 60.8821 32.804V29.024H62.6321V36.5H60.9661V34.484L61.2601 35.1C61.0081 35.5853 60.6394 35.9587 60.1541 36.22C59.6688 36.472 59.1368 36.598 58.5581 36.598ZM64.9234 36.5V29.024H66.5894V31.082L66.3934 30.48C66.6174 29.976 66.9674 29.5933 67.4434 29.332C67.9287 29.0707 68.5307 28.94 69.2494 28.94V30.606C69.1747 30.5873 69.1047 30.578 69.0394 30.578C68.9741 30.5687 68.9087 30.564 68.8434 30.564C68.1807 30.564 67.6534 30.76 67.2614 31.152C66.8694 31.5347 66.6734 32.1087 66.6734 32.874V36.5H64.9234ZM73.1123 36.598C72.487 36.598 71.885 36.5187 71.3063 36.36C70.737 36.192 70.2843 35.9913 69.9483 35.758L70.6203 34.428C70.9563 34.6427 71.3576 34.82 71.8243 34.96C72.291 35.1 72.7576 35.17 73.2243 35.17C73.775 35.17 74.1716 35.0953 74.4143 34.946C74.6663 34.7967 74.7923 34.596 74.7923 34.344C74.7923 34.1387 74.7083 33.9847 74.5403 33.882C74.3723 33.77 74.153 33.686 73.8823 33.63C73.6116 33.574 73.3083 33.5227 72.9723 33.476C72.6456 33.4293 72.3143 33.3687 71.9783 33.294C71.6516 33.21 71.353 33.0933 71.0823 32.944C70.8116 32.7853 70.5923 32.5753 70.4243 32.314C70.2563 32.0527 70.1723 31.7073 70.1723 31.278C70.1723 30.802 70.3076 30.3913 70.5783 30.046C70.849 29.6913 71.227 29.4207 71.7123 29.234C72.207 29.038 72.7903 28.94 73.4623 28.94C73.9663 28.94 74.475 28.996 74.9883 29.108C75.5016 29.22 75.9263 29.3787 76.2623 29.584L75.5903 30.914C75.2356 30.6993 74.8763 30.5547 74.5123 30.48C74.1576 30.396 73.803 30.354 73.4483 30.354C72.9163 30.354 72.5196 30.4333 72.2583 30.592C72.0063 30.7507 71.8803 30.9513 71.8803 31.194C71.8803 31.418 71.9643 31.586 72.1323 31.698C72.3003 31.81 72.5196 31.8987 72.7903 31.964C73.061 32.0293 73.3596 32.0853 73.6863 32.132C74.0223 32.1693 74.3536 32.23 74.6803 32.314C75.007 32.398 75.3056 32.5147 75.5763 32.664C75.8563 32.804 76.0803 33.0047 76.2483 33.266C76.4163 33.5273 76.5003 33.868 76.5003 34.288C76.5003 34.7547 76.3603 35.1607 76.0803 35.506C75.8096 35.8513 75.4223 36.122 74.9183 36.318C74.4143 36.5047 73.8123 36.598 73.1123 36.598Z" fill="#545454" />
                                                <path d="M6.83426 59.5V52.5H9.60426C10.3443 52.5 10.9943 52.65 11.5543 52.95C12.1143 53.25 12.5476 53.6633 12.8543 54.19C13.1676 54.7167 13.3243 55.32 13.3243 56C13.3243 56.68 13.1676 57.2833 12.8543 57.81C12.5476 58.3367 12.1143 58.75 11.5543 59.05C10.9943 59.35 10.3443 59.5 9.60426 59.5H6.83426ZM7.34426 59.04H9.56426C10.2243 59.04 10.7976 58.91 11.2843 58.65C11.7709 58.39 12.1476 58.0333 12.4143 57.58C12.6809 57.12 12.8143 56.5933 12.8143 56C12.8143 55.4067 12.6809 54.8833 12.4143 54.43C12.1476 53.97 11.7709 53.61 11.2843 53.35C10.7976 53.09 10.2243 52.96 9.56426 52.96H7.34426V59.04ZM14.936 59.5V54.28H15.436V59.5H14.936ZM15.186 53.01C15.0726 53.01 14.976 52.97 14.896 52.89C14.816 52.81 14.776 52.7167 14.776 52.61C14.776 52.4967 14.816 52.4 14.896 52.32C14.976 52.24 15.0726 52.2 15.186 52.2C15.306 52.2 15.4026 52.24 15.476 52.32C15.556 52.3933 15.596 52.4867 15.596 52.6C15.596 52.7133 15.556 52.81 15.476 52.89C15.4026 52.97 15.306 53.01 15.186 53.01ZM17.5434 59.5V54.28H18.0234V55.71L17.9734 55.55C18.1201 55.13 18.3667 54.8067 18.7134 54.58C19.0601 54.3533 19.4934 54.24 20.0134 54.24V54.73C19.9934 54.73 19.9734 54.73 19.9534 54.73C19.9334 54.7233 19.9134 54.72 19.8934 54.72C19.3134 54.72 18.8601 54.9033 18.5334 55.27C18.2067 55.63 18.0434 56.1333 18.0434 56.78V59.5H17.5434ZM23.4722 59.54C22.9456 59.54 22.4789 59.4267 22.0722 59.2C21.6656 58.9733 21.3456 58.66 21.1122 58.26C20.8856 57.86 20.7722 57.4033 20.7722 56.89C20.7722 56.37 20.8822 55.9133 21.1022 55.52C21.3222 55.12 21.6222 54.8067 22.0022 54.58C22.3822 54.3533 22.8189 54.24 23.3122 54.24C23.7789 54.24 24.1889 54.3467 24.5422 54.56C24.9022 54.7667 25.1889 55.0533 25.4022 55.42C25.6222 55.7867 25.7422 56.2033 25.7622 56.67L21.2022 57.56L21.1522 57.18L25.4722 56.34L25.2822 56.62C25.2689 56.2733 25.1789 55.9533 25.0122 55.66C24.8456 55.3667 24.6156 55.13 24.3222 54.95C24.0356 54.77 23.6989 54.68 23.3122 54.68C22.9122 54.68 22.5556 54.7733 22.2422 54.96C21.9356 55.14 21.6956 55.3933 21.5222 55.72C21.3489 56.0467 21.2622 56.4233 21.2622 56.85C21.2622 57.2967 21.3556 57.69 21.5422 58.03C21.7289 58.3633 21.9889 58.6233 22.3222 58.81C22.6556 58.9967 23.0422 59.09 23.4822 59.09C23.8156 59.09 24.1256 59.03 24.4122 58.91C24.7056 58.79 24.9522 58.6067 25.1522 58.36L25.4422 58.69C25.2156 58.97 24.9289 59.1833 24.5822 59.33C24.2422 59.47 23.8722 59.54 23.4722 59.54ZM29.379 59.54C28.8724 59.54 28.419 59.4267 28.019 59.2C27.6257 58.9733 27.3124 58.66 27.079 58.26C26.8524 57.86 26.739 57.4033 26.739 56.89C26.739 56.37 26.8524 55.91 27.079 55.51C27.3124 55.11 27.6257 54.8 28.019 54.58C28.419 54.3533 28.8724 54.24 29.379 54.24C29.799 54.24 30.179 54.32 30.519 54.48C30.8657 54.64 31.1457 54.88 31.359 55.2L30.989 55.47C30.8024 55.2033 30.569 55.0067 30.289 54.88C30.009 54.7533 29.7057 54.69 29.379 54.69C28.9724 54.69 28.6057 54.7833 28.279 54.97C27.959 55.15 27.7057 55.4067 27.519 55.74C27.339 56.0667 27.249 56.45 27.249 56.89C27.249 57.33 27.339 57.7167 27.519 58.05C27.7057 58.3767 27.959 58.6333 28.279 58.82C28.6057 59 28.9724 59.09 29.379 59.09C29.7057 59.09 30.009 59.0267 30.289 58.9C30.569 58.7733 30.8024 58.5767 30.989 58.31L31.359 58.58C31.1457 58.9 30.8657 59.14 30.519 59.3C30.179 59.46 29.799 59.54 29.379 59.54ZM34.128 59.54C33.668 59.54 33.3147 59.4133 33.068 59.16C32.828 58.9067 32.708 58.56 32.708 58.12V53.14H33.208V58.07C33.208 58.4033 33.2913 58.66 33.458 58.84C33.6247 59.02 33.8647 59.11 34.178 59.11C34.5047 59.11 34.7747 59.0133 34.988 58.82L35.198 59.17C35.0647 59.2967 34.9013 59.39 34.708 59.45C34.5213 59.51 34.328 59.54 34.128 59.54ZM32.978 54.71V54.28H34.868V54.71H32.978ZM40.3547 61.44C39.9881 60.8333 39.7047 60.1333 39.5047 59.34C39.3114 58.5467 39.2147 57.6867 39.2147 56.76C39.2147 55.8333 39.3114 54.97 39.5047 54.17C39.7047 53.3633 39.9881 52.6667 40.3547 52.08H40.8347C40.4414 52.7467 40.1547 53.4667 39.9747 54.24C39.7947 55.0133 39.7047 55.8533 39.7047 56.76C39.7047 57.6667 39.7947 58.5067 39.9747 59.28C40.1547 60.0533 40.4414 60.7733 40.8347 61.44H40.3547ZM44.9176 54.24C45.3443 54.24 45.7143 54.3233 46.0276 54.49C46.3476 54.65 46.5943 54.8967 46.7676 55.23C46.9476 55.5567 47.0376 55.9633 47.0376 56.45V59.5H46.5376V56.49C46.5376 55.9033 46.3876 55.4567 46.0876 55.15C45.7943 54.8433 45.381 54.69 44.8476 54.69C44.441 54.69 44.0876 54.7733 43.7876 54.94C43.4876 55.1067 43.2576 55.34 43.0976 55.64C42.9443 55.94 42.8676 56.3 42.8676 56.72V59.5H42.3676V54.28H42.8476V55.73L42.7776 55.57C42.9376 55.1567 43.201 54.8333 43.5676 54.6C43.9343 54.36 44.3843 54.24 44.9176 54.24ZM51.1361 59.54C50.6361 59.54 50.1895 59.4267 49.7961 59.2C49.4095 58.9733 49.0995 58.66 48.8661 58.26C48.6395 57.86 48.5261 57.4033 48.5261 56.89C48.5261 56.37 48.6395 55.9133 48.8661 55.52C49.0995 55.12 49.4095 54.8067 49.7961 54.58C50.1895 54.3533 50.6361 54.24 51.1361 54.24C51.6361 54.24 52.0828 54.3533 52.4761 54.58C52.8695 54.8067 53.1795 55.12 53.4061 55.52C53.6328 55.9133 53.7461 56.37 53.7461 56.89C53.7461 57.4033 53.6328 57.86 53.4061 58.26C53.1795 58.66 52.8695 58.9733 52.4761 59.2C52.0828 59.4267 51.6361 59.54 51.1361 59.54ZM51.1361 59.09C51.5361 59.09 51.8961 59 52.2161 58.82C52.5361 58.6333 52.7861 58.3733 52.9661 58.04C53.1461 57.7067 53.2361 57.3233 53.2361 56.89C53.2361 56.45 53.1461 56.0667 52.9661 55.74C52.7861 55.4067 52.5361 55.15 52.2161 54.97C51.8961 54.7833 51.5361 54.69 51.1361 54.69C50.7361 54.69 50.3761 54.7833 50.0561 54.97C49.7428 55.15 49.4928 55.4067 49.3061 55.74C49.1261 56.0667 49.0361 56.45 49.0361 56.89C49.0361 57.3233 49.1261 57.7067 49.3061 58.04C49.4928 58.3733 49.7428 58.6333 50.0561 58.82C50.3761 59 50.7361 59.09 51.1361 59.09ZM59.1857 59.54C58.7523 59.54 58.3457 59.4767 57.9657 59.35C57.5923 59.2233 57.3023 59.0633 57.0957 58.87L57.3257 58.47C57.5257 58.6433 57.7923 58.7933 58.1257 58.92C58.459 59.04 58.819 59.1 59.2057 59.1C59.7523 59.1 60.1457 59.01 60.3857 58.83C60.6257 58.65 60.7457 58.4133 60.7457 58.12C60.7457 57.9067 60.6823 57.74 60.5557 57.62C60.4357 57.4933 60.2723 57.3967 60.0657 57.33C59.859 57.2633 59.6323 57.21 59.3857 57.17C59.139 57.1233 58.8923 57.0733 58.6457 57.02C58.399 56.9667 58.1723 56.89 57.9657 56.79C57.759 56.69 57.5923 56.5533 57.4657 56.38C57.3457 56.2 57.2857 55.9633 57.2857 55.67C57.2857 55.4033 57.359 55.1633 57.5057 54.95C57.6523 54.7367 57.8723 54.5667 58.1657 54.44C58.459 54.3067 58.8257 54.24 59.2657 54.24C59.5923 54.24 59.919 54.2867 60.2457 54.38C60.579 54.4733 60.849 54.5967 61.0557 54.75L60.8257 55.15C60.6057 54.9833 60.359 54.8633 60.0857 54.79C59.8123 54.7167 59.5357 54.68 59.2557 54.68C58.749 54.68 58.3757 54.7733 58.1357 54.96C57.9023 55.1467 57.7857 55.38 57.7857 55.66C57.7857 55.88 57.8457 56.0567 57.9657 56.19C58.0923 56.3167 58.259 56.4167 58.4657 56.49C58.6723 56.5567 58.899 56.6133 59.1457 56.66C59.3923 56.7 59.639 56.7467 59.8857 56.8C60.1323 56.8533 60.359 56.93 60.5657 57.03C60.7723 57.1233 60.9357 57.2567 61.0557 57.43C61.1823 57.5967 61.2457 57.8233 61.2457 58.11C61.2457 58.3967 61.1657 58.6467 61.0057 58.86C60.8523 59.0733 60.6223 59.24 60.3157 59.36C60.009 59.48 59.6323 59.54 59.1857 59.54ZM64.0011 59.54C63.5411 59.54 63.1877 59.4133 62.9411 59.16C62.7011 58.9067 62.5811 58.56 62.5811 58.12V53.14H63.0811V58.07C63.0811 58.4033 63.1644 58.66 63.3311 58.84C63.4977 59.02 63.7377 59.11 64.0511 59.11C64.3777 59.11 64.6477 59.0133 64.8611 58.82L65.0711 59.17C64.9377 59.2967 64.7744 59.39 64.5811 59.45C64.3944 59.51 64.2011 59.54 64.0011 59.54ZM62.8511 54.71V54.28H64.7411V54.71H62.8511ZM68.3139 59.54C67.8139 59.54 67.3672 59.4267 66.9739 59.2C66.5872 58.9733 66.2772 58.66 66.0439 58.26C65.8172 57.86 65.7039 57.4033 65.7039 56.89C65.7039 56.37 65.8172 55.9133 66.0439 55.52C66.2772 55.12 66.5872 54.8067 66.9739 54.58C67.3672 54.3533 67.8139 54.24 68.3139 54.24C68.8139 54.24 69.2605 54.3533 69.6539 54.58C70.0472 54.8067 70.3572 55.12 70.5839 55.52C70.8105 55.9133 70.9239 56.37 70.9239 56.89C70.9239 57.4033 70.8105 57.86 70.5839 58.26C70.3572 58.66 70.0472 58.9733 69.6539 59.2C69.2605 59.4267 68.8139 59.54 68.3139 59.54ZM68.3139 59.09C68.7139 59.09 69.0739 59 69.3939 58.82C69.7139 58.6333 69.9639 58.3733 70.1439 58.04C70.3239 57.7067 70.4139 57.3233 70.4139 56.89C70.4139 56.45 70.3239 56.0667 70.1439 55.74C69.9639 55.4067 69.7139 55.15 69.3939 54.97C69.0739 54.7833 68.7139 54.69 68.3139 54.69C67.9139 54.69 67.5539 54.7833 67.2339 54.97C66.9205 55.15 66.6705 55.4067 66.4839 55.74C66.3039 56.0667 66.2139 56.45 66.2139 56.89C66.2139 57.3233 66.3039 57.7067 66.4839 58.04C66.6705 58.3733 66.9205 58.6333 67.2339 58.82C67.5539 59 67.9139 59.09 68.3139 59.09ZM75.095 59.54C74.635 59.54 74.2184 59.4333 73.845 59.22C73.4784 59.0067 73.185 58.7033 72.965 58.31C72.7517 57.91 72.645 57.4367 72.645 56.89C72.645 56.3433 72.7517 55.8733 72.965 55.48C73.185 55.08 73.4784 54.7733 73.845 54.56C74.2184 54.3467 74.635 54.24 75.095 54.24C75.5884 54.24 76.0284 54.3533 76.415 54.58C76.8084 54.8 77.115 55.11 77.335 55.51C77.5617 55.91 77.675 56.37 77.675 56.89C77.675 57.41 77.5617 57.87 77.335 58.27C77.115 58.67 76.8084 58.9833 76.415 59.21C76.0284 59.43 75.5884 59.54 75.095 59.54ZM72.475 61.44V54.28H72.955V55.99L72.875 56.9L72.975 57.81V61.44H72.475ZM75.065 59.09C75.465 59.09 75.825 59 76.145 58.82C76.465 58.6333 76.715 58.3733 76.895 58.04C77.0817 57.7067 77.175 57.3233 77.175 56.89C77.175 56.45 77.0817 56.0667 76.895 55.74C76.715 55.4067 76.465 55.15 76.145 54.97C75.825 54.7833 75.465 54.69 75.065 54.69C74.665 54.69 74.305 54.7833 73.985 54.97C73.6717 55.15 73.4217 55.4067 73.235 55.74C73.055 56.0667 72.965 56.45 72.965 56.89C72.965 57.3233 73.055 57.7067 73.235 58.04C73.4217 58.3733 73.6717 58.6333 73.985 58.82C74.305 59 74.665 59.09 75.065 59.09ZM79.1131 61.44H78.6431C79.0298 60.7733 79.3131 60.0533 79.4931 59.28C79.6731 58.5067 79.7631 57.6667 79.7631 56.76C79.7631 55.8533 79.6731 55.0133 79.4931 54.24C79.3131 53.4667 79.0298 52.7467 78.6431 52.08H79.1131C79.4798 52.6667 79.7631 53.3633 79.9631 54.17C80.1631 54.97 80.2631 55.8333 80.2631 56.76C80.2631 57.6867 80.1631 58.5467 79.9631 59.34C79.7631 60.1333 79.4798 60.8333 79.1131 61.44Z" fill="#7F7F7F" />
                                            </svg>
                                        </div>
                                        <div className='w-[40%] h-full p-4 flex gap-4 rounded-md border border-[#7F7F7F]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66699 18.3326H18.3337M5.30033 14.4993L3.33366 14.166L1.66699 10.8326L2.58366 10.3743C2.81629 10.2571 3.07316 10.196 3.33366 10.196C3.59416 10.196 3.85103 10.2571 4.08366 10.3743L4.22533 10.4576C4.45796 10.5748 4.71483 10.6359 4.97533 10.6359C5.23582 10.6359 5.49269 10.5748 5.72533 10.4576L6.66699 9.99929L4.16699 4.99929L4.91699 4.62429C5.19422 4.48791 5.5039 4.43127 5.81145 4.4607C6.11901 4.49014 6.41233 4.60448 6.65866 4.79096L10.0087 7.29096C10.2558 7.47905 10.5507 7.59432 10.8599 7.62377C11.1691 7.65322 11.4804 7.59568 11.7587 7.45762L15.2503 5.74096C15.6965 5.51603 16.2105 5.46552 16.692 5.59929L17.5003 5.83262C17.6673 5.879 17.8219 5.96202 17.9528 6.07563C18.0837 6.18924 18.1877 6.33059 18.2571 6.48941C18.3266 6.64823 18.3597 6.82052 18.3542 6.99377C18.3487 7.16702 18.3047 7.33686 18.2253 7.49096L17.9087 8.12429C17.717 8.50762 17.4087 8.82429 17.017 9.02429L6.31699 14.3326C6.00236 14.4885 5.64655 14.541 5.30033 14.4826V14.4993Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className='flex flex-col justify-between'>
                                                <span className='font-semibold text-[16px] leading-[24px]'>Changi International Airport</span>
                                                <div className='flex gap-[24px]'>
                                                    <span>Terminal 3</span>
                                                    <span>Singapore</span>
                                                    <span>11:30</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-start'>
                                        <div className='flex gap-[24px] items-center'>
                                            <span className='line-through font-semibold text-[16px] leading-[22px] text-[#7F7F7F] font-montserrat'>2,599,000 VND</span>
                                            <span className='text-[#F08921] font-extrabold text-[24px] leading-[22px]'>2,399,000 VND</span>
                                        </div>
                                        <div className='flex flex-col gap-[8px] items-end'>
                                            <div className='px-20 py-2 rounded-xl w-fit h-fit bg-[#3B7ACC]'>
                                                <span className='font-extrabold text-[24px] leading-[22px] text-white'>SELECT</span>
                                            </div>
                                            <span className='font-semibold text-[16px] leading-[22px] text-[#2F62A3] underline'>View Details</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFlight