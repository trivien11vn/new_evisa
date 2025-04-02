const image8 = '/assets/image_8.jpg'
const portDetail1 = '/assets/post_detail_1.jpg'
const image11 = '/assets/image_11.jpg'
const BlogDetail = () => {
  return (
    <div className='w-full my-[24px] flex flex-col gap-8 relative'>
      <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
      <div className='w-main mx-auto flex flex-col gap-8'>
        <div className='w-[860px] font-extrabold text-[56px] leading-[64px]'>{`BLOG'S TITLE NAME HERE`}</div>
        <img className='w-full h-[530px] object-cover' src={image8} />
        <div className='flex justify-between'>
          <div className='w-[70%] flex flex-col gap-8'>
            <span className='font-extrabold text-[24px] leading-[32px] text-[#272727]'>SUBTITLE FOR THIS BLOG - LOREM IPSUM DOLOR SIT AMET</span>
            <div className='flex flex-col gap-[16px]'>
              <span className='font-semibold text-[20px] leading-6'>Author Name: Jane Doe</span>
              <span className='font-normal text-[16px] leading-6'>Author Information: lorem ipsum dolor sit</span>
            </div>
            <div className='flex flex-col gap-[40px]'>
              <span className='font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              <img className='w-full h-[325px] object-cover' src={portDetail1} />
              <span className='font-semibold text-[20px] leading-6'>Lorem Ipsum Dolor Sit Amet</span>
              <span className='font-normal text-[16px] leading-6'>
                Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <span className='font-normal text-[16px] leading-6'>
                Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <span className='font-normal text-[16px] leading-6'>
                Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <img className='w-full h-[325px] object-cover' src={portDetail1} />
              <span className='font-semibold text-[20px] leading-6'>Lorem Ipsum Dolor Sit Amet</span>
              <span className='font-normal text-[16px] leading-6'>
                Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <span className='font-normal text-[16px] leading-6'>
                Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <span className='font-normal text-[16px] leading-6'>
                Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </div>
          <div className='w-[25%] h-full flex flex-col gap-[24px]'>
            <span className='font-extrabold text-[24px] leading-[32px] text-[#272727] uppercase'>RELATED BLOGS</span>
            <div className='flex flex-col gap-[40px]'>
              <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[16px]'>
                  <img src={image11} className='w-full h-[180px] object-cover' />
                  <span className='font-bold text-[16px] leading-6 uppercase'>Company formation</span>
                  <span className='font-extrabold text-[24px] leading-[32px]'>LOREM IPSUM</span>
                  <span className='font-normal text-[16px] leading-[24px] font-montserrat'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>
                </div>
                <div className='w-full h-[1px] bg-[#A7A7A7]'></div>
              </div>
              <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[16px]'>
                  <span className='font-bold text-[16px] leading-6 uppercase'>Company formation</span>
                  <span className='font-extrabold text-[24px] leading-[32px]'>LOREM IPSUM</span>
                </div>
                <div className='w-full h-[1px] bg-[#A7A7A7]'></div>
              </div>
              <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[16px]'>
                  <span className='font-bold text-[16px] leading-6'>Bank Account Opening</span>
                  <span className='font-extrabold text-[24px] leading-[32px]'>LOREM IPSUM</span>
                </div>
                <div className='w-full h-[1px] bg-[#A7A7A7]'></div>
              </div>
              <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[16px]'>
                  <span className='font-bold text-[16px] leading-6'>Bookkeeping</span>
                  <span className='font-extrabold text-[24px] leading-[32px]'>LOREM IPSUM</span>
                </div>
                <div className='w-full h-[1px] bg-[#A7A7A7]'></div>
              </div>
              <div className='w-[250px] h-[68px] rounded-2xl border border-[#3B7ACC] flex items-center justify-center'>
                <span className='font-extrabold text-[20px] leading-[72px] text-[#2F62A3]'>See all blogs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail