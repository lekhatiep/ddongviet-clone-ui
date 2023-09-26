export default function ItemHorizontal({data}) {
    console.log(data.href);
  return (
    <div className='max-md:mx-1 max-md:hidden max-md:flex-nowrap'>
        <a href={data.href} title={data.alt} className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1">
            <div className='w-full rounded h-16'>
                <img src={data.src} alt={data.alt} className="h-16 object-contain transition duration-300 ease-in-out hover:scale-110"/>
            </div>
            <p class="case pt-2 text-center text-[12px] font-medium text-line hover:text-ddv md:antialiased f">{data.alt}</p>
        </a>
    </div>
  )
}
