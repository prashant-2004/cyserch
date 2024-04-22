import Image from "next/image";
import Star from "../../../../public/icons/Star.png";

export default function testimonials() {
  return (
    <div className="Testimonials">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
        Testimonials
      </span>

      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        What Client Says About Us
      </h3>

      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>

          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc vitae aliquam posuere, risus purus ultricies purus,
            nec tincidunt elit nunc vitae orci. Nulla tincidunt, nunc vitae
            aliquam posuere, risus purus ultricies purus, nec tincidunt elit
            nunc vitae orci.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                John Doe
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                CEO, Company
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc vitae aliquam posuere, risus purus ultricies purus,
            nec tincidunt elit nunc vitae orci. Nulla tincidunt, nunc vitae
            aliquam posuere, risus purus ultricies purus, nec tincidunt elit
            nunc vitae orci.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                John Doe
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                CEO, Company
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc vitae aliquam posuere, risus purus ultricies purus,
            nec tincidunt elit nunc vitae orci. Nulla tincidunt, nunc vitae
            aliquam posuere, risus purus ultricies purus, nec tincidunt elit
            nunc vitae orci.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                John Doe
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                CEO, Company
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
