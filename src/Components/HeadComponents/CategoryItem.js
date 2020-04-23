import React from "react";
function CategoryItem(props) {
  let stylus = { ...styles.container };
  if (props.selected) {
    stylus.backgroundColor = "green";
  }
  return (
    <div style={stylus} onClick={props.clickCategory}>
      {props.item}
    </div>
  );
}

const styles = {
  container: {
    padding: "5px",
    borderWidth: "1px",
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    margin: "5px",
    display: "inline-block",
  },
};
export default CategoryItem;
