import Image from "next/image";
import NetworkSecurity from "../../../../public/icons/net.png";
import WebSecurity from "../../../../public/icons/web.png";
import CloudSecurity from "../../../../public/icons/cloud.png";
import APISecurity from "../../../../public/icons/APISecurity.png";
import MobileSecurity from "../../../../public/icons/MobileSecurity.png";
import Link from "next/link";

export default function Services() {
  return (
    <div className="Services">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-8">
        Our Services
      </span>
      <h3 className="text-white text-[2.18rem] font-semibold mb-4">What We Offer</h3>
      <div className="Services-cards">
        <div className="services-card">
          <Image
            width={73}
            height={73}
            src={NetworkSecurity}
            alt="Protection"
          />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Network Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image width={73} height={73} src={WebSecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Web Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image width={73} height={73} src={CloudSecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Cloud Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image width={73} height={73} src={APISecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            API Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="services-card">
          <Image width={73} height={73} src={MobileSecurity} alt="Protection" />
          <h3 className="text-white text-[2.18rem] font-semibold mt-3">
            Mobile Security
          </h3>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
