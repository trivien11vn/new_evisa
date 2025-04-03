interface PictureImageProps {
    title: string;
    subtile: string;
    detail: string;
    image: string;
    }
const PictureImage = ({title, subtile, detail, image} : PictureImageProps) => {
  return (
    <div className='p-[4px] md:p-[8px] lg:p-[16px] rounded-lg border border-[#D3D3D3] flex flex-col gap-4'>
        <img src={image} className='w-full lg:h-[320px] object-cover'/>
        <div className='flex flex-col'>
            <span className='font-bold text-[18px] leading-[24px]'>{title}</span>
            <span className='font-medium text-[14px] leading-[24px]'>{subtile}</span>
        </div>
        <span className='font-normal italic text-[12px] line-clamp-4'>{detail}</span>
    </div>
  )
}

export default PictureImage