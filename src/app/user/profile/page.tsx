const person = '/assets/person1.jpg'
const vietnamFlag = '/assets/vietnamFlag.png'

const MyProfile = () => {
  return (
    <div className='flex flex-col gap-[24px] w-full'>
        <div className='flex flex-col gap-[20px]'>
            <span className='font-extrabold text-[24px] leading-[32px] uppercase text-[#3B7ACC]'>Profile information</span>
            <div className='w-full h-[128px] rounded-2xl bg-[#E5E5E5] flex p-4 justify-between'>
                <img src={person} className='w-[91px] h-[91px] object-cover rounded-[7px]'/>
                <div className='w-[70%] flex flex-col justify-between py-2'>
                    <div className='uppercase bg-[#F08921] rounded-[10px] w-fit px-[19px] py-[7px] text-white'>
                        <span className='uppercase'>Change Avatar</span>
                    </div>
                    <span className='w-[400px] text-[14px] leading-5 text-[#272727]'>Upload JPG, GIF or PNG image. 300 x 300 is recommended.</span>
                </div>
            </div>
        </div>
        <span className='font-extrabold text-[24px] leading-[32px]'>INFORMATION</span>
        <div className='flex flex-col gap-[20px]'>
            <div className='flex justify-between w-full'>
                <div className='w-[48%] flex flex-col gap-[8px]'>
                    <span className='font-bold text-[16px] leading-[24px]'>Full Name:</span>
                    <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='Lorem Ipsum'/>
                </div>
                <div className='w-[48%] flex flex-col gap-[8px]'>
                    <span className='font-bold text-[16px] leading-[24px]'>Nationality:</span>
                    <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='Select your nationality'/>
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='w-[48%] flex flex-col gap-[8px]'>
                    <span className='font-bold text-[16px] leading-[24px]'>Email Address:</span>
                    <input className='placeholder:text-[#A9A9A9] bg-[#DCDCDC] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#E5E5E5]' placeholder='Lorem Ipsum'/>
                </div>
                <div className='w-[48%] flex flex-col gap-[8px]'>
                    <span className='font-bold text-[16px] leading-[24px]'>Nationality:</span>
                    <div className='w-full flex justify-between items-center pl-4 border border-[#7F7F7F] rounded-2xl'>
                        <img src={vietnamFlag} className='w-[15%] h-[27px] object-cover' />
                        <input className='w-[80%] placeholder:text-[#A9A9A9] outline-none h-[48px] rounded-2xl' placeholder='Input your phone number'/>
                    </div>
                </div>
            </div>
        </div>
        <span className='font-extrabold text-[24px] leading-[32px]'>CHANGE PASSWORD</span>
        <div className='flex justify-between w-full'>
            <div className='w-[48%] flex flex-col gap-[8px]'>
                <span className='font-bold text-[16px] leading-[24px]'>New Password:</span>
                <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='***********'/>
            </div>
            <div className='w-[48%] flex flex-col gap-[8px]'>
                <span className='font-bold text-[16px] leading-[24px]'>Confirm Password:</span>
                <input className='placeholder:text-[#A9A9A9] pl-4 outline-none w-full h-[48px] rounded-2xl border border-[#7F7F7F]' placeholder='***********'/>
            </div>
        </div>
        <div className='w-full flex justify-end'>
            <div className='uppercase bg-[#3B7ACC] border border-[#3B7ACC] px-4 py-2 w-fit rounded-2xl text-white'>Update Profile</div>
        </div>
    </div>
  )
}

export default MyProfile