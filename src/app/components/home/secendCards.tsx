import Image from "next/image";
import security from "../../../../public/icons/security.png";
import privacy from "../../../../public/icons/privacy.png";
import certified from "../../../../public/icons/certified-industry.png";

export default function SecondCards() {
  return (
    <div className="cards">
      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={security} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Security Services
          </h3>
        </div>
        <p className="card-discription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
