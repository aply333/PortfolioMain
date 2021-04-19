function BaseCard({cardColor, viewstate,position, look,...props}){
    const cardStyles = {
        backgroundColor: cardColor,
        width: "25rem",
        minHeight: "40rem",
        height: viewstate==="tablet"? "80vh":"40rem",
        maxHeight: "50rem",
        position: "relative",
        margin: "1rem",
        borderRadius: "8px",
        ...look
    }
    return(
        <div style={cardStyles}>
            {props.children}
        </div>
    )
}

export default BaseCard