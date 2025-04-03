'use client'
import React, { useState } from 'react'
import path from '@/utils/path'

import { FaArrowRight } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'

import { useRouter } from 'next/navigation'

const bambooAir = '/assets/airBamBoo.png'

const FillInfoDetail = () => {
    const [showOptions, setShowOptions] = useState(false)
    const [text, setText] = useState("");
    const router = useRouter()
    const [confirm1, setConfirm1] = useState(true)
    const [confirm2, setConfirm2] = useState(true)

    return (
        <div className='w-full my-[24px] flex flex-col gap-2 relative font-montserrat'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
            <div className='w-main h-[200px] mx-auto flex flex-col gap-2'>
                <div className='flex flex-col items-center'>
                    <span className='font-extrabold text-[56px] leading-[64px]'>FILL IN</span>
                    <span className='font-extrabold text-[56px] leading-[64px]'>INFORMATION DETAILS</span>
                </div>
                <div className='w-full flex justify-between relative'>
                    <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#F08921] z-50'>
                            <span className='font-extrabold text-[28px] leading-[36px] text-white'>1</span>
                        </div>
                        <span className='font-bold text-[24px] leading-[36px]'>Booking Information</span>
                    </div>
                    <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center border border-[#3B7ACC] bg-white z-50'>
                            <span className='font-extrabold text-[28px] leading-[36px] text-[#3B7ACC]'>2</span>
                        </div>
                        <span className='font-medium text-[24px] leading-[36px]'>Review Info</span>
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
                <div className='flex flex-col w-[690px] gap-[40px]'>
                    <div className='w-[690px] bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded p-8 flex flex-col gap-[10px]'>
                        <span className='text-black font-extrabold text-[24px] leading-[32px]'>ADULT 1</span>
                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Full name</span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                        <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Given name</span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                        <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Title</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Day of Birth</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>DD/MM/YYYY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Nationality</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Passport Number</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Country of Issue</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Please select</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Expired Date</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>DD/MM/YYYY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Issue Date</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>DD/MM/YYYY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[690px] bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded p-8 flex flex-col gap-[10px]'>
                        <span className='text-black font-extrabold text-[24px] leading-[32px]'>ADULT 2</span>
                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Full name</span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                        <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Given name</span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                        <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Title</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Day of Birth</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>DD/MM/YYYY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Nationality</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Passport Number</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Enter value</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Country of Issue</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Please select</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Expired Date</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>DD/MM/YYYY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-[48%] flex flex-col gap-[8px]'>
                                <div className='flex gap-1'>
                                    <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Issue Date</span>
                                </div>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>DD/MM/YYYY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-8 bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded flex items-center justify-center'>
                        <div className='w-full flex flex-col gap-[40px]'>
                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-extrabold text-[24px] leading-[32px] text-[#272727]'>
                                    AIRPORT SERVICES
                                </span>
                                <span className='font-normal italic text-[14px] leading-[20px]'>Recommended services at the airport</span>
                                <div className='border border-[#7F7F7F] rounded-lg p-4 flex flex-col gap-2'>
                                    <span>Tan Son Nhat Intl (SGN)</span>
                                    <div className='flex justify-between rounded-md border border-[#A9A9A9] p-2 relative'>
                                        <span>Normal</span>
                                        <div className='flex gap-2 items-center'>
                                            <span>+25 USD</span>
                                            <span onClick={() => { setShowOptions(prev => !prev) }} className='cursor-pointer'><IoIosArrowDown /></span>
                                            {
                                                showOptions &&
                                                <div className='absolute top-[110%] right-0 w-full flex flex-col gap-2 bg-white border p-2'>
                                                    <div className='cursor-pointer hover:bg-gray-300'>Normal - 25$</div>
                                                    <div className='cursor-pointer hover:bg-gray-300'>VIP - 100$</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-extrabold text-[24px] leading-[32px] text-[#272727]'>
                                    TRAVEL INSURANCE
                                </span>
                                <span className='font-normal text-[14px] leading-[20px]'>Travel Insurance is provided by <span className='font-bold'>Lorem Ipsum Insurance Corporation (LIIC)</span></span>
                                <div className='flex gap-[24px]'>
                                    <div className="flex gap-2 mb-4">
                                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-semibold text-[16px] leading-[24px] text-[#272727] dark:text-[#272727]">Add Insurance</label>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="default-radio-2" className="ms-2 text-sm text-[#272727] font-semibold text-[16px] leading-[24px] dark:text-[#272727]">No Insurance</label>
                                    </div>
                                </div>
                                <div className='flex flex-col rounded-xl border border-[#7F7F7F] p-4 gap-[16px]'>
                                    <div className='flex flex-col gap-[16px]'>
                                        <div className='flex items-center gap-1'>
                                            <span className='font-semibold text-[14px] leading-[20px]'>Choosing the best insurance package for you</span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17ZM11.25 14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14L12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L11.25 14Z" fill="#F08921" />
                                            </svg>
                                        </div>
                                        <div className='flex flex-col gap-[8px]'>
                                            <div className="flex gap-2 mb-4">
                                                <input id="default-radio-1" type="radio" value="" name="default-radio-1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-semibold text-[16px] leading-[24px] text-[#272727] dark:text-[#272727]">Package 1 (from 9 to 173 USD)</label>
                                            </div>
                                            <div className="flex gap-2 mb-4">
                                                <input id="default-radio-2" type="radio" value="" name="default-radio-1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="default-radio-2" className="ms-2 text-sm text-[#272727] font-semibold text-[16px] leading-[24px] dark:text-[#272727]">Package 2 (from 15 to 295 USD)</label>
                                            </div>
                                        </div>
                                        <span className='font-normal text-[14px] leading-[20px] font-montserrat'>
                                            You can see the details of the Limit of Liability  <span className='text-[#007AFF] underline'>here</span>
                                        </span>
                                    </div>
                                    <div className='font-semibold text-[14px] leading-[20px] flex flex-col gap-[8px]'>
                                        <span>Number of days<sup className='text-[#FF3B30]'>*</sup></span>
                                        <div className='flex gap-8 px-8 py-2 border border-[#545454] w-fit h-fit rounded-md'>
                                            <span>9-15 days (19 USD)</span>
                                            <IoIosArrowDown />
                                        </div>
                                    </div>
                                    <div className='font-bold text-[16px] leading-[24px]'>Total: <span className='text-[#007AFF]'>19.00 USD</span> I 380,000 VND</div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[16px]'>
                                <span className='font-extrabold text-[24px] leading-[32px] text-[#272727]'>
                                    OTHER SERVICES
                                </span>
                                <span className='font-normal text-[14px] leading-[20px]'>Please select the services  you would like to be advised on.</span>
                                <div className='p-4 flex flex-col gap-[16px] rounded-lg border border-[#7F7F7F]'>
                                    <span>{`Let's see your travel plans first! We will adjust to meet your demands.`}</span>
                                    <div className='flex flex-col gap-[16px]'>
                                        <div className='flex gap-[12px] items-center'>
                                            <div className='w-[24px] h-[24px] rounded-[4px] border border-[#545454]'></div>
                                            <span className='font-semibold text-[14px] leading-[20x]'>Hotel Reservation</span>
                                        </div>
                                        <div className='flex gap-[12px] items-center'>
                                            <div className='w-[24px] h-[24px] rounded-[4px] border border-[#545454]'></div>
                                            <span className='font-semibold text-[14px] leading-[20x]'>Tour Booking</span>
                                        </div>
                                        <div className='flex gap-[12px] items-center'>
                                            <div className='w-[24px] h-[24px] rounded-[4px] border border-[#545454]'></div>
                                            <span className='font-semibold text-[14px] leading-[20x]'>Taxi-Cab Booking</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-8 bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded flex items-center justify-center'>
                        <div className='w-full flex flex-col gap-[16px]'>
                            <span className='font-extrabold text-[24px] leading-8'>E-INVOICE</span>
                            <div className='p-4 flex flex-col gap-[16px] rounded-lg border border-[#7F7F7F]'>
                                <span>If you want to issue an e-invoice, please select the section below</span>
                                <div className='flex flex-col gap-[16px]'>
                                    <div className='flex gap-[12px] items-center'>
                                        <div className='w-[24px] h-[24px] rounded-[4px] border border-[#545454]'></div>
                                        <span className='font-semibold text-[14px] leading-[20x]'>Issue E-invoice</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-8 bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded flex items-center justify-center'>
                        <div className='flex flex-col gap-[16px] w-full'>
                            <span className='font-extrabold text-[24px] leading-8'>CONTACT INFORMATION</span>
                            <div className='w-full flex justify-between'>
                                <div className='w-[48%] flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>First name</span>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                            <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Enter value</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[48%] flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Last name</span>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                            <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Enter value</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-[48%] flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Phone Number</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Enter value</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[48%] flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Email</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>DD/MM/YYYY</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-[8px]'>
                                <span>
                                    <span className='font-semibold text-[16px] leading-[24px]'>Special request</span>
                                    <span className='font-normal text-[12px] leading-[10px] italic'> (For example: Meals; Wheelchair services; Services for the blind and deaf;

                                        Additional  chair purchases)</span>
                                </span>
                                <textarea
                                    id="special_request"
                                    className="w-full h-32 p-3 border rounded-lg shadow-sm outline-none"
                                    placeholder="Type of special request or comment (optional)"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                            <span className='font-normal text-[12px] leading-[16px]'><span className='font-bold text-[12px] leading-[16px]'>Note</span><sup className='text-[#FF3B30]'>*</sup>: Please be careful - Passenger information must match your passport or photo ID</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex gap-1 items-center' onClick={() => setConfirm1(prev => !prev)}>
                            {
                                confirm1 ?
                                    <svg className='cursor-pointer' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="24" height="24" rx="4" fill="#3B7ACC" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7515 7.36894C19.0081 7.59985 19.0289 7.99504 18.798 8.2516L12.35 15.416C11.5379 16.3184 10.163 16.4309 9.21502 15.6725L6.27634 13.3215C6.0068 13.1059 5.9631 12.7126 6.17873 12.4431C6.39436 12.1735 6.78767 12.1298 7.05721 12.3455L9.99589 14.6964C10.4268 15.0411 11.0517 14.99 11.4209 14.5798L17.8689 7.4154C18.0998 7.15883 18.495 7.13803 18.7515 7.36894Z" fill="white" />
                                    </svg> :
                                    <svg className='cursor-pointer' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="25" height="25" rx="4.5" fill="white" stroke="#545454" strokeLinecap="round" />
                                    </svg>
                            }
                            <span>I would like to confirm that the above information is correct.</span>
                        </div>

                        <div className='flex gap-1 items-center' onClick={() => setConfirm2(prev => !prev)}>
                            {
                                confirm2 ?
                                    <svg className='cursor-pointer' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="24" height="24" rx="4" fill="#3B7ACC" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7515 7.36894C19.0081 7.59985 19.0289 7.99504 18.798 8.2516L12.35 15.416C11.5379 16.3184 10.163 16.4309 9.21502 15.6725L6.27634 13.3215C6.0068 13.1059 5.9631 12.7126 6.17873 12.4431C6.39436 12.1735 6.78767 12.1298 7.05721 12.3455L9.99589 14.6964C10.4268 15.0411 11.0517 14.99 11.4209 14.5798L17.8689 7.4154C18.0998 7.15883 18.495 7.13803 18.7515 7.36894Z" fill="white" />
                                    </svg> : <svg className='cursor-pointer' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="25" height="25" rx="4.5" fill="white" stroke="#545454" strokeLinecap="round" />
                                    </svg>
                            }
                            <span>{`I have read and agree to the Terms and Conditions as well as the company's Policies  .`}</span>
                        </div>
                    </div>
                    <div onClick={() => { router.push(`/${path.REVIEW_INFO}`) }} className=' mx-auto w-fit h-fit px-24 py-2 flex justify-center items-center bg-[#F08921] text-white rounded-2xl cursor-pointer'>
                        <span className='font-bold text-[20px]'>Next</span>
                    </div>
                </div>
                <div className='p-8 w-[440px] h-fit bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded flex flex-col items-center gap-[24px]'>
                    <div className='w-full flex flex-col gap-[24px]'>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex gap-[24px] items-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 21.9991H22M6.36 17.3991L4 16.9991L2 12.9991L3.1 12.4491C3.37916 12.3085 3.6874 12.2352 4 12.2352C4.3126 12.2352 4.62084 12.3085 4.9 12.4491L5.07 12.5491C5.34916 12.6898 5.6574 12.7631 5.97 12.7631C6.2826 12.7631 6.59084 12.6898 6.87 12.5491L8 11.9991L5 5.99915L5.9 5.54915C6.23267 5.38549 6.60429 5.31753 6.97335 5.35285C7.34242 5.38816 7.6944 5.52537 7.99 5.74915L12.01 8.74915C12.3066 8.97486 12.6604 9.11319 13.0315 9.14853C13.4025 9.18387 13.7761 9.11481 14.11 8.94915L18.3 6.88915C18.8354 6.61924 19.4523 6.55862 20.03 6.71915L21 6.99915C21.2004 7.0548 21.3859 7.15442 21.543 7.29075C21.7001 7.42708 21.8248 7.59671 21.9082 7.78729C21.9915 7.97787 22.0313 8.18463 22.0247 8.39252C22.0181 8.60042 21.9652 8.80423 21.87 8.98915L21.49 9.74915C21.26 10.2091 20.89 10.5891 20.42 10.8291L7.58 17.1991C7.20245 17.3862 6.77547 17.4492 6.36 17.3791V17.3991Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
            </div>
        </div>
    )
}

export default FillInfoDetail