import Image from "next/image";
import Heroimg from "../../../../../public/images/BC_What-Is-Student-Teaching_247733fd61.jpg";

export default function Hero() {
  return (
    <div className="div-boxs">
      <div className="div-box1 pr-4 fadeLeft">
        <h1 className="title">A Better Learning Journey Future Start Here</h1>
        <p className="discription">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary,
        </p>
        <button className="btn">Find The Course</button>

        {/* <p className="discription2">Built by the team that has helped secure</p> */}
      </div>
      <div className="div-box2 fadeRight">
        <Image alt="hero" src={Heroimg} className="rounded-lg" />
      </div>
    </div>
  );
}
