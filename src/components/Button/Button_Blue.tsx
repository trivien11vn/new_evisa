const Button_Blue = ({title}: {title: string}) => {
  return (
    <div className='cursor-pointer w-full h-[48px] sm:w-[250px] sm:h-[68px] rounded-2xl bg-[#3B7ACC] text-white uppercase flex items-center justify-center'>
        <span className='font-bold text-[12px] md:text-[16px] lg:text-[20px]'>{title}</span>
    </div>
  )
}

export default Button_Blue