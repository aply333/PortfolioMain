import React, { useState, useEffect } from "react";
import TextButton from "../../../baseComponents/buttons/textButton";
import { Colors } from "../../../baseComponents/colors";
import BaseCard from "../../../baseComponents/containers/baseCard";
import { HeaderTwo } from "../../../baseComponents/text/headers";
import { Item, VerticalList } from "../../../baseComponents/text/list";
import { Paragraph } from "../../../baseComponents/text/paragraph";
import { AboutContent } from "../../../contents/about";

function About({ viewstate, setView }) {
  const innerBounds = {
    width: "87%",
    margin: viewstate === "mobile" ? "15% auto" : "2rem auto",
    
  };

  const projectButton = {
    container: {
      width: "100%",
      display: "flex",
      justifyContents: "center",
    },
    button: {
      width: "8rem",
      height: "3rem",
      margin: "0 auto",
    },
  };

  const paraStyle = {
    following:{
      textIndent: "1rem",
      marginTop: "0.5rem",
      marginBottom: "0",
      padding: "0"},
    top:{
      textIndent: "1rem",
      marginTop: "0",
      marginBottom: "0",
      padding: "0"
    }
  }

  const [mobileStyles, setMobileStyles] = useState({});
  useEffect(() => {
    if (viewstate === "mobile") {
      setMobileStyles({
        card: {
          margin: "0",
          width: "100%",
          height: "120vh",
          maxHeight:"45rem",
          borderRadius: "0",
        },
      });
    } else {
      setMobileStyles({});
    }
  }, [viewstate]);

  const setToProjects = () => {
    setView("projects");
  };

  return (
    <BaseCard viewstate={viewstate} cardColor={Colors.white} look={mobileStyles.card}>
      <div style={innerBounds}>
        <HeaderTwo textStyle={{ marginBottom: "0.5rem" }}>About Me</HeaderTwo>
        <Paragraph textStyle={paraStyle.top}>
          {AboutContent.aboutMe.para1}
        </Paragraph>
        <Paragraph textStyle={paraStyle.following}>{AboutContent.aboutMe.para2}</Paragraph>
        <Paragraph textStyle={paraStyle.following}>{AboutContent.aboutMe.para3}</Paragraph>
        <HeaderTwo textStyle={{ marginBottom: "0.5rem" }}>My Stack</HeaderTwo>
        <VerticalList listStyle={{ maxHeight: "10rem", marginTop: "0" }}>
          {AboutContent.myStack.map((item) => (
            <Item item={item} textStyle={{ fontSize: "1.25rem" }} key={Math.floor(Math.random() * 100 / Math.random())}/>
          ))}
        </VerticalList>

        {viewstate === "mobile" ? (
          <div style={projectButton.container}>
            <TextButton
              styles={projectButton.button}
              action={setToProjects}
              text="Projects"
              alter
            />
          </div>
        ) : null}
      </div>
    </BaseCard>
  );
}

export default About;
