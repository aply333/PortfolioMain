import { Colors } from "../colors";
import selfie from "../../assets/images/selfie.svg"

function ProfilePic({look}){
    const picStyle = {
        borderRadius: "50%",
        backgroundColor: Colors.white,
        height: "30vw",
        width: "30vw",
        maxHeight: "16rem",
        maxWidth: "16rem",
        position: "absolute",
        margin: "0 auto",
        top: "6vh",
        left: "0",
        right: "0",
        ...look
    }
    return(
        <div style={picStyle}>
            <img src={selfie} alt=""/>
        </div>
    )
}

export default ProfilePic;