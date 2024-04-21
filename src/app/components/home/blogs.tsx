import Image from "next/image";
import Link from "next/link";
import blog from "../../../../public/images/card1.png";

export default function Blogs() {
  return (
    <div className="Blogs">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
        Our Services
      </span>
      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        Latest News
      </h3>
      <div className="blog-cards">
        <div className="blog-card">
          <Image
            src={blog}
            alt="Protection"
            className="blog-image"
          />
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Cloud Security
          </p>
          <h3 className="text-white text-[1.8rem] font-semibold mt-3">
            Five Strategies to Optimize Cloud Security in 2021
          </h3>
          <p className="text-[#A39D9D] text-[1.1rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="blog-card">
          <Image
            src={blog}
            alt="Protection"
            className="blog-image"
          />
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Cloud Security
          </p>
          <h3 className="text-white text-[1.8rem] font-semibold mt-3">
            Five Strategies to Optimize Cloud Security in 2021
          </h3>
          <p className="text-[#A39D9D] text-[1.1rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <span className="text-[#19FFDB] text-[0.9rem] font-medium mt-4 read-more">
            <Link href="/services/network-security">READ MORE {"->"}</Link>
          </span>
        </div>

        <div className="blog-card">
          <Image
            src={blog}
            alt="Protection"
            className="blog-image"
          />
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Cloud Security
          </p>
          <h3 className="text-white text-[1.8rem] font-semibold mt-3">
            Five Strategies to Optimize Cloud Security in 2021
          </h3>
          <p className="text-[#A39D9D] text-[1.1rem] font-light mt-4">
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
