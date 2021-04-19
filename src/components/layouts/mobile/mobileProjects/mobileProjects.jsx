import { useState } from "react";
import TextButton from "../../../baseComponents/buttons/textButton";
import { AboutContent } from "../../../contents/about";
import LargeCard from "./largeCard";
import MobileProjectCard from "./mobileProjectCard";

function MobileProjects({ setView }) {
  const projectStyles = {
    parent: {
      width: "100%",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
    },
    cardContainer: {
      display: "flex",
      flexFlow: "row wrap",
      width: "90%",
      height: "60vh",
      margin: "3rem auto 0.25rem auto ",
      overflowY: "scroll",
      transition: "all ease 0.2s",
    },
    contactBox: {
      width: "100%",
      margin:"0rem auto 0 auto",
      display: "flex",
      justifyContent: "center",
    },
    contact: {
      width: "8rem",
      height: "3rem",
      margin: "0 auto",
    },
  };

  const setToContact = () => {
    setView("contact");
  };
  const [toggleCard, setToggleCard] = useState(false)
  const [largeCard, setLargeCard] = useState({stack: []})
  const [largeHeight, setLargeHeight] = useState("0")
  const toggler = () =>{
    if(toggleCard===true){setLargeHeight("0")}
    toggleCard===false? setToggleCard(true):setToggleCard(false)
  }
  const tapEvent = (data) =>{
    setLargeCard(data)
    if(toggleCard===false){
      toggler()
      setLargeHeight("44rem")
    }
  }

  return (
    <div style={projectStyles.parent}>
      <LargeCard data={largeCard} toggler={toggler} height={largeHeight}/>

      <div style={projectStyles.cardContainer}>
        {AboutContent.projects.map((project) => (
          <MobileProjectCard
            key={project.id}
            data={project}
            tapEvent={tapEvent}
          />
        ))}
      </div>
      <div style={projectStyles.contactBox}>
        <TextButton
          alter
          styles={projectStyles.contact}
          action={setToContact}
          text="Contact"
        />
      </div>
    </div>
  );
}

export default MobileProjects;
