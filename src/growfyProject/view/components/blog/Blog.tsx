import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import SectionHeaderText from "../SectionHeaderText";
import { blogs } from "./blogs.constant";

export default function Blog() {
  return (
    <Container>
      <div>
        {/* Header */}
        <SectionHeaderText
          header="blog"
          title="Read our articles & news"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."
          btn="All Posts"
        />
        {/* Blogs */}
        <div className="py-28 text-white grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              className="bg-growfyPColor bg-opacity-10 rounded-[3.5rem] overflow-hidden"
              key={index}
            >
              <img src={blog.img} alt="Blog Image" />
              <div className="py-16 px-10 space-y-8">
                <p className="text-xl text-growfyPColor opacity-40">
                  {blog.date}
                </p>
                <h4 className="text-3xl max-w-lg">{blog.title}</h4>
                <p className="text-xl font-extralight leading-8 text-growfyPColor max-w-lg">
                  {blog.text}
                </p>
                <Link
                  to=""
                  className="inline-block text-lg text-growfyPrimaryBtn tracking-wide"
                >
                  {blog.link}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
