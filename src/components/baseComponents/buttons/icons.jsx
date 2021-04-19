import pdf from "../../assets/icons/svg/pdf.svg";
import github from "../../assets/icons/svg/github.svg";
import linkedin from "../../assets/icons/svg/linkedin.svg";

const iconStyle = {
  width: "2rem",
  height: "2rem"
};

export function ResumeIcon() {
  return <img src={pdf} alt="pdf of resume" style={iconStyle} />;
}

export function GitHubIcon() {
  return <img src={github} alt="github icon" style={iconStyle} />;
}

export function LinkedInIcon() {
  return <img src={linkedin} alt="linkedin icon" style={iconStyle} />;
}
