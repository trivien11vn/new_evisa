const moneyIcon = '/assets/money.svg'
const moneyIcon1 = '/assets/money_1.svg'
const paymentSuccess1 = '/assets/payment_success_1.svg'

const ConfirmSuccessTransfer = () => {
  return (
    <div className='w-full my-[24px] flex flex-col gap-2 relative'>
        <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
        <div className='w-main h-[200px] mx-auto flex flex-col gap-2'>
            <div className='flex items-center'>
                <div className='w-[860px] font-extrabold text-[56px] leading-[64px]'>GLOBAL EVISA ORDER CONFIRMATION</div>
            </div>
            <div className='w-full flex justify-between relative'>
                <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                    <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center border border-[#D3D3D3] bg-[#D3D3D3] z-50'>
                        <span className='font-extrabold text-[28px] leading-[36px] text-white'>1</span>
                    </div>
                    <span className='font-thin text-[24px] leading-[36px] text-[#000000]'>Order Information</span>
                </div>
                <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                    <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center border border-[#D3D3D3] bg-[#D3D3D3] z-50'>
                        <span className='font-extrabold text-[28px] leading-[36px] text-white'>2</span>
                    </div>
                    <span className='font-thin text-[24px] leading-[36px] text-[#000000]'>Payment</span>
                </div>
                <div className='w-[320px] h-[147px] flex flex-col gap-4 items-center'>
                    <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center border bg-[#F08921] z-50'>
                        <span className='font-extrabold text-[28px] leading-[36px] text-white'>3</span>
                    </div>
                    <span className='font-bold text-[24px] leading-[36px]'>Confirmation</span>
                </div>
                <div className='w-[841px] h-[2px] absolute top-[40px] left-[170px] bg-[#D3D3D3]'></div>
            </div>
        </div> 
        <div className='w-main mx-auto flex mt-[100px] items-end'>
          <div className='flex flex-col gap-6'>
            <span className='font-extrabold text-[40px] leading-[52px] underline'>YOUR ORDER WAS CREATED SUCCESSFULLY!</span>
            <span className='font-bold text-[16px] leading-[24px]'>Order Code: ABCYYZ123654</span>
            <span className='font-normal text-[16px] leading-[24px]'>We are delighted to inform you that your order has been placed successfully! In order for us to proceed your order swiftly, kindly make the payment using the provided bank transfer details below</span>
            <div className='w-[690px] h-[650px] p-4 border border-dashed border-[#DA857F] rouded bg-[#FFFCF7]'>
                <div className='w-[650px] h-[596px] flex flex-col gap-[20px]'>
                    <span className='font-extrabold text-[24px] leading-[32px]'>PAYMENT METHOD - BANK TRANSFER</span>
                    <div className='flex gap-[45px] h-full'>
                        <div className='w-[45%] flex flex-col gap-[16px]'>
                            <div className='flex flex-col gap-[8px] items-center'>
                                <img src={moneyIcon} className='w-[80px] h-[80px]' />
                                <span className='font-bold text-[18px] leading-6 underline'>Bank (USD)</span>
                            </div>
                            <div className='flex flex-col gap-[16px]'>
                                <div className='flex flex-col gap-[4px] border-b border-[#D3D3D3] w-[280px] h-[72px]'>
                                    <span>Account Name</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px]'>CONG TY TNHH THE ONE DIGI</span>
                                </div>
                                <div className='flex flex-col gap-[4px] border-b border-[#D3D3D3] w-[280px] h-[72px]'>
                                    <span>Account Number</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px] text-[#FF3B30]'>116002939886</span>
                                </div>
                                <div className='flex flex-col gap-[4px] border-b border-[#D3D3D3] w-[280px] h-[72px]'>
                                    <span>Bank Name</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px]'>VietinBank</span>
                                </div>
                                <div className='flex flex-col gap-[4px] border-b border-[#D3D3D3] w-[280px] h-[72px]'>
                                    <span>Swift Code</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px]'>ICBVVNVX900</span>
                                </div>
                                <div className='flex flex-col gap-[4px] w-[280px] h-[72px]'>
                                    <span>Content</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px]'>Code - Order ID</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-[1px] h-full border border-dashed border-[#E7ADAA]'></div>
                        <div className='w-[45%] flex flex-col gap-[16px]'>
                            <div className='flex flex-col gap-[8px] items-center'>
                                <img src={moneyIcon1} className='w-[80px] h-[80px]' />
                                <span className='font-bold text-[18px] leading-6 underline'>Bank (VND)</span>
                            </div>
                            <div className='flex flex-col gap-[16px]'>
                                <div className='flex flex-col gap-[4px] border-b border-[#D3D3D3] w-[280px] h-[72px]'>
                                    <span>Account Name</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px]'>CONG TY TNHH THE ONE DIGI</span>
                                </div>
                                <div className='flex flex-col gap-[4px] border-b border-[#D3D3D3] w-[280px] h-[72px]'>
                                    <span>Account Number</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px] text-[#0F5BED]'>116002939886</span>
                                </div>
                                <div className='flex flex-col gap-[4px] border-b border-[#D3D3D3] w-[280px] h-[72px]'>
                                    <span>Bank Name</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px]'>VietinBank</span>
                                </div>
                                <div className='flex flex-col gap-[4px] border-b border-[#D3D3D3] w-[280px] h-[72px]'>
                                    <span>Content</span>
                                    <span className='font-montserrat font-bold text-[16px] leading-[24px]'>Code - Order ID</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-[288px] h-[48px] bg-[#F08921] text-white rounded-2xl flex items-center justify-center'>
              <span className='font-bold text-[16px] leading-[24px]'>Go to my order</span>
            </div>
          </div>
          <img src={paymentSuccess1} />
        </div>
    </div>
  )
}

export default ConfirmSuccessTransfer