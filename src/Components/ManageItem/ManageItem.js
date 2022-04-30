import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import StyleManageItem from "./ManageItem.module.css";
import StyleInventoryItems from "../InventoryItems/InventoryItems.module.css";

const ManageItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <div
        style={{ padding: "10rem 0" }}
        className={StyleInventoryItems.inventory_section}
      >
        {products.map((pd) => (
          <Card>
            <div className={StyleInventoryItems.card_img_container}>
              <img variant="top" src={pd.img} alt="" />
            </div>
            <Card.Body>
              <Card.Title>{pd?.name}</Card.Title>
              <Card.Text>{pd.shortText}</Card.Text>
              <Card.Text>Price: {pd?.Price}</Card.Text>
              <Card.Text>Quantity: {pd?.quantity}</Card.Text>
              <Card.Text>Supplier Name: {pd?.supplierName}</Card.Text>
              <Button variant="primary">Update It</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ManageItem;
