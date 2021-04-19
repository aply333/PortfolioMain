import {baseFontStyle } from "./fontConst"

export function List({listStyle, ...props}){
    const listStyles ={
        listStyleType: "none",
        display: "flex",
        flexFlow: "row wrap",
        paddingLeft: "0",
        ...listStyle
    }
    return <ul style={listStyles}>{props.children}</ul>
}

export function VerticalList({listStyle, ...props}){
    const listStyles = {
        listStyleType: "none",
        display: "flex",
        flexFlow: "column wrap",
        paddingLeft: "0",
        ...listStyle
    }
    return <ul style={listStyles}>{props.children}</ul>
}

export function Item({item, textStyle}){
    const itemStyle = {
        ...baseFontStyle,
        fontSize: "1rem",
        fontWeight: "400",
        margin: "0.25rem",
        ...textStyle
    }
    return <li style={itemStyle}>{item}</li>
}