
function MobileMenu({color, top, onTap}) {
  const menuStyle = {
    icon: {
      height: "2.5rem",
      width: "3rem",
      position: "absolute",
      right: "1rem",
      top: top,
      zIndex: "1",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-between",
      transition: "all ease 0.8s"
    },
    bar: {
      backgroundColor: color,
      width: "100%",
      height: "0.3rem",
      borderRadius: "6px",
      transition: "all ease 0.8s"
    },
  };


  return (
    <div style={menuStyle.icon} onClick={()=>{onTap()}}>
      <div style={menuStyle.bar} />
      <div style={menuStyle.bar} />
      <div style={menuStyle.bar} />
    </div>
  );
}

export default MobileMenu;
