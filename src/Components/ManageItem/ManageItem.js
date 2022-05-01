import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import StyleManageItem from "./ManageItem.module.css";
import StyleInventoryItems from "../InventoryItems/InventoryItems.module.css";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    });
    const remaining = products.filter((pd) => pd._id !== id);
    setProducts(remaining);
  };
  return (
    <Container>
      <div
        style={{ padding: "10rem 0" }}
        className={StyleInventoryItems.inventory_section}
      >
        {products.map((pd) => (
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
              <Button variant="primary" onClick={() => deleteItem(pd._id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ManageItem;