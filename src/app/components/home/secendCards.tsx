import Image from "next/image";
import security from "../../../../public/icons/security.png";
import privacy from "../../../../public/icons/privacy.png";
import certified from "../../../../public/icons/certified-industry.png";

export default function SecondCards() {
  return (
    <div className="cards fadeInUp">
      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={security} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Security Services
          </h3>
        </div>
        <p className="card-discription">
          Tailored security solutions crafted to fortify your digital
          infrastructure and protect against evolving cyber threats. Dependable
          defense.
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={privacy} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Data Privacy
          </h3>
        </div>
        <p className="card-discription">
          Safeguard sensitive data with our advanced privacy measures and
          compliance solutions. Your information, protected.
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={certified} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Industry Certified
          </h3>
        </div>
        <p className="card-discription">
          Trust in our industry-certified expertise to fortify defenses and meet
          regulatory requirements seamlessly. Security assured.
        </p>
      </div>
    </div>
  );
}
