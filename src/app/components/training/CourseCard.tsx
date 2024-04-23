import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }: { course: any }) => {
  return (
    <div className="course-card border border-gray-300 rounded-lg shadow-md p-4 w-full sm:w-[20rem] md:w-[25rem]">
      <Image width={400} height={100} src={course.image} alt={course.title} className="mb-4 rounded-md" />
      <div className="mb-2 text-slate-200">{course.category}</div>
      <h2 className="text-xl text-white font-bold mb-2">{course.title}</h2>
      <div className="mb-4 text-slate-400">{course.description}</div>
      <div className="flex items-center justify-between">
        <div className=" text-slate-400">{course.duration}</div>
        <div className="flex items-center text-white">
          <span className="text-yellow-400 mr-1 ">&#9733;</span> {course.rating}
        </div>
      </div>
      <Link href={`/course/${course.link}`}>
        <div className="know-more-button bg-blue-500 text-slate-200 py-2 px-4 rounded-md mt-4 cursor-pointer">
          Know More
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;