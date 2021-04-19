import { baseFontStyle } from "./fontConst";

export function Paragraph ({textStyle,...props}){
    const paraStyle = {
        ...baseFontStyle,
        paddingLeft: "1rem",
        paddingRight: "1rem",
        ...textStyle
    }
    return(
        <p style={paraStyle}>{props.children}</p>
    )
}