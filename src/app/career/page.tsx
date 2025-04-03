'use client'
import { useRouter } from "next/navigation";
import path from '@/utils/path'
import Image from "next/image";

const careerImage = '/assets/career.svg'
const working = '/assets/working.jpg'

const Career = () => {
    const router = useRouter()
    return (
        <div className='w-full my-[24px] flex flex-col gap-2 relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0 hidden lg:flex'></div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-8'>
                <div className='flex items-center'>
                    <div className='w-[860px] font-extrabold text-[32px] md:text-[48px] lg:text-[56px]'>CAREER</div>
                </div>
                <div className='flex flex-col gap-[40px]'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex flex-col gap-[24px] w-[600px]'>
                            <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] text-[#545454] underline'>JOIN OUR TEAM</span>
                            <span className='font-normal text-[16px] md:text-[20px] text-[#272727]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                        <Image src={careerImage} alt="career" width={450} height={550} className='hidden lg:flex'/>
                    </div>
                    <div className='flex flex-col gap-[40px]'>
                        <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] text-[#272727] underline'>ABOUT WORKING HERE</span>
                        <div className='px-[2px] flex flex-col gap-[24px] sm:gap-[109px] items-center'>
                            <div className='flex flex-col gap-[24px] sm:flex-row sm:justify-between w-full'>
                                <div className='w-full sm:w-[45%] flex flex-col gap-[24px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="32.5" cy="32" r="32" fill="#3B7ACC" />
                                            <path d="M32.4987 42.3333C26.9759 42.3333 22.4987 37.8562 22.4987 32.3333M32.4987 42.3333C38.0215 42.3333 42.4987 37.8562 42.4987 32.3333M32.4987 42.3333V49M22.4987 32.3333L22.4987 22.3333C22.4987 20.4924 23.9911 19 25.832 19L39.1654 19C41.0063 19 42.4987 20.4924 42.4987 22.3333L42.4987 32.3333M22.4987 32.3333L22.4987 25.6667C22.4987 23.8257 21.0063 22.3333 19.1654 22.3333C17.3244 22.3333 15.832 23.8257 15.832 25.6667C15.832 29.3486 18.8168 32.3333 22.4987 32.3333ZM42.4987 32.3333L42.4987 25.6667C42.4987 23.8257 43.9911 22.3333 45.832 22.3333C47.673 22.3333 49.1654 23.8257 49.1654 25.6667C49.1654 29.3486 46.1806 32.3333 42.4987 32.3333ZM32.4987 49H27.4987M32.4987 49H37.4987" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span className='font-bold text-[20px] leading-[26px] '>Conductive Environment</span>
                                    </div>
                                    <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                    <span className='font-normal text-[16px] leading-6 text-[#545454] w-[342px]'>Enjoying challenging work and a satisfying job without any hierarchy</span>
                                </div>
                                <div className='w-full sm:w-[45%] flex flex-col gap-[24px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="32.5" cy="32" r="32" fill="#3B7ACC" />
                                            <path d="M46.6065 28.5063C45.7353 22.5081 40.9919 17.7647 34.9937 16.8935C33.9006 16.7347 33 17.6454 33 18.75V28.5C33 29.6046 33.8954 30.5 35 30.5H44.75C45.8546 30.5 46.7653 29.5994 46.6065 28.5063Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                            <path d="M28.875 19.8066C23.364 21.0571 19.25 25.9856 19.25 31.875C19.25 38.7095 24.7905 44.25 31.625 44.25C37.5144 44.25 42.4428 40.136 43.6934 34.625" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span className='font-bold text-[20px] leading-[26px] '>Share Success</span>
                                    </div>
                                    <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                    <span className='font-normal text-[16px] leading-6 text-[#545454] w-[342px]'>Equity ownership and opportunity await</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[24px] sm:flex-row sm:justify-between w-full'>
                                <div className='w-full sm:w-[45%] flex flex-col gap-[24px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.1149 30.11L38.8929 22.333C43.1879 26.629 43.1879 33.593 38.8929 37.889C34.5969 42.185 27.6319 42.185 23.3359 37.889L31.1149 30.111M31.1149 30.11V30.111M31.1149 30.11L30.7609 38.243M31.1149 30.111H38.8929M31.1149 30.111L36.4179 35.414" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M31.1149 30.11L38.8929 22.333C43.1879 26.629 43.1879 33.593 38.8929 37.889C34.5969 42.185 27.6319 42.185 23.3359 37.889L31.1149 30.111M31.1149 30.11V30.111M31.1149 30.11L30.7609 38.243M31.1149 30.111H38.8929M31.1149 30.111L36.4179 35.414" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="32.5" cy="32" r="32" fill="#3B7ACC" />
                                            <path d="M30.1877 28.8498L43.151 15.8882C50.3093 23.0482 50.3093 34.6548 43.151 41.8148C35.991 48.9748 24.3827 48.9748 17.2227 41.8148L30.1877 28.8515M30.1877 28.8498V28.8515M30.1877 28.8498L29.5977 42.4048M30.1877 28.8515H43.151M30.1877 28.8515L39.026 37.6898" stroke="#FFFCF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className='font-bold text-[20px] leading-[26px] '>Healthy Meals and Snacks</span>
                                    </div>
                                    <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                    <span className='font-normal text-[16px] leading-6 text-[#545454] w-[342px]'>Food is on the house so it feels like home</span>
                                </div>
                                <div className='w-full sm:w-[45%] flex flex-col gap-[24px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="32.5" cy="32" r="32" fill="#3B7ACC" />
                                            <path d="M32.5 28.3334V38.3334" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M37.5 33.3334H27.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M25.832 20V18.3334C25.832 15.572 28.0706 13.3334 30.832 13.3334H34.1654C36.9268 13.3334 39.1654 15.572 39.1654 18.3334V20M22.4987 46.6667H42.4987C46.1806 46.6667 49.1654 43.6819 49.1654 40V26.6667C49.1654 22.9848 46.1806 20 42.4987 20H22.4987C18.8168 20 15.832 22.9848 15.832 26.6667V40C15.832 43.6819 18.8168 46.6667 22.4987 46.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span className='font-bold text-[20px] leading-[26px] '>Medical Insurance </span>
                                    </div>
                                    <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                    <span className='font-normal text-[16px] leading-6 text-[#545454] w-[342px]'>We have got you covered literally !</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[24px] sm:flex-row sm:justify-between w-full'>
                                <div className='w-full sm:w-[45%] flex flex-col gap-[24px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="32.5" cy="32" r="32" fill="#3B7ACC" />
                                            <path d="M17.418 34.4167H16.418V36.4167H17.418V34.4167ZM46.5846 36.4167H47.5846V34.4167H46.5846V36.4167ZM27.6263 46.0834C27.074 46.0834 26.6263 46.5311 26.6263 47.0834C26.6263 47.6357 27.074 48.0834 27.6263 48.0834V46.0834ZM36.3763 48.0834C36.9286 48.0834 37.3763 47.6357 37.3763 47.0834C37.3763 46.5311 36.9286 46.0834 36.3763 46.0834V48.0834ZM33.0013 41.2501C33.0013 40.6978 32.5536 40.2501 32.0013 40.2501C31.449 40.2501 31.0013 40.6978 31.0013 41.2501H33.0013ZM21.793 18.9167H42.2096V16.9167H21.793V18.9167ZM45.5846 22.2917V36.8751H47.5846V22.2917H45.5846ZM42.2096 40.2501H21.793V42.2501H42.2096V40.2501ZM18.418 36.8751V22.2917H16.418V36.8751H18.418ZM21.793 40.2501C19.929 40.2501 18.418 38.739 18.418 36.8751H16.418C16.418 39.8436 18.8244 42.2501 21.793 42.2501V40.2501ZM45.5846 36.8751C45.5846 38.739 44.0736 40.2501 42.2096 40.2501V42.2501C45.1782 42.2501 47.5846 39.8436 47.5846 36.8751H45.5846ZM42.2096 18.9167C44.0736 18.9167 45.5846 20.4278 45.5846 22.2917H47.5846C47.5846 19.3232 45.1782 16.9167 42.2096 16.9167V18.9167ZM21.793 16.9167C18.8244 16.9167 16.418 19.3232 16.418 22.2917H18.418C18.418 20.4278 19.929 18.9167 21.793 18.9167V16.9167ZM17.418 36.4167H46.5846V34.4167H17.418V36.4167ZM27.6263 48.0834H32.0013V46.0834H27.6263V48.0834ZM32.0013 48.0834H36.3763V46.0834H32.0013V48.0834ZM33.0013 47.0834V41.2501H31.0013V47.0834H33.0013Z" fill="white" />
                                        </svg>

                                        <span className='font-bold text-[20px] leading-[26px] '>Best Gadgets</span>
                                    </div>
                                    <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                    <span className='font-normal text-[16px] leading-6 text-[#545454] w-[342px]'>Paper the tech savvy in you with gadgets and advanced technology. </span>
                                </div>
                                <div className='w-full sm:w-[45%] flex flex-col gap-[24px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="32.5" cy="32" r="32" fill="#3B7ACC" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M23.5749 18.8635L41.3046 18.8569C41.8553 18.8568 42.3858 19.0641 42.7905 19.4376C43.1952 19.811 43.4444 20.3232 43.4885 20.8722L45.4468 44.9652C45.4702 45.252 45.4368 45.5406 45.3486 45.8146C45.2604 46.0885 45.1191 46.3423 44.9328 46.5616C44.7464 46.7809 44.5187 46.9613 44.2626 47.0926C44.0066 47.2238 43.7271 47.3033 43.4403 47.3266L43.2651 47.3331H21.7217C21.1408 47.3331 20.5836 47.1023 20.1728 46.6915C19.762 46.2808 19.5312 45.7236 19.5312 45.1426L19.5378 44.974L21.391 20.8853C21.4334 20.3352 21.682 19.8214 22.0868 19.4466C22.4917 19.0718 23.0231 18.8635 23.5749 18.8635Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M39.0725 27.6187V29.0315C39.0725 31.452 34.9216 31.9996 32.5011 31.9996C30.0806 31.9996 25.9297 31.1344 25.9297 28.7139V27.6187" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className='font-bold text-[20px] leading-[26px] '>Culture of Learning</span>
                                    </div>
                                    <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                    <span className='font-normal text-[16px] leading-6 text-[#545454] w-[342px]'>Regular brown bag lunches to keep the brain rejuvenated. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full p-4 lg:p-0 lg:w-[1364px] mx-auto flex flex-col gap-4'>
                <div className='w-full flex gap-[12px] lg:justify-between overflow-x-auto'>
                    <img
                        src={working}
                        alt="Working"
                        className="w-full sm:w-[33%] h-fit object-cover"
                    />
                    <img
                        src={working}
                        alt="Working"
                        className="w-full sm:w-[33%] h-fit object-cover"
                    />
                    <img
                        src={working}
                        alt="Working"
                        className="w-full sm:w-[33%] h-fit object-cover"
                    />
                </div>
                <div className='flex flex-col gap-[80px] items-center'>
                    <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] underline uppercase'>Open Positions</span>
                    <div className='w-full flex flex-wrap gap-[12px] lg:justify-between'>
                        <div className='w-[48%] lg:w-[250px] cursor-pointer h-[68px] rounded-2xl bg-[#3B7ACC] text-white uppercase flex items-center justify-center'>
                            <span className='font-bold text-[20px] leading-[72px]'>Developer</span>
                        </div>
                        <div className='w-[48%] lg:w-[250px] cursor-pointer h-[68px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] uppercase flex items-center justify-center hover:bg-[#3B7ACC] hover:border-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out'>
                            <span className='font-bold text-[20px] leading-[72px]'>Marketing</span>
                        </div>
                        <div className='w-[48%] lg:w-[250px] cursor-pointer h-[68px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] uppercase flex items-center justify-center hover:bg-[#3B7ACC] hover:border-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out'>
                            <span className='font-bold text-[20px] leading-[72px]'>Designer</span>
                        </div>
                        <div className='w-[48%] lg:w-[250px] cursor-pointer h-[68px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] uppercase flex items-center justify-center hover:bg-[#3B7ACC] hover:border-[#3B7ACC] hover:text-white transition-all duration-300 ease-in-out'>
                            <span className='font-bold text-[20px] leading-[72px]'>Researcher</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[32px] w-full lg:w-[921px]'>
                        <div className='w-full flex flex-col gap-[24px]'>
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col h-full justify-between'>
                                    <span className='font-bold text-[16px] md:text-[20px] text-[#545454] uppercase'>Android Engineer</span>
                                    <span className='font-normal text-[12px] md:text-[16px]'>San Francisco / New Delhi Full-Time</span>
                                </div>
                                <div onClick={() => { router.push(`/${path.DETAIL_CAREER}`) }} className='cursor-pointer bg-[#F08921] rounded-lg w-[120px] h-[36px] md:w-[160px] md:h-[48px] lg:w-[250px] lg:h-[56px] flex justify-center items-center text-white '>APPLY NOW</div>
                            </div>
                            <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
                        </div>
                        <div className='w-full flex flex-col gap-[24px]'>
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col h-full justify-between'>
                                    <span className='font-bold text-[16px] md:text-[20px] text-[#545454] uppercase'>iOS Engineer</span>
                                    <span className='font-normal text-[12px] md:text-[16px]'>San Francisco  Full-Time</span>
                                </div>
                                <div onClick={() => { router.push(`/${path.DETAIL_CAREER}`) }} className='cursor-pointer bg-[#F08921] rounded-lg w-[120px] h-[36px] md:w-[160px] md:h-[48px] lg:w-[250px] lg:h-[56px] flex justify-center items-center text-white '>APPLY NOW</div>
                            </div>
                            <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
                        </div>
                        <div className='w-full flex flex-col gap-[24px]'>
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col h-full justify-between'>
                                    <span className='font-bold text-[16px] md:text-[20px] text-[#545454] uppercase'>Backend Engineer</span>
                                    <span className='font-normal text-[12px] md:text-[16px]'>New Delhi Full-Time</span>
                                </div>
                                <div onClick={() => { router.push(`/${path.DETAIL_CAREER}`) }} className='cursor-pointer bg-[#F08921] rounded-lg w-[120px] h-[36px] md:w-[160px] md:h-[48px] lg:w-[250px] lg:h-[56px] flex justify-center items-center text-white '>APPLY NOW</div>
                            </div>
                            <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
                        </div>
                        <div className='w-full flex flex-col gap-[24px]'>
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col h-full justify-between'>
                                    <span className='font-bold text-[16px] md:text-[20px] text-[#545454] uppercase'>Frontend Engineer</span>
                                    <span className='font-normal text-[12px] md:text-[16px]'>San Francisco  Full-Time</span>
                                </div>
                                <div onClick={() => { router.push(`/${path.DETAIL_CAREER}`) }} className='cursor-pointer bg-[#F08921] rounded-lg w-[120px] h-[36px] md:w-[160px] md:h-[48px] lg:w-[250px] lg:h-[56px] flex justify-center items-center text-white '>APPLY NOW</div>
                            </div>
                            <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career