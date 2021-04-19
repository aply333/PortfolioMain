function ProjectContainer({ container, viewstate, ...props }) {
  const projectStyles = {
    containerStyles: {
      flexBasis: "50rem",
      minHeight: "40rem",
      height: viewstate==="tablet"? "80vh":"40rem",
      maxHeight: "50rem",
      margin: "1rem",
      position: "relative",
      ...container,
    },
    gradientStyle: {
      position: "absolute",
      height: "5rem",
      width: "100%",
      bottom: "0",
      zIndex: "2",
      background:
        "linear-gradient(360deg, #2C2C2C 2.04%, rgba(44, 44, 44, 0) 100.5%)",
    },
    childrenContainer: {
      width: "auto",
      height: "100%",
      overflowY: "auto",
      overflowX: "scroll",
    },
  };
  return (
    <div style={projectStyles.containerStyles}>
      {viewstate === "mobile" ? null : (
        <div style={projectStyles.gradientStyle} />
      )}
      <div style={projectStyles.childrenContainer}>{props.children}</div>
    </div>
  );
}

export default ProjectContainer;
