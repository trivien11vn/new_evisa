interface InputFieldProps {
  title: string;
  isEmptyAllow?: boolean;
  titleColor?: string;
  placeholder?: string;
  checkbox?: boolean;
}

const InputField = ({ 
    title, 
    isEmptyAllow = true, 
    titleColor = "#000", 
    placeholder = 'Enter Input', 
    checkbox = false 
  }: InputFieldProps) => {
  return (
    <div className='flex flex-col gap-[8px]'>
        <div className='flex gap-2 items-center'>
          <span className={`font-semibold text-[10px] md:text-[12px] lg:text-[16px] text-[${titleColor}] line-clamp-1`}>{title}</span>
          {
            !isEmptyAllow && 
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="..." fill="#F08921"/>
            </svg>
          }
          {
            checkbox && 
          <input type="checkbox" className="w-5 h-5 accent-[#F08921]" />
          }
        </div>
        <input className='outline-none w-full h-[40px] rounded-lg border border-[#7F7F7F] flex items-center px-4 placeholder:font-normal placeholder:text-[14px] text-[#A9A9A9]' placeholder={placeholder}/>
    </div>
  )
}

export default InputField
