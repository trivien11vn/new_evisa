import { SlArrowRight } from 'react-icons/sl'

const RecentBlog = ({image, title, text}: { image: string; title: string; text: string }) => {
  return (
    <div className='p-4 bg-[#FFFCF7] w-full h-full border border-[#3B7ACC] rounded-2xl flex flex-col justify-between'>
      <div className='flex flex-col gap-3'>
        <img src={image} className='rounded-2xl object-contain'/>
        <span className='font-bold text-[18px] leading-[24px]'>{title}</span>
        <span className='font-normal text-[14px] leading-[20px]'>{text}</span>
      </div>

      <div className='flex gap-4 items-center'>
        <div className='w-[40px] h-[40px] rounded-full border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center'>
          <SlArrowRight />
        </div>
        <span className='font-bold'>Find out more</span>
      </div>
    </div>
  )
}

export default RecentBlog