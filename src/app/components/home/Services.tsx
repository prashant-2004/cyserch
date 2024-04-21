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
      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        What We Offer
      </h3>
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
            Protect your organizations digital infrastructure from cyber threats
            with our comprehensive network security solutions. We offer robust
            firewall configurations, intrusion detection systems, and continuous
            monitoring to safeguard your network from unauthorized access and
            malicious activity.
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
            Safeguard your website and web applications from cyber attacks with
            our advanced web security services. From vulnerability assessments
            and penetration testing to secure coding practices and web
            application firewalls, we provide holistic protection to ensure the
            integrity and availability of your online assets.
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
            Secure your cloud environment and data against evolving cyber
            threats with our cloud security solutions. Our services include
            identity and access management, encryption, data loss prevention,
            and continuous security monitoring to ensure the confidentiality and
            compliance of your cloud-based infrastructure.
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
            Protect the integrity and availability of your APIs with our
            specialized API security services. We offer thorough API
            vulnerability assessments, authentication and authorization
            mechanisms, and real-time threat intelligence to mitigate the risks
            associated with API exploitation and abuse.
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
            Safeguard your mobile applications and devices from cyber threats
            with our comprehensive mobile security solutions. From secure mobile
            app development practices and mobile device management to mobile
            threat detection and response, we help you fortify your mobile
            ecosystem against malware, data breaches, and other security risks.
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
