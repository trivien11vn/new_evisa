'use client'
import { useEffect, useRef, useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BsFillStarFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import path from '@/utils/path';
import { SelectCountry, SelectTravel } from '@/components/Select';
import Image from 'next/image';

const suitcaseImage = '/assets/suitcase.png';
const support247 = '/assets/suuport247.svg';
const item1 = '/assets/item1.svg';
const item2 = '/assets/item2.svg';
const item3 = '/assets/item3.svg';


const VisaHome = () => {

    const [showSelectCountry, setShowSelectCountry] = useState(false)

    const [showSelectTravel, setShowSelectTravel] = useState(false)

    const showSelectRef = useRef(null)
    const showSelectTravelRef = useRef(null)

    const router = useRouter();

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


    const handleShowSelectCountry = () => {
        setShowSelectCountry(true)
    }

    const handleShowSelectTravel = () => {
        setShowSelectTravel(true)
    }
    return (
        <div className='my-[24px] full relative w-full'>
            <div className='h-[240px] hidden lg:flex items-center absolute left-0'>
                <div className='w-[80px] h-[20px] my-auto bg-[#F08921]'></div>
            </div>
            <div className='w-full p-4 lg:p-0 lg:w-main mx-auto flex flex-col lg:flex-row justify-between'>
                <div className='flex flex-col gap-[24px] w-full lg:w-[623px]'>
                    <div className='flex flex-col justify-between w-full lg:h-[240px]'>
                        <span className='text-[40px] md:text-[48px] lg:text-[56px] font-extrabold'>FIND YOUR DESTINATION!</span>
                        <span className='text-[24px] md:text-[28px] lg:text-[32px] font-[400px]'>Let us apply the paperworks or eVISA for your trip.</span>
                    </div>
                    <div className='w-full h-[180px] flex flex-col gap-[24px] mt-[20px]'>
                        <div className='flex justify-between lg:gap-[24px]'>
                            <div ref={showSelectRef} className='cursor-pointer w-[45%] lg:w-[300px] flex flex-col gap-2 relative' onClick={handleShowSelectCountry}>
                                <span className='font-semibold text-[18px] leading-[24px]'>Your Nationality</span>
                                <div className='w-full lg:w-[300px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                                {showSelectCountry && <SelectCountry />}
                            </div>
                            <div ref={showSelectTravelRef} className='cursor-pointer w-[45%] lg:w-[300px] flex flex-col gap-2 relative' onClick={handleShowSelectTravel}>
                                <span className='font-semibold text-[18px] leading-[24px]'>Travelling to</span>
                                <div className='w-full lg:w-[300px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                                {showSelectTravel && <SelectTravel />}
                            </div>
                        </div>
                        <div
                            onClick={() => { router.push(`/${path.VISA_APPLY}`); }}
                            className='cursor-pointer w-full lg:w-[645px] h-[48px] rounded-lg bg-[#3B7ACC] flex justify-center items-center text-white font-[700] leading-[24px] text-[16px] gap-1 
                        hover:bg-white hover:text-[#3B7ACC] hover:border-[#3B7ACC] border border-transparent transition-all duration-300 ease-in-out'>
                            GET STARTED
                            <GoArrowUpRight />
                        </div>
                    </div>
                </div>
                <div className='w-full h-full lg:w-[564px] lg:h-[514px] relative hidden lg:flex'>
                    <img src={suitcaseImage} className='w-[564px] h-[514px] transform scale-x-[-1] absolute z-40' />
                    <div className='w-[433px] h-[433px] bg-[#F08921] rounded-full absolute z-10 top-0 right-0'></div>
                </div>
            </div>
            <div className='w-full p-4 lg:p-0 lg:w-main  mx-auto flex justify-center'>
                <div className='w-full h-full border border-[#7F7F7F] rounded-md p-4 flex flex-wrap lg:gap-[64px] items-center justify-between lg:justify-center'>
                    <div className='flex gap-[11px] w-[45%] lg:w-[20%] items-center'>
                        <span className='font-bold leading-[24px] text-[16px]'>A12</span>
                        <span className='text-sm lg:text-base'>Lorem Ipsum Dolar</span>
                    </div>
                    <div className='flex gap-[11px] w-[45%] lg:w-[20%] items-center'>
                        <span className='font-bold leading-[24px] text-[16px]'>B12</span>
                        <span className='text-sm lg:text-base'>Lorem Ipsum Dolar</span>
                    </div>
                    <div className='flex gap-[11px] w-[45%] lg:w-[20%] items-center'>
                        <span className='font-bold leading-[24px] text-[16px]'>A2</span>
                        <span className='text-sm lg:text-base'>Lorem Ipsum Dolar</span>
                    </div>
                    <div className='flex gap-[11px] w-[45%] lg:w-[20%] items-center'>
                        <span className='font-bold leading-[24px] text-[16px]'>AB12</span>
                        <span className='text-sm lg:text-base'>Lorem Ipsum Dolar</span>
                    </div>
                </div>
            </div>
            <div className='cursor-pointer w-[95%] p-4 md:p-0 md:w-[40%] lg:p-0 lg:w-[314px] lg:h-[64px] rounded-[12px] mx-auto border border-[#7F7F7F] flex flex-col items-center justify-center mt-[20px] 
        hover:bg-[#FFA500] hover:border-[#FFA500] hover:text-white transition-all duration-300 ease-in-out text-[#272727]'>
                <span className='uppercase text-[16px] font-bold leading-[24px]'>Scroll down to see more</span>
                <TfiAngleDoubleDown />
            </div>
            <div className='p-4 lg:p-0 w-full lg:w-main mt-[40px] mx-auto flex flex-col gap-[40px]'>
                <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] underline'>WHY CHOOSE US?</span>
                <div className='w-full lg:h-[704px] flex flex-col gap-[24px]'>
                    <div className='w-full flex flex-col gap-[24px]'>
                        <div className='flex gap-[64px] md:gap-[84px] lg:gap-[136px]'>
                            <div className='w-[45%] flex flex-col gap-[24px]'>
                                <div className='flex gap-[12px] lg:gap-[24px] items-center'>
                                    <div className='bg-[#3B7ACC] p-4 rounded-full flex items-center justify-center'>
                                        <img src={support247} className='w-[32px] text-white' />
                                    </div>
                                    <span className='font-bold text-[20px] leading-[26px]'>SUPPORT 24/7</span>
                                </div>
                                <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </div>
                            <div className='w-[45%] flex flex-col gap-[24px]'>
                                <div className='flex gap-[12px] lg:gap-[24px] items-center'>
                                    <div className='bg-[#3B7ACC] p-4 rounded-full flex items-center justify-center'>
                                        <img src={support247} className='w-[32px] text-white' />
                                    </div>
                                    <span className='font-bold text-[20px] leading-[26px]'>FAST & SIMPLE</span>
                                </div>
                                <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </div>
                        </div>
                        <div className='flex gap-[64px] md:gap-[84px] lg:gap-[136px]'>
                            <div className='w-[45%] flex flex-col gap-[24px]'>
                                <div className='flex gap-[12px] lg:gap-[24px] items-center'>
                                    <div className='bg-[#3B7ACC] p-4 rounded-full flex items-center justify-center'>
                                        <img src={support247} className='w-[32px] text-white' />
                                    </div>
                                    <span className='font-bold text-[20px] leading-[26px]'>APPROVED ON TIME</span>
                                </div>
                                <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </div>
                            <div className='w-[45%] flex flex-col gap-[24px]'>
                                <div className='flex gap-[12px] lg:gap-[24px] items-center'>
                                    <div className='bg-[#3B7ACC] p-4 rounded-full flex items-center justify-center'>
                                        <img src={support247} className='w-[32px] text-white' />
                                    </div>
                                    <span className='font-bold text-[20px] leading-[26px]'>SAFE & PRIVATE</span>
                                </div>
                                <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => { router.push(`/${path.VISA_APPLY}`); }}
                        className='cursor-pointer w-[300px] h-[56px] flex bg-[#3B7ACC] rounded-md mx-auto text-white items-center justify-center gap-[22px] hover:bg-white hover:text-[#3B7ACC] hover:border-[#3B7ACC] border border-transparent transition-all duration-300 ease-in-out'>
                        <span className='uppercase text-[16px] font-bold leading-[24px]'>GET STARTED</span>
                        <GoArrowUpRight />
                    </div>
                </div>
            </div>

            <div className='p-4 lg:p-0 w-full lg:w-main mt-[40px] mx-auto flex flex-col gap-[40px]'>
                <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] underline'>HOW IT WORKS?</span>
                <div className='w-full lg:w-[1172px] lg:h-[500px] flex flex-col lg:flex-row gap-[40px]'>
                    <div className='w-full lg:w-[364px] lg:h-[500px] flex flex-col gap-[24px] items-center'>
                        <span className='font-bold lg:text-[20px] text-center lg:text-left text-[#545454] w-[305px] h-[34px]'>FILL OUT ONLINE APPLICATION</span>
                        <div className='w-[160px] h-[160px] rounded-full bg-[#F08921] flex items-center justify-center'>
                            <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                <img src={item1} />
                            </div>
                        </div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                    </div>
                    <div className='w-full lg:w-[364px] lg:h-[500px] flex flex-col gap-[24px] items-center'>
                        <span className='font-bold lg:text-[20px] text-center lg:text-left text-[#545454] w-[305px] h-[34px]'>FILL OUT ONLINE APPLICATION</span>
                        <div className='w-[160px] h-[160px] rounded-full bg-[#F08921] flex items-center justify-center'>
                            <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                <img src={item2} />
                            </div>
                        </div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                    </div>
                    <div className='w-full lg:w-[364px] lg:h-[500px] flex flex-col gap-[24px] items-center'>
                        <span className='font-bold lg:text-[20px] text-center lg:text-left text-[#545454] w-[80%] lg:w-[305px] lg:h-[34px]'>FILL OUT ONLINE APPLICATION</span>
                        <div className='w-[160px] h-[160px] rounded-full bg-[#F08921] flex items-center justify-center'>
                            <div className='w-[88px] h-[88px] flex justify-center items-center'>
                                <img src={item3} />
                            </div>
                        </div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                    </div>
                </div>
                <div
                    onClick={() => { router.push(`/${path.VISA_APPLY}`); }}
                    className='cursor-pointer w-[300px] h-[56px] flex bg-[#3B7ACC] rounded-md mx-auto text-white items-center justify-center gap-[22px] hover:bg-white hover:text-[#3B7ACC] hover:border-[#3B7ACC] border border-transparent transition-all duration-300 ease-in-out'>
                    <span className='uppercase text-[16px] font-bold leading-[24px]'>GET STARTED</span>
                    <GoArrowUpRight />
                </div>
            </div>

            <div className='w-main mt-[40px] mx-auto flex flex-col gap-[40px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>TESTIMONIALS</span>
                <div className='flex justify-center items-center relative'>
                    <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center text-white bg-[#3B7ACC] border border-[#3B7ACC] absolute left-[-90px] top-1/2 hover:bg-white hover:text-[#3B7ACC] cursor-pointer transition-all duration-300 ease-in-out'>
                        <SlArrowLeft />
                    </div>
                    <div className='w-main h-[588px] flex gap-[48px]'>
                        <div className='w-[357px] h-[586px] border border-[#D3D3D3] shadow-md rounded-lg flex flex-col p-2 items-center transition-all transform hover:scale-105 duration-300 ease-in-out cursor-pointer'>
                            <Image src="/assets/person1.jpg" alt="Person1" width={325} height={320} />
                            <div className='w-[325px] h-[218px] flex flex-col gap-[16px]'>
                                <div className='w-[325px] h-[52px] flex flex-col'>
                                    <span className='font-bold text-lg leading-[24px]'>Lorem Ipsum</span>
                                    <span>Job Title</span>
                                </div>
                                <div className='w-[128px] h-[22px] flex gap-[2px]'>
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                </div>
                                <span className='font-normal italic text-[12px] leading-[16px]'>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                                </span>
                            </div>
                        </div>

                        <div className='w-[357px] h-[586px] border border-[#D3D3D3] shadow-md rounded-lg flex flex-col p-2 items-center transition-all transform hover:scale-105 duration-300 ease-in-out cursor-pointer'>
                            <Image src="/assets/person1.jpg" alt="Person1" width={325} height={320} />
                            <div className='w-[325px] h-[218px] flex flex-col gap-[16px]'>
                                <div className='w-[325px] h-[52px] flex flex-col'>
                                    <span className='font-bold text-lg leading-[24px]'>Lorem Ipsum</span>
                                    <span>Job Title</span>
                                </div>
                                <div className='w-[128px] h-[22px] flex gap-[2px]'>
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                </div>
                                <span className='font-normal italic text-[12px] leading-[16px]'>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                                </span>
                            </div>
                        </div>
                        <div className='w-[357px] h-[586px] border border-[#D3D3D3] shadow-md rounded-lg flex flex-col p-2 items-center transition-all transform hover:scale-105 duration-300 ease-in-out cursor-pointer'>
                            <Image src="/assets/person1.jpg" alt="Person1" width={325} height={320} />
                            <div className='w-[325px] h-[218px] flex flex-col gap-[16px]'>
                                <div className='w-[325px] h-[52px] flex flex-col'>
                                    <span className='font-bold text-lg leading-[24px]'>Lorem Ipsum</span>
                                    <span>Job Title</span>
                                </div>
                                <div className='w-[128px] h-[22px] flex gap-[2px]'>
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                    <BsFillStarFill color='#EFA969' />
                                </div>
                                <span className='font-normal italic text-[12px] leading-[16px]'>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center text-white bg-[#3B7ACC] border border-[#3B7ACC] absolute right-[-90px] top-1/2 hover:bg-white hover:text-[#3B7ACC] cursor-pointer transition-all duration-300 ease-in-out'>
                        <SlArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisaHome