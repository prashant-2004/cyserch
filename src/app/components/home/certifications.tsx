import Image from "next/image";
import OSCP from "../../../../public/icons/OSCP.png";
import OSWE from "../../../../public/icons/OSWE.png";
import CISSP from "../../../../public/icons/CISSP.png";

export default function Certifications() {
  return (
    <div className="Certifications">
      <div className="w-1/2 Certifications-div1 fadeLeft2">
        <h1 className="text-white text-[1.65rem] font-semibold">
          Advanced Cybersecurity Certifications: Elevate Your Expertise with
          OSCP, OSWE, CISSP, and More
        </h1>
        <p className="text-[#D9D9D9] text-[1rem] font-light mt-4">
          By holding advanced cybersecurity certifications like OSCP, OSWE, and
          CISSP, I ensure top-notch expertise and trusted solutions for your
          security needs.
        </p>
      </div>
      <div className="w-1/2 flex Certifications-div2 fadeRight2">
        <Image className="certifications-img" src={OSCP} alt="OSCP" />
        <Image className="certifications-img" src={OSWE} alt="OSW" />
        <Image className="certifications-img" src={CISSP} alt="CISSP" />
      </div>
    </div>
  );
}
