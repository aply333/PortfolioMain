import React from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  ResumeIcon,
} from "../../../baseComponents/buttons/icons";
import TextButton from "../../../baseComponents/buttons/textButton";
import { Colors } from "../../../baseComponents/colors";
import Banner from "../../../baseComponents/containers/banner";
import BaseCard from "../../../baseComponents/containers/baseCard";
import ProfilePic from "../../../baseComponents/containers/profilePic";
import { HeaderOne } from "../../../baseComponents/text/headers";
import { Paragraph } from "../../../baseComponents/text/paragraph";
import { AboutContent } from "../../../contents/about";

function Landing({ viewstate, setView, view }) {
  const landingStyles={
    content : {
      marginTop: viewstate==="mobile"?"3.5rem":"5vh",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      textAlign: "center"},
    header:{
      margin: "1 auto",
      marginBottom: "0.125rem",
      width: "100%",
      fontSize: viewstate==="tablet"? "2rem": ""
    },
    synopsis:{
      marginBottom: "0"
    },
    about:{
      minWidth: "8rem",
      height: "2.5rem",
      margin: "0 auto",
      marginTop: "1rem",
      marginBottom: "0",
    },
    icons:{
      display: "flex",
      justifyContent: "space-around",
      margin: "0 auto",
      marginTop: "2rem",
      width: "8rem",
    },
    fullNav: {
      display: "flex",
      flexFlow: viewstate==="tablet"?"row wrap":"row",
      width: viewstate==="tablet"?"15rem":"20rem",
      margin: "0 auto",
    },
    mobileStyles:{
      card:{
        margin: "0",
        borderRadius: "0",
        height: "100vh",
        width: "100%",
      },
      banner:{
        height: "45%",
      },
      profile:{
        width: "18rem",
        height: "18rem",
        top: "8rem",
      }
    }
  }


  const aboutSetView = () => {
    setView("about");
  };

  const InitLayout = () => {
    return (
      <TextButton
        styles={landingStyles.about}
        text="About"
        action={aboutSetView}
      />
    );
  };

  const FullLayout = () => {
    const buttonStyles = {
      ...landingStyles.about,
      minWidth: "6rem",
    };
    const projectSetView = () => {
      setView("projects");
    };
    const contactSetView = () => {
      setView("contact");
    };
    return (
      <div style={landingStyles.fullNav}>
        <TextButton styles={buttonStyles} text="About" action={aboutSetView} />
        <TextButton
          styles={buttonStyles}
          text="Projects"
          action={projectSetView}
        />
        <TextButton
          styles={buttonStyles}
          text="Contact"
          action={contactSetView}
        />
      </div>
    );
  };

  return (
    <BaseCard viewstate={viewstate} cardColor={Colors.accent} look={viewstate==="mobile"?landingStyles.mobileStyles.card: ""}>
      <Banner viewstate={viewstate} look={viewstate==="mobile"?landingStyles.mobileStyles.banner:""} />
      <ProfilePic look={viewstate==="mobile"?landingStyles.mobileStyles.profile: ""} />
      <div style={landingStyles.content}>
        <HeaderOne textStyle={landingStyles.header}>
          {AboutContent.mainHeader}
        </HeaderOne>
        <Paragraph textStyle={landingStyles.synopsis}>{AboutContent.subHeader}</Paragraph>
        {view === "" ? <InitLayout /> : <FullLayout />}
        <div style={landingStyles.icons}>
          <ResumeIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div>
    </BaseCard>
  );
}

export default Landing;
