import React from "react";
import { Card } from "react-bootstrap";
function CardItem(props) {
  let { item } = props;
  return (
    <div style={styles.cardContainer}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={item["searchImage"]}
          style={styles.image}
        />
        <Card.Body style={styles.body}>
          <Card.Title>{item["productName"]}</Card.Title>
          <Card.Text>{item["product"]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

const styles = {
  image: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
  cardContainer: {
    display: "inline-block",
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "100px",
    marginTop: "100px",
  },
  body: {
    padding: "5%",
  },
};

export default CardItem;
