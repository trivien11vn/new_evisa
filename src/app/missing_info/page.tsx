const missingInfo = '/assets/missing_info.svg'

const MissingInfo = () => {
    return (
        <div className='w-full my-[24px] flex flex-col gap-8 relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
            <div className='w-main mx-auto flex flex-col gap-8'>
                <div className='font-extrabold text-[56px] leading-[64px] text-[#545454]'>MISSING INFO!</div>
                <img className='w-[60%] mx-auto h-auto object-cover' src={missingInfo} />
                <div className='flex flex-col gap-4 items-center w-full'>
                    <span className='font-extrabold text-[34px] leading-[40px] text-[#2F62A3]'>{`YOU WILL BE MISSED :(`}</span>
                    <span className='font-normal text-[20px] leading-6 text-[#000000]'>You have successfully unsubscribed from our emails.</span>
                </div>
                <div className='uppercase px-16 py-2 mx-auto w-fit rounded-md bg-[#F08921] text-white'>
                    <span className='font-bold text-[20px] leading-[26px]'>Back to home</span>
                </div>
            </div>
        </div>
    )
}

export default MissingInfo