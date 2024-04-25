import Image from "next/image";
import HCL from "../../../../../public/images/HCL_Technologies_1.png"
import Infosys from "../../../../../public/images/infosys.png"
import IBM from "../../../../../public/images/IBM.png"
import Wipro from "../../../../../public/images/Wipro.svg"
import TCS from "../../../../../public/images/TCS Tata Consultancy Services.svg"
import Cognizant from "../../../../../public/images/Cognizant.svg"
import Ltimindtree from "../../../../../public/images/LTIM.NS.svg"

export default function clients() {
  return (
    <div className="bg-[#011c3c] py-10 clients fadeInUp">
      <h1 className="text-white text-center text-[2.18rem] font-semibold">
        Our Clinets
      </h1>
      <p className="text-[#A39D9D] text-center text-[1.2rem] font-light mt-2">
        Our awesome clients we have had the pleasure to work with!
      </p>
      <div className="flex items-center justify-center gap-12 mt-8 logos">
        <Image width={120} height={10} src={HCL} alt="HCL"/>
        <Image width={70} height={10} src={Wipro} alt="Wipro"/>
        <Image width={100} height={10} src={Infosys} alt="Infosys"/>
        <Image width={140} height={10} src={TCS} alt="TCS"/>
        <Image width={120} height={10} src={IBM} alt="IBM"/>
        <Image width={120} height={10} src={Cognizant} alt="Cognizant"/>
        <Image width={50} height={10} src={Ltimindtree} alt="Ltimindtree"/>
        
      </div>
    </div>
  );
}
