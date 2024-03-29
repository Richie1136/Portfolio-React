import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";



const SocialMedia = () => (
  <div className="social-media-div">
    {socialMediaLinks.github && (
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
    )}

    {socialMediaLinks.linkedin && (
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
    )}

    {socialMediaLinks.gmail && (
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope"></i>
        <span></span>
      </a>
    )}

    {socialMediaLinks.twitter && (
      <a
        href={socialMediaLinks.twitter}
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
    )}
  </div>
)

export default SocialMedia
