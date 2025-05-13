import Image from "next/image";
import Face from "../public/face_img.png";
const Hero = () => {
    return (
        <section className='' id="hero" >
           <div className='mx-auto w-fit pt-24 pb-48'>
               <Image src={Face} alt={"image of cartoon face of the site owner"} width={300} height={300} className="rounded-full mx-auto"/>
               <div className='flex flex-col items-center justify-center  pt-5'>
                   <h1 className="text-7xl uppercase  text-white">hi I am</h1>
                   <h1 className="hero-text font-eczars">
                       achintha
                   </h1>
               </div>
              <h2 className="text-2xl uppercase font-thin bg-violet-400/20 w-fit px-5 py-3 rounded-full mx-auto mt-4 backdrop-blur-sm hover:rotate-3 transition-all duration-300 cursor-pointer" >Front-End Developer</h2>
           </div>
        </section>
    )
}
export default Hero
