import React from 'react'

const About = () => {
    const skills = [
        "java",
        "javascript",
        "tailwindcss",
        "React.JS",
        "CSS3",
        "HTML5",
        "TypeScript",
        "Next.js",
        "Motion.dev"
    ];

    return (
        <section className='py-12 pb-56 scroll-mt-28' id="about">
            <h2 className="uppercase font-bold font-sans text-7xl max-[320px]:text-5xl text-center mb-5">About Me</h2>
            <article className="first-letter:uppercase font-thin md:px-5 text-center md:text-4xl text-3xl max-[320px]:text-2xl w-[90%] mx-auto text-white pt-12 ">
                Hello! I'm Achintha, a highly skilled front-end web developer based in Sri Lanka. I specialize in developing responsive, high-performance websites using the latest web technologies, including React, Next.js, Tailwind CSS, JavaScript, HTML5, and CSS3. I also have experience with Framer Motion (motion.dev) to create smooth, modern animations that enhance user experience. I'm eager to contribute my skills to ensure the success of your project and bring your vision to life with clean, maintainable code and visually engaging interfaces.
            </article>
            <div className="flex flex-wrap items-center justify-center md:w-[60%] w-[95%] mx-auto font-thin md:gap-5 gap-3 mt-12">
                {
                    skills.map((skill, i) => <article key={i} className="hover:scale-95 transition-all duration-300  w-fit max-[320px]:w-full text-center py-2 px-5 md:text-4xl text-2xl uppercase  backdrop-blur-[1px] border-[0.5px] border-white/30 rounded-full cursor-pointer select-none bg-violet-400/20 hover:rotate-3">
                        {skill}
                    </article>)
                }
            </div>
        </section>
    )
}
export default About
