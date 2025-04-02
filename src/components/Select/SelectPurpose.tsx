import { IoSearch } from 'react-icons/io5'

const SelectPurpose = () => {
  return (
    <div className='animate-fade-up  absolute top-[100%] left-[-20px] right-[-20px] flex flex-col p-4 gap-[12px] bg-white border border-[#7F7F7F] rounded-2xl'>
            <div className='flex gap-2 border border-[#7F7F7F] p-2 rounded-lg items-center'>
                <IoSearch color='#28303F' size={20}/>
                <input placeholder='Enter input' className='outline-none'/>
            </div>
            <div className='flex flex-col gap-[12px]'>
                <span className='font-bold text-[14px] leading-[24px]'>Most popular</span>
                <div className='flex flex-col gap-[8px]'>
                    <span className='font-normal text-[14px] leading-[20px]'>Tourist</span>
                    <span className='font-normal text-[14px] leading-[20px]'>Business</span>
                    <span className='font-normal text-[14px] leading-[20px]'>Study</span>
                </div>
            </div>
            <div className='flex flex-col gap-[12px]'>
                <span className='font-bold text-[14px] leading-[24px]'>Alphabetically</span>
                <div className='flex flex-col gap-[8px] relative'>
                    <span className='font-normal text-[14px] leading-[20px]'>Business</span>
                    <span className='font-normal text-[14px] leading-[20px]'>Non-immigrant</span>
                    <span className='font-normal text-[14px] leading-[20px]'>Tourist</span>
                    <span className='font-normal text-[14px] leading-[20px]'>Transit</span>
                    <span className='font-normal text-[14px] leading-[20px]'>Study</span>
                </div>
            </div>
        </div>
  )
}

export default SelectPurpose