import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }: { course: any }) => {
  return (
    <div className="course-card border-2 border-cyan-700 rounded-lg shadow-md w-full sm:w-[20rem] md:w-[25rem]">
      <Image
        width={400}
        height={100}
        src={course.image}
        alt={course.title}
        className="rounded-md"
      />
      <div className="p-4 bg-[#011c3c]">
        {/* <div className="mb-2 text-[#A39D9D] ">{course.category}</div> */}
        <h2 className="text-xl text-white font-bold mb-2">{course.title}</h2>
        <div className="mb-4 text-slate-400">{course.description}</div>
        <div className="flex items-center justify-between">
          <div className=" text-slate-400">Total duration: <span className="text-white">{course.duration}</span></div>
          <div className="flex items-center text-white">
            <span className="text-yellow-400 mr-1 text-xl">&#9733;</span>{" "}
            {course.rating}
          </div>
        </div>
        <Link href={`/course/${course.link}`}>
          <div className="know-more-button bg-[#19ffdb] text-black font-semibold py-2 px-4 rounded-md mt-4 cursor-pointer">
            Know More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
