import React from "react";
import Link from "next/link";

const CourseCard = ({ course }: { course: any }) => {
  return (
    <div className="course-card border border-gray-300 rounded-lg shadow-md p-4 w-full sm:w-[20rem] md:w-[25rem]">
      <img src={course.image} alt={course.title} className="mb-4 rounded-md" />
      <div className="mb-2 text-gray-600">{course.category}</div>
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <div className="mb-4">{course.description}</div>
      <div className="flex items-center justify-between">
        <div className="text-gray-600">{course.duration}</div>
        <div className="flex items-center">
          <span className="text-yellow-400 mr-1">&#9733;</span> {course.rating}
        </div>
      </div>
      <Link href={`/course/${course.link}`}>
        <div className="know-more-button bg-blue-500 text-white py-2 px-4 rounded-md mt-4 cursor-pointer">
          Know More
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;