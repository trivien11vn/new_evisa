"use client";

import { memo } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import path from '@/utils/path';
import Image from 'next/image';

const Footer = () => {
    const router = useRouter();

    return (
        <footer className='w-full bg-[#3B7ACC] text-white'>
            <div className='container mx-auto px-4 py-8 md:py-12'>
                {/* Main Footer Content */}
                <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16'>
                    {/* Logo Column - Hidden on mobile, shown on md+ */}
                    <div className='hidden md:block'>
                        <Image 
                            src="/assets/logo.png" 
                            width={80} 
                            height={80} 
                            alt="Logo" 
                            className='w-16 h-16 lg:w-20 lg:h-20'
                        />
                    </div>

                    {/* Links Grid */}
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-8 w-full'>
                        {/* About Column */}
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold text-lg md:text-xl'>Global eVISA</h3>
                            <div className='flex flex-col gap-2'>
                                <span 
                                    onClick={() => router.push(`/${path.ABOUT_US}`)} 
                                    className='cursor-pointer text-sm md:text-base hover:underline'
                                >
                                    About Us
                                </span>
                                <span 
                                    onClick={() => router.push(`/${path.CAREER}`)} 
                                    className='cursor-pointer text-sm md:text-base hover:underline'
                                >
                                    Careers
                                </span>
                                <span 
                                    onClick={() => router.push(`/${path.POLICIES}`)} 
                                    className='cursor-pointer text-sm md:text-base hover:underline'
                                >
                                    Policies
                                </span>
                                <span 
                                    onClick={() => router.push(`/${path.TERM_AND_CONDITION}`)} 
                                    className='cursor-pointer text-sm md:text-base hover:underline'
                                >
                                    Term & Conditions
                                </span>
                            </div>
                        </div>

                        {/* Need to Know Column */}
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold text-lg md:text-xl'>Need to Know</h3>
                            <div className='flex flex-col gap-2'>
                                <span 
                                    onClick={() => router.push(`/${path.CONTENT_CHECK_ILLEGAL}`)} 
                                    className='cursor-pointer text-sm md:text-base hover:underline'
                                >
                                    How it works
                                </span>
                                <span 
                                    onClick={() => router.push(`/${path.FAQ}`)} 
                                    className='cursor-pointer text-sm md:text-base hover:underline'
                                >
                                    FAQs
                                </span>
                                <span 
                                    onClick={() => router.push(`/${path.BLOGS}`)} 
                                    className='cursor-pointer text-sm md:text-base hover:underline'
                                >
                                    Blogs
                                </span>
                                <span 
                                    onClick={() => router.push(`/${path.NEWS}`)} 
                                    className='cursor-pointer text-sm md:text-base hover:underline'
                                >
                                    News
                                </span>
                            </div>
                        </div>

                        {/* Contact Column - Full width on mobile, normal on desktop */}
                        <div className='col-span-2 md:col-span-1 flex flex-col gap-4'>
                            <h3 className='font-bold text-lg md:text-xl'>Contact Us</h3>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm md:text-base'>
                                    No. 40 - 42, Thien Phuoc St Ward 9, Tan Binh Dist, HCMC, Vietnam
                                </p>
                                <div className='text-sm md:text-base'>
                                    <p className='font-semibold'>Hotline:</p>
                                    <p>+84.987.309.313</p>
                                    <p>+84.28.6685.1315</p>
                                    <p>+84.28.6685.1317</p>
                                </div>
                                <p className='text-sm md:text-base'>
                                    Email: loremipsum@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className='mt-12 md:mt-16 flex flex-col items-center gap-6 md:gap-8'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
                        SUBSCRIBE TO GET OUR NEWSLETTER
                    </h2>
                    
                    <div className='w-full max-w-2xl flex flex-col items-center gap-6'>
                        <div className='w-full flex flex-col sm:flex-row gap-3'>
                            <input 
                                className='flex-grow p-3 md:p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F08921]'
                                placeholder='Enter your email address' 
                            />
                            <button className='bg-[#F08921] hover:bg-[#e07d1a] transition-colors rounded-lg border border-white p-3 md:p-4 flex items-center justify-center gap-2 font-bold'>
                                SUBSCRIBE <GoArrowUpRight className='text-lg' />
                            </button>
                        </div>
                        
                        <div className='flex gap-4 md:gap-6'>
                            <a href="#" className='hover:opacity-80 transition-opacity'>
                                <Image 
                                    src="/assets/likedIn.svg" 
                                    alt="LinkedIn" 
                                    width={40} 
                                    height={40} 
                                    className='w-8 h-8 md:w-10 md:h-10'
                                />
                            </a>
                            <a href="#" className='hover:opacity-80 transition-opacity'>
                                <Image 
                                    src="/assets/facebook.svg" 
                                    alt="Facebook" 
                                    width={40} 
                                    height={40} 
                                    className='w-8 h-8 md:w-10 md:h-10'
                                />
                            </a>
                            <a href="#" className='hover:opacity-80 transition-opacity'>
                                <Image 
                                    src="/assets/twitter.svg" 
                                    alt="Twitter" 
                                    width={40} 
                                    height={40} 
                                    className='w-8 h-8 md:w-10 md:h-10'
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='mt-8 md:mt-12 text-center text-sm md:text-base'>
                    © Global eVISA 2023 All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);