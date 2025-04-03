import React from 'react'

const image8 = '/assets/image_8.jpg'
const image9 = '/assets/image_9.jpg'
const image10 = '/assets/image_10.jpg'
const image11 = '/assets/image_11.jpg'

import { RiArrowDownWideFill } from 'react-icons/ri'

const Blog = () => {
    return (
        <div className='w-full my-[24px] flex flex-col gap-8 relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0 hidden xl:flex'></div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-8'>
                <div className='w-[860px] font-extrabold text-[32px] md:text-[48px] lg:text-[56px]'>BLOGS</div>
                <div className='flex flex-col sm:flex-row sm:justify-between'>
                    <div className="w-full sm:w-[70%] flex flex-col gap-[40px]">
                        <div className='flex flex-col gap-8 w-full'>
                            <span className='font-extrabold text-[20px] md:text-[28px] lg:text-[34px] uppercase'>Company formation</span>
                            <img className='w-full object-cover' src={image8} />
                            <div className='flex flex-col gap-6 pb-12 border-b border-[#A7A7A7]'>
                                <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-[#A7A7A7]'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image9} />
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image10} />
                                </div>
                            </div>
                            <div className='flex mx-auto gap-1 items-center'>
                                <span className='font-bold text-[16px] leading-[24px] text-[#2F62A3]'>Load more</span>
                                <RiArrowDownWideFill color='#2F62A3' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 w-full'>
                            <span className='font-extrabold text-[20px] md:text-[28px] lg:text-[34px] uppercase'>BANK ACCOUNT OPENING </span>
                            <img className='w-full object-cover' src={image8} />
                            <div className='flex flex-col gap-6 pb-12 border-b border-[#A7A7A7]'>
                                <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-[#A7A7A7]'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image9} />
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image10} />
                                </div>
                            </div>
                            <div className='flex mx-auto gap-1 items-center'>
                                <span className='font-bold text-[16px] leading-[24px] text-[#2F62A3]'>Load more</span>
                                <RiArrowDownWideFill color='#2F62A3' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 w-full'>
                            <span className='font-extrabold text-[20px] md:text-[28px] lg:text-[34px] uppercase'>BOOKKEEPING </span>
                            <img className='w-full object-cover' src={image8} />
                            <div className='flex flex-col gap-6 pb-12 border-b border-[#A7A7A7]'>
                                <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-[#A7A7A7]'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image9} />
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image10} />
                                </div>
                            </div>
                            <div className='flex mx-auto gap-1 items-center'>
                                <span className='font-bold text-[16px] leading-[24px] text-[#2F62A3]'>Load more</span>
                                <RiArrowDownWideFill color='#2F62A3' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 w-full'>
                            <span className='font-extrabold text-[20px] md:text-[28px] lg:text-[34px] uppercase'>Accounting </span>
                            <img className='w-full object-cover' src={image8} />
                            <div className='flex flex-col gap-6 pb-12 border-b border-[#A7A7A7]'>
                                <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-[#A7A7A7]'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image9} />
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image10} />
                                </div>
                            </div>
                            <div className='flex mx-auto gap-1 items-center'>
                                <span className='font-bold text-[16px] leading-[24px] text-[#2F62A3]'>Load more</span>
                                <RiArrowDownWideFill color='#2F62A3' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 w-full'>
                            <span className='font-extrabold text-[20px] md:text-[28px] lg:text-[34px] uppercase'>Tax </span>
                            <img className='w-full object-cover' src={image8} />
                            <div className='flex flex-col gap-6 pb-12 border-b border-[#A7A7A7]'>
                                <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-[#A7A7A7]'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image9} />
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center pb-12'>
                                <div className='sm:w-[75%] flex flex-col gap-6'>
                                    <span className='text-[#272727] font-semibold text-[20px] leading-[24px]'>Lorem Ipsum</span>
                                    <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='sm:w-[20%] flex items-center justify-center'>
                                    <img className='sm:w-[134px] sm:h-[134px]' src={image10} />
                                </div>
                            </div>
                            <div className='flex mx-auto gap-1 items-center'>
                                <span className='font-bold text-[16px] leading-[24px] text-[#2F62A3]'>Load more</span>
                                <RiArrowDownWideFill color='#2F62A3' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full sm:w-[25%] h-full flex flex-col gap-[24px]'>
                        <span className='font-extrabold text-[24px] leading-[32px] text-[#272727] uppercase'>RELATED BLOGS</span>
                        <div className='flex flex-col gap-[40px]'>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='flex flex-col gap-[16px]'>
                                    <img src={image11} className='w-full h-[180px] object-cover' />
                                    <span className='font-bold text-[16px] leading-6 uppercase'>Company formation</span>
                                    <span className='font-extrabold text-[24px] leading-[32px]'>LOREM IPSUM</span>
                                    <span className='font-normal text-[16px] leading-[24px] font-montserrat'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                                </div>
                                <div className='w-full h-[1px] bg-[#A7A7A7]'></div>
                            </div>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='flex flex-col gap-[16px]'>
                                    <span className='font-bold text-[16px] leading-6 uppercase'>Company formation</span>
                                    <span className='font-extrabold text-[24px] leading-[32px]'>LOREM IPSUM</span>
                                </div>
                                <div className='w-full h-[1px] bg-[#A7A7A7]'></div>
                            </div>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='flex flex-col gap-[16px]'>
                                    <span className='font-bold text-[16px] leading-6'>Bank Account Opening</span>
                                    <span className='font-extrabold text-[24px] leading-[32px]'>LOREM IPSUM</span>
                                </div>
                                <div className='w-full h-[1px] bg-[#A7A7A7]'></div>
                            </div>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='flex flex-col gap-[16px]'>
                                    <span className='font-bold text-[16px] leading-6'>Bookkeeping</span>
                                    <span className='font-extrabold text-[24px] leading-[32px]'>LOREM IPSUM</span>
                                </div>
                                <div className='w-full h-[1px] bg-[#A7A7A7]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog