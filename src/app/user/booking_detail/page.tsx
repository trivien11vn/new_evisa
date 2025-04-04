const airBamboo = '/assets/airBamBoo.png'

const MyBookingDetail = () => {
    return (
        <div className='flex flex-col gap-[24px] w-full font-montserrat'>
            <span className='font-extrabold text-[24px] leading-[32px] uppercase text-[#3B7ACC]'>BOOKING DETAILS</span>
            <div className='px-6 py-8 flex flex-col gap-[24px] border border-[#7F7F7F] rounded-lg'>
                <span className='font-bold text-[16px] leading-[24px]'>Booking ID: ABC1234   |   Total: 450 USD</span>
                <div className='flex w-full'>
                    <div className='w-[30%] flex flex-col gap-[8px]'>
                        <span className='font-bold text-[16px] leading-[20px]'>Booking date:</span>
                        <span className='font-medium text-[16px] leading-[20px]'>10:20 - 04/11/2023</span>
                    </div>
                    <div className='w-[30%] flex flex-col gap-[8px]'>
                        <span className='font-bold text-[16px]'>Booking status:</span>
                        <div className='rounded-[4px] px-[10px] py-1  w-fit h-fit  bg-[#FFCC00] flex justify-center items-center'>
                            <span className='font-semibold text-[10px] leading-[13px] text-white'>In Progress</span>
                        </div>
                    </div>
                    <div className='w-[30%] flex flex-col gap-[8px]'>
                        <span className='font-bold text-[16px] leading-[20px]'>Payment Method:</span>
                        <span className='font-medium text-[16px] leading-[20px]'>Paypal</span>
                    </div>
                </div>
            </div>
            <span className='font-extrabold text-[24px] leading-[32px] uppercase text-[#3B7ACC]'>passenger information</span>
            <div className='flex flex-col w-full'>
                <div className='flex w-full'>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Full name</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>ms. Jennie/kim</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9] bg-[#FFFCF7]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>mr. adam/smith</span>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Fare</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>185.00 USD</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>100.00 USD</span>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Taxes</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>299.40 USD</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>50.00 USD</span>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Travel Insurance</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>299.40 USD</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>50.00 USD</span>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/3 flex'>
                        <div className='w-[70%] p-1 md:p-2 lg:p-4 border border-[#B9B9B9] flex items-center font-montserrat font-bold text-[16px] leading-[21px]'>Airport service</div>
                        <div className='w-[30%] flex flex-col'>
                            <div className='uppercase p-1 md:p-2 lg:p-4 border border-[#B9B9B9] font-montserrat font-bold text-[8px] md:text-[10px] lg:text-[12px] leading-[16px]'>TSN</div>
                            <div className='uppercase p-1 md:p-2 lg:p-4 border border-[#B9B9B9] font-montserrat font-bold text-[8px] md:text-[10px] lg:text-[12px] leading-[16px]'>SYD</div>
                        </div>
                    </div>
                    <div className='w-1/3 flex flex-col'>
                        <div className='font-montserrat font-medium text-[12px] leading-[16px] uppercase p-1 md:p-2 lg:p-4 border border-[#B9B9B9] '>299.40 USD</div>
                        <div className='font-montserrat font-medium text-[12px] leading-[16px] uppercase p-1 md:p-2 lg:p-4 border border-[#B9B9B9] '>299.40 USD</div>
                    </div>
                    <div className='w-1/3 flex flex-col'>
                        <div className='font-montserrat font-medium text-[12px] leading-[16px] uppercase p-1 md:p-2 lg:p-4 border border-[#B9B9B9] '>299.40 USD</div>
                        <div className='font-montserrat font-medium text-[12px] leading-[16px] uppercase p-1 md:p-2 lg:p-4 border border-[#B9B9B9] '>299.40 USD</div>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px]'>Total</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>299.40 USD</span>
                    </div>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-medium text-[12px] leading-[16px] uppercase'>50.00 USD</span>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Grand total</span>
                    </div>
                    <div className='w-2/3 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[12px] leading-[16px] uppercase'>50.00 USD</span>
                    </div>
                </div>
            </div>

            <span className='font-extrabold text-[24px] leading-[32px] uppercase text-[#3B7ACC]'>Refund Detail</span>
            <div className='flex flex-col w-full'>
                <div className='flex w-full flex-wrap'>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>No.</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Total Refund</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Reason</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Feedback</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Status</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-bold text-[16px] leading-[21px]'>Created At</span>
                    </div>
                </div>

                <div className='flex w-full flex-wrap'>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-normal text-[12px] leading-[16px]'>1</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-normal text-[12px] leading-[16px]'>50 USD</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-normal text-[12px] leading-[16px]'>I cancel my trip</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-normal text-[12px] leading-[16px]'>Ok</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-normal text-[12px] leading-[16px]'>Approve</span>
                    </div>
                    <div className='w-full sm:w-1/6 p-1 md:p-2 lg:p-4 border border-[#B9B9B9]'>
                        <span className='font-montserrat font-normal text-[12px] leading-[16px]'>2023-12-21 10:48:1</span>
                    </div>
                </div>
            </div>
            
            <span className='font-extrabold text-[24px] leading-[32px] uppercase text-[#3B7ACC]'>TRIP</span>
            <div className='rounded-xl border border-[#545454] flex flex-col p-1 md:p-2 lg:p-4 gap-4'>
                <span className='font-montserrat font-bold text-[18px] leading-[18px] text-[#3B7ACC] '>Tan Son Nhat Intl (SGN) → Sydney Intl (SYD) | Wed 22, Nov 23</span>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-[30px]'>
                        <div className='flex flex-col gap-[21px]'>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>21:00</span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>30th Dec</span>
                            </div>
                            <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>6h34m</span>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>00:34 <sup className='text-[#F08921] font-medium text-[6px] leading-[16.5px]'>+1</sup></span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>31st Dec</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='w-[9px] h-[9px] rounded-full bg-white border border-[#7F7F7F]'></div>
                            <div className='flex-1 w-[1px] bg-[#7F7F7F]'></div>
                            <div className='w-[9px] h-[9px] rounded-full bg-[#3B7ACC] border border-[#3B7ACC]'></div>
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>Newyork (NY) (JFK) . </span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>John F. Kennedy International Airport</span>
                            </div>
                            <div className='flex gap-[6px]'>
                                <img src={airBamboo} className='w-[42px] h-auto border border-[#A9A9A9] object-contain' />
                                <div className='flex flex-col gap-[3px]'>
                                    <span className='text-[#272727] font-medium text-[9.75px] leading-[16.5px]'>Bamboo Airlines</span>
                                    <div className='flex gap-[6px]'>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>Economy Class</span>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>AA 185</span>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>Boeing 777-300ER</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>Los Angeles (CA) (LAX)</span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>Los Angeles International Airport</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[12px] px-2 py-1 bg-[#EDEDED] rounded-[3px] w-fit h-fit'>
                        <span className='font-normal text-[7.5px] leading-[16.5px]'>Delay 21 hours 51 minutes - Los Angeles (CA) (LAX)</span>
                        <span className='font-semibold text-[7.5px] leading-[16.5px] text-[#F08921]'>Overnight delay</span>
                    </div>
                    <div className='flex gap-[30px]'>
                        <div className='flex flex-col gap-[21px]'>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>21:00</span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>30th Dec</span>
                            </div>
                            <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>6h34m</span>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>00:34 <sup className='text-[#F08921] font-medium text-[6px] leading-[16.5px]'>+1</sup></span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>31st Dec</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='w-[9px] h-[9px] rounded-full bg-white border border-[#7F7F7F]'></div>
                            <div className='flex-1 w-[1px] bg-[#7F7F7F]'></div>
                            <div className='w-[9px] h-[9px] rounded-full bg-[#3B7ACC] border border-[#3B7ACC]'></div>
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>Newyork (NY) (JFK) . </span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>John F. Kennedy International Airport</span>
                            </div>
                            <div className='flex gap-[6px]'>
                                <img src={airBamboo} className='w-[42px] h-auto border border-[#A9A9A9] object-contain' />
                                <div className='flex flex-col gap-[3px]'>
                                    <span className='text-[#272727] font-medium text-[9.75px] leading-[16.5px]'>Bamboo Airlines</span>
                                    <div className='flex gap-[6px]'>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>Economy Class</span>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>AA 185</span>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>Boeing 777-300ER</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>Los Angeles (CA) (LAX)</span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>Los Angeles International Airport</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-xl border border-[#545454] flex flex-col p-1 md:p-2 lg:p-4 gap-4'>
                <span className='font-montserrat font-bold text-[18px] leading-[18px] text-[#3B7ACC] '>Tan Son Nhat Intl (SGN) → Sydney Intl (SYD) | Wed 22, Nov 23</span>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-[30px]'>
                        <div className='flex flex-col gap-[21px]'>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>21:00</span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>30th Dec</span>
                            </div>
                            <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>6h34m</span>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>00:34 <sup className='text-[#F08921] font-medium text-[6px] leading-[16.5px]'>+1</sup></span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>31st Dec</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='w-[9px] h-[9px] rounded-full bg-white border border-[#7F7F7F]'></div>
                            <div className='flex-1 w-[1px] bg-[#7F7F7F]'></div>
                            <div className='w-[9px] h-[9px] rounded-full bg-[#3B7ACC] border border-[#3B7ACC]'></div>
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>Newyork (NY) (JFK) . </span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>John F. Kennedy International Airport</span>
                            </div>
                            <div className='flex gap-[6px]'>
                                <img src={airBamboo} className='w-[42px] h-auto border border-[#A9A9A9] object-contain' />
                                <div className='flex flex-col gap-[3px]'>
                                    <span className='text-[#272727] font-medium text-[9.75px] leading-[16.5px]'>Bamboo Airlines</span>
                                    <div className='flex gap-[6px]'>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>Economy Class</span>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>AA 185</span>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>Boeing 777-300ER</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>Los Angeles (CA) (LAX)</span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>Los Angeles International Airport</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[12px] px-2 py-1 bg-[#EDEDED] rounded-[3px] w-fit h-fit'>
                        <span className='font-normal text-[7.5px] leading-[16.5px]'>Delay 21 hours 51 minutes - Los Angeles (CA) (LAX)</span>
                        <span className='font-semibold text-[7.5px] leading-[16.5px] text-[#F08921]'>Overnight delay</span>
                    </div>
                    <div className='flex gap-[30px]'>
                        <div className='flex flex-col gap-[21px]'>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>21:00</span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>30th Dec</span>
                            </div>
                            <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>6h34m</span>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>00:34 <sup className='text-[#F08921] font-medium text-[6px] leading-[16.5px]'>+1</sup></span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>31st Dec</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='w-[9px] h-[9px] rounded-full bg-white border border-[#7F7F7F]'></div>
                            <div className='flex-1 w-[1px] bg-[#7F7F7F]'></div>
                            <div className='w-[9px] h-[9px] rounded-full bg-[#3B7ACC] border border-[#3B7ACC]'></div>
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>Newyork (NY) (JFK) . </span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>John F. Kennedy International Airport</span>
                            </div>
                            <div className='flex gap-[6px]'>
                                <img src={airBamboo} className='w-[42px] h-auto border border-[#A9A9A9] object-contain' />
                                <div className='flex flex-col gap-[3px]'>
                                    <span className='text-[#272727] font-medium text-[9.75px] leading-[16.5px]'>Bamboo Airlines</span>
                                    <div className='flex gap-[6px]'>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>Economy Class</span>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>AA 185</span>
                                        <span className='text-[#272727] font-[400px] text-[7.5px] leading-[16.5px]'>Boeing 777-300ER</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#272727] font-bold text-[10.5px] leading-[16.5px]'>Los Angeles (CA) (LAX)</span>
                                <span className='text-[#272727] font-light text-[7.5px] leading-[16.5px]'>Los Angeles International Airport</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookingDetail