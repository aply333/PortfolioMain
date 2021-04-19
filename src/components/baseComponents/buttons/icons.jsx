import pdf from "../../assets/icons/svg/pdf.svg";
import github from "../../assets/icons/svg/github.svg";
import linkedin from "../../assets/icons/svg/linkedin.svg";
import { AboutContent } from "../../contents/about";

const iconStyle = {
  width: "2rem",
  height: "2rem"
};

export function ResumeIcon() {

  return (<a href={AboutContent.resume} download><img src={pdf} alt="pdf of resume" style={iconStyle} /></a>);
}

export function GitHubIcon() {
  return (<a href={AboutContent.gitHub} target="_blank"><img src={github} alt="github link" style={iconStyle} /></a>)
}

export function LinkedInIcon() {
  return (<a href={AboutContent.linked} target="_blank"><img src={linkedin} alt="linkedin link" style={iconStyle} /></a>);
}
