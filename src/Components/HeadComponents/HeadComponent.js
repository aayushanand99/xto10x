import React from "react";
import CategoryItem from "./CategoryItem";
function HeadComponent(props) {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Xto10X</div>
      {props.categories.map((item, index) => {
        return (
          <CategoryItem
            item={item}
            clickCategory={() => props.clickCategory(item)}
            selected={props.selectedCategory===null?false:props.selectedCategory.indexOf(item)!==-1}
            key={index}
          />
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    height: "40%",
    backgroundColor: "#555",

    padding: "100px",
    // paddingTop:'10%',
    // paddingBottom:'10%'
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "2em",
  },
};

export default HeadComponent;
