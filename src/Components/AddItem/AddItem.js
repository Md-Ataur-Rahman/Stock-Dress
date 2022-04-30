import React from "react";
import StyleAddItem from "./AddItem.module.css";
import "../Style/style.css";

const AddItem = () => {
  return (
    <section className={StyleAddItem.section_container}>
      <form className={StyleAddItem.section_form}>
        <h2>Add Item</h2>
        <input
          className="input_field"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="input_field"
          type="text"
          name="image"
          placeholder="Image Url"
          required
        />
        <input
          className="input_field"
          type="text"
          name="text"
          placeholder="Short Text"
          required
        />
        <input
          className="input_field"
          type="number"
          name="price"
          placeholder="Price"
          required
        />
        <input
          className="input_field"
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
        />
        <input
          className="input_field"
          type="text"
          name="supplierName"
          placeholder="SupplierName"
          required
        />
        <input
          className="input_field"
          type="email"
          name="email"
          placeholder="Email"
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
