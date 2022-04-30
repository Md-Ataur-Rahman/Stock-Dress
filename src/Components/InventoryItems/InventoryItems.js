import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import StyleInventoryItems from "./InventoryItems.module.css";
import "../Style/style.css";
import { Link } from "react-router-dom";

const InventoryItems = () => {
  const [products, setProducts] = useState([]);
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
  return (
    <Container>
      <h2 className="section_header">Inventory Items</h2>
      <div className={StyleInventoryItems.inventory_section}>
        {products.slice(0, 6).map((pd) => (
          <Card key={pd._id}>
            <div className={StyleInventoryItems.card_img_container}>
              <img variant="top" src={pd.img} alt="" />
            </div>
            <Card.Body>
              <Card.Title>{pd?.name}</Card.Title>
              <Card.Text>{pd.shortText}</Card.Text>
              <Card.Text>Price: {pd?.Price}</Card.Text>
              <Card.Text>Quantity: {pd?.quantity}</Card.Text>
              <Card.Text>Supplier Name: {pd?.supplierName}</Card.Text>
              <Link to={`/item/${pd._id}`}>
                <Button variant="primary">Update It</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default InventoryItems;
