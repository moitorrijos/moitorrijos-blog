import React from "react"
import TwitterIcon from "./icons/twitter-icon"
import InstagramIcon from "./icons/instagram-icon"
import LinkedinIcon from "./icons/linkedin-icon"
import BehanceIcon from "./icons/behance-icon"
import WordpressIcon from "./icons/wordpress-icon"
import CodepenIcon from "./icons/codepen-icon"
import GithubIcon from "./icons/github-icon"
import DribbbleIcon from "./icons/dribbble-icon"

const SocialSidebar = () => (
  <aside>
    <div className="sidebar-social-icons">
      <TwitterIcon />
      <InstagramIcon />
      <LinkedinIcon />
      <WordpressIcon />
      <BehanceIcon />
      <DribbbleIcon />
      <CodepenIcon />
      <GithubIcon />
    </div>
  </aside>
)

export default SocialSidebar
