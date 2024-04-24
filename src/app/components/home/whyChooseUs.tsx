import Image from "next/image";
import done from "../../../../public/icons/Done.png";
import hacker from "../../../../public/images/young-hacker.png";

export default function WhyChooseUs() {
  return (
    <div className="WhyChooseUs">
      <div className="div-1 fadeLeft2">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          Why Choose Us
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
          Provide Advanced Security for Advanced Threat
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Opt for our expert cybersecurity services offering tailored solutions,
          reliability, and compliance assurance. Safeguard your digital assets
          with confidence and peace of mind.
          
        </p>
        <ul className="mt-6">
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Top-Notch Cybersecurity Services
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Expertise in Penetration Testing
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Customized Security Solutions
          </li>
        </ul>
      </div>

      <div className="div-2 fadeRight2">
        <Image src={hacker} alt="hacker" />
      </div>
    </div>
  );
}
