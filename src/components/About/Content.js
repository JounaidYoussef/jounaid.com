import React from 'react';
import Image from 'gatsby';
import SocialBar from '../Bars/SocialBar';
import './index.scss';

export default () => {
  return (
    <div>
      <div>
        <div className="bio">
          <p>
            I'm a Mobile/FrontEnd engineer. Currently working with helping my
            team produce good quality Apps.
            <br />
            Solving problems and creating new visual languages is my biggest
            passion. My software engineering background makes me think of
            solutions in a structural and algorithmic way. Everything will need
            to make perfect sense and will need to be built around the user.
            <br />
            I'm interested in all kinds of visual communication, I enjoy using
            my obsessive attention to detail to do that.
          </p>
          <p>I am always experimenting, always learning, and never bored.</p>
        </div>
        <SocialBar fill="#4C596A" />
      </div>
      <div>{/* <img src={require('../../assets/Photo.png')} /> */}</div>
    </div>
  );
};
