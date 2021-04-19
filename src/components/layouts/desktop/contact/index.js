import React from "react";
import TextButton from "../../../baseComponents/buttons/textButton";
import { Colors } from "../../../baseComponents/colors";
import BaseCard from "../../../baseComponents/containers/baseCard";
import { HeaderOne, HeaderTwo } from "../../../baseComponents/text/headers";
import { Paragraph } from "../../../baseComponents/text/paragraph";
import { AreaInput, LineInput } from "../../../baseComponents/textInput/forms";
import { AboutContent } from "../../../contents/about";

import { useForm } from '@formspree/react';


function Contact({ viewstate }) {

  const [state, handleSubmit] = useForm("xnqlndzl");

  const contactStyles = {
    innerBounds: {
      width: "87%",
      margin: "0.5rem auto",
    },
    hrStyle: {
      marginTop: "0",
      marginBottom: "1rem",
    },
    sendButton: {
      width: "7rem",
      height: "3rem",
      margin: "0.5rem auto",
      backgroundColor: state.submitting?"#d4ebf2": Colors.buttonAlter,
      color: state.submitting? Colors.white: Colors.font
    },
    form: {
      width: "95%",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
    },
    mobile: {
      card: {
        margin: "0",
        width: "100%",
        height: "100%",
        borderRadius: "0",
      },
    },
    success:{
      container:{
        width: "100%",
        margin: "5rem auto",
        textAlign: "center"
      }
    }
  };


  const FormSuccess = () => {
    return(
      <div style={contactStyles.success.container}>
        <HeaderOne>Thank You</HeaderOne>
        <Paragraph>I will reach out to you as soon as possible, if you would like to talk sooner my phone and email are provided above.</Paragraph>
      </div>
    )
  }


  return (
 
    <BaseCard
      viewstate={viewstate}
      cardColor={Colors.white}
      look={viewstate === "mobile" ? contactStyles.mobile.card : ""}
    >
 
      <div style={contactStyles.innerBounds}>
        <HeaderTwo textStyle={{ marginBottom: "0" }}>Let's Talk</HeaderTwo>
        <hr style={contactStyles.hrStyle} />
        <Paragraph>Email: {AboutContent.contact.email}</Paragraph>
        <Paragraph>Phone: {AboutContent.contact.phone}</Paragraph>
        {state.succeeded? <FormSuccess/> :<form style={contactStyles.form} onSubmit={handleSubmit}>
          <LineInput placeholder="Name/Organization" id="name" name="name" />
          <LineInput placeholder="Phone/Email" id="contact" name="contact" />
          <AreaInput id="messege" name="messege" size={viewstate==="tablet"?"35vh": "16rem"} placeholder="What's Up?" />
          <TextButton type="submit" styles={contactStyles.sendButton} text="Send" />
        </form>}
      </div>
    </BaseCard>

  );
}

export default Contact;
