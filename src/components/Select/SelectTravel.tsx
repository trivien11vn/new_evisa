'use client';

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { travel } from '@/utils/country'

const SelectTravel = () => {
    const [index, setIndex] = useState(0)

    const handleNextCountry = () => {
        if (index + 5 >= travel?.length) {
            setIndex(0)
        }
        else {
            setIndex(prev => prev + 5)
        }
    }

    const handlePrevCountry = () => {
        if (index === 0) {
            const valid_indices = [];
            for (let index = 0; index < travel.length; index++) {
                if (index % 5 === 0) {
                    valid_indices.push(index);
                }
            }
            setIndex(valid_indices[valid_indices.length - 1])
        }
        else {
            setIndex(prev => prev - 5)
        }
    }
    return (
        <div className='animate-fade-up  absolute top-[100%] left-0 right-0 flex flex-col px-2 py-4 gap-[12px] bg-white border border-[#7F7F7F] rounded-2xl'>
            <div className='flex gap-2 border border-[#7F7F7F] p-2 rounded-lg items-center'>
                <IoSearch color='#28303F' size={20} />
                <input placeholder='Enter input' className='outline-none' />
            </div>
            <div className='flex flex-col gap-[12px]'>
                <span className='font-bold text-[14px] leading-[24px]'>Most popular</span>
                <div className='flex flex-col gap-[8px]'>
                    <div className='flex gap-[8px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_683_22634)">
                                <path d="M6.875 18.8438V14.5312L3.65625 16.9062C4.5625 17.75 5.65625 18.4062 6.875 18.8438ZM13.125 18.8438C14.3438 18.4062 15.4375 17.75 16.3438 16.9062L13.125 14.5V18.8438ZM1.15625 13.125C1.25 13.4375 1.375 13.7188 1.53125 14.0313L2.75 13.125H1.15625ZM17.25 13.125L18.4688 14.0313C18.5938 13.75 18.7188 13.4375 18.8438 13.125H17.25Z" fill="#2A5F9E" />
                                <path d="M7.34375 11.875H0.8125C0.90625 12.3125 1.03125 12.7188 1.15625 13.125H2.75L1.53125 14.0313C1.78125 14.5625 2.0625 15.0312 2.40625 15.5L5.625 13.125H6.875V13.75L3.21875 16.4375L3.65625 16.875L6.875 14.5312V18.8438C7.28125 19 7.6875 19.0938 8.125 19.1875V11.875H7.34375ZM19.1875 11.875H11.875V19.1875C12.3125 19.0938 12.7187 18.9688 13.125 18.8438V14.5312L16.3437 16.875C16.7812 16.4688 17.1562 16.0312 17.5312 15.5625L14.1875 13.125H16.3125L18.2187 14.5312C18.3125 14.375 18.4062 14.1875 18.4687 14.0313L17.25 13.125H18.8437C18.9687 12.7188 19.0938 12.3125 19.1875 11.875Z" fill="white" />
                                <path d="M2.40625 15.5C2.65625 15.8437 2.90625 16.1563 3.1875 16.4688L6.875 13.7812V13.1562H5.625L2.40625 15.5ZM14.2188 13.125L17.5625 15.5625C17.6875 15.4062 17.7812 15.25 17.9062 15.0937C17.9375 15.0625 17.9375 15.0312 17.9688 15.0312C18.0625 14.875 18.1875 14.6875 18.2812 14.5312L16.3125 13.125H14.2188Z" fill="#ED4C5C" />
                                <path d="M13.125 1.15625V5.46875L16.3438 3.09375C15.4375 2.25 14.3438 1.59375 13.125 1.15625ZM6.875 1.15625C5.65625 1.59375 4.5625 2.25 3.65625 3.09375L6.875 5.5V1.15625ZM18.8438 6.875C18.75 6.5625 18.625 6.28125 18.4688 5.96875L17.25 6.875H18.8438ZM2.75 6.875L1.53125 5.96875C1.40625 6.28125 1.28125 6.5625 1.15625 6.875H2.75Z" fill="#2A5F9E" />
                                <path d="M12.6562 8.125H19.1562C19.0625 7.6875 18.9375 7.28125 18.8125 6.875H17.2188L18.4375 5.96875C18.1875 5.4375 17.9062 4.96875 17.5625 4.5L14.375 6.875H13.125V6.25L16.7813 3.5625L16.3438 3.125L13.125 5.46875V1.15625C12.7188 1 12.3125 0.90625 11.875 0.8125V8.125H12.6562ZM0.8125 8.125H8.125V0.8125C7.6875 0.90625 7.28125 1.03125 6.875 1.15625V5.46875L3.65625 3.125C3.21875 3.53125 2.84375 3.96875 2.46875 4.4375L5.8125 6.875H3.6875L1.78125 5.46875C1.6875 5.625 1.59375 5.8125 1.53125 5.96875L2.75 6.875H1.15625C1.03125 7.28125 0.90625 7.6875 0.8125 8.125Z" fill="white" />
                                <path d="M17.5938 4.5C17.3438 4.15625 17.0938 3.84375 16.8125 3.53125L13.125 6.21875V6.84375H14.375L17.5938 4.5ZM5.78125 6.875L2.46875 4.4375C2.34375 4.59375 2.25 4.75 2.125 4.90625C2.09375 4.9375 2.09375 4.96875 2.0625 4.96875C1.96875 5.125 1.84375 5.3125 1.75 5.46875L3.65625 6.875H5.78125Z" fill="#ED4C5C" />
                                <path d="M19.1875 8.125H11.875V0.8125C11.2812 0.6875 10.6562 0.625 10 0.625C9.34375 0.625 8.71875 0.6875 8.125 0.8125V8.125H0.8125C0.6875 8.71875 0.625 9.34375 0.625 10C0.625 10.6562 0.6875 11.2812 0.8125 11.875H8.125V19.1875C8.71875 19.3125 9.34375 19.375 10 19.375C10.6562 19.375 11.2812 19.3125 11.875 19.1875V11.875H19.1875C19.3125 11.2812 19.375 10.6562 19.375 10C19.375 9.34375 19.3125 8.71875 19.1875 8.125Z" fill="#ED4C5C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_683_22634">
                                    <rect width="20" height="20" rx="10" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span className='font-normal text-[14px] leading-[24px]'>United Kingdom - GB</span>
                    </div>
                    <div className='flex gap-[8px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_683_22645)">
                                <path d="M0.59375 10C0.59375 14.0938 3.21875 17.5625 6.84375 18.8438V1.15625C3.21875 2.4375 0.59375 5.90625 0.59375 10Z" fill="#428BC1" />
                                <path d="M19.3438 10C19.3438 5.90625 16.75 2.4375 13.0938 1.15625V18.8438C16.75 17.5625 19.3438 14.0938 19.3438 10Z" fill="#ED4C5C" />
                                <path d="M6.84375 18.8438C7.8125 19.1875 8.875 19.375 9.96875 19.375C11.0625 19.375 12.125 19.1875 13.0938 18.8438V1.15625C12.125 0.8125 11.0938 0.625 9.96875 0.625C8.84375 0.625 7.8125 0.8125 6.84375 1.15625V18.8438Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_683_22645">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span className='font-normal text-[14px] leading-[24px]'>France - FR</span>
                    </div>
                    <div className='flex gap-[8px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_683_25827)">
                                <path d="M10 19.375C15.1875 19.375 19.375 15.1875 19.375 10H0.625C0.625 15.1875 4.8125 19.375 10 19.375Z" fill="#F9F9F9" />
                                <path d="M10 0.625C4.8125 0.625 0.625 4.8125 0.625 10H19.375C19.375 4.8125 15.1875 0.625 10 0.625Z" fill="#ED4C5C" />
                                <path d="M6.625 5.46875L6.25 5.15625H6.71875L6.875 4.6875L7.03125 5.15625H7.5L7.125 5.46875L7.25 5.9375L6.875 5.65625L6.5 5.9375L6.625 5.46875ZM9.125 5.46875L8.75 5.15625H9.21875L9.375 4.6875L9.53125 5.15625H10L9.625 5.46875L9.75 5.9375L9.375 5.65625L9 5.9375L9.125 5.46875ZM6.9375 7.03125L6.5625 6.71875H7.03125L7.1875 6.25L7.34375 6.71875H7.8125L7.4375 7.03125L7.5625 7.5L7.1875 7.21875L6.8125 7.5L6.9375 7.03125ZM8.8125 7.03125L8.4375 6.71875H8.90625L9.0625 6.25L9.21875 6.71875H9.6875L9.3125 7.03125L9.4375 7.5L9.0625 7.21875L8.6875 7.5L8.8125 7.03125ZM7.875 4.53125L7.5 4.21875H7.96875L8.125 3.75L8.28125 4.21875H8.75L8.375 4.53125L8.5 5L8.125 4.71875L7.75 5L7.875 4.53125Z" fill="#F9F9F9" />
                                <path d="M7.625 8.75C6.125 8.75 4.9375 7.46875 4.9375 5.90625C4.9375 4.34375 6.15625 3.0625 7.625 3.0625C7.75 3.0625 7.84375 3.0625 7.9375 3.09375C7.5625 2.90625 7.15625 2.8125 6.71875 2.8125C5.09375 2.8125 3.75 4.21875 3.75 5.9375C3.75 7.65625 5.09375 9.0625 6.71875 9.0625C7.21875 9.0625 7.71875 8.9375 8.125 8.6875C7.96875 8.71875 7.8125 8.75 7.625 8.75Z" fill="#F9F9F9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_683_25827">
                                    <rect width="20" height="20" rx="10" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className='font-normal text-[14px] leading-[24px]'>Singapore - SG</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[12px]'>
                <span className='font-bold text-[14px] leading-[24px]'>Alphabetically</span>
                <div className='flex flex-col gap-[8px] relative'>
                    <div className='flex gap-[8px]'>
                        {
                            travel[index]?.flag
                        }
                        <span className='font-normal text-[14px] leading-[24px]'>{travel[index]?.name}</span>
                    </div>
                    <div className='flex gap-[8px]'>
                        {travel[index + 1]?.flag}
                        <span className='font-normal text-[14px] leading-[24px]'>{travel[index + 1]?.name}</span>
                    </div>
                    <div className='flex gap-[8px]'>
                        {travel[index + 2]?.flag}
                        <span className='font-normal text-[14px] leading-[24px]'>{travel[index + 2]?.name}</span>
                    </div>
                    <div className='flex gap-[8px]'>
                        {travel[index + 3]?.flag}
                        <span className='font-normal text-[14px] leading-[24px]'>{travel[index + 3]?.name}</span>
                    </div>
                    <div className='flex gap-[8px]'>
                        {travel[index + 4]?.flag}
                        <span className='font-normal text-[14px] leading-[24px]'>{travel[index + 4]?.name}</span>
                    </div>
                    <div onClick={handlePrevCountry} className='cursor-pointer hover:bg-[#3B7ACC] hover:border-[#3B7ACC] hover:text-white text-[#7F7F7F] absolute top-0 right-0 w-[32px] h-[32px] rounded-full border border-[#7F7F7F] flex items-center justify-center'>
                        <FaChevronUp />
                    </div>
                    <div onClick={handleNextCountry} className='cursor-pointer hover:bg-[] absolute bottom-0 right-0 w-[32px] h-[32px] rounded-full border border-[#7F7F7F] flex items-center justify-center'>
                        <FaChevronDown color='#7F7F7F' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectTravel