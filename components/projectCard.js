import React from 'react'
import Image from "next/image";

const ProjectCard = async ({data}) => {
    const {name,tech,img,des} = data;
    return (
       <div className="cursor-pointer select-none hover:scale-95 transition-all duration-300">
           <img src={img.src} />
       </div>
    )
}
export default ProjectCard
