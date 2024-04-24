import Image from "next/image";
import Students from "../../../../../public/icons/icons8-students-64.png";
import Teacher from "../../../../../public/icons/icons8-teacher-50.png";
import Code from "../../../../../public/icons/Code.png";
import Course from "../../../../../public/icons/icons8-course-50.png";
import Website from "../../../../../public/icons/Website.png";
import HIPS from "../../../../../public/icons/HIPS.png";

export default function StudentStatictics() {
  return (
    <div className="text-center Industrys">
      <h1 className="text-white text-[2.10rem] font-semibold fadeInUp">
        Trusted Over <span className="text-[#19FFDB]">700+</span> Students in
        the World
      </h1>
      <div className="Industrys-boxs bg-[#011C3C] gap-10 flex container p-7 rounded-xl items-center justify-center mt-10 fadeInUp">
        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={50} height={50} src={Students} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Students
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={50} height={50} src={Teacher} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">15+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Teachers
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={50} height={50} src={Code} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">70+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Practical lab
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Course} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">10+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Course
          </span>
        </div>

        {/* <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Website} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            DAST Review
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={HIPS} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            IAM Review
          </span>
        </div> */}

      </div>
    </div>
  );
}
