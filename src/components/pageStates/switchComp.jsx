import About from "../layouts/desktop/about";
import Contact from "../layouts/desktop/contact";
import Projects from "../layouts/desktop/projects";
import MobileProjects from "../layouts/mobile/mobileProjects/mobileProjects";
function SwitchComp({view, viewstate, setView}){
    const CurrentView = () => {
        switch (view) {
          case "about":
            return <About viewstate={viewstate} setView={setView}/>;
          case "projects":
            return viewstate==="mobile"? <MobileProjects setView={setView}/> : <Projects viewstate={viewstate}/>;
          case "contact":
            return <Contact viewstate={viewstate}/>;
          default:
            return <div />;
        }
      };
    return <CurrentView/>
}

export default SwitchComp;