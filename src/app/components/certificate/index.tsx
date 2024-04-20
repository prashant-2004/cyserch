import React from 'react';
import Image from 'next/image';
import Img1 from '../../../../public/images/oscp.webp';

const Certificate = () => {
  return (
    <div className='w-76.875rem h-20.875rem flex flex-row' style={{ backgroundColor: '#011b39' }}>
      <div className='text-container w-1/2'>
        <div className='certificate-head text-white	text-xl font-bold mt-9'>
          <p>Trusted Over 2300+ Industry in the World Class Brands And Organizations Of ALL Sizes.</p>
        </div>
        <div className='certificate-para text-sm mt-3' style={{ color: '#D9D9D9' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
        </div>
      </div>
      <div className='img-container w-1/2 flex flex-row '>
        <div className='img1'></div>
        <Image src={Img1} alt='certificate' width={200} height={100} />
        <Image src={Img1} alt='certificate' width={200} height={100} />
        <Image src={Img1} alt='certificate' width={200} height={100} />
      </div>
    </div>
  );
};

export default Certificate;
