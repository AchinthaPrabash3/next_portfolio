import React from 'react'
import Link from "next/link";
import {datasets} from "@/constantes/data";
import ProjectCard from "@/components/projectCard";


const Projects = () => {


    return (
        <section className='py-12' id="projects">
            <h2 className="uppercase font-bold font-sans text-7xl max-[320px]:text-5xl text-center mb-5">Projects</h2>
            <div className="grid gap-3 lg:grid-cols-2 max-w-[1084px] mx-auto">
                {
                    datasets.map((data, i) => <Link href={`/project/${i}`} key={i} >
                        <ProjectCard data={data} />
                    </Link> )
                }
            </div>
        </section>
    )
}
export default Projects
