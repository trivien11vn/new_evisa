const paymentSuccess = '/assets/payment_success.svg'

const ConfirmSuccess = () => {
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
        <div className='w-main mx-auto flex mt-[100px]'>
          <div className='flex flex-col gap-6'>
            <span className='font-extrabold text-[40px] leading-[52px] underline'>YOUR ORDER WAS DONE SUCCESSFULLY!</span>
            <span className='font-bold text-[16px] leading-[24px]'>Order Code: ABCYYZ123654</span>
            <span className='font-normal text-[16px] leading-[24px]'>We have received your payment and will notify you for refund if there are unexpected issues. Please check your email to confirm the receipt information, then contact us for further assistance.</span>
            <div className='w-[288px] h-[48px] bg-[#F08921] text-white rounded-2xl flex items-center justify-center'>
              <span className='font-bold text-[16px] leading-[24px]'>Go to my order</span>
            </div>
          </div>
          <img src={paymentSuccess} />
        </div>
    </div>
  )
}

export default ConfirmSuccess