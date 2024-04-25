import Image from "next/image";
import hacker from "../../../../../public/images/what-is-cyber-security.jpg";

export default function Methodology() {
  return (
    <div className="WhyChooseUs">
      <div className="div-1 fadeLeft">
        {/* <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          Methodology
        </span> */}
        <h3 className="text-white text-[2.18rem] font-semibold">Methodology</h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Examining attack, breach, operability, and recovery issues inside a
          cloud environment is the goal of cloud security testing.Our Cloud
          Testing Methodology is based upon Best Practices and uses both
          automated cloud security testing tools and manual techniques to
          identify security vulnerabilities that may threaten the security
          integrity of your cloud platform such as configurations flaws, excess
          builds etc.
        </p>
        <button className="btn-2">Schedule a call</button>
      </div>

      <div className="div-2 fadeRight">
        <Image src={hacker} alt="hacker" />
      </div>
    </div>
  );
}
