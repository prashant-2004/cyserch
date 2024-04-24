import Image from "next/image";
import amazon from "../../../../public/icons/amazon.svg";
import microsoft from "../../../../public/icons/microsoft.svg";
import meta from "../../../../public/icons/meta.svg";
import apple from "../../../../public/icons/apple.svg";
import google from "../../../../public/icons/google.svg";
import adobe from "../../../../public/icons/adobe.svg";
import netflix from "../../../../public/icons/netflix.svg";

export default function Built() {
  return (
    <div className="bg-[#011c3c] py-8 clients fadeInUp">
      {/* <h1 className="text-white text-center text-[2.18rem] font-semibold">
        Our Clinets
      </h1> */}
      <p className="text-[#A39D9D] text-center text-[1.2rem] font-light mt-2">
        Built by the team that has helped secure
      </p>
      <div className="flex items-center justify-center gap-12 mt-8 logos">
        <Image width={120} height={10} src={amazon} alt="amazon" />
        <Image width={120} height={10} src={microsoft} alt="microsoft" />
        <Image width={80} height={10} src={meta} alt="meta" />
        <Image width={60} height={10} src={google} alt="google" />
        <Image width={60} height={10} src={apple} alt="apple" />
        <Image width={70} height={10} src={adobe} alt="adobe" />
        <Image width={100} height={10} src={netflix} alt="netflix" />
      </div>
    </div>
  );
}
