import { baseFontStyle } from "./fontConst"

export function HeaderOne ({textStyle ,...props}) {
    const h1Style = {
        ...baseFontStyle,
        fontWeight: 300,
        fontSize: "2.75rem",
        ...textStyle
    }
    return(
        <h1 style={h1Style}>{props.children}</h1>
    )
}

export function HeaderTwo ({textStyle, ...props}){
    const h2Style ={
        ...baseFontStyle,
        fontWeight: 350,
        fontSize: "2rem",
        ...textStyle
    }
    return(
        <h2 style={h2Style}>{props.children}</h2>
    )
}
