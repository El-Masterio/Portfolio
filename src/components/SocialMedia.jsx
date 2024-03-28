import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin
          onClick={() => window.open('https://www.linkedin.com/in/ahmaddev/')}
        />
      </div>
      <div>
        <BsInstagram
          onClick={() => window.open('https://www.instagram.com/eng_ahmad__/')}
        />
      </div>
      <div>
        <FaFacebookF
          onClick={() => window.open('https://www.facebook.com/ahmed.5083/')}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
