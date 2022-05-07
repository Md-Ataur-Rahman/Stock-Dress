import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import StyleInventoryItems from "../InventoryItems/InventoryItems.module.css";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import "../Style/style.css";
import { AiFillDelete } from "react-icons/ai";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("https://pure-anchorage-54337.herokuapp.com/myitems", {
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);

  const deleteItem = (id) => {
    const proceed = window.confirm("Are You Want to this products!?");
    if (proceed) {
      fetch(`https://pure-anchorage-54337.herokuapp.com/myitemsdelete/${id}`, {
        method: "DELETE",
      });
      const remaining = products.filter((pd) => pd._id !== id);
      setProducts(remaining);
    }
  };
  return (
    <Container>
      <h2 className="section_header">My Items</h2>
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
              <Card.Text>{pd?.shortText}</Card.Text>
              <Card.Text>Price: {pd?.price}</Card.Text>
              <Card.Text>Quantity: {pd?.quantity}</Card.Text>
              <Card.Text>Supplier Name: {pd?.supplierName}</Card.Text>
              <Card.Text>Email: {pd?.email}</Card.Text>
              <button
                className="button_red my-2"
                onClick={() => deleteItem(pd._id)}
              >
                <span>
                  <AiFillDelete /> Delete
                </span>
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MyItems;
