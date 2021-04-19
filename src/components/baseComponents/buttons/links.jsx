import { baseFontStyle } from "../text/fontConst"

export function IconAndLink({linkText, styles, link}){

    const linkStyle = {
        ...baseFontStyle,
    }

    return(
        <div style={styles}>
            <a href={link} target="_blank" style={linkStyle}>{linkText}</a>
        </div>
    )
}