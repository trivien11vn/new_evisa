"use client";

import { memo } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import path from '@/utils/path'; // Đảm bảo import đúng từ src/utils/path
import Image from 'next/image';

const Footer = () => {
    const router = useRouter();

    return (
        <div className='w-full min-h-[440px] bg-[#3B7ACC] flex justify-center items-center text-white'>
            <div className='w-main h-[342px] flex flex-col gap-[40px]'>
                <div className='h-[282px] flex gap-[22px] items-start'>
                    <img src="/assets/logo.png" className='w-[60px] h-[60px]' alt="Logo" />
                    <div className='flex justify-start gap-[22px]'>
                        <div className='flex flex-col gap-[16px] w-[136px] h-[218px]'>
                            <span className='font-bold text-[20px] leading-[34px]'>Global eVISA</span>
                            <div className='flex flex-col gap-[8px]'>
                                <span onClick={() => { router.push(`/${path.ABOUT_US}`) }} className='cursor-pointer leading-[20px] font-[400px] text-[14px] hover:underline'>About Us</span>
                                <span onClick={() => { router.push(`/${path.CAREER}`) }} className='cursor-pointer leading-[20px] font-[400px] text-[14px] hover:underline'>Careers</span>
                                <span onClick={() => { router.push(`/${path.POLICIES}`) }} className='cursor-pointer leading-[20px] font-[400px] text-[14px] hover:underline'>Policies</span>
                                <span onClick={() => { router.push(`/${path.TERM_AND_CONDITION}`) }} className='cursor-pointer leading-[20px] font-[400px] text-[14px] hover:underline'>Term & Conditions</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[16px] w-[152px] h-[168px]'>
                            <span className='font-bold text-[20px] leading-[34px]'>Need to Know</span>
                            <div className='flex flex-col gap-[8px]'>
                                <span onClick={() => { router.push(`/${path.CONTENT_CHECK_ILLEGAL}`) }} className='cursor-pointer leading-[20px] font-[400px] text-[14px]'>How it works</span>
                                <span onClick={() => { router.push(`/${path.FAQ}`) }} className='cursor-pointer leading-[20px] font-[400px] text-[14px]'>FAQs</span>
                                <span onClick={() => { router.push(`/${path.BLOGS}`) }} className='cursor-pointer leading-[20px] font-[400px] text-[14px]'>Blogs</span>
                                <span onClick={() => { router.push(`/${path.NEWS}`) }} className='cursor-pointer leading-[20px] font-[400px] text-[14px]'>News</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[16px] w-[219px] h-[280px]'>
                            <span className='font-bold text-[20px] leading-[34px]'>Contact Us</span>
                            <div className='flex flex-col gap-[8px]'>
                                <span className='leading-[20px] font-[400px] text-[14px]'>No. 40 - 42, Thien Phuoc St Ward 9, Tan Binh Dist, HCMC, Vietnam</span>
                                <span className='leading-[20px] font-[400px] text-[14px]'>Hotline:
                                    +84.987.309.313
                                    +84.28.6685.1315
                                    +84.28.6685.1317
                                </span>
                                <span className='leading-[20px] font-[400px] text-[14px]'>Email: loremipsum@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[40px] w-[482px] h-[280px]'>
                        <span className='text-[40px] font-extrabold'>SUBSCRIBE TO GET OUR NEWSLETTER</span>
                        <div className='flex flex-col gap-[40px] items-center'>
                            <div className='w-[481px] gap-[12px] h-[56px] flex'>
                                <input className='p-2 rounded-[8px] w-[300px]' placeholder='Enter your email address' />
                                <div className='bg-[#F08921] w-[169px] h-[56px] rounded-[8px] border border-white p-4 flex justify-between items-center text-[14px] font-extrabold leading-[24px]'>SUBSCRIBE <GoArrowUpRight /></div>
                            </div>
                            <div className='w-[200px] h-[40px] flex gap-[40px]'>
                                <Image src="/assets/likedIn.svg" alt="LinkedIn" width={40} height={40} />
                                <Image src="/assets/facebook.svg" alt="Facebook" width={40} height={40} />
                                <Image src="/assets/twitter.svg" alt="Twitter" width={40} height={40} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-[14px] font-[400px] leading-[22px]'>
                    @Global eVISA 2023 All rights reserved
                </div>
            </div>
        </div>
    );
};

export default memo(Footer);