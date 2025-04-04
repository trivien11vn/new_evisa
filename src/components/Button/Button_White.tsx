const Button_White = ({title} : {title: string}) => {
  return (
    <div className='cursor-pointer w-full h-[48px] sm:w-[250px] sm:h-[68px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] uppercase flex items-center justify-center hover:bg-[#3B7ACC] hover:border-[#3B7ACC] hover:text-white transition-all duration-500 ease-in-out '>
        <span className='font-bold text-[12px] md:text-[16px] lg:text-[20px]'>{title}</span>
    </div>
  )
}

export default Button_White