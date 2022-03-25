import Fork from "../../assets/fork.svg"
import Star from "../../assets/star.svg"
import "./index.scss"
import React from "react"

const RepoCard = () => {
  return (
    <div className="repoContainer">
      <h3 className="repoTitle">Jounaid.com</h3>
      <p className="repoDesc">
        This is a personal Portfolio where I share and display awesome topics
        and projects that may interest you.
      </p>
      <div className="repoFooter">
        <div className="repoTags">
          <p className="repo-tag">tags</p>
          <p className="repo-tag">tags</p>
          <p className="repo-tag">tags</p>
        </div>
        <div id="repoStats">
          <div className="inline-repo-stats">
            <p>4</p>
            <Fork />
          </div>
          <div className="inline-repo-stats">
            <p>5</p>
            <Star />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
