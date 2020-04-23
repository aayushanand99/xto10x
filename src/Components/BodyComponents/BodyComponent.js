import React from "react";
import CardItem from "./CardItem";

function BodyComponent(props) {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Products</div>
      <div style={styles.list}>
        {props.filteredProducts == null
          ? props.products.map((item, index) => {
              return <CardItem item={item} key={index} />;
            })
          : props.filteredProducts.map((item, index) => {
              return <CardItem item={item} key={index} />;
            })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "block",
    padding: "5%",
  },

  list: {
    columns: "2 auto",
  },

  title: {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "2em",
    // backgroundColor:'red'
  },
};

export default BodyComponent;
