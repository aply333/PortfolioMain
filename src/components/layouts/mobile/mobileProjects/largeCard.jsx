import { IconAndLink } from "../../../baseComponents/buttons/links";
import TextButton from "../../../baseComponents/buttons/textButton";
import { Colors } from "../../../baseComponents/colors";
import { HeaderOne } from "../../../baseComponents/text/headers";
import { List, Item } from "../../../baseComponents/text/list";
import { Paragraph } from "../../../baseComponents/text/paragraph";

function LargeCard({ data, toggler, height }) {
  const styles = {
    parent: {
      height: height,
      width: "100%",
      backgroundColor: Colors.white,
      overflow: "hidden",
      transition: "all 1s ease"
    },
    inner:{
        margin: "2rem auto",
        width: "95%",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    header: {
      fontSize: "1.5rem",
      alignSelf: "flex-start",
    },
    image: {
      width: "100%",
      height: "10rem",
      objectFit: "cover",
    },
    hr:{
        width: "100%"
    },
    link:{
        textAlign: "center"
    },
    close:{
      marginTop: "1.5rem",
      width: "75%"
    }
  };
  return (
    <div style={styles.parent}>
        <div style={styles.inner}>
      <HeaderOne textStyle={styles.header}>{data.title}</HeaderOne>
      <img src={data.img} alt={data.alt} style={styles.image} />
        <hr style={styles.hr}/>
        <List>
          {data.stack.map((item) => (
            <Item item={item} key={Math.floor(Math.random() * 100 / Math.random())}/>
          ))}
        </List>
      <Paragraph>{data.description}</Paragraph>
      <IconAndLink styles={styles.link} linkText={data.link}/>
      <TextButton styles={styles.close} text="close" alter action={toggler}/>
      </div>
    </div>
  );
}

export default LargeCard;
