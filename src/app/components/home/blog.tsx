import React from "react";
import Image from "next/image";
import Card1img from "..//../../../public/images/card1.png";
import Card2img from "..//../../../public/images/card2.png";
import Card3img from "..//../../../public/images/card3.png";
const Blogs = () => {
  return (
    <div
      className="blogs-main flex flex-col items-center w-[100%] h-[34rem] "
      style={{ backgroundColor: "#011631" }}
    >
      <div
        className="blog-head text-lg pb-3 pt-5 font-bold"
        style={{ color: "#19FFDB" }}
      >
        Blogs & News
      </div>
      <div className="blog-sub text-white text-3xl">Latest News</div>
      <div
        className="blog-desc mt-2 mt-2 text-opacity-5"
        style={{ color: "#D9D9D9;" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </div>
      <div className="card-container flex flex-row">
        <div
          className="card1 w-[15rem] h-[21rem] overflow-hidden text-justify m-8  rounded-md	 "
          style={{ background: "rgba(1, 28, 60, 0.70)" }}
        >
          <Image src={Card1img} alt="certificate" width={256} height={100} />
          <p
            className="text-sm text-white p-2 font-bold"
            style={{ color: "rgba(15, 234, 155, 0.80);" }}
          >
            Top 5 CyberSecurity Threats In 2023
          </p>
          <p
            className="text-[.8rem] text-opacity-1 p-2"
            style={{ color: "#D9D9D9;" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua
            Lorem ipsum.
          </p>
          <p
            className="text-xs text-center mt-1"
            style={{ color: "rgba(15, 234, 155, 0.80);" }}
          >
            Read More
          </p>
        </div>

        <div
          className="card1 w-[15rem] h-[21rem] overflow-hidden text-justify m-8  rounded-md	 "
          style={{ background: "rgba(1, 28, 60, 0.70)" }}
        >
          <Image src={Card2img} alt="certificate" width={256} height={100} />
          <p
            className="text-sm text-white p-2 font-bold"
            style={{ color: "rgba(15, 234, 155, 0.80);" }}
          >
            Top 5 CyberSecurity Threats In 2023
          </p>
          <p
            className="text-[.8rem] text-opacity-1 p-2"
            style={{ color: "#D9D9D9;" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua
            Lorem ipsum.
          </p>
          <p
            className="text-xs text-center mt-1"
            style={{ color: "rgba(15, 234, 155, 0.80);" }}
          >
            Read More
          </p>
        </div>
        <div
          className="card1 w-[15rem] h-[21rem] overflow-hidden text-justify m-8  rounded-md	 "
          style={{ background: "rgba(1, 28, 60, 0.70)" }}
        >
          <Image src={Card3img} alt="certificate" width={256} height={100} />
          <p
            className="text-sm text-white p-2 font-bold"
            style={{ color: "rgba(15, 234, 155, 0.80);" }}
          >
            Top 5 CyberSecurity Threats In 2023
          </p>
          <p
            className="text-[.8rem] text-opacity-1 p-2"
            style={{ color: "#D9D9D9;" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod enim tempor incididunt ut labore et dolore magna aliqua
            Lorem ipsum.
          </p>
          <p
            className="text-xs text-center mt-1"
            style={{ color: "rgba(15, 234, 155, 0.80);" }}
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
