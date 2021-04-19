import { Colors } from "../../../baseComponents/colors";
import { HeaderOne } from "../../../baseComponents/text/headers";


function MobileProjectCard({ data, tapEvent }) {
  const baseContainer = {
    margin: "0.5rem",
    backgroundColor: Colors.white,
    transition: "all ease 1s",
    borderRadius: "8px",
    overflow: "hidden",
  };
  const cardStyles = {
    container: {
      ...baseContainer,
      width: "45%",
      minHeight: "8rem",
      height:"22vh"
    },
    contents: {
      width: "90%",
      margin: "0 auto",
    },
    title: {
      marginTop: "0.8rem",
      textAlign: "center",
      width: "100%",
      fontSize: "1.2rem",
    },
    projectImg: {
      width: "95%",
      height: "10rem",
      margin: "0 auto",
      objectFit: "cover"
    },
  };

  return (
    <div
      style={cardStyles.container}
      onClick={() => {
        tapEvent(data);
      }}
    >
      <div style={cardStyles.contents}>
        <HeaderOne textStyle={cardStyles.title}>{data.title}</HeaderOne>
        <img src={data.img} alt={data.alt} style={cardStyles.projectImg}/>
      </div>
    </div>
  );
}

export default MobileProjectCard;
