import { Colors } from "../colors";
import { baseFontStyle } from "../text/fontConst";

export const LineInput = ({placeholder, id, name, type}) => {
  const styles = {
    ...baseFontStyle,
    fontSize: "1.25rem",
    height: "1.5rem",
    width: "100%",
    border: `1px solid ${Colors.font}`,
    borderRadius: "8px",
    marginBottom: "1.5rem",
    padding: "0.5rem"
  };

  return <input name={name} type={type} id={id} style={styles} placeholder={placeholder}/>;
};

export const AreaInput = ({placeholder, size, id, name}) => {
  const styles = {
    ...baseFontStyle,
    fontSize: "1.25rem",
    height: size,
    width: "100%",
    border: `1px solid ${Colors.font}`,
    borderRadius: "8px",
    padding: "0.5rem"
  };

  return <textarea id={id} name={name} style={styles} placeholder={placeholder}/>;
};
