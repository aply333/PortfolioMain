import { IconAndLink } from "../../../baseComponents/buttons/links";
import { Colors } from "../../../baseComponents/colors";
import { HeaderTwo } from "../../../baseComponents/text/headers";
import { Item, List } from "../../../baseComponents/text/list";
import { Paragraph } from "../../../baseComponents/text/paragraph";

function ProjectText({data, viewstate}) {
  const textContiainer = {
    width: viewstate==="tablet"?"35vw":"24rem",
    height: "100%",
  
  };

  const projectHeader = {
    width: "100%",
    marginTop: "0",
    textAlign: "right",
    borderBottom: `1px solid ${Colors.font}`,
  };
  
  const centerSection = {

  }

  const listStyles = {
    maxWidth: "20rem",
    margin: ".3rem auto",
  };

  return (
    <div style={textContiainer}>
      <div style={projectHeader}>
        <HeaderTwo textStyle={{marginBottom: "0"}}>{data.title}</HeaderTwo>
      </div>
      <div style={centerSection}>
      <List listStyle={listStyles}>
        {data.stack.map(tool => <Item item={tool} key={Math.floor(Math.random() * 1000 +data.id / Math.random())}/>)}
      </List>
      <Paragraph textStyle={{width: "100%", minHeight: "8rem", marginBottom: "0.5rem", textAlign:"left"}}>
        {data.description}
      </Paragraph>
      </div>
      <div style={{textAlign: "center", marginTop: "0"}}>
          <IconAndLink link={data.link} linkText={`${data.title}`}/>
      </div>
    </div>
  );
}

export default ProjectText;
