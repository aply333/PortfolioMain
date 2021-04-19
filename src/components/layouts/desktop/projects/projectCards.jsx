import { useState } from "react";
import { Colors } from "../../../baseComponents/colors";
import ProjectImage from "./projectImg";
import ProjectText from "./projectText";

function ProjectCard({viewstate, data}) {
  const cardStyles = {
    backgroundColor: Colors.white,
    borderRadius: "8px",
    width:"96%",
    height: viewstate==="tablet"?"25rem":"22rem",
    padding: "0",
    marginBottom:"1.5rem",
    display: "flex",
    position: "relative",
    overflow:"hidden"
  };
  const [gradientPosition, setGradientPosition] = useState({
    width: "17rem",
    left: "4.5rem",
  });
  const gradientStyle = {
    transition: "all ease 1s",
    background:
      "linear-gradient(280.34deg, #FFFFFF 30.58%, rgba(255, 255, 255, 0.85) 40.77%, rgba(255, 255, 255, 0) 70.86%)",
    height: "100%",
    width: gradientPosition.width,
    position: "absolute",
    left: gradientPosition.left,
  };

  const rightStyles = {
     position: 'absolute',
     right: "1.5rem",
     top: "0.125rem",
     height: "98.5%"
  }

  function shiftBack() {
    setGradientPosition({
      width: "17rem",
      left: "4.5rem",
    });
  }
  function shiftOut() {
    setGradientPosition({
      width: "10rem",
      left: "14.5rem",
    });
  }

  return (
    <div style={cardStyles} onMouseEnter={shiftOut} onMouseLeave={shiftBack}viewstate={viewstate}>
      <div style={gradientStyle} />
      <div className="cardLeft" >
        <ProjectImage viewstate={viewstate} image={data.img} altText={data.alt}/>
      </div>
      <div style={rightStyles}>
        <ProjectText viewstate={viewstate} data={data}/>
      </div>
    </div>
  );
}

export default ProjectCard;
