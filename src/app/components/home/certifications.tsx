import Image from "next/image";
import OSCP from "../../../../public/icons/OSCP.png";
import OSWE from "../../../../public/icons/OSWE.png";
import CISSP from "../../../../public/icons/CISSP.png";

export default function Certifications() {
  return (
    <div className="Certifications">
      <div className="w-1/2 Certifications-div1">
        <h1 className="text-white text-[1.65rem] font-semibold">
          Trusted Over 2300 + Industry in the World Class Brands And
          Organizations Of ALL Sizes.
        </h1>
        <p className="text-[#D9D9D9] text-[1rem] font-light mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
          enim
        </p>
      </div>
      <div className="w-1/2 flex Certifications-div2">
        <Image className="certifications-img" src={OSCP} alt="OSCP" />
        <Image className="certifications-img" src={OSWE} alt="OSW" />
        <Image className="certifications-img" src={CISSP} alt="CISSP" />
      </div>
    </div>
  );
}
