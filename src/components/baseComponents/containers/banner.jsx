import { AboutContent } from "../../contents/about";

function Banner({viewstate, look}){
    const style = {
        width: "100%",
        minHeight: "17rem",
        height:"38%",
        borderRadius: viewstate==="mobile"? "0px" : "8px",
        ...look
    }

    const imgStyles = {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: viewstate==="mobile" ?  "0px" : "8px 8px 0 0"
    }

    return(
        <div style={style}>
            <img style={imgStyles} src={AboutContent.bannerImg} alt={AboutContent.bannerAlt}/>
        </div>
    )
}

export default Banner;