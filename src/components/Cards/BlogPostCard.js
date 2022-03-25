import "./index.scss"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const BlogPostCard = () => {
  const mainpost = false
  return (
    <>
      {mainpost ? (
        <div className="mainPostContainer">
          <div className="mainPostPicture">
            <StaticImage
              src="../../assets/bb.jpg"
              alt="Personal Picture"
              placeholder="blurred"
            />
          </div>
          <div>
            <p className="mainPostDate">September 22, 2018</p>
            <p className="mainPostTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="mainPostDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              pharetra, augue eget volutpat fringilla, nisi sem tincidunt odio,
              eget bibendum libero felis eget purus. Pellentesque condimentum
              semper lacus, nec efficitur lectus rhoncus eu. Donec ac accumsan
              purus. Vestibulum aliquam metus at augue tincidunt, non luctus
              nunc consectetur.
            </p>
            <div>
              <a href="./blog" className="tag">
                Dev
              </a>
              <a href="./blog" className="tag">
                Git
              </a>
              <a href="./blog" className="tag">
                Github
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="secPostContainer">
          <div className="secPostPicture">
            <StaticImage
              src="../../assets/bb.jpg"
              alt="Personal Picture"
              placeholder="blurred"
            />
          </div>
          <div>
            <p className="secPostDate">September 22, 2018</p>
            <p className="secPostTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="secPostDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              pharetra, augue eget volutpat fringilla, nisi sem tincidunt odio,
              eget bibendum libero felis eget purus. Pellentesque condimentum
              semper lacus, nec efficitur lectus rhoncus eu. Donec ac accumsan
              purus. Vestibulum aliquam metus at augue tincidunt, non luctus
              nunc consectetur.
            </p>
            <div>
              <a href="./blog" className="tag">
                Dev
              </a>
              <a href="./blog" className="tag">
                Git
              </a>
              <a href="./blog" className="tag">
                Github
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BlogPostCard
