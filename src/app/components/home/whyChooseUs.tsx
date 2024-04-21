import Image from "next/image";
import done from "../../../../public/icons/done.png";
import hacker from "../../../../public/images/young-hacker.png";

export default function WhyChooseUs() {
  return (
    <div className="WhyChooseUs">
      <div className="div-1">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          Why Choose Us
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
          Provide Advanced Security for Advanced Threat
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <ul className="mt-6">
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Content Delivery
            Network
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> Malware Detection
            Removal
          </li>
          <li className="flex items-center text-[#A39D9D] text-[1.2rem] font-light">
            <Image src={done} alt="done" className="mr-3" /> 24/7 Support And
            Remote Admit
          </li>
        </ul>
      </div>

      <div className="div-2">
        <Image src={hacker} alt="hacker" />
      </div>
    </div>
  );
}
