import React from 'react'
import PictureImage from '@/components/Picture/PictureImage'

const image4 = '/assets/imge_4.jpg'
const image5 = '/assets/image_5.jpg'
const image6 = '/assets/image_6.jpg'
const image7 = '/assets/image_7.jpg'
const scenery1 = '../../assets/scenery_1.jpg'
const scenery2 = '../../assets/scenery_2.jpg'
const scenery3 = '../../assets/scenery_3.jpg'

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const News = () => {
  return (
    <div className='w-full my-[24px] flex flex-col gap-8 relative'>
      <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0 hidden xl:flex'></div>
      <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-8'>
        <div className='w-[860px] font-extrabold text-[32px] md:text-[48px] lg:text-[56px]'>NEWS</div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        <div className='flex justify-center gap-[12px] lg:justify-between flex-wrap'>
          <div className='px-4 py-1 lg:px-6 lg:py-2 flex items-center justify-center bg-[#3B7ACC] border-[#3B7ACC] border-2 text-white rounded-2xl '>
            <span className='font-bold text-[16px]'>ALL BLOGS</span>
          </div>
          <div className='px-4 py-1 lg:px-6 lg:py-2 flex items-center justify-center border-[#3B7ACC] border-2 text-[#2F62A3] rounded-2xl'>
            <span className='font-bold text-[16px]'>EVISA</span>
          </div>
          <div className='px-4 py-1 lg:px-6 lg:py-2 flex items-center justify-center border-[#3B7ACC] border-2 text-[#2F62A3] rounded-2xl '>
            <span className='font-bold text-[16px]'>FLIGHTS</span>
          </div>
          <div className='px-4 py-1 lg:px-6 lg:py-2 flex items-center justify-center border-[#3B7ACC] border-2 text-[#2F62A3] rounded-2xl '>
            <span className='font-bold text-[16px]'>TRAVEL INSURANCE</span>
          </div>
          <div className='px-4 py-1 lg:px-6 lg:py-2 flex items-center justify-center border-[#3B7ACC] border-2 text-[#2F62A3] rounded-2xl '>
            <span className='font-bold text-[16px]'>AIRPORT SERVICE</span>
          </div>
          <div className='px-4 py-1 lg:px-6 lg:py-2 flex items-center justify-center border-[#3B7ACC] border-2 text-[#2F62A3] rounded-2xl '>
            <span className='font-bold text-[16px]'>HOTEL</span>
          </div>
        </div>
        <div className='flex justify-between h-[350px] lg:h-[690px]'>
          <div className="relative w-[60%] h-full">
            <img src={scenery1} alt="Image" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-transparent"></div>
            <div className='absolute left-[10px] bottom-[10px] lg:left-[60px] lg:bottom-[30px] flex flex-col gap-1'>
              <span className='font-bold text-[10px] md:text-[14px] lg:text-[18px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
              <span className='font-medium text-[8px] md:text-[10px] lg:text-[14px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
            </div>
          </div>

          <div className='w-[38%] h-full flex flex-col justify-between'>
            <div className='w-full h-[48%] relative'>
              <img src={scenery2} alt="Image" className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-transparent"></div>
              <div className='absolute left-[10px] bottom-[10px] lg:left-[60px] lg:bottom-[30px] flex flex-col gap-1'>
                <span className='font-bold text-[10px] md:text-[14px] lg:text-[18px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
                <span className='font-medium text-[8px] md:text-[10px] lg:text-[14px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
              </div>
            </div>
            <div className='w-full h-[48%] relative'>
              <img src={scenery3} alt="Image" className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-transparent"></div>
              <div className='absolute left-[10px] bottom-[10px] lg:left-[60px] lg:bottom-[30px] flex flex-col gap-1'>
                <span className='font-bold text-[10px] md:text-[14px] lg:text-[18px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
                <span className='font-medium text-[8px] md:text-[10px] lg:text-[14px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex gap-[12px] overflow-x-auto lg:justify-between relative'>
          <div className='hidden lg:flex lg:w-[64px] lg:h-[64px] rounded-full items-center justify-center text-white bg-[#3B7ACC] absolute left-[-90px] top-1/2'>
              <SlArrowLeft />
          </div>
          <div className='w-[50%] lg:w-[32%] flex-shrink-0'>
            <PictureImage image={image4} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'}/>
          </div>
          <div className='w-[50%] lg:w-[32%] flex-shrink-0'>
            <PictureImage image={image4} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'}/>
          </div>
          <div className='w-[50%] lg:w-[32%] flex-shrink-0'>
            <PictureImage image={image4} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'}/>
          </div>
          <div className='hidden lg:flex lg:w-[64px] lg:h-[64px] rounded-full items-center justify-center text-white bg-[#3B7ACC] absolute right-[-90px] top-1/2'>
              <SlArrowRight />
          </div>
        </div>
        <div className='w-full flex gap-[12px] overflow-x-auto lg:justify-between relative'>
          <div className='lg:w-[64px] lg:h-[64px] rounded-full flex items-center justify-center text-white bg-[#3B7ACC] absolute left-[-90px] top-1/2'>
              <SlArrowLeft />
          </div>
          <div className='w-[50%] lg:w-[32%] flex-shrink-0'>
            <PictureImage image={image5} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'}/>
          </div>
          <div className='w-[50%] lg:w-[32%] flex-shrink-0'>
            <PictureImage image={image5} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'}/>
          </div>
          <div className='w-[50%] lg:w-[32%] flex-shrink-0'>
            <PictureImage image={image5} title={'Lorem Ipsum'} subtile={'Lorem Ipsum'} detail={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'}/>
          </div>
          <div className='lg:w-[64px] lg:h-[64px] rounded-full flex items-center justify-center text-white bg-[#3B7ACC] absolute right-[-90px] top-1/2'>
              <SlArrowRight />
          </div>
        </div>
        <div className='w-full lg:w-[80%] flex justify-between mx-auto'>
          <div className='w-[48%] relative'>
            <img src={image6} className='w-full h-full'/>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-transparent"></div>
            <div className='absolute left-[10px] bottom-[10px] lg:left-[60px] lg:bottom-[30px] flex flex-col gap-1'>
              <span className='font-bold text-[10px] md:text-[14px] lg:text-[18px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
              <span className='font-medium text-[8px] md:text-[10px] lg:text-[14px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
            </div>
          </div>
          <div className='w-[48%] relative'>
            <img src={image7} className='w-full h-full'/>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-transparent"></div>
            <div className='absolute left-[10px] bottom-[10px] lg:left-[60px] lg:bottom-[30px] flex flex-col gap-1'>
              <span className='font-bold text-[10px] md:text-[14px] lg:text-[18px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
              <span className='font-medium text-[8px] md:text-[10px] lg:text-[14px] text-white font-montserrat'>Lorem Ipsum Dolor Sit Amet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News