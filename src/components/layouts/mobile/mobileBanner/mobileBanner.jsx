import {useState} from "react"
import { Colors } from "../../../baseComponents/colors";
import ProfilePic from "../../../baseComponents/containers/profilePic";
import { AboutContent } from "../../../contents/about";
import MobileMenu from "../mobileMenu";
import NavButtons from "../mobileMenu/navButtons";

function MobileBanner({ setView }) {
  const initialMenu = {
    opacity: "100%",
    color: Colors.white,
    profileLeft: "0",
    profileRight: "0",
    profileTop: "0.5rem",
    menuTop: "3rem",
    height: "8rem",
    nav:{
      zIndex:"-1",
      opacity: "0%"
    }
  }
  const alterMenu = {
    opacity: "10%",
    color: Colors.accent,
    profileLeft: "1rem",
    profileRight: "90vw",
    profileTop: "1rem",
    menuTop: "5rem",
    height: "12rem",
    nav:{
      zIndex: "3",
      opacity: "100%"
    }
  }
  const [menu, setAsMenu] = useState(initialMenu)
  const styles = {
    state: initialMenu.state,
    banner: {
      height: menu.height,
      width: "100%",
      backgroundImage: AboutContent.bannerImg,
      backgoundColor: Colors.background,
      marginBottom: "0",
      position: "relative",
      zIndex: "1",
      transition: "all ease 0.6s"
    },
    profile: {
      top: menu.profileTop,
      width: "10rem",
      height: "10rem",
      transition: "all ease 1.2s",
      left: menu.profileLeft,
      right: menu.profileRight
    },
    image: {
      transition: "all ease 0.8s",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      opacity: menu.opacity
    },
    nav: menu.nav,
  };
  
  const [menuState, setMenuState] = useState(false)
  const menuTap = () => {
    if(menuState===false){
      setMenuState(true)
      setAsMenu(alterMenu)
    }else{
      setMenuState(false)
      setAsMenu(initialMenu)
    }
  }

  return (
    <div style={styles.banner}>
      <NavButtons setView={setView} views={styles.nav}/>
      <img style={styles.image} src={AboutContent.bannerImg} alt=""/>
      <ProfilePic look={styles.profile} />
      <MobileMenu color={menu.color} top={menu.menuTop} onTap={menuTap}/>
    </div>
  );
}

export default MobileBanner;
