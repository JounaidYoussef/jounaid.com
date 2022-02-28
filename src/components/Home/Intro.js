import React from 'react';
import './index.scss';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default () => {
  return (
    <div className="intro-container">
      <div className="minicontainer">
        <div className="intro">
          <p className="myname">Youssef Jounaid</p>
          <p className="dictionary">(noun)</p>
          <hr className="line" />
          <p className="intro">
            Software Engineer, Designer and Art Enthusiast,
            <br />
            I love using functional programming concepts in JavaScript and
            building <br />
            applications with React & React Native.{' '}
          </p>
          <p className="intro,visit">
            You can find articles on these subjects and more on my blog
          </p>
          <div className="go-to-blog">
            <Link className="visit-blog" to="/blog">
              Visit Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="minicontainer">
        <div className="personal-asset">
          <StaticImage
            src="../../assets/photo.png"
            alt="Personal Picture"
            placeholder="blurred"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
