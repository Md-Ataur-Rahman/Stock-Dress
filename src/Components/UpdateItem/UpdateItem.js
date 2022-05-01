import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StyleUpdateItem from "./UpdateItem.module.css";
import "../Style/style.css";

const UpdateItem = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState();
  const [addQuantity, setAddQuantity] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const handlerQuantityBlur = (e) => {
    setAddQuantity(e.target.value);
  };

  const handlerDeliverd = () => {
    console.log(item.quantity);
    const decreaseQuantity = item.quantity - 1;
    item.quantity = decreaseQuantity;
    setQuantity(decreaseQuantity);
    fetch(`http://localhost:5000/item/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        quantity: decreaseQuantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data, "data"));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const increaseQuantity = item.quantity + parseInt(addQuantity);
    console.log(addQuantity);
    item.quantity = increaseQuantity;
    setQuantity(increaseQuantity);
    console.log(addQuantity);

    fetch(`http://localhost:5000/item/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        quantity: increaseQuantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data, "data"));
    e.target.reset();
  };
  return (
    <div className={StyleUpdateItem.item_section}>
      <Container>
        <div className={StyleUpdateItem.item_inner_section}>
          <form
            onSubmit={onSubmitHandler}
            className={StyleUpdateItem.item_form}
          >
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input_field"
              onBlur={handlerQuantityBlur}
              required
            />
            <input
              type="submit"
              value="Add Quantity"
              className="btn btn-success me-2"
            />
            <Button className="btn btn-primary" onClick={handlerDeliverd}>
              Deliverd
            </Button>
          </form>
          <div className={StyleUpdateItem.item_details}>
            <div className={StyleUpdateItem.item_image}>
              <img src={item?.img} alt="" />
            </div>
            <h2>Name: {item?.name}</h2>
            <p>{item?.shortText}</p>
            <h4>Price: {item?.Price}</h4>
            <h4>Quantity: {item?.quantity}</h4>
            <h5>SupplierName: {item?.supplierName}</h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateItem;
