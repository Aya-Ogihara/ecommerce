import Link from 'next/link';
import React from 'react';

import { urlFor } from '../lib/client';

const HeroBanner = ({ bannerInfo }) => {
  console.log(bannerInfo);
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{bannerInfo.smallText}</p>
        <h3>{bannerInfo.midText}</h3>
        <h1>{bannerInfo.largeText1}</h1>
        <img
          src={urlFor(bannerInfo.image)}
          alt='headphones'
          className='hero-banner-image'
        />
        <div>
          <Link href={`/product/${bannerInfo.product}`}>
            <button type='button'>{bannerInfo.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{bannerInfo.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
