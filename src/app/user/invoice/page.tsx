const MyInvoice = () => {
    return (
        <div className='flex flex-col gap-[24px] w-full'>
            <div className='flex flex-col gap-[8px]'>
                <span className='font-extrabold text-[24px] leading-[32px] uppercase text-[#3B7ACC]'>send a request for an e-invoice</span>
                <span className='font-normal text-[16px] leading-6 text-[#545454]'>Please enter the required information, we will check and send the e-invoice to your email that you made booking with us.</span>
            </div>
            <div className='flex flex-col gap-[20px] w-full'>
                <div className='flex justify-between w-full'>
                    <div className='w-[48%] flex flex-col gap-[8px]'>
                        <span className='font-bold text-[16px] leading-[24px]'>Booking ID <sup className='text-[#FF0000]'>*</sup></span>
                        <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='eg: F687227237' />
                    </div>
                    <div className='w-[48%] flex flex-col gap-[8px]'>
                        <span className='font-bold text-[16px] leading-[24px]'>Email address</span>
                        <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='loremipsum@gmail.com' />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-[8px]'>
                    <span className='font-bold text-[16px] leading-[24px]'>Company Name <sup className='text-[#FF0000]'>*</sup></span>
                    <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='eg: ABC Company' />
                </div>
                <div className='w-full flex flex-col gap-[8px]'>
                    <span className='font-bold text-[16px] leading-[24px]'>Company Address <sup className='text-[#FF0000]'>*</sup></span>
                    <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='eg: 40, Thien Phuoc street, Ward 9, Tan Binh District, Ho Chi Minh City' />
                </div>
                <div className='w-full flex flex-col gap-[8px]'>
                    <span className='font-bold text-[16px] leading-[24px]'>Tax Code <sup className='text-[#FF0000]'>*</sup></span>
                    <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='eg: xxxxxxxxxx-xxx' />
                </div>
            </div>
        </div>
    )
}

export default MyInvoice