import Button_Blue from '@/components/Button/Button_Blue'
const faqImage = '/assets/faq.svg'
import Button_White from '@/components/Button/Button_White'


const FAQ = () => {
    return (
        <div className='w-full my-[24px] flex flex-col gap-8 relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0 hidden lg:flex'></div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-8'>
                <div className='flex items-center'>
                    <div className='w-[860px] font-extrabold text-[32px] md:text-[48px] lg:text-[56px]'>FAQS</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-4 w-full lg:w-[40%]'>
                        <span className='font-extrabold text-[28px] md:text-[36px] lg:text-[40px] text-[#272727] underline'>LOOKING FOR HELP?</span>
                        <span>Find advice and answers for many common questions in five different topics quickly or get in touch with our support team.</span>
                    </div>
                    <img src={faqImage} alt='faq' className='hidden lg:flex'/>
                </div>
                <div className='flex flex-col gap-[12px] items-center'>
                    <div className='flex flex-col gap-[12px] sm:flex-row sm:gap-[24px] lg:gap-[56px] justify-center w-full'>
                        <Button_Blue title={'eVisa'} />
                        <Button_White title={'FLIGHT'} />
                        <Button_White title={'AIRPORT SERVICE'} />
                    </div>
                    <div className='flex flex-col gap-[12px] sm:flex-row sm:gap-[24px] lg:gap-[56px] justify-center w-full'>
                        <Button_White title={'TRAVEL INSURANCES'} />
                        <Button_White title={'HOTEL'} />
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-[88px] items-center'>
                <span className='font-extrabold text-[28px] md:text-[36px] lg:text-[48px] lg:leading-[56px]'>EVISA FAQS</span>
                <div className='flex flex-col gap-[40px]'>
                    <div className='flex justify-between p-2 border border-[#3B7ACC] rounded-md'>
                        <svg className='w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px]' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9992 1.64929C8.96881 1.64929 1.64844 8.96967 1.64844 18C1.64844 27.0304 8.96881 34.3508 17.9992 34.3508C27.0296 34.3508 34.3499 27.0304 34.3499 18C34.3499 8.96967 27.0296 1.64929 17.9992 1.64929ZM19.4932 27.4174H16.4467V24.498H19.4932V27.4174ZM19.4932 21.3795V22.3448H16.4467V21.1568C16.4467 17.568 20.5304 16.9988 20.5304 14.4484C20.5304 13.2863 19.4921 12.3953 18.1308 12.3953C16.7201 12.3953 15.4826 13.4348 15.4826 13.4348L13.7501 11.2793C13.7501 11.2793 15.4567 9.49504 18.4019 9.49504C21.1987 9.49504 23.7963 11.2275 23.7963 14.148C23.7963 18.234 19.4909 18.7043 19.4909 21.3784L19.4932 21.3795Z" fill="#3B7ACC" />
                        </svg>

                        <div className='w-[80%] underline font-bold text-[12px] md:text-[16px] lg:text-[18px] lg:leading-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ?
                        </div>

                        <svg className='w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40 40)" fill="white" stroke="#3B7ACC" />
                            <path d="M22.3526 15.8334L17.65 15.8334C16.1065 15.8334 15.1447 17.5078 15.9225 18.8411L18.2737 22.8718C19.0455 24.1949 20.9571 24.1949 21.7289 22.8718L24.0801 18.8411C24.8579 17.5078 23.8961 15.8334 22.3526 15.8334Z" stroke="#3B7ACC" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='flex justify-between p-2 border border-[#3B7ACC] rounded-md'>
                        <svg className='w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px]' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9992 1.64929C8.96881 1.64929 1.64844 8.96967 1.64844 18C1.64844 27.0304 8.96881 34.3508 17.9992 34.3508C27.0296 34.3508 34.3499 27.0304 34.3499 18C34.3499 8.96967 27.0296 1.64929 17.9992 1.64929ZM19.4932 27.4174H16.4467V24.498H19.4932V27.4174ZM19.4932 21.3795V22.3448H16.4467V21.1568C16.4467 17.568 20.5304 16.9988 20.5304 14.4484C20.5304 13.2863 19.4921 12.3953 18.1308 12.3953C16.7201 12.3953 15.4826 13.4348 15.4826 13.4348L13.7501 11.2793C13.7501 11.2793 15.4567 9.49504 18.4019 9.49504C21.1987 9.49504 23.7963 11.2275 23.7963 14.148C23.7963 18.234 19.4909 18.7043 19.4909 21.3784L19.4932 21.3795Z" fill="#3B7ACC" />
                        </svg>

                        <div className='w-[80%] underline font-bold text-[12px] md:text-[16px] lg:text-[18px] lg:leading-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ?
                        </div>

                        <svg className='w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40 40)" fill="white" stroke="#3B7ACC" />
                            <path d="M22.3526 15.8334L17.65 15.8334C16.1065 15.8334 15.1447 17.5078 15.9225 18.8411L18.2737 22.8718C19.0455 24.1949 20.9571 24.1949 21.7289 22.8718L24.0801 18.8411C24.8579 17.5078 23.8961 15.8334 22.3526 15.8334Z" stroke="#3B7ACC" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='flex justify-between p-2 border border-[#3B7ACC] rounded-md'>
                        <svg className='w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px]' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9992 1.64929C8.96881 1.64929 1.64844 8.96967 1.64844 18C1.64844 27.0304 8.96881 34.3508 17.9992 34.3508C27.0296 34.3508 34.3499 27.0304 34.3499 18C34.3499 8.96967 27.0296 1.64929 17.9992 1.64929ZM19.4932 27.4174H16.4467V24.498H19.4932V27.4174ZM19.4932 21.3795V22.3448H16.4467V21.1568C16.4467 17.568 20.5304 16.9988 20.5304 14.4484C20.5304 13.2863 19.4921 12.3953 18.1308 12.3953C16.7201 12.3953 15.4826 13.4348 15.4826 13.4348L13.7501 11.2793C13.7501 11.2793 15.4567 9.49504 18.4019 9.49504C21.1987 9.49504 23.7963 11.2275 23.7963 14.148C23.7963 18.234 19.4909 18.7043 19.4909 21.3784L19.4932 21.3795Z" fill="#3B7ACC" />
                        </svg>

                        <div className='w-[80%] underline font-bold text-[12px] md:text-[16px] lg:text-[18px] lg:leading-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ?
                        </div>

                        <svg className='w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40 40)" fill="white" stroke="#3B7ACC" />
                            <path d="M22.3526 15.8334L17.65 15.8334C16.1065 15.8334 15.1447 17.5078 15.9225 18.8411L18.2737 22.8718C19.0455 24.1949 20.9571 24.1949 21.7289 22.8718L24.0801 18.8411C24.8579 17.5078 23.8961 15.8334 22.3526 15.8334Z" stroke="#3B7ACC" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='flex justify-between p-2 border border-[#3B7ACC] rounded-md'>
                        <svg className='w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px]' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9992 1.64929C8.96881 1.64929 1.64844 8.96967 1.64844 18C1.64844 27.0304 8.96881 34.3508 17.9992 34.3508C27.0296 34.3508 34.3499 27.0304 34.3499 18C34.3499 8.96967 27.0296 1.64929 17.9992 1.64929ZM19.4932 27.4174H16.4467V24.498H19.4932V27.4174ZM19.4932 21.3795V22.3448H16.4467V21.1568C16.4467 17.568 20.5304 16.9988 20.5304 14.4484C20.5304 13.2863 19.4921 12.3953 18.1308 12.3953C16.7201 12.3953 15.4826 13.4348 15.4826 13.4348L13.7501 11.2793C13.7501 11.2793 15.4567 9.49504 18.4019 9.49504C21.1987 9.49504 23.7963 11.2275 23.7963 14.148C23.7963 18.234 19.4909 18.7043 19.4909 21.3784L19.4932 21.3795Z" fill="#3B7ACC" />
                        </svg>

                        <div className='w-[80%] underline font-bold text-[12px] md:text-[16px] lg:text-[18px] lg:leading-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ?
                        </div>

                        <svg className='w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40 40)" fill="white" stroke="#3B7ACC" />
                            <path d="M22.3526 15.8334L17.65 15.8334C16.1065 15.8334 15.1447 17.5078 15.9225 18.8411L18.2737 22.8718C19.0455 24.1949 20.9571 24.1949 21.7289 22.8718L24.0801 18.8411C24.8579 17.5078 23.8961 15.8334 22.3526 15.8334Z" stroke="#3B7ACC" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='flex justify-between p-2 border border-[#3B7ACC] rounded-md'>
                        <svg className='w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px]' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9992 1.64929C8.96881 1.64929 1.64844 8.96967 1.64844 18C1.64844 27.0304 8.96881 34.3508 17.9992 34.3508C27.0296 34.3508 34.3499 27.0304 34.3499 18C34.3499 8.96967 27.0296 1.64929 17.9992 1.64929ZM19.4932 27.4174H16.4467V24.498H19.4932V27.4174ZM19.4932 21.3795V22.3448H16.4467V21.1568C16.4467 17.568 20.5304 16.9988 20.5304 14.4484C20.5304 13.2863 19.4921 12.3953 18.1308 12.3953C16.7201 12.3953 15.4826 13.4348 15.4826 13.4348L13.7501 11.2793C13.7501 11.2793 15.4567 9.49504 18.4019 9.49504C21.1987 9.49504 23.7963 11.2275 23.7963 14.148C23.7963 18.234 19.4909 18.7043 19.4909 21.3784L19.4932 21.3795Z" fill="#3B7ACC" />
                        </svg>

                        <div className='w-[80%] underline font-bold text-[12px] md:text-[16px] lg:text-[18px] lg:leading-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ?
                        </div>

                        <svg className='w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40 40)" fill="white" stroke="#3B7ACC" />
                            <path d="M22.3526 15.8334L17.65 15.8334C16.1065 15.8334 15.1447 17.5078 15.9225 18.8411L18.2737 22.8718C19.0455 24.1949 20.9571 24.1949 21.7289 22.8718L24.0801 18.8411C24.8579 17.5078 23.8961 15.8334 22.3526 15.8334Z" stroke="#3B7ACC" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='flex justify-between p-2 border border-[#3B7ACC] rounded-md'>
                        <svg className='w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px]' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9992 1.64929C8.96881 1.64929 1.64844 8.96967 1.64844 18C1.64844 27.0304 8.96881 34.3508 17.9992 34.3508C27.0296 34.3508 34.3499 27.0304 34.3499 18C34.3499 8.96967 27.0296 1.64929 17.9992 1.64929ZM19.4932 27.4174H16.4467V24.498H19.4932V27.4174ZM19.4932 21.3795V22.3448H16.4467V21.1568C16.4467 17.568 20.5304 16.9988 20.5304 14.4484C20.5304 13.2863 19.4921 12.3953 18.1308 12.3953C16.7201 12.3953 15.4826 13.4348 15.4826 13.4348L13.7501 11.2793C13.7501 11.2793 15.4567 9.49504 18.4019 9.49504C21.1987 9.49504 23.7963 11.2275 23.7963 14.148C23.7963 18.234 19.4909 18.7043 19.4909 21.3784L19.4932 21.3795Z" fill="#3B7ACC" />
                        </svg>

                        <div className='w-[80%] underline font-bold text-[12px] md:text-[16px] lg:text-[18px] lg:leading-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ?
                        </div>

                        <svg className='w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40 40)" fill="white" stroke="#3B7ACC" />
                            <path d="M22.3526 15.8334L17.65 15.8334C16.1065 15.8334 15.1447 17.5078 15.9225 18.8411L18.2737 22.8718C19.0455 24.1949 20.9571 24.1949 21.7289 22.8718L24.0801 18.8411C24.8579 17.5078 23.8961 15.8334 22.3526 15.8334Z" stroke="#3B7ACC" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[40px]'>
                <div className='w-[72px] mx-auto h-[12px] bg-[#3B7ACC]'></div>
                <span className='mx-auto font-extrabold text-[24px] md:text-[36px] lg:text-[48px] leading-[56px] underline'>MORE QUESTIONS</span>
                <div className='mx-auto px-20 py-2 w-fit rounded-md uppercase bg-[#F08921] text-white'>Contact Us</div>
            </div>
        </div>
    )
}

export default FAQ