import { Colors } from "../colors";
import { baseFontStyle } from "../text/fontConst";
import {useState} from "react"

function TextButton({type, text, styles, action, alter }) {
  const textStyle = {
    ...baseFontStyle,
    fontSize: "1rem",
    margin: "0.5rem"
  };

  const baseColor = alter===true? Colors.accent : Colors.buttonPrimary
  const alterColor= alter===true? Colors.buttonPrimary: Colors.accent

  const [buttonColor, setButtonColor] = useState(baseColor)

  const buttonStyle = {
    border: `1px solid ${Colors.white}`,
    borderRadius: "8px",
    minWidth: "4rem",
    backgroundColor: buttonColor,
    transition: "all 0.5s ease",
    padding:"0",
    ...styles
  };

  const enterEvent = () =>{
    setButtonColor(alterColor)
  }
  const exitEvent = () =>{
    setButtonColor(baseColor)
  }

  return (
    <button type={type} onMouseEnter={enterEvent} onMouseLeave={exitEvent} style={buttonStyle} onClick={action}>
      <p style={textStyle}>{text}</p>
    </button>
  );
}

export default TextButton;
