function BoundaryBox({ viewstate, ...props }) {
  const boxPosition = {
    margin:
      viewstate === "mobile" || viewstate === "tablet"
        ? "0"
        : "10h auto 0 auto",
    width: viewstate === "mobile" || viewstate === "tablet" ? "100%" : "90%",
    display: "flex",
    flexWrap: viewstate === "mobile" ? "wrap" : "none",
    justifyContent: "center",
    transition: "all ease 1.5s",
  };
  return <div style={boxPosition}>{props.children}</div>;
}

export default BoundaryBox;
