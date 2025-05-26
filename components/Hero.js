import Image from "next/image";
import Face from "../public/face_img.png";
const Hero = () => {
  return (
    <section className="" id="hero">
      <div className="mx-auto w-fit pt-[47px] pb-48">
        <Image
          src={Face}
          alt={"image of cartoon face of the site owner"}
          width={343}
          height={343}
          className="rounded-full mx-auto"
        />
        <div className="flex flex-col items-center justify-center  pt-5">
          <p className="text-7xl uppercase  text-white">hi I am</p>
          <h1 className="hero-text font-eczar">achintha</h1>
        </div>
        <h2 className="md:text-3xl text-xl uppercase font-thin bg-custom w-fit md:px-[50px] px-6 md:py-6 py-3 rounded-full mx-auto mt-4 backdrop-blur-[2.4px] hover:rotate-3 transition-all duration-300 cursor-pointer">
          Front-End Developer
        </h2>
      </div>
    </section>
  );
};
export default Hero;
