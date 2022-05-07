import React, { useState } from "react";
import StyleAddItem from "./AddItem.module.css";
import "../Style/style.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [shortText, setShortText] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setquantity] = useState(0);

  const handlerNameBlur = (e) => {
    setName(e.target.value);
  };
  const handlerImageBlur = (e) => {
    setImage(e.target.value);
  };
  const handlerShortTextBlur = (e) => {
    setShortText(e.target.value);
  };
  const handlerPriceBlur = (e) => {
    setPrice(e.target.value);
  };
  const handlerQuantityBlur = (e) => {
    setquantity(e.target.value);
  };
  const handlerSupplierNameBlur = (e) => {
    setSupplierName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const item = {
      name,
      image,
      shortText,
      price,
      quantity,
      supplierName,
      email: user?.email,
    };

    fetch("https://pure-anchorage-54337.herokuapp.com/additem", {
      method: "POST",
      body: JSON.stringify({
        item,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    e.target.reset();
  };
  return (
    <section className={StyleAddItem.section_container}>
      <form onSubmit={onSubmitHandler} className={StyleAddItem.section_form}>
        <h2 className="section_header">Add Item</h2>
        <input
          className="input_field"
          type="text"
          name="name"
          placeholder="Name"
          onBlur={handlerNameBlur}
          required
        />
        <input
          className="input_field"
          type="text"
          name="image"
          placeholder="Image Url"
          onBlur={handlerImageBlur}
          required
        />
        <input
          className="input_field"
          type="text"
          name="shortText"
          placeholder="Short Text"
          onBlur={handlerShortTextBlur}
          required
        />
        <input
          className="input_field"
          type="number"
          name="price"
          placeholder="Price"
          onBlur={handlerPriceBlur}
          required
        />
        <input
          className="input_field"
          type="number"
          name="quantity"
          placeholder="Quantity"
          onBlur={handlerQuantityBlur}
          required
        />
        <input
          className="input_field"
          type="text"
          name="supplierName"
          placeholder="SupplierName"
          onBlur={handlerSupplierNameBlur}
          required
        />
        <input
          className="input_field"
          type="email"
          name="email"
          value={`${user?.email}`}
          // placeholder="Email"
          disabled
        />
        <input
          className={StyleAddItem.input_btn}
          type="submit"
          value="Add Item"
        />
      </form>
    </section>
  );
};

export default AddItem;
