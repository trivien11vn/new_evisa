'use client'
const person = '/assets/person1.jpg'
import path from '@/utils/path'
import { useRouter } from "next/navigation";

const UserLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter()
    return (
        <div className='w-full p-4 xl:p-0 xl:w-main mx-auto my-[24px] flex flex-col gap-[40px]'>
            <div className='flex justify-between items-center'>
                <span className='font-extrabold text-[34px] leading-[40px]'>MY ACCOUNT</span>
                <span className='font-normal text-[16px] leading-[20px]'>Home/ My Account</span>
            </div>
            <div className='flex flex-col sm:flex-row gap-[20px] w-full'>
                <div className='w-full sm:w-[30%] border border-[#D3D3D3] flex flex-col h-fit'>
                    <div className='px-4 py-10 flex gap-[12px] sm:gap-[16px] md:gap-[24px] lg:gap-[32px] items-center'>
                        <img className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[105px] lg:h-[105px] rounded-full' src={person} />
                        <div className='flex flex-col gap-[4px]'>
                            <span className='font-extrabold text-[16px] md:text-[20px] lg:text-[24px]'>LOREM IPSUM</span>
                            <span className='font-normal text-[12px] lg:text-[16px] w-full break-all'>
                                Loremipsum@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className='p-4 bg-[#6295D6]'>
                        <span className='font-bold text-[20px] leading-[26px] text-white'>BOOKINGS</span>
                    </div>
                    <div onClick={() => { router.push(`/${path.USER}/${path.BOOKING}`) }} className='p-4 flex gap-4 items-center hover:bg-[#EDEDED] hover:text-black hover:underline cursor-pointer'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6654 13.3332H5.83203C4.45132 13.3332 3.33203 14.4525 3.33203 15.8332M16.6654 13.3332V15.8332C16.6654 17.2139 15.5461 18.3332 14.1654 18.3332H5.83203C4.45132 18.3332 3.33203 17.2139 3.33203 15.8332M16.6654 13.3332V4.1665C16.6654 2.78579 15.5461 1.6665 14.1654 1.6665H5.83203C4.45132 1.6665 3.33203 2.78579 3.33203 4.1665V15.8332M7.4987 1.6665V7.49984L9.9987 5.6665L12.4987 7.49984V1.6665" stroke="#28303F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className='font-normal text-[20px] leading-[24px] text-[#272727]'>My Bookings</span>
                    </div>
                    <div onClick={() => { router.push(`/${path.USER}/${path.INVOICE}`) }} className='p-4 flex gap-4 items-center hover:bg-[#EDEDED] hover:text-black hover:underline cursor-pointer'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1654 5.8335L5.83203 5.8335" stroke="#28303F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.1654 9.1665L5.83203 9.1665" stroke="#28303F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.9987 12.5L5.83203 12.5" stroke="#28303F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.8333 1.6665H4.16667C3.24619 1.6665 2.5 2.4127 2.5 3.33317V15.9618C2.5 17.1161 3.6451 17.9209 4.7312 17.5299L6.03267 17.0614C6.43934 16.915 6.88699 16.9323 7.28115 17.1097L9.31606 18.0254C9.75101 18.2211 10.249 18.2211 10.6839 18.0254L12.7189 17.1097C13.113 16.9323 13.5607 16.915 13.9673 17.0614L15.2688 17.5299C16.3549 17.9209 17.5 17.1161 17.5 15.9618V3.33317C17.5 2.4127 16.7538 1.6665 15.8333 1.6665Z" stroke="#28303F" strokeWidth="1.25" strokeLinecap="round" />
                        </svg>
                        <span className='font-normal text-[20px] leading-[24px] text-[#272727]'>Invoices</span>
                    </div>
                    <div className='p-4 bg-[#6295D6]'>
                        <span className='font-bold text-[20px] leading-[26px] text-white uppercase'>Account setting</span>
                    </div>
                    <div onClick={() => { router.push(`/${path.USER}/${path.PROFILE}`) }} className='p-4 flex gap-4 items-center hover:bg-[#EDEDED] hover:text-black hover:underline cursor-pointer'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8337 18.2284C17.2719 17.8587 18.3346 16.5534 18.3346 14.9998V4.99984C18.3346 3.15889 16.8423 1.6665 15.0013 1.6665H5.0013C3.16035 1.6665 1.66797 3.15889 1.66797 4.99984V14.9998C1.66797 16.5534 2.73073 17.8587 4.16889 18.2284M15.8337 18.2284C15.5676 18.2968 15.2887 18.3332 15.0013 18.3332H5.0013C4.71388 18.3332 4.43496 18.2968 4.16889 18.2284M15.8337 18.2284C15.7778 15.0551 13.188 12.4998 10.0013 12.4998C6.81464 12.4998 4.22478 15.0551 4.16889 18.2284M12.5013 7.49984C12.5013 6.11913 11.382 4.99984 10.0013 4.99984C8.62059 4.99984 7.5013 6.11913 7.5013 7.49984C7.5013 8.88055 8.62059 9.99984 10.0013 9.99984C11.382 9.99984 12.5013 8.88055 12.5013 7.49984Z" stroke="#28303F" strokeWidth="1.25" />
                        </svg>
                        <span className='font-normal text-[20px] leading-[24px] text-[#272727]'>Profile Information</span>
                    </div>
                    <div className='p-4 flex gap-4 items-center hover:bg-[#EDEDED] hover:text-black hover:underline cursor-pointer'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 11.6665L15.9596 10.7069C16.3501 10.3164 16.3501 9.68326 15.9596 9.29273L15 8.33317" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.832 10L10.832 10M3.33203 14.3886V6.05527M13.332 14.3886C13.332 15.3091 12.5858 16.0553 11.6654 16.0553H8.33203M13.332 6.05527C13.332 5.1348 12.5858 4.38861 11.6654 4.38861H8.33203M4.0742 16.5501L5.74086 17.6612C6.84846 18.3996 8.33203 17.6056 8.33203 16.2744V4.16947C8.33203 2.83831 6.84846 2.04432 5.74087 2.78272L4.0742 3.89383C3.61053 4.20294 3.33203 4.72333 3.33203 5.28058V15.1633C3.33203 15.7206 3.61053 16.2409 4.0742 16.5501Z" stroke="#28303F" strokeWidth="1.25" strokeLinecap="round" />
                        </svg>
                        <span className='font-normal text-[20px] leading-[24px] text-[#272727]'>Sign Out</span>
                    </div>
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    )
}

export default UserLayout