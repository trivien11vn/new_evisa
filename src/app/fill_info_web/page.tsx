'use client'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

import path from '@/utils/path';
import { useRouter } from 'next/navigation';

const FillInfoWeb = () => {
    const router = useRouter()
    const [confirm1, setConfirm1] = useState(true)
    const [confirm2, setConfirm2] = useState(true)
    return (
        <div className='w-full my-[24px] flex flex-col gap-2 relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
            <div className='w-main h-[200px] mx-auto flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <div className='w-[860px] font-extrabold text-[56px] leading-[64px]'>GLOBAL EVISA APPLICATION FORM</div>
                    <div onClick={() => { router.push(`/`) }} className='border border-transparent w-[210px] h-[61px] flex items-center justify-center bg-[#3B7ACC] text-white rounded-2xl hover:bg-white hover:text-[#3B7ACC] hover:border-[#3B7ACC] cursor-pointer transition-all duration-300 ease-in-out'>
                        <span className='font-normal text-[16px]'>Save & Exit</span>
                    </div>
                </div>
                <div className='w-full flex justify-between relative'>
                    <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#F08921] z-50'>
                            <span className='font-extrabold text-[28px] leading-[36px] text-white'>1</span>
                        </div>
                        <span className='font-bold text-[24px] leading-[36px]'>Order Information</span>
                    </div>
                    <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center border border-[#F08921] bg-white z-50'>
                            <span className='font-extrabold text-[28px] leading-[36px] text-[#F08921]'>2</span>
                        </div>
                        <span className='font-medium text-[24px] leading-[36px]'>Payment</span>
                    </div>
                    <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center border border-[#F08921] bg-white z-50'>
                            <span className='font-extrabold text-[28px] leading-[36px] text-[#F08921]'>3</span>
                        </div>
                        <span className='font-medium text-[24px] leading-[36px]'>Confirmation</span>
                    </div>
                    <div className='w-[841px] h-[2px] absolute top-[40px] left-[170px] bg-[#D3D3D3]'></div>
                </div>
            </div>
            <div className='flex justify-between w-main mx-auto mt-[100px]'>
                <div className='flex flex-col w-[690px] gap-[40px]'>
                    <div className='w-[690px] bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded p-8 flex flex-col gap-[10px]'>
                        <span className='text-black font-extrabold text-[24px] leading-[32px]'>ORDER INFORMATION</span>
                        <div className='flex flex-col gap-[8px]'>
                            <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Destination</span>
                            <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6667 7.49984C11.6667 8.42031 10.9206 9.1665 10.0001 9.1665C9.07961 9.1665 8.33341 8.42031 8.33341 7.49984C8.33341 6.57936 9.07961 5.83317 10.0001 5.83317C10.9206 5.83317 11.6667 6.57936 11.6667 7.49984Z" stroke="#545454" strokeWidth="1.25" />
                                        <path d="M15.8334 7.38079C15.8334 9.28443 14.4184 11.6637 12.8688 13.2522C11.8494 14.2971 10.7716 14.9998 10.0001 14.9998C9.22852 14.9998 8.15081 14.2971 7.13138 13.2522C5.58171 11.6637 4.16675 9.28443 4.16675 7.38079C4.16675 4.22488 6.77842 1.6665 10.0001 1.6665C13.2217 1.6665 15.8334 4.22488 15.8334 7.38079Z" stroke="#545454" strokeWidth="1.25" />
                                        <path d="M12.6285 13.4912C15.4742 13.8462 17.5 14.7609 17.5 15.8334C17.5 17.2141 14.1421 18.3334 10 18.3334C5.85786 18.3334 2.5 17.2141 2.5 15.8334C2.5 14.7609 4.52584 13.8462 7.37151 13.4912" stroke="#545454" strokeWidth="1.225" strokeLinecap="round" />
                                    </svg>
                                    <span>Please Select</span>
                                </div>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3513 6.3335L7.64882 6.3335C6.10524 6.3335 5.1435 8.00793 5.92127 9.34124L8.27252 13.372C9.04428 14.695 10.9559 14.695 11.7276 13.372L14.0789 9.34124C14.8567 8.00793 13.8949 6.3335 12.3513 6.3335Z" stroke="#545454" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Type of Visa</span>
                            <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.16675 15.2543C4.99066 15.3859 3.62154 16.155 2.61364 16.8323C2.02333 17.229 1.16675 16.8166 1.16675 16.1054V8.04753C1.16675 7.55987 1.37956 7.09594 1.76854 6.80182C2.42028 6.30903 3.51886 5.54545 4.64741 5.0596C4.96193 4.9242 5.27877 4.81037 5.58891 4.72998M6.16675 15.2543C8.932 14.9447 10.0682 18.2222 12.8334 17.9127M6.16675 15.2543V8.98631M12.8334 17.9127C14.3895 17.7385 16.2834 16.4484 17.2316 15.7315C17.6206 15.4373 17.8334 14.9734 17.8334 14.4858V6.42792C17.8334 5.71671 16.9768 5.30429 16.3865 5.70097C16.0569 5.92247 15.6887 6.15378 15.3012 6.3694M12.8334 17.9127V10.2083" stroke="#545454" strokeWidth="1.25" />
                                        <path d="M9.21878 7.03405L7.9561 6.61316C7.59263 6.492 7.57158 5.98582 7.92373 5.8349L11.7923 4.17693C12.138 4.02877 12.4876 4.37833 12.3394 4.72404L10.6815 8.59263C10.5305 8.94478 10.0244 8.92373 9.9032 8.56026L9.4823 7.29758C9.44083 7.17316 9.3432 7.07553 9.21878 7.03405Z" stroke="#545454" strokeWidth="1.225" />
                                        <path d="M15.2498 6.2666C15.2498 9.02803 13.0112 11.2666 10.2498 11.2666C7.48833 11.2666 5.24976 9.02803 5.24976 6.2666C5.24976 3.50518 7.48833 1.2666 10.2498 1.2666C13.0112 1.2666 15.2498 3.50518 15.2498 6.2666Z" stroke="#545454" strokeWidth="1.225" />
                                    </svg>
                                    <span>Please Select</span>
                                </div>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3513 6.3335L7.64882 6.3335C6.10524 6.3335 5.1435 8.00793 5.92127 9.34124L8.27252 13.372C9.04428 14.695 10.9559 14.695 11.7276 13.372L14.0789 9.34124C14.8567 8.00793 13.8949 6.3335 12.3513 6.3335Z" stroke="#545454" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[45%] flex flex-col gap-[8px]'>
                                <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Day of Arrival</span>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 7.99984V15.4998C2.5 17.3408 3.99238 18.8332 5.83333 18.8332H14.1667C16.0076 18.8332 17.5 17.3408 17.5 15.4998V7.99984M2.5 7.99984V6.74984C2.5 4.90889 3.99238 3.4165 5.83333 3.4165H14.1667C16.0076 3.4165 17.5 4.90889 17.5 6.74984V7.99984M2.5 7.99984H17.5M13.3333 2.1665V4.6665M6.66667 2.1665V4.6665" stroke="#545454" strokeLinecap="round" />
                                        </svg>
                                        <span>DD/MM/YYYY</span>
                                    </div>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3513 6.3335L7.64882 6.3335C6.10524 6.3335 5.1435 8.00793 5.92127 9.34124L8.27252 13.372C9.04428 14.695 10.9559 14.695 11.7276 13.372L14.0789 9.34124C14.8567 8.00793 13.8949 6.3335 12.3513 6.3335Z" stroke="#545454" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-[45%] flex flex-col gap-[8px]'>
                                <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Day of Return</span>
                                <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                    <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 7.99984V15.4998C2.5 17.3408 3.99238 18.8332 5.83333 18.8332H14.1667C16.0076 18.8332 17.5 17.3408 17.5 15.4998V7.99984M2.5 7.99984V6.74984C2.5 4.90889 3.99238 3.4165 5.83333 3.4165H14.1667C16.0076 3.4165 17.5 4.90889 17.5 6.74984V7.99984M2.5 7.99984H17.5M13.3333 2.1665V4.6665M6.66667 2.1665V4.6665" stroke="#545454" strokeLinecap="round" />
                                        </svg>
                                        <span>DD/MM/YYYY</span>
                                    </div>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3513 6.3335L7.64882 6.3335C6.10524 6.3335 5.1435 8.00793 5.92127 9.34124L8.27252 13.372C9.04428 14.695 10.9559 14.695 11.7276 13.372L14.0789 9.34124C14.8567 8.00793 13.8949 6.3335 12.3513 6.3335Z" stroke="#545454" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-[500px] justify-between'>
                            <div className='flex gap-1'>
                                <span className='font-semibold text-[16px] leading-[24px]'>Service Fees:</span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                    <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                </svg>
                            </div>
                            <span>40 USD per person</span>
                        </div>
                        <div className='flex w-[500px] justify-between'>
                            <div className='flex gap-1'>
                                <span className='font-semibold text-[16px] leading-[24px]'>Admin and Government Fees:</span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                    <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                </svg>
                            </div>
                            <span>50 USD per person</span>
                        </div>
                        <div className='w-[500px] flex flex-col gap-4'>
                            <span className='font-semibold text-[16px] leading-[24px]'>Processing Time and Fees: </span>
                            <div className='flex gap-2'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12.5" r="11.5" stroke="#A9A9A9" />
                                </svg>

                                <span>Normal - Within 3 days - 0 USD per person</span>
                            </div>
                            <div className='flex gap-2'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12.5" r="11.5" stroke="#A9A9A9" />
                                </svg>

                                <span>Urgent - Within 1 days - 25 USD per person</span>
                            </div>
                            <div className='flex gap-2'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12.5" r="11.5" stroke="#A9A9A9" />
                                </svg>

                                <span>Super Urgent - Within 5 hours - 55 USD per person</span>
                            </div>

                        </div>
                    </div>
                    <div className='w-[690px] bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded p-8 flex flex-col gap-[24px]'>
                        <span className='text-black font-extrabold text-[24px] leading-[32px]'>APPLICATION NO.</span>
                        <div className='flex justify-between'>
                            <div className='w-[276px] flex flex-col gap-[16px]'>
                                <div className='flex flex-col gap-[8px]'>
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

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Gender</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <ellipse cx="4.99992" cy="3.33317" rx="1.66667" ry="1.66667" stroke="#545454" />
                                                <ellipse cx="5" cy="6.66667" rx="2.5" ry="1.66667" stroke="#545454" />
                                                <circle cx="14.9999" cy="13.3332" r="1.66667" stroke="#545454" />
                                                <path d="M18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665M10.0001 18.3332C5.39771 18.3332 1.66675 14.6022 1.66675 9.99984" stroke="#545454" strokeLinecap="round" />
                                                <ellipse cx="15" cy="16.6667" rx="2.5" ry="1.66667" stroke="#545454" />
                                            </svg>
                                            <span>Please select</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Phone number</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5 13.3333L12.3774 13.9462C12.6538 14.0015 12.933 13.8649 13.059 13.6128L12.5 13.3333ZM6.66667 7.5L6.38716 6.94098C6.13507 7.06703 5.99853 7.3462 6.0538 7.62257L6.66667 7.5ZM6.96168 7.35249L7.24119 7.91151L7.24119 7.91151L6.96168 7.35249ZM7.76379 5.2428L8.34408 5.01068V5.01068L7.76379 5.2428ZM7.08574 3.54768L6.50544 3.7798L7.08574 3.54768ZM16.4523 12.9143L16.2202 13.4946L16.4523 12.9143ZM14.7572 12.2362L14.9893 11.6559L14.7572 12.2362ZM12.6475 13.0383L13.2065 13.3178V13.3178L12.6475 13.0383ZM13.5417 9.16667C13.5417 9.51184 13.8215 9.79167 14.1667 9.79167C14.5118 9.79167 14.7917 9.51184 14.7917 9.16667H13.5417ZM13.9129 7.89105L14.4904 7.65188L13.9129 7.89105ZM12.1089 6.08707L12.3481 5.50964L12.1089 6.08707ZM10.8333 5.20833C10.4882 5.20833 10.2083 5.48816 10.2083 5.83333C10.2083 6.17851 10.4882 6.45833 10.8333 6.45833V5.20833ZM16.875 9.16667C16.875 9.51184 17.1548 9.79167 17.5 9.79167C17.8452 9.79167 18.125 9.51184 18.125 9.16667H16.875ZM16.9925 6.61544L17.57 6.37627L16.9925 6.61544ZM13.3846 3.00747L13.6237 2.43004V2.43004L13.3846 3.00747ZM10.8333 1.875C10.4882 1.875 10.2083 2.15482 10.2083 2.5C10.2083 2.84518 10.4882 3.125 10.8333 3.125V1.875ZM16.875 14.4617V15.8333H18.125V14.4617H16.875ZM4.16667 3.125H5.53828V1.875H4.16667V3.125ZM12.5 13.3333C12.6226 12.7205 12.6227 12.7205 12.6229 12.7205C12.623 12.7205 12.6231 12.7206 12.6232 12.7206C12.6234 12.7206 12.6236 12.7207 12.6237 12.7207C12.6239 12.7207 12.624 12.7208 12.624 12.7208C12.624 12.7208 12.6235 12.7207 12.6225 12.7205C12.6206 12.72 12.6167 12.7192 12.6109 12.7179C12.5995 12.7154 12.5806 12.7111 12.5549 12.7049C12.5036 12.6924 12.4253 12.6722 12.3248 12.6426C12.1235 12.5834 11.8347 12.4873 11.4962 12.3422C10.8163 12.0508 9.95326 11.5694 9.19194 10.8081L8.30806 11.6919C9.21341 12.5973 10.2253 13.1575 11.0038 13.4911C11.3945 13.6586 11.7307 13.7708 11.9721 13.8418C12.0929 13.8773 12.1904 13.9027 12.2595 13.9195C12.2941 13.9279 12.3216 13.9342 12.3415 13.9385C12.3514 13.9407 12.3594 13.9425 12.3654 13.9437C12.3684 13.9444 12.3709 13.9449 12.3729 13.9453C12.3739 13.9455 12.3748 13.9457 12.3756 13.9458C12.3759 13.9459 12.3763 13.946 12.3766 13.946C12.3767 13.9461 12.377 13.9461 12.377 13.9461C12.3772 13.9462 12.3774 13.9462 12.5 13.3333ZM9.19194 10.8081C8.43062 10.0467 7.94918 9.18368 7.6578 8.5038C7.51273 8.1653 7.41663 7.87654 7.35742 7.67521C7.32785 7.57468 7.3076 7.49637 7.29512 7.44505C7.28888 7.41941 7.28459 7.40054 7.28206 7.38906C7.28079 7.38332 7.27996 7.37943 7.27955 7.37747C7.27934 7.37648 7.27924 7.37598 7.27924 7.37597C7.27924 7.37597 7.27926 7.37609 7.27931 7.37633C7.27933 7.37645 7.27936 7.3766 7.2794 7.37678C7.27942 7.37688 7.27945 7.37704 7.27946 7.37708C7.27949 7.37725 7.27953 7.37743 6.66667 7.5C6.0538 7.62257 6.05384 7.62276 6.05388 7.62296C6.0539 7.62304 6.05394 7.62325 6.05397 7.62341C6.05403 7.62372 6.0541 7.62406 6.05418 7.62443C6.05433 7.62518 6.05451 7.62606 6.05471 7.62706C6.05512 7.62906 6.05564 7.63158 6.05628 7.63459C6.05754 7.64061 6.05926 7.64862 6.06145 7.65855C6.06583 7.6784 6.07212 7.70592 6.08053 7.74049C6.09735 7.80962 6.12267 7.90709 6.15821 8.02792C6.2292 8.2693 6.34144 8.60554 6.50887 8.9962C6.84249 9.77465 7.40271 10.7866 8.30806 11.6919L9.19194 10.8081ZM6.94617 8.05902L7.24119 7.91151L6.68217 6.79348L6.38716 6.94098L6.94617 8.05902ZM8.34408 5.01068L7.66604 3.31556L6.50544 3.7798L7.18349 5.47492L8.34408 5.01068ZM16.6844 12.334L14.9893 11.6559L14.5251 12.8165L16.2202 13.4946L16.6844 12.334ZM12.0885 12.7588L11.941 13.0538L13.059 13.6128L13.2065 13.3178L12.0885 12.7588ZM14.9893 11.6559C13.8827 11.2133 12.6215 11.6928 12.0885 12.7588L13.2065 13.3178C13.4488 12.8333 14.0221 12.6153 14.5251 12.8165L14.9893 11.6559ZM7.24119 7.91151C8.30723 7.37849 8.78673 6.1173 8.34408 5.01068L7.18349 5.47492C7.38469 5.97793 7.16674 6.55119 6.68217 6.79348L7.24119 7.91151ZM5.53828 3.125C5.96422 3.125 6.34725 3.38432 6.50544 3.7798L7.66604 3.31556C7.31802 2.44551 6.47535 1.875 5.53828 1.875V3.125ZM18.125 14.4617C18.125 13.5246 17.5545 12.682 16.6844 12.334L16.2202 13.4946C16.6157 13.6527 16.875 14.0358 16.875 14.4617H18.125ZM15.8333 16.875C8.81471 16.875 3.125 11.1853 3.125 4.16667H1.875C1.875 11.8756 8.12436 18.125 15.8333 18.125V16.875ZM15.8333 18.125C17.099 18.125 18.125 17.099 18.125 15.8333H16.875C16.875 16.4086 16.4086 16.875 15.8333 16.875V18.125ZM3.125 4.16667C3.125 3.59137 3.59137 3.125 4.16667 3.125V1.875C2.90101 1.875 1.875 2.90101 1.875 4.16667H3.125ZM14.7917 9.16667C14.7917 8.64685 14.6893 8.13213 14.4904 7.65188L13.3355 8.13023C13.4716 8.45882 13.5417 8.811 13.5417 9.16667H14.7917ZM14.4904 7.65188C14.2914 7.17163 13.9999 6.73527 13.6323 6.3677L12.7484 7.25159C12.9999 7.50308 13.1994 7.80164 13.3355 8.13023L14.4904 7.65188ZM13.6323 6.3677C13.2647 6.00014 12.8284 5.70857 12.3481 5.50964L11.8698 6.66449C12.1984 6.8006 12.4969 7.00009 12.7484 7.25159L13.6323 6.3677ZM12.3481 5.50964C11.8679 5.31072 11.3531 5.20833 10.8333 5.20833V6.45833C11.189 6.45833 11.5412 6.52839 11.8698 6.66449L12.3481 5.50964ZM18.125 9.16667C18.125 8.20911 17.9364 7.26093 17.57 6.37627L16.4151 6.85462C16.7187 7.58763 16.875 8.37326 16.875 9.16667H18.125ZM17.57 6.37627C17.2035 5.4916 16.6664 4.68777 15.9893 4.01068L15.1054 4.89456C15.6665 5.45558 16.1115 6.12161 16.4151 6.85462L17.57 6.37627ZM15.9893 4.01068C15.3122 3.33359 14.5084 2.79649 13.6237 2.43004L13.1454 3.58489C13.8784 3.88852 14.5444 4.33354 15.1054 4.89456L15.9893 4.01068ZM13.6237 2.43004C12.7391 2.0636 11.7909 1.875 10.8333 1.875V3.125C11.6267 3.125 12.4124 3.28127 13.1454 3.58489L13.6237 2.43004Z" fill="#545454" />
                                            </svg>
                                            <div className='flex gap-1 items-center'>
                                                <span>+84</span>
                                                <IoIosArrowDown />
                                                <span>Enter a value</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Country of Birth</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6667 7.99984C11.6667 8.92031 10.9206 9.6665 10.0001 9.6665C9.07961 9.6665 8.33341 8.92031 8.33341 7.99984C8.33341 7.07936 9.07961 6.33317 10.0001 6.33317C10.9206 6.33317 11.6667 7.07936 11.6667 7.99984Z" stroke="#545454" strokeWidth="1.25" />
                                                <path d="M15.8334 7.88079C15.8334 9.78443 14.4184 12.1637 12.8688 13.7522C11.8494 14.7971 10.7716 15.4998 10.0001 15.4998C9.22852 15.4998 8.15081 14.7971 7.13138 13.7522C5.58171 12.1637 4.16675 9.78443 4.16675 7.88079C4.16675 4.72488 6.77842 2.1665 10.0001 2.1665C13.2217 2.1665 15.8334 4.72488 15.8334 7.88079Z" stroke="#545454" strokeWidth="1.25" />
                                                <path d="M12.6285 13.9912C15.4742 14.3462 17.5 15.2609 17.5 16.3334C17.5 17.7141 14.1421 18.8334 10 18.8334C5.85786 18.8334 2.5 17.7141 2.5 16.3334C2.5 15.2609 4.52584 14.3462 7.37151 13.9912" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" />
                                            </svg>
                                            <span>Enter value</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Passport Number</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Enter value</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Issue Date</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 7.49984V14.9998C2.5 16.8408 3.99238 18.3332 5.83333 18.3332H14.1667C16.0076 18.3332 17.5 16.8408 17.5 14.9998V7.49984M2.5 7.49984V6.24984C2.5 4.40889 3.99238 2.9165 5.83333 2.9165H14.1667C16.0076 2.9165 17.5 4.40889 17.5 6.24984V7.49984M2.5 7.49984H17.5M13.3333 1.6665V4.1665M6.66667 1.6665V4.1665" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" />
                                            </svg>
                                            <span>DD/MM/YYYY</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[276px] flex flex-col gap-[16px]'>
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Day of Birth</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 7.49984V14.9998C2.5 16.8408 3.99238 18.3332 5.83333 18.3332H14.1667C16.0076 18.3332 17.5 16.8408 17.5 14.9998V7.49984M2.5 7.49984V6.24984C2.5 4.40889 3.99238 2.9165 5.83333 2.9165H14.1667C16.0076 2.9165 17.5 4.40889 17.5 6.24984V7.49984M2.5 7.49984H17.5M13.3333 1.6665V4.1665M6.66667 1.6665V4.1665" stroke="#545454" strokeLinecap="round" />
                                            </svg>
                                            <span>DD/MM/YYYY</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Email Address</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Enter Value</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Country of Residency</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6667 7.99984C11.6667 8.92031 10.9206 9.6665 10.0001 9.6665C9.07961 9.6665 8.33341 8.92031 8.33341 7.99984C8.33341 7.07936 9.07961 6.33317 10.0001 6.33317C10.9206 6.33317 11.6667 7.07936 11.6667 7.99984Z" stroke="#545454" strokeWidth="1.25" />
                                                <path d="M15.8334 7.88079C15.8334 9.78443 14.4184 12.1637 12.8688 13.7522C11.8494 14.7971 10.7716 15.4998 10.0001 15.4998C9.22852 15.4998 8.15081 14.7971 7.13138 13.7522C5.58171 12.1637 4.16675 9.78443 4.16675 7.88079C4.16675 4.72488 6.77842 2.1665 10.0001 2.1665C13.2217 2.1665 15.8334 4.72488 15.8334 7.88079Z" stroke="#545454" strokeWidth="1.25" />
                                                <path d="M12.6285 13.9912C15.4742 14.3462 17.5 15.2609 17.5 16.3334C17.5 17.7141 14.1421 18.8334 10 18.8334C5.85786 18.8334 2.5 17.7141 2.5 16.3334C2.5 15.2609 4.52584 14.3462 7.37151 13.9912" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" />
                                            </svg>
                                            <span>Please select</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Appointment Location</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.66675 3.85366C5.11069 4.02783 3.21672 5.31791 2.26854 6.03486C1.87956 6.32897 1.66675 6.7929 1.66675 7.28056V15.3384C1.66675 16.0496 2.52333 16.462 3.11364 16.0653C4.12154 15.388 5.49066 14.6189 6.66675 14.4873M6.66675 3.85366V14.4873M6.66675 3.85366C8.66685 3.62978 9.81467 5.28246 11.3431 6.09708M6.66675 14.4873C9.432 14.1778 10.5682 17.4552 13.3334 17.1457M13.3334 17.1457C14.8895 16.9715 16.7834 15.6814 17.7316 14.9645C18.1206 14.6704 18.3334 14.2064 18.3334 13.7188V5.66095C18.3334 4.94974 17.4768 4.53732 16.8865 4.934C16.3617 5.28668 15.7389 5.66425 15.0965 5.96375M13.3334 17.1457V13.8821" stroke="#545454" strokeWidth="1.25" />
                                                <path d="M15.5561 9.71374L15.3482 9.12433L15.5561 9.71374ZM10.4452 7.16778L9.90406 6.85506H9.90406L10.4452 7.16778ZM16.3592 7.43306L15.7922 7.69588L16.3592 7.43306ZM10.7201 6.76362L11.2098 7.15197L10.7201 6.76362ZM14.375 3.83317C14.375 4.40847 13.9086 4.87484 13.3333 4.87484V6.12484C14.599 6.12484 15.625 5.09882 15.625 3.83317H14.375ZM13.3333 4.87484C12.758 4.87484 12.2917 4.40847 12.2917 3.83317H11.0417C11.0417 5.09882 12.0677 6.12484 13.3333 6.12484V4.87484ZM12.2917 3.83317C12.2917 3.25787 12.758 2.7915 13.3333 2.7915V1.5415C12.0677 1.5415 11.0417 2.56752 11.0417 3.83317H12.2917ZM13.3333 2.7915C13.9086 2.7915 14.375 3.25787 14.375 3.83317H15.625C15.625 2.56752 14.599 1.5415 13.3333 1.5415V2.7915ZM14.375 10.4998V12.1665H15.625V10.4998H14.375ZM12.2917 12.1665V10.4998H11.0417V12.1665H12.2917ZM13.3333 13.2082C12.758 13.2082 12.2917 12.7418 12.2917 12.1665H11.0417C11.0417 13.4322 12.0677 14.4582 13.3333 14.4582V13.2082ZM14.375 12.1665C14.375 12.7418 13.9086 13.2082 13.3333 13.2082V14.4582C14.599 14.4582 15.625 13.4322 15.625 12.1665H14.375ZM9.375 8.83317C9.375 9.63859 10.0279 10.2915 10.8333 10.2915V9.0415C10.7183 9.0415 10.625 8.94823 10.625 8.83317H9.375ZM12.2917 10.4998C12.2917 9.69442 11.6387 9.0415 10.8333 9.0415V10.2915C10.9484 10.2915 11.0417 10.3848 11.0417 10.4998H12.2917ZM16.0417 8.83317C16.0417 8.94823 15.9484 9.0415 15.8333 9.0415V10.2915C16.6387 10.2915 17.2917 9.63859 17.2917 8.83317H16.0417ZM15.625 10.4998C15.625 10.4101 15.6821 10.332 15.764 10.3032L15.3482 9.12433C14.7821 9.32398 14.375 9.86356 14.375 10.4998H15.625ZM15.764 10.3032C15.7848 10.2958 15.8079 10.2915 15.8333 10.2915V9.0415C15.6643 9.0415 15.5008 9.07051 15.3482 9.12433L15.764 10.3032ZM9.90406 6.85506C9.56744 7.43758 9.375 8.11385 9.375 8.83317H10.625C10.625 8.33925 10.7566 7.87798 10.9863 7.48049L9.90406 6.85506ZM13.3333 6.12484C14.4219 6.12484 15.3617 6.76701 15.7922 7.69588L16.9263 7.17024C16.2987 5.81614 14.9266 4.87484 13.3333 4.87484V6.12484ZM15.7922 7.69588C15.9521 8.04091 16.0417 8.42572 16.0417 8.83317H17.2917C17.2917 8.24049 17.161 7.67662 16.9263 7.17024L15.7922 7.69588ZM13.3333 4.87484C12.0755 4.87484 10.9544 5.46226 10.2304 6.37528L11.2098 7.15197C11.7069 6.52509 12.4732 6.12484 13.3333 6.12484V4.87484ZM10.2304 6.37528C10.1104 6.52654 10.0013 6.68685 9.90406 6.85506L10.9863 7.48049C11.0528 7.36544 11.1276 7.25566 11.2098 7.15197L10.2304 6.37528Z" fill="#545454" />
                                            </svg>
                                            <span>Please select</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex gap-1'>
                                        <span className='text-[#272727] font-semibold text-[16px] leading-[24px]'>Expired Date</span>
                                    </div>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 7.49984V14.9998C2.5 16.8408 3.99238 18.3332 5.83333 18.3332H14.1667C16.0076 18.3332 17.5 16.8408 17.5 14.9998V7.49984M2.5 7.49984V6.24984C2.5 4.40889 3.99238 2.9165 5.83333 2.9165H14.1667C16.0076 2.9165 17.5 4.40889 17.5 6.24984V7.49984M2.5 7.49984H17.5M13.3333 1.6665V4.1665M6.66667 1.6665V4.1665" stroke="#545454" strokeWidth="1.25" strokeLinecap="round" />
                                            </svg>
                                            <span>DD/MM/YYYY</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[24px]'>
                            <div className='w-[276px] flex flex-col gap-1'>
                                <div className='flex gap-1'>
                                    <span>Photo of Passport Page </span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                        <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='w-[276px] h-[160px] bg-[#FBEADA] rounded-lg border border-[#7F7F7F] flex flex-col gap-1 items-center justify-center'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3333 3.3335H9.99992C6.31802 3.3335 3.33325 6.31826 3.33325 10.0002V30.0002C3.33325 33.6821 6.31802 36.6668 9.99992 36.6668H29.9999C33.6818 36.6668 36.6666 33.6821 36.6666 30.0002V16.6668M34.9999 6.66683L32.8451 4.51201C32.1942 3.86113 31.1389 3.86113 30.4881 4.51201L28.3333 6.66683M31.6666 13.3335V4.16683M36.6666 23.3335L31.7682 19.8067C29.2229 17.9741 25.7444 18.1635 23.4131 20.2616L16.5867 26.4054C14.2554 28.5035 10.7769 28.6929 8.2316 26.8603L3.33325 23.3335M18.3333 14.1668C18.3333 16.468 16.4678 18.3335 14.1666 18.3335C11.8654 18.3335 9.99992 16.468 9.99992 14.1668C9.99992 11.8656 11.8654 10.0002 14.1666 10.0002C16.4678 10.0002 18.3333 11.8656 18.3333 14.1668Z" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span className='underline font-semibold text-[14px] leading-[20px]'>+ Upload File</span>
                                </div>
                            </div>
                            <div className='w-[276px] flex flex-col gap-1'>
                                <div className='flex gap-1'>
                                    <span>Photrait Photo </span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#EFA969" />
                                        <path d="M13.6831 10.5808L14.1036 10.8514L13.6831 10.5808ZM9.5 9.5C9.5 9.77614 9.72386 10 10 10C10.2761 10 10.5 9.77614 10.5 9.5H9.5ZM11.5 14C11.5 14.2761 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.2761 12.5 14H11.5ZM12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5H12.5ZM11.5 17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5H11.5ZM21.5 12.5C21.5 17.7467 17.2467 22 12 22V23C17.799 23 22.5 18.299 22.5 12.5H21.5ZM12 22C6.75329 22 2.5 17.7467 2.5 12.5H1.5C1.5 18.299 6.20101 23 12 23V22ZM2.5 12.5C2.5 7.25329 6.75329 3 12 3V2C6.20101 2 1.5 6.70101 1.5 12.5H2.5ZM12 3C17.2467 3 21.5 7.25329 21.5 12.5H22.5C22.5 6.70101 17.799 2 12 2V3ZM13.5 9.5C13.5 9.79936 13.4128 10.0768 13.2626 10.3102L14.1036 10.8514C14.3545 10.4614 14.5 9.99694 14.5 9.5H13.5ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8V7C10.6193 7 9.5 8.11929 9.5 9.5H10.5ZM12 8C12.8284 8 13.5 8.67157 13.5 9.5H14.5C14.5 8.11929 13.3807 7 12 7V8ZM11.5 13.5V14H12.5V13.5H11.5ZM13.2626 10.3102C13.1289 10.5181 12.9638 10.7296 12.7784 10.96C12.5983 11.1839 12.3954 11.4298 12.2131 11.6803C11.8521 12.1766 11.5 12.7831 11.5 13.5H12.5C12.5 13.1124 12.6906 12.7237 13.0217 12.2687C13.1855 12.0436 13.3661 11.8248 13.5575 11.5869C13.7437 11.3555 13.9385 11.1079 14.1036 10.8514L13.2626 10.3102ZM11.5 16.5V17.5H12.5V16.5H11.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='w-[276px] h-[160px] bg-[#FBEADA] rounded-lg border border-[#7F7F7F] flex flex-col gap-1 items-center justify-center'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3333 3.3335H9.99992C6.31802 3.3335 3.33325 6.31826 3.33325 10.0002V30.0002C3.33325 33.6821 6.31802 36.6668 9.99992 36.6668H29.9999C33.6818 36.6668 36.6666 33.6821 36.6666 30.0002V16.6668M34.9999 6.66683L32.8451 4.51201C32.1942 3.86113 31.1389 3.86113 30.4881 4.51201L28.3333 6.66683M31.6666 13.3335V4.16683M36.6666 23.3335L31.7682 19.8067C29.2229 17.9741 25.7444 18.1635 23.4131 20.2616L16.5867 26.4054C14.2554 28.5035 10.7769 28.6929 8.2316 26.8603L3.33325 23.3335M18.3333 14.1668C18.3333 16.468 16.4678 18.3335 14.1666 18.3335C11.8654 18.3335 9.99992 16.468 9.99992 14.1668C9.99992 11.8656 11.8654 10.0002 14.1666 10.0002C16.4678 10.0002 18.3333 11.8656 18.3333 14.1668Z" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span className='underline font-semibold text-[14px] leading-[20px]'>+ Upload File</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[690px] h-[80px] bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded flex items-center justify-center'>
                        <div className='w-[576px] h-[40px] flex justify-between items-center'>
                            <span className='font-extrabold text-[24px] leading-8'>ADD-ON SERVICES</span>
                            <div className='w-[40px] h-[40px] rounded-full border border-[#7F7F7F] flex items-center justify-center'>
                                <span className='text-xl'><FaPlus /></span>
                            </div>
                        </div>
                    </div>

                    <div className='w-[690px] h-[80px] bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded flex items-center justify-center'>
                        <div className='w-[576px] h-[40px] flex justify-between items-center'>
                            <span className='font-extrabold text-[24px] leading-8'>ADD ANOTHER PERSON</span>
                            <div className='w-[40px] h-[40px] rounded-full border border-[#7F7F7F] flex items-center justify-center'>
                                <span className='text-xl'><FaPlus /></span>
                            </div>
                        </div>
                    </div>

                    <div className='w-[690px] h-[360px] bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded flex items-center justify-center'>
                        <div className='w-[576px] h-[292px] flex flex-col justify-between'>
                            <span className='font-extrabold text-[24px] leading-8'>CONTACT INFORMATION</span>
                            <div className='flex h-full flex-col gap-[16px]'>
                                <div className='flex-1 flex flex-col gap-[8px]'>
                                    <span>Your full name</span>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] bg-white rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Enter value</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-1 flex flex-col gap-[8px]'>
                                    <span>Your Email</span>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] bg-white rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Enter value</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-1 flex flex-col gap-[8px]'>
                                    <span>Your phone name</span>
                                    <div className='w-full h-[40px] border border-[#7F7F7F] bg-white rounded-md flex items-center justify-between px-2'>
                                        <div className='flex gap-4 items-center text-[#A9A9A9]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66675 5.83333H4.16675M10.0001 6.66667H15.0001M10.0001 10H15.0001M10.0001 13.3333H12.5001M9.16675 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V5C18.3334 3.61929 17.2141 2.5 15.8334 2.5H9.16675C7.78604 2.5 6.66675 3.61929 6.66675 5V15C6.66675 16.3807 7.78604 17.5 9.16675 17.5ZM2.91675 17.5L3.60692 16.4647C3.97195 15.9172 4.16675 15.2738 4.16675 14.6157V3.75C4.16675 3.05964 3.6071 2.5 2.91675 2.5C2.22639 2.5 1.66675 3.05964 1.66675 3.75V14.6157C1.66675 15.2738 1.86154 15.9172 2.22658 16.4647L2.91675 17.5Z" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Enter value</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex gap-1 items-center' onClick={() => setConfirm1(prev => !prev)}>
                            {
                                confirm1 ?
                                    <svg className='cursor-pointer' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="24" height="24" rx="4" fill="#3B7ACC" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7515 7.36894C19.0081 7.59985 19.0289 7.99504 18.798 8.2516L12.35 15.416C11.5379 16.3184 10.163 16.4309 9.21502 15.6725L6.27634 13.3215C6.0068 13.1059 5.9631 12.7126 6.17873 12.4431C6.39436 12.1735 6.78767 12.1298 7.05721 12.3455L9.99589 14.6964C10.4268 15.0411 11.0517 14.99 11.4209 14.5798L17.8689 7.4154C18.0998 7.15883 18.495 7.13803 18.7515 7.36894Z" fill="white" />
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
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7515 7.36894C19.0081 7.59985 19.0289 7.99504 18.798 8.2516L12.35 15.416C11.5379 16.3184 10.163 16.4309 9.21502 15.6725L6.27634 13.3215C6.0068 13.1059 5.9631 12.7126 6.17873 12.4431C6.39436 12.1735 6.78767 12.1298 7.05721 12.3455L9.99589 14.6964C10.4268 15.0411 11.0517 14.99 11.4209 14.5798L17.8689 7.4154C18.0998 7.15883 18.495 7.13803 18.7515 7.36894Z" fill="white" />
                                    </svg> : <svg className='cursor-pointer' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="25" height="25" rx="4.5" fill="white" stroke="#545454" strokeLinecap="round" />
                                    </svg>
                            }
                            <span>{`I have read and agree to the Terms and Conditions as well as the company's Policies .`}</span>
                        </div>
                    </div>
                </div>
                <div className='w-[440px] h-[880px] bg-[#FFFCF7] border-2 border-dashed border-[#DA857F] rounded p-8 flex flex-col items-center gap-[24px]'>
                    <span className='text-black font-extrabold text-[24px] leading-[32px]'>ORDER SUMMARY</span>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Order Number: </span>
                        <span>ABC123</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Number of Applicants: </span>
                        <span>02</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Type of Visa: </span>
                        <span>Lorem Ipsum Dolor Sit Amet</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Destination </span>
                        <span>Lorem Ipsum Dolor Sit Amet</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Day of Arrival: </span>
                        <span>DD/MM/YYYY</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Day of Return: </span>
                        <span>DD/MM/YYYY</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Service Fees: </span>
                        <span>40 USD per person</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Government Fees: </span>
                        <span>50 USD per person</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Processing Time Fees: </span>
                        <div className='flex flex-col gap-1 items-end'>
                            <span>Super Urgent - Within 1 day</span>
                            <span>- 50 USD per person</span>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Travel Insurance: </span>
                        <span>50 USD per person</span>
                    </div>
                    <div className='w-[360px] h-[48px] flex rounded-lg border border-[#D3D3D3]'>
                        <div className='flex-1 flex items-center justify-center bg-white rounded-l-lg'>
                            <input placeholder='Enter your promote code here' className='outline-none' />
                        </div>
                        <div className='w-[120px] bg-[#3B7ACC] text-white flex items-center justify-center rounded-r-lg'>Apply Now</div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Subtotal: </span>
                        <span>$USD</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Discount: </span>
                        <span>$USD</span>
                    </div>
                    <div className='flex justify-between w-full text-[#3B7ACC]'>
                        <span className='font-semibold text-[16px] leading-[24px]'>Total Amount: </span>
                        <span className='font-bold text-[16px] leading-[24px]'>$USD</span>
                    </div>
                    <div onClick={() => { router.push(`/${path.CHOOSING_PAYMENT_METHOD}`) }} className='cursor-pointer w-full h-[48px] rounded-lg bg-[#F08921] flex items-center justify-center text-white'>Go to payment page</div>
                </div>
            </div>
        </div>
    )
}

export default FillInfoWeb