const aboutUsImage = '/assets/about_us.svg'
import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'

const AboutUs = () => {
    return (
        <div className='w-full my-[24px] flex flex-col gap-2 relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0 hidden lg:flex'></div>
            <div className='w-full lg:w-main p-4 lg:p-0 mx-auto flex flex-col gap-8'>
                <div className='flex items-center'>
                    <div className='w-[860px] font-extrabold text-[32px] md:text-[48px] lg:text-[56px]'>ABOUT US</div>
                </div>
                <div className='flex flex-col gap-[40px]'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex flex-col gap-[24px] w-[600px]'>
                            <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] text-[#545454] underline'>ELEVATING TRAVEL WITH EXPERTISE.</span>
                            <span className='font-normal text-[16px] md:text-[20px] text-[#272727]'>“We are dedicated to offer deliver truly unique and customized experiences  that elevate the travel experience. “</span>
                        </div>
                        <Image src={aboutUsImage} alt='about-us' width={420} height={532} className='hidden lg:flex' />
                    </div>
                    <div className='flex flex-col gap-[40px]'>
                        <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] text-[#272727] underline'>OUR DESIRABLE WORK</span>
                        <div className='flex flex-col gap-[40px] items-center'>
                            <div className='flex w-full gap-[12px] lg:justify-between overflow-x-auto'>
                                <div className='w-[50%] lg:w-[30%] flex flex-col gap-8 p-4 items-center '>
                                    <span className='font-bold text-[16px] lg:text-[20px] line-clamp-1 text-[#545454] uppercase'>eVisa Services</span>
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="80" cy="80" r="79" fill="#F08921" stroke="#EFA969" strokeWidth="2" />
                                        <path d="M45.4336 55.3108C45.4336 48.0372 51.33 42.1407 58.6037 42.1407H81.6513L104.699 65.1884V94.821C104.699 102.095 98.8025 107.991 91.5288 107.991H58.6037C51.33 107.991 45.4336 102.095 45.4336 94.821V55.3108Z" fill="black" />
                                        <path d="M104.696 65.1884L81.6484 42.1407V52.0183C81.6484 59.2919 87.5449 65.1884 94.8185 65.1884H104.696Z" fill="#A9A9A9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M59.4258 71.7733C59.4258 70.4095 60.5314 69.304 61.8952 69.304H75.0652C76.429 69.304 77.5346 70.4095 77.5346 71.7733C77.5346 73.1371 76.429 74.2427 75.0652 74.2427H61.8952C60.5314 74.2427 59.4258 73.1371 59.4258 71.7733Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M59.4258 88.236C59.4258 86.8722 60.5314 85.7666 61.8952 85.7666H88.2353C89.5991 85.7666 90.7047 86.8722 90.7047 88.236C90.7047 89.5998 89.5991 90.7054 88.2353 90.7054H61.8952C60.5314 90.7054 59.4258 89.5998 59.4258 88.236Z" fill="white" />
                                        <ellipse cx="97.5135" cy="97.5148" rx="26.0408" ry="26.0408" fill="#272727" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M91.1507 87.2849C91.5722 84.8644 92.1364 82.6888 92.807 80.8445C93.5707 78.7445 94.4407 77.162 95.3232 76.1356C96.2103 75.1038 96.9561 74.7983 97.5134 74.7983C98.0707 74.7983 98.8165 75.1038 99.7036 76.1356C100.586 77.162 101.456 78.7445 102.22 80.8445C102.89 82.6888 103.455 84.8644 103.876 87.2849C101.837 87.0903 99.7047 86.9876 97.5134 86.9876C95.3221 86.9876 93.1895 87.0903 91.1507 87.2849ZM87.7115 87.7129C88.1746 84.7238 88.8454 82.0115 89.6828 79.7085C90.5234 77.3968 91.5636 75.4092 92.8024 73.9684C94.0364 72.5329 95.6227 71.474 97.5134 71.474C99.4041 71.474 100.99 72.5329 102.224 73.9684C103.463 75.4092 104.503 77.3968 105.344 79.7085C106.181 82.0115 106.852 84.7238 107.315 87.7129C110.304 88.1759 113.017 88.8467 115.32 89.6842C117.631 90.5248 119.619 91.565 121.06 92.8037C122.495 94.0378 123.554 95.624 123.554 97.5147C123.554 99.4054 122.495 100.992 121.06 102.226C119.619 103.464 117.631 104.505 115.32 105.345C113.017 106.183 110.304 106.854 107.315 107.317C106.852 110.306 106.181 113.018 105.344 115.321C104.503 117.633 103.463 119.62 102.224 121.061C100.99 122.497 99.4041 123.555 97.5134 123.555C95.6227 123.555 94.0364 122.497 92.8024 121.061C91.5636 119.62 90.5234 117.633 89.6828 115.321C88.8454 113.018 88.1746 110.306 87.7115 107.317C84.7225 106.854 82.0102 106.183 79.7071 105.345C77.3955 104.505 75.4078 103.464 73.967 102.226C72.5316 100.992 71.4727 99.4054 71.4727 97.5147C71.4727 95.624 72.5316 94.0378 73.967 92.8037C75.4078 91.565 77.3955 90.5248 79.7071 89.6842C82.0102 88.8467 84.7225 88.1759 87.7115 87.7129ZM87.2835 103.877C84.863 103.456 82.6874 102.892 80.8432 102.221C78.7432 101.457 77.1607 100.587 76.1342 99.705C75.1024 98.8179 74.797 98.072 74.797 97.5147C74.797 96.9575 75.1024 96.2116 76.1342 95.3245C77.1607 94.4421 78.7432 93.572 80.8432 92.8084C82.6874 92.1377 84.863 91.5735 87.2835 91.1521C87.089 93.1909 86.9863 95.3234 86.9863 97.5147C86.9863 99.706 87.089 101.839 87.2835 103.877ZM90.6739 104.354C90.4385 102.198 90.3106 99.902 90.3106 97.5147C90.3106 95.1275 90.4385 92.8316 90.6739 90.6752C92.8303 90.4398 95.1261 90.312 97.5134 90.312C99.9007 90.312 102.197 90.4398 104.353 90.6752C104.588 92.8316 104.716 95.1275 104.716 97.5147C104.716 99.902 104.588 102.198 104.353 104.354C102.197 104.59 99.9007 104.718 97.5134 104.718C95.1261 104.718 92.8303 104.59 90.6739 104.354ZM91.1507 107.745C91.5722 110.165 92.1364 112.341 92.807 114.185C93.5707 116.285 94.4407 117.867 95.3232 118.894C96.2103 119.926 96.9561 120.231 97.5134 120.231C98.0707 120.231 98.8165 119.926 99.7036 118.894C100.586 117.867 101.456 116.285 102.22 114.185C102.89 112.341 103.455 110.165 103.876 107.745C101.837 107.939 99.7047 108.042 97.5134 108.042C95.3221 108.042 93.1895 107.939 91.1507 107.745ZM107.743 103.877C110.164 103.456 112.339 102.892 114.184 102.221C116.284 101.457 117.866 100.587 118.893 99.705C119.924 98.8179 120.23 98.072 120.23 97.5147C120.23 96.9575 119.924 96.2116 118.893 95.3245C117.866 94.4421 116.284 93.572 114.184 92.8084C112.339 92.1378 110.164 91.5735 107.743 91.1521C107.938 93.1909 108.041 95.3234 108.041 97.5147C108.041 99.706 107.938 101.839 107.743 103.877Z" fill="white" />
                                    </svg>
                                    <span className='text-justify'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                </div>
                                <div className='w-[50%] lg:w-[30%] flex flex-col gap-8 p-4 items-center '>
                                    <span className='font-bold text-[16px] lg:text-[20px] line-clamp-1 text-[#545454] uppercase'>Flight Booking Services</span>
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="80" cy="80" r="79" fill="#F08921" stroke="#F08921" strokeWidth="2" />
                                        <path d="M97.1768 110.457L90.2591 101.053C89.2973 99.746 88.7841 98.2098 88.7841 96.6384V52.1158C88.7841 47.2654 84.8521 43.3334 80.0017 43.3334C75.1512 43.3334 71.2192 47.2654 71.2192 52.1158V96.6384C71.2192 98.2098 70.706 99.746 69.7442 101.053L62.8265 110.457C60.3287 113.853 64.4164 118.049 68.444 116.224L76.074 112.767C78.5465 111.647 81.4568 111.647 83.9293 112.767L91.5593 116.224C95.5869 118.049 99.6747 113.853 97.1768 110.457Z" fill="#272727" />
                                        <path d="M67.0898 65.5696L49.0717 75.7754C45.3305 77.8945 46.9872 83.1298 51.399 83.1298H66.8263C69.2515 83.1298 71.2175 84.9115 71.2175 87.1094V58.8202C71.2175 61.5645 69.6576 64.1152 67.0898 65.5696Z" fill="black" />
                                        <path d="M110.928 75.7754L92.9102 65.5696C90.3424 64.1152 88.7825 61.5645 88.7825 58.8202V87.1094C88.7825 84.9115 90.7485 83.1298 93.1737 83.1298H108.601C113.013 83.1298 114.67 77.8945 110.928 75.7754Z" fill="black" />
                                        <path d="M67.0898 65.5696L49.0717 75.7754C45.3305 77.8945 46.9872 83.1298 51.399 83.1298H66.8263C69.2515 83.1298 71.2175 84.9115 71.2175 87.1094V58.8202C71.2175 61.5645 69.6576 64.1152 67.0898 65.5696Z" stroke="#272727" />
                                        <path d="M110.928 75.7754L92.9102 65.5696C90.3424 64.1152 88.7825 61.5645 88.7825 58.8202V87.1094C88.7825 84.9115 90.7485 83.1298 93.1737 83.1298H108.601C113.013 83.1298 114.67 77.8945 110.928 75.7754Z" stroke="#272727" />
                                    </svg>
                                    <span className='text-justify'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                </div>
                                <div className='w-[50%] lg:w-[30%] flex flex-col gap-8 p-4 items-center '>
                                    <span className='font-bold text-[16px] lg:text-[20px] line-clamp-1 text-[#545454] uppercase'>Hotel Booking Services</span>
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="80" cy="80" r="79" fill="#F08921" stroke="#EFA969" strokeWidth="2" />
                                        <path d="M114.336 101.434V72.7736C114.336 68.3334 112.357 64.1282 108.946 61.3196L90.6131 46.2233C85.2142 41.7776 77.4577 41.7776 72.0588 46.2233L53.7254 61.3196C50.3146 64.1282 48.3359 68.3334 48.3359 72.7736V101.434C48.3359 109.601 54.9024 116.222 63.0026 116.222H99.6693C107.769 116.222 114.336 109.601 114.336 101.434Z" fill="#272727" stroke="#272727" strokeWidth="3" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M81.3372 101.556C81.3372 101.556 94.1706 90.8684 94.1706 81.7557C94.1706 72.643 87.4124 68.5557 81.3372 68.5557C75.2621 68.5557 68.5039 72.643 68.5039 81.7557C68.5039 90.8684 81.3372 101.556 81.3372 101.556ZM81.3372 86.889C84.3748 86.889 86.8372 84.4266 86.8372 81.389C86.8372 78.3514 84.3748 75.889 81.3372 75.889C78.2997 75.889 75.8372 78.3514 75.8372 81.389C75.8372 84.4266 78.2997 86.889 81.3372 86.889Z" fill="white" />
                                    </svg>
                                    <span className='text-justify'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                </div>
                            </div>
                            <div className='flex w-full gap-[12px] justify-start lg:justify-center overflow-x-auto'>
                                <div className='w-[50%] lg:w-[30%] flex flex-col gap-8 p-4 items-center '>
                                    <span className='font-bold text-[16px] lg:text-[20px] line-clamp-1 text-[#545454] uppercase'>Airport Services</span>
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="80" cy="80" r="79" fill="#F08921" stroke="#EFA969" strokeWidth="2" />
                                        <g clipPath="url(#clip0_2673_44710)">
                                            <path d="M40 45C40 42.2344 41.7875 40 44 40H46C51.525 40 56 45.5937 56 52.5V97.5C56 98.875 56.9 100 58 100H116C118.212 100 120 102.234 120 105C120 107.766 118.212 110 116 110H107.662C107.887 110.781 108 111.625 108 112.5C108 116.641 105.312 120 102 120C98.6875 120 96 116.641 96 112.5C96 111.625 96.125 110.781 96.3375 110H71.6625C71.8875 110.781 72 111.625 72 112.5C72 116.641 69.3125 120 66 120C62.6875 120 60 116.641 60 112.5C60 111.625 60.125 110.781 60.3375 110H58C52.475 110 48 104.406 48 97.5V52.5C48 51.125 47.1 50 46 50H44C41.7875 50 40 47.7656 40 45ZM94 55V48.75C94 48.0625 93.55 47.5 93 47.5H83C82.45 47.5 82 48.0625 82 48.75V55H94ZM76 55V48.75C76 43.9219 79.1375 40 83 40H93C96.8625 40 100 43.9219 100 48.75V90H76V55ZM104 90V55H106C109.312 55 112 58.3594 112 62.5V82.5C112 86.6406 109.312 90 106 90H104ZM70 55H72V90H70C66.6875 90 64 86.6406 64 82.5V62.5C64 58.3594 66.6875 55 70 55Z" fill="white" />
                                            <path d="M94 55V48.75C94 48.0625 93.55 47.5 93 47.5H83C82.45 47.5 82 48.0625 82 48.75V55H94ZM76 55V48.75C76 43.9219 79.1375 40 83 40H93C96.8625 40 100 43.9219 100 48.75V90H76V55ZM104 90V55H106C109.312 55 112 58.3594 112 62.5V82.5C112 86.6406 109.312 90 106 90H104ZM70 55H72V90H70C66.6875 90 64 86.6406 64 82.5V62.5C64 58.3594 66.6875 55 70 55Z" fill="#272727" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2673_44710">
                                                <rect width="80" height="80" fill="white" transform="translate(40 40)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className='text-justify'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                </div>
                                <div className='w-[50%] lg:w-[30%] flex flex-col gap-8 p-4 items-center '>
                                    <span className='font-bold text-[16px] lg:text-[20px] line-clamp-1 text-[#545454] uppercase'>Insurance Services</span>
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="80" cy="80" r="79" fill="#F08921" stroke="#F08921" strokeWidth="2" />
                                        <path d="M77.9301 43.6109L48.9323 56.4989C47.4867 57.1414 46.5516 58.5838 46.573 60.1656C46.9807 90.3487 54.2604 100.398 77.4685 114.93C78.7423 115.727 80.3684 115.729 81.643 114.932C105.011 100.333 111.902 90.0365 112.517 60.1861C112.55 58.5934 111.613 57.137 110.157 56.4901L81.1792 43.6109C80.145 43.1513 78.9644 43.1513 77.9301 43.6109Z" fill="#272727" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M68.5547 79.5557L76.9742 86.2913C77.3921 86.6256 77.9991 86.5717 78.3514 86.169L90.5547 72.2224" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className='text-justify'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-main mt-[40px] mx-auto flex flex-col gap-[40px]'>
                        <span className='font-extrabold text-[28px] md:text-[32px] lg:text-[40px] underline'>WHY CHOOSE US?</span>
                        <div className='w-full flex flex-col gap-[64px]'>
                            <div className='w-full flex flex-col gap-[80px]'>
                                <div className='flex flex-col lg:flex-row gap-[120px]'>
                                    <div className='flex-1 flex gap-[40px] items-center'>
                                        <div className='min-w-[80px] h-[80px] lg:min-w-[120px] lg:h-[120px] flex justify-center items-center rounded-full border-2 border-[#EFA969]'>
                                            <svg width="43" height="50" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.5 0C27.3012 0 32 4.475 32 10C32 15.525 27.3012 20 21.5 20C15.6987 20 11 15.525 11 10C11 4.475 15.6987 0 21.5 0ZM32 26.35C32 29 31.265 35.175 26.2513 42.075L24.125 30L26.5925 25.3C24.965 25.125 23.2587 25 21.5 25C19.7412 25 18.035 25.125 16.4075 25.3L18.875 30L16.7487 42.075C11.735 35.175 11 29 11 26.35C4.72625 28.1 0.5 31.25 0.5 35V45H42.5V35C42.5 31.25 38.3 28.1 32 26.35Z" fill="#6295D6" />
                                            </svg>
                                        </div>
                                        <div className='flex flex-col gap-[8px] w-full'>
                                            <span className='font-bold text-[16px] md:text-[20px] uppercase'>Professional </span>
                                            <span className='text-[12px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                            <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                        </div>
                                    </div>
                                    <div className='flex-1 flex gap-[40px] items-center'>
                                        <div className='min-w-[80px] h-[80px] lg:min-w-[120px] lg:h-[120px] flex justify-center items-center rounded-full border-2 border-[#EFA969]'>
                                            <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 0.5H40.5V22.3571H35.9297L25.832 5.35714L23.8203 8.7154C23.1042 7.64025 22.2513 6.67894 21.2617 5.83147C20.2721 4.984 19.1849 4.27567 18 3.70647V0.5ZM22.0039 11.7891L12.8633 27.1574C12.4857 27.1953 12.1146 27.2143 11.75 27.2143C10.2005 27.2143 8.74219 26.9297 7.375 26.3605C6.00781 25.7913 4.81641 25.0071 3.80078 24.0078C2.78516 23.0086 1.98438 21.8512 1.39844 20.5357C0.8125 19.2202 0.513021 17.8036 0.5 16.2857C0.5 14.7805 0.792969 13.3638 1.37891 12.0357C1.96484 10.7076 2.77214 9.55022 3.80078 8.56362C4.82943 7.57701 6.02083 6.79911 7.375 6.22991C8.72917 5.66071 10.1875 5.36979 11.75 5.35714C12.8568 5.35714 13.9245 5.50893 14.9531 5.8125C15.9818 6.11607 16.9453 6.54613 17.8438 7.10268C18.7422 7.65923 19.543 8.32961 20.2461 9.11384C20.9492 9.89807 21.5352 10.7898 22.0039 11.7891ZM12.1211 34.5L25.832 11.4286L39.543 34.5H12.1211Z" fill="#6295D6" />
                                            </svg>
                                        </div>
                                        <div className='flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] md:text-[20px] uppercase'>Diverse</span>
                                            <span className='text-[12px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                            <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row gap-[120px]'>
                                    <div className='flex-1 flex gap-[40px] items-center'>
                                        <div className='min-w-[80px] h-[80px] lg:min-w-[120px] lg:h-[120px] flex justify-center items-center rounded-full border-2 border-[#EFA969]'>
                                            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M28.1694 7.75894L14.8418 13.6823C10.9869 15.3956 8.44288 19.2325 8.68818 23.444C9.6472 39.9086 14.4687 47.1569 26.997 55.6388C30.3159 57.8857 34.6907 57.8912 38.0072 55.6406C50.5741 47.1126 55.223 39.7618 56.2663 23.501C56.5383 19.2617 53.9902 15.3841 50.1083 13.6588L36.8337 7.75894C34.0756 6.53315 30.9274 6.53315 28.1694 7.75894Z" fill="#6295D6" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M41.8171 25.6616C42.6484 26.389 42.7326 27.6525 42.0052 28.4838L34.3521 37.2302C32.7076 39.1096 29.875 39.3613 27.9249 37.8012L23.2507 34.0618C22.3882 33.3718 22.2483 32.1132 22.9383 31.2507C23.6284 30.3882 24.8869 30.2484 25.7495 30.9384L30.4237 34.6777C30.7022 34.9006 31.1069 34.8646 31.3418 34.5961L38.9949 25.8498C39.7223 25.0185 40.9858 24.9343 41.8171 25.6616Z" fill="#6295D6" />
                                            </svg>
                                        </div>
                                        <div className='flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] md:text-[20px] uppercase'>Reliable </span>
                                            <span className='text-[12px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                            <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                        </div>
                                    </div>
                                    <div className='flex-1 flex gap-[40px] items-center'>
                                        <div className='min-w-[80px] h-[80px] lg:min-w-[120px] lg:h-[120px] flex justify-center items-center rounded-full border-2 border-[#EFA969]'>
                                            <svg width="43" height="51" viewBox="0 0 43 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8359 13.1667C12.8359 8.3802 16.7161 4.5 21.5026 4.5C26.2891 4.5 30.1693 8.3802 30.1693 13.1667L32.1693 13.1667C32.8529 13.1667 33.5214 13.231 34.1693 13.3539V13.1667C34.1693 6.17106 28.4982 0.5 21.5026 0.5C14.507 0.5 8.83594 6.17106 8.83594 13.1667V13.3539C9.48377 13.231 10.1523 13.1667 10.8359 13.1667L12.8359 13.1667Z" fill="#3B7ACC" />
                                                <path opacity="0.4" d="M0.167969 23.8334C0.167969 17.9424 4.9436 13.1667 10.8346 13.1667H32.168C38.059 13.1667 42.8346 17.9424 42.8346 23.8334V39.8334C42.8346 45.7245 38.059 50.5001 32.168 50.5001H10.8346C4.9436 50.5001 0.167969 45.7245 0.167969 39.8334V23.8334Z" fill="#3B7ACC" />
                                                <path d="M26.8346 31.8333C26.8346 34.7789 24.4468 37.1667 21.5013 37.1667C18.5558 37.1667 16.168 34.7789 16.168 31.8333C16.168 28.8878 18.5558 26.5 21.5013 26.5C24.4468 26.5 26.8346 28.8878 26.8346 31.8333Z" fill="#3B7ACC" />
                                            </svg>
                                        </div>
                                        <div className='flex flex-col gap-[8px]'>
                                            <span className='font-bold text-[16px] md:text-[20px] uppercase'>Safe </span>
                                            <span className='text-[12px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                            <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full py-2 lg:w-[300px] lg:h-[56px] lg:py-0 flex bg-[#F08921] rounded-md mx-auto text-white items-center justify-center gap-[22px]'>
                                <span className='uppercase text-[16px] font-bold leading-[24px]'>GET STARTED</span>
                                <GoArrowUpRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs