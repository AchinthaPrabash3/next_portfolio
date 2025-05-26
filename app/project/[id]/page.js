/* eslint-disable @next/next/no-img-element */
import React from "react";
import { datasets } from "@/constantes/data";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { console } from "next/dist/compiled/@edge-runtime/primitives";
import { FaExternalLinkAlt } from "react-icons/fa";

const Page = async ({ params }) => {
  const { id } = await params;
  const {
    name,
    tech,
    img: { src },
    des,
    link,
  } = datasets[id];
  return (
    <section className="px-[100px] py-12">
      <button>
        <Link
          href={"/#projects"}
          passHref
          className="flex items-center justify-center hover:font-bold transition-all duration-200"
        >
          <IoChevronBackOutline className="size-8" />
          Back to Projects
        </Link>
      </button>
      <section className="mt-5">
        <img className="mx-auto w-full object-contain" src={src} alt="" />
        <a className="flex items-center mt-4 gap-5" href={link} target="_blank">
          <h1 className="text-6xl uppercase font-bold ">{name}</h1>
          <FaExternalLinkAlt className="size-11 fill-blue-400" />
        </a>
        <div className="flex flex-wrap pt-4 gap-4">
          {tech.map((skill, i) => (
            <article
              key={i}
              className="hover:scale-95 transition-all duration-300  w-fit max-[320px]:w-full text-center py-2 px-5 md:text-4xl text-2xl uppercase  backdrop-blur-[2.4px] border-[0.5px] border-white/30 rounded-full cursor-pointer select-none bg-custom hover:rotate-3 shadow-md shadow-white/10"
            >
              {skill}
            </article>
          ))}
        </div>
        <article className="mt-5 text-2xl">{des}</article>
      </section>
    </section>
  );
};
export default Page;
