function ProjectImage({ viewstate, image, altText}){
    const imageStyles = {
        width: viewstate==="tablet"? "20vw": "21rem",
        height: "100%",
        objectFit:"cover "
    }
    return(
        <img src={image} alt={altText} style={imageStyles}/>
    )
}

export default ProjectImage