'use client'
import { FaArrowRight } from 'react-icons/fa6'
import { GoArrowLeft, GoDotFill } from 'react-icons/go'
import path from '@/utils/path'
import { useRouter } from 'next/navigation'

const bambooAir = '/assets/airBamBoo.png'

const ReviewInfo = () => {
    const router = useRouter()
    return (
        <div className='w-full my-[24px] flex flex-col gap-2 relative font-montserrat'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
            <div className='w-main h-[200px] mx-auto flex flex-col gap-2'>
                <div className='flex flex-col items-center'>
                    <span className='font-extrabold text-[56px] leading-[64px]'>REVIEW INFORMATION</span>
                    <span className='font-extrabold text-[56px] leading-[64px]'>& ADD-ONS</span>
                </div>
                <div className='w-full flex justify-between relative'>
                    <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#D3D3D3] z-50'>
                            <span className='font-extrabold text-[28px] leading-[36px] text-white'>1</span>
                        </div>
                        <span className='font-medium text-[24px] leading-[36px]'>Booking Information</span>
                    </div>
                    <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#F08921] z-50'>
                            <span className='font-extrabold text-[28px] leading-[36px] text-white'>2</span>
                        </div>
                        <span className='font-bold text-[24px] leading-[36px]'>Review Info</span>
                    </div>
                    <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center border border-[#3B7ACC] bg-white z-50'>
                            <span className='font-extrabold text-[28px] leading-[36px] text-[#3B7ACC]'>3</span>
                        </div>
                        <span className='font-medium text-[24px] leading-[36px]'>Payment</span>
                    </div>
                    <div className='w-[841px] h-[2px] absolute top-[40px] left-[170px] bg-[#D3D3D3]'></div>
                </div>
            </div>
            <div className='flex justify-between w-main mx-auto mt-[100px]'>
                <div className='flex flex-col w-[690px] gap-[24px]'>
                    <span className='font-extrabold text-[24px] leading-[32px]'>REVIEW INFO</span>
                    <div className='w-full h-fit px-8 py-4 border border-[#3B7ACC] rounded-lg'>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex gap-[40px] items-center'>
                                <div className='w-[40px] h-[12px] bg-[#3B7ACC]'></div>
                                <span className='font-bold text-[18px] leading-6 underline'>PASSENGER(s)’ INFORMATION</span>
                            </div>
                            <div className='p-[16px] flex flex-col gap-[16px] items-center border border-[#7F7F7F] rounded-[4px]'>
                                <span className='font-extrabold text-[16px] leading-[24px]'>ADULT 1</span>
                                <div className='flex flex-col gap-[12px] w-full'>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Full Name</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>Lorem Ipsum Dolor Amet</span>
                                        </div>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Title</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>Ms</span>
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Date of birth</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>15/08/1996</span>
                                        </div>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Nationality</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Passport Number</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>C1515345</span>
                                        </div>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Country of issue</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Expired Date</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>15/08/2026</span>
                                        </div>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Issue Date</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>15/08/2016</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-[16px] flex flex-col gap-[16px] items-center border border-[#7F7F7F] rounded-[4px]'>
                                <span className='font-extrabold text-[16px] leading-[24px]'>ADULT 2</span>
                                <div className='flex flex-col gap-[12px] w-full'>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Full Name</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>Lorem Ipsum Dolor Amet</span>
                                        </div>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Title</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>Ms</span>
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Date of birth</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>15/08/1996</span>
                                        </div>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Nationality</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Passport Number</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>C1515345</span>
                                        </div>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Country of issue</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Expired Date</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>15/08/2026</span>
                                        </div>
                                        <div className='w-[45%] flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Issue Date</span>
                                            <span className='font-normal text-[14px] leading-[20px]'>15/08/2016</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit px-8 py-4 border border-[#3B7ACC] rounded-lg'>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex gap-[40px] items-center'>
                                <div className='w-[40px] h-[12px] bg-[#3B7ACC]'></div>
                                <span className='font-bold text-[18px] leading-6 underline'>FLIGHT AMENITIES</span>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Airport Services</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>Normal: 25 USD</span>
                                    </div>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Travel Insurance</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>Package 1: from  9 to 173 USD</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>Number of days: 9 - 15 days (19 USD)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-fit px-8 py-4 border border-[#3B7ACC] rounded-lg'>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex gap-[40px] items-center'>
                                <div className='w-[40px] h-[12px] bg-[#3B7ACC]'></div>
                                <span className='font-bold text-[18px] leading-6 underline'>OTHER SERVICES</span>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Hotel Reservation</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>Hotel 5 stars, Sea View, at District Lorem Ipsum, Near The Airport.</span>
                                    </div>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Tour Booking</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>Tour 7 days, ....</span>
                                    </div>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Taxi-Cab Booking</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>Taxi 7 seats, from Tan Son Nhat airport to Tan Binh District...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit px-8 py-4 border border-[#3B7ACC] rounded-lg'>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex gap-[40px] items-center'>
                                <div className='w-[40px] h-[12px] bg-[#3B7ACC]'></div>
                                <span className='font-bold text-[18px] leading-6 underline'>E - INVOICE</span>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Company Name</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>ABC Company</span>
                                    </div>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Company Address</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>40, Thien Phuoc Street, Ward 9, Tan Binh District, Ho Chi Minh City</span>
                                    </div>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Taxing Code</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>0314795123</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit px-8 py-4 border border-[#3B7ACC] rounded-lg'>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex gap-[40px] items-center'>
                                <div className='w-[40px] h-[12px] bg-[#3B7ACC]'></div>
                                <span className='font-bold text-[18px] leading-6 underline'>CONTACT INFORMATION</span>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Full Name</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>Lorem Ipsum</span>
                                    </div>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Email</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>loremipsum@gmail.com</span>
                                    </div>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Phone Number</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>0314795123</span>
                                    </div>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#545454]'>+ Special request</span>
                                        <span className='font-normal text-[14px] leading-[20px]'>Vegan meals only and one wheelchair for handicapped passenger.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { router.push(`/${path.PAYMENT}`) }} className='mx-auto w-fit h-fit px-16 py-2 bg-[#F08921] text-white rounded-lg cursor-pointer'>
                        <span className='font-bold text-[20px]'>Go To Payment Page</span>
                    </div>
                </div>
                <div className='w-[440px] flex flex-col gap-[24px]'>
                    <div className='p-8 w-[440px] h-fit bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded flex flex-col items-center gap-[24px]'>
                        <div className='w-full flex flex-col gap-[24px]'>
                            <div className='flex flex-col gap-[16px]'>
                                <div className='flex gap-[24px] items-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 21.9991H22M6.36 17.3991L4 16.9991L2 12.9991L3.1 12.4491C3.37916 12.3085 3.6874 12.2352 4 12.2352C4.3126 12.2352 4.62084 12.3085 4.9 12.4491L5.07 12.5491C5.34916 12.6898 5.6574 12.7631 5.97 12.7631C6.2826 12.7631 6.59084 12.6898 6.87 12.5491L8 11.9991L5 5.99915L5.9 5.54915C6.23267 5.38549 6.60429 5.31753 6.97335 5.35285C7.34242 5.38816 7.6944 5.52537 7.99 5.74915L12.01 8.74915C12.3066 8.97486 12.6604 9.11319 13.0315 9.14853C13.4025 9.18387 13.7761 9.11481 14.11 8.94915L18.3 6.88915C18.8354 6.61924 19.4523 6.55862 20.03 6.71915L21 6.99915C21.2004 7.0548 21.3859 7.15442 21.543 7.29075C21.7001 7.42708 21.8248 7.59671 21.9082 7.78729C21.9915 7.97787 22.0313 8.18463 22.0247 8.39252C22.0181 8.60042 21.9652 8.80423 21.87 8.98915L21.49 9.74915C21.26 10.2091 20.89 10.5891 20.42 10.8291L7.58 17.1991C7.20245 17.3862 6.77547 17.4492 6.36 17.3791V17.3991Z" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className='font-extrabold text-[24px] leading-[32px]'>YOUR FLIGHT</span>
                                </div>
                                <div className='flex gap-[4px] font-bold text-[14px] items-center'>
                                    <span>Hồ Chí Minh</span>
                                    <FaArrowRight />
                                    <span>Singapore</span>
                                    <GoDotFill color='#3B7ACC' />
                                    <span className='text-[#3B7ACC]'>Mon, 18 Sep 2023</span>
                                </div>
                                <div className='flex gap-[8px] font-bold text-[14px] items-center'>
                                    <img src={bambooAir} className='w-[30%] h-auto object-cover' />
                                    <span className='font-bold text-[14px] leading-7'>Bamboo Airlines</span>
                                </div>
                                <div className='flex gap-[8px] w-full'>
                                    <div className='flex flex-col gap-[6px] flex-1'>
                                        <span className='font-bold text-[14px] leading-[22px]'>17:20</span>
                                        <div className='bg-[#E5E5E5] px-2 rounded-l-2xl rounded-r-2xl flex justify-center items-center w-fit'>
                                            <span className='text-[#7F7F7F] font-semibold text-[12px]'>SGN</span>
                                        </div>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.07755 13.9034L5.21481 12.3312C5.51196 12.1127 5.86109 11.996 6.21822 11.996L8.38391 11.996C8.88343 11.996 9.28837 12.4428 9.28837 12.994L9.28837 16.5002C9.28837 17.5029 10.4782 17.8794 10.9598 17.0292L13.2793 12.9341C13.6099 12.3505 14.1896 11.996 14.8133 11.996L16.337 11.996C17.4394 11.996 18.333 11.1024 18.333 10C18.333 8.89763 17.4394 8.00399 16.337 8.00399L14.8133 8.00399C14.1896 8.00399 13.6099 7.64946 13.2793 7.06586L10.9598 2.97084C10.4782 2.12056 9.28837 2.49709 9.28837 3.49978L9.28837 7.00598C9.28837 7.55716 8.88343 8.00399 8.38391 8.00399L6.21822 8.00399C5.86109 8.00399 5.51196 7.88734 5.21481 7.66876L3.07755 6.09656C2.30583 5.52886 1.35208 6.45789 1.76687 7.37327L2.55264 9.10736C2.80727 9.66929 2.80727 10.3307 2.55264 10.8926L1.76687 12.6267C1.35208 13.5421 2.30583 14.4711 3.07755 13.9034Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className='flex flex-col gap-[6px] flex-1'>
                                        <span className='font-bold text-[14px] leading-[22px]'>01:00</span>
                                        <div className='bg-[#E5E5E5] px-2 rounded-l-2xl rounded-r-2xl flex justify-center items-center w-fit'>
                                            <span className='text-[#7F7F7F] font-semibold text-[12px]'>HND</span>
                                        </div>
                                    </div>
                                    <span className='font-normal text-[12px] leading-[22px] flex-1'>+1day</span>
                                    <div className='flex flex-col gap-[6px] flex-1'>
                                        <span className='font-bold text-[14px] leading-[22px]'>5h 40m</span>
                                        <span className='font-montserrat font-normal text-[11px] leading-[22px] text-[#000000]'>Direct flight</span>
                                    </div>
                                </div>
                                <div className='flex gap-[8px] items-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2Z" fill="#FF9500" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V9C12.75 9.41421 12.4142 9.75 12 9.75C11.5858 9.75 11.25 9.41421 11.25 9V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11.5C11.25 11.0858 11.5858 10.75 12 10.75Z" fill="#FF9500" />
                                    </svg>

                                    <span className='font-semibold text-[12px] leading-[16px]'>Stop to change flight at Seoul (2h 30m)</span>
                                </div>
                            </div>
                            <div className="border-t-2 border-dashed border-[#545454]"></div>
                            <div className='flex flex-col gap-[16px]'>
                                <div className='flex gap-[4px] font-bold text-[14px] items-center'>
                                    <span>Hồ Chí Minh</span>
                                    <FaArrowRight />
                                    <span>Singapore</span>
                                    <GoDotFill color='#3B7ACC' />
                                    <span className='text-[#3B7ACC]'>Mon, 18 Sep 2023</span>
                                </div>
                                <div className='flex gap-[8px] font-bold text-[14px] items-center'>
                                    <img src={bambooAir} className='w-[30%] h-auto object-cover' />
                                    <span className='font-bold text-[14px] leading-7'>Bamboo Airlines</span>
                                </div>
                                <div className='flex gap-[8px] w-full'>
                                    <div className='flex flex-col gap-[6px] flex-1'>
                                        <span className='font-bold text-[14px] leading-[22px]'>17:20</span>
                                        <div className='bg-[#E5E5E5] px-2 rounded-l-2xl rounded-r-2xl flex justify-center items-center w-fit'>
                                            <span className='text-[#7F7F7F] font-semibold text-[12px]'>SGN</span>
                                        </div>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.07755 13.9034L5.21481 12.3312C5.51196 12.1127 5.86109 11.996 6.21822 11.996L8.38391 11.996C8.88343 11.996 9.28837 12.4428 9.28837 12.994L9.28837 16.5002C9.28837 17.5029 10.4782 17.8794 10.9598 17.0292L13.2793 12.9341C13.6099 12.3505 14.1896 11.996 14.8133 11.996L16.337 11.996C17.4394 11.996 18.333 11.1024 18.333 10C18.333 8.89763 17.4394 8.00399 16.337 8.00399L14.8133 8.00399C14.1896 8.00399 13.6099 7.64946 13.2793 7.06586L10.9598 2.97084C10.4782 2.12056 9.28837 2.49709 9.28837 3.49978L9.28837 7.00598C9.28837 7.55716 8.88343 8.00399 8.38391 8.00399L6.21822 8.00399C5.86109 8.00399 5.51196 7.88734 5.21481 7.66876L3.07755 6.09656C2.30583 5.52886 1.35208 6.45789 1.76687 7.37327L2.55264 9.10736C2.80727 9.66929 2.80727 10.3307 2.55264 10.8926L1.76687 12.6267C1.35208 13.5421 2.30583 14.4711 3.07755 13.9034Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className='flex flex-col gap-[6px] flex-1'>
                                        <span className='font-bold text-[14px] leading-[22px]'>01:00</span>
                                        <div className='bg-[#E5E5E5] px-2 rounded-l-2xl rounded-r-2xl flex justify-center items-center w-fit'>
                                            <span className='text-[#7F7F7F] font-semibold text-[12px]'>HND</span>
                                        </div>
                                    </div>
                                    <span className='font-normal text-[12px] leading-[22px] flex-1'>+1day</span>
                                    <div className='flex flex-col gap-[6px] flex-1'>
                                        <span className='font-bold text-[14px] leading-[22px]'>5h 40m</span>
                                        <span className='font-montserrat font-normal text-[11px] leading-[22px] text-[#000000]'>Direct flight</span>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t-2 border-dashed border-[#545454]"></div>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='w-[360px] h-[48px] flex rounded-lg border border-[#D3D3D3]'>
                                    <div className='flex-1 flex items-center bg-white rounded-l-lg pl-2'>
                                        <input placeholder='Enter your promote code here' className='outline-none font-normal text-[12px] leading-[16px]' />
                                    </div>
                                    <div className='w-[120px] bg-[#3B7ACC] text-white flex items-center justify-center rounded-r-lg'>Apply Now</div>
                                </div>
                                <div className='flex flex-col gap-[24px]'>
                                    <div className='flex flex-col gap-[16px]'>
                                        <div className='w-full flex justify-between items-center'>
                                            <span className='font-semibold text-[16px] leading-[24px] text-[#3B7ACC]'>Total Amount: </span>
                                            <span className='font-bold text-[16px] leading-[24px] text-[#3B7ACC]'>4.761.840 VND</span>
                                        </div>
                                        <div className='w-full flex justify-between items-center'>
                                            <span className='font-semibold text-[16px] leading-[24px]'>VietJet Air (Adult) x1 </span>
                                            <span className='font-normal text-[14px] leading-[24px]'>2.952.000 VND</span>
                                        </div>
                                        <div className='w-full flex justify-between items-center'>
                                            <span className='font-semibold text-[16px] leading-[24px]'>Vietravel Airlines (Adult) x1 </span>
                                            <span className='font-normal text-[14px] leading-[24px]'>812.440 VND</span>
                                        </div>
                                        <div className='w-full flex justify-between items-center'>
                                            <span className='font-semibold text-[16px] leading-[24px]'>VietJet Air (Adult) x1 </span>
                                            <span className='font-normal text-[14px] leading-[24px]'>997.400 VND</span>
                                        </div>
                                        <div className='w-full flex justify-between items-center'>
                                            <span className='font-semibold text-[16px] leading-[24px]'>Travel Insurance </span>
                                            <span className='font-normal text-[14px] leading-[24px]'>500,000 VND</span>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#272727]'>Already had an account?</span>
                                        <span className='font-bold text-[16px] leading-[24px] text-[#3B7ACC]'>Sign In Now!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex gap-[8px] items-center'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0009 19.9988L17.9223 22.3359C18.6188 22.8931 19.6304 22.8032 20.2178 22.132L25.0009 16.6655M8.96365 8.23762L17.2934 4.53553C19.0171 3.76941 20.9848 3.76941 22.7085 4.53553L31.0052 8.22294C33.4314 9.30124 35.0239 11.7248 34.8539 14.3743C34.2019 24.5373 31.2963 29.1316 23.442 34.4616C21.3692 35.8682 18.6349 35.8648 16.5606 34.4604C8.73041 29.1593 5.717 24.629 5.11761 14.3387C4.9643 11.7065 6.55428 9.30845 8.96365 8.23762Z" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className='flex flex-col'>
                                <span className='font-semibold text-[14px] leading-[22px]'>Your data is secured by us!</span>
                                <span className='font-normal text-[12px] leading-[16px]'>For more details please read Global eVISA Security Policies</span>
                            </div>
                        </div>
                        <div className='flex gap-[24px] items-center cursor-pointer' onClick={() => { router.push(`/${path.FILL_INFO_DETAIL}`) }}>
                            <div className='px-12 py-4 text-white bg-[#3B7ACC]'><GoArrowLeft size={24} /></div>
                            <span className='text-[#2F62A3] font-bold text-[14px] leading-[22px] hover:underline'>Back to previous step</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewInfo