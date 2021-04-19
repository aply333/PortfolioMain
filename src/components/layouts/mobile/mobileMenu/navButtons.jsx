import TextButton from "../../../baseComponents/buttons/textButton";

function NavButtons({setView, views}) {
    const styles = {
        parent:{
            position: "absolute",
            display: "flex",
            flexFlow: "column",
            top: "1.75rem",
            right: "6rem",
            transition: "all ease 0.8s",
            opacity: views.opacity,
            zIndex: views.zIndex
        },
        button:{
            marginBottom: "0.5rem"
        }
    }

    const toAbout=()=>{
        setView("about")
        console.log("Click") 
    }
    const toProject=()=>{
        setView("projects")
    }
    const toContact=()=> {
        setView("contact")
    }

    return (
    <div style={styles.parent}>
      <TextButton styles={styles.button}text="about"  action = {toAbout}/>
      <TextButton styles={styles.button}text="projects" action={toProject} />
      <TextButton text="contact" action= {toContact} />
    </div>
  );
}

export default NavButtons;
