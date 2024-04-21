import Image from "next/image";
import Protection from "../../../../public/icons/Management.png";
import CyberSecurity from "../../../../public/icons/Cyber Security.png";
import Code from "../../../../public/icons/Code.png";
import SourceCode from "../../../../public/icons/Source Code.png";
import Website from "../../../../public/icons/Website.png";

export default function Industrys() {
  return (
    <div className="text-center mt-10 Industrys">
      <h1 className="text-white text-[2.10rem] font-semibold">
        Trusted Over <span className="text-[#19FFDB]">2300+</span> Industry in
        the World
      </h1>
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex container p-7 rounded-xl items-center justify-center mt-10 ">
        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Protection} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Clients Protection
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={CyberSecurity} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Pentests Done
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Code} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            SAST Review
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Website} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            DAST Review
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={SourceCode} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">700+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Manual Source Code Review
          </span>
        </div>
      </div>
    </div>
  );
}
