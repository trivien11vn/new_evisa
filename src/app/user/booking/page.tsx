'use client'
import { useRouter } from 'next/navigation'
import path from '@/utils/path'

const MyBooking = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col gap-[24px] w-full'>
            <span className='font-extrabold text-[24px] leading-[32px] uppercase text-[#3B7ACC]'>MY BOOKINGS</span>
            <div className='flex flex-col w-full'>
                <div className='flex w-full flex-wrap'>
                    <div className='w-full sm:w-[16%] border uppercase p-4 text-[#2F62A3] underline font-extrabold text-[14px] sm:text-[16px] leading-6'>
                        Order ID
                    </div>
                    <div className='w-full sm:w-[20%] border uppercase p-4 text-[#2F62A3] underline font-extrabold text-[14px] sm:text-[16px] leading-6'>
                        ORDER DATE
                    </div>
                    <div className='w-full sm:w-[16%] border uppercase p-4 text-[#2F62A3] underline font-extrabold text-[14px] sm:text-[16px] leading-6'>
                        Total
                    </div>
                    <div className='w-full sm:w-[16%] border uppercase p-4 text-[#2F62A3] underline font-extrabold text-[14px] sm:text-[16px] leading-6'>
                        Status
                    </div>
                    <div className='w-full sm:w-[16%] border uppercase p-4 text-[#2F62A3] underline font-extrabold text-[14px] sm:text-[16px] leading-6'>
                        PAYMENT
                    </div>
                    <div className='w-full sm:w-[16%] border uppercase p-4 text-[#2F62A3] underline font-extrabold text-[14px] sm:text-[16px] leading-6'>
                        Action
                    </div>
                </div>
                <div className='flex w-full flex-wrap'>
                    <div className='w-full sm:w-[16%] border uppercase p-4 flex items-center justify-center'>
                        ABC_13
                    </div>
                    <div className='w-full sm:w-[20%] border uppercase p-4 flex flex-col gap-2 items-center'>
                        <span>09:34</span>
                        <span>11/07/2023</span>
                    </div>
                    <div className='w-full sm:w-[16%] border p-4 flex items-center justify-center'>
                        money
                    </div>
                    <div className='w-full sm:w-[16%] border p-4 flex items-center justify-center font-bold text-[16px] leading-[24px] text-[#34C759]'>
                        Completed
                    </div>
                    <div className='w-full sm:w-[16%] border p-4 flex items-center justify-center font-bold text-[16px] leading-[24px] text-[#FF3B30]'>
                        Unpaid
                    </div>
                    <div className='w-full sm:w-[16%] border p-4 flex items-center justify-center cursor-pointer'>
                        <svg
                            onClick={() => { router.push(`/${path.USER}/${path.BOOKING_DETAIL}`) }}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1018 10.0865C20.2994 11.1101 20.2994 12.8899 19.1018 13.9135C17.4507 15.3246 14.8834 17 12 17C9.11664 17 6.54929 15.3246 4.89825 13.9135C3.70059 12.8899 3.70058 11.1101 4.89824 10.0865C6.54929 8.67537 9.11664 7 12 7C14.8834 7 17.4507 8.67537 19.1018 10.0865Z" stroke="#3B7ACC" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="2" stroke="#3B7ACC" strokeWidth="1.5" />
                            <path d="M12 2V4" stroke="#3B7ACC" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 20V22" stroke="#3B7ACC" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M21 5L19.5 6.5M3 5L4.5 6.5" stroke="#3B7ACC" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M21 19L19.5 17.5M3 19L4.5 17.5" stroke="#3B7ACC" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBooking