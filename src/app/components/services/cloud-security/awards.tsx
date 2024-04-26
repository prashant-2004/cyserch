import Image from "next/image";
import Award_1 from "../..//../../../public/images/award_1.jpeg";
import Award_2 from "../..//../../../public/images/award_2.jpeg";

export default function CybersecurityAwards(){
    return(
        <div className="flex flex-wrap h-96 -mx-4 gap-1rem">
      {/* Column for Text */}
      <div className="w-full md:w-1/3 px-4 flex items-center">
        <div className="text-xl font-bold py-6 text-white">Awards and Recognition</div>
      </div>

      {/* Columns for Images with Text Overlay */}
      <div className="w-full md:w-1/3 px-4 relative">
        <Image
          src={Award_1}
          alt="Award Image 1"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <p className="text-white text-xl font-semibold">Cyserch recognized as a Major Contender” in Everest Group’s Managed Detection and Response (MDR) Services PEAK Matrix® Assessment 2023®</p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-4 relative">
        <Image
          src={Award_2}
          alt="Award Image 2"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <p className="text-white text-xl font-semibold">Cyserch recognized as a Major Contender” in Everest Group’s Identity & Access Management (IAM) Services Peak Matrix ® Assessment 2023</p>
        </div>
      </div>
    </div>
    );
}