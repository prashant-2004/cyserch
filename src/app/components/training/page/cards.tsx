import Image from "next/image";
import Education from "../../../../../public/icons/icons8-education-50.png";
import idea from "../../../../../public/icons/icons8-idea-64.png";
import online from "../../../../../public/icons/icons8-online-learning-64.png";

export default function TrainingCards() {
  return (
    <div className="cards fadeInUp">
      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={Education} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Exclusive Coach
          </h3>
        </div>
        <p className="card-discription">
          Tailored security solutions crafted to fortify your digital
          infrastructure and protect against evolving cyber threats.
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={idea} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
            Creative Minds
          </h3>
        </div>
        <p className="card-discription">
          Safeguard sensitive data with our advanced privacy measures and
          compliance solutions. Your information, protected.
        </p>
      </div>

      <div className="card">
        <div className="flex gap-6 items-center">
          <Image src={online} width={50} height={50} alt="card" />
          <h3 className="text-white text-[1.4rem] font-semibold">
          Video Tutorials
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
