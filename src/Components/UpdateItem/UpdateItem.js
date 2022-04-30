import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StyleUpdateItem from "./UpdateItem.module.css";
import "../Style/style.css";

const UpdateItem = () => {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, item]);
  const handlerQuantityBlur = (e) => {
    // parseInt(item?.quantity) + parseInt(e.target.value)
    // setQuantity(parseInt(item?.quantity) + parseInt(e.target.value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // fetch(`http://localhost:5000/item/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     quantity,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  };
  console.log(item);
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
            <Button className="btn btn-primary">Deliverd</Button>
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
