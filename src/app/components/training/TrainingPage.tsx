// TrainingPage.tsx

import React from "react";
import CourseCard from "./CourseCard";
import courses from "./coursesData";

const TrainingPage = () => {
  return (
    <div className="training-page mt-8 mb-10">
      <div className="px-4 sm:px-6 md:px-8 lg:px-36 course-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default TrainingPage;
