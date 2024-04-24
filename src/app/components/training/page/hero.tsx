/* eslint-disable @next/next/no-img-element */
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
        <img
          alt="hero"
          src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1659634197/BestColleges.com/BC_What-Is-Student-Teaching_247733fd61/BC_What-Is-Student-Teaching_247733fd61.jpg"
        className="rounded-lg"
        />
      </div>
    </div>
  );
}
