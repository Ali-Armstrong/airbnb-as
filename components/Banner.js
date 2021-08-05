import Image  from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image 
                src="/banner.webp"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
               <p> Not Sure Where To Go?, Perfect! </p>
               <button className="text-purple-500 bg-white px-10 py-4 
               shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transcition duration-150">Flexible</button>
            </div>
        </div>
    )
}

export default Banner
