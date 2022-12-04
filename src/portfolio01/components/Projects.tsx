import { Link } from "react-router-dom";
import { PROJECTS } from "../projects.constant";
export default function Projects() {
  return (
    <section className="py-20 mx-auto w-11/12 md:w-10/12 lg:w-9/12">
      {/* Header */}
      <div className="flex justify-between items-end mb-16">
        <h3 className="text-3xl font-bold md:text-5xl lg:text-8xl">Projects</h3>
        <Link
          to=""
          className="text-sm font-normal underline underline-offset-4 decoration-pinkColor decoration-2 md:text-2xl"
        >
          Contact Us
        </Link>
      </div>
      <div className="grid gap-16 grid-col-1 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div className="" key={index} aria-label="project">
            <img
              src={project.img}
              alt="project image"
              className="h-[55rem] w-full object-cover border border-white p-10 transition-all duration-300 ease-in-out hover:p-0 "
            />
            <h4 className="text-3xl mt-10 mb-3 font-bold md:text-4xl lg:text-5xl">
              {project.title}
            </h4>
            <div className="">
              {project.lang.map((projectLang, index) => (
                <span className="mr-10 uppercase text-2xl" key={index}>
                  {projectLang}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
