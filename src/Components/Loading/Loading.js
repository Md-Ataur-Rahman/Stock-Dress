import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center" style={{ marginTop: "150px" }}>
      <Spinner animation="border" variant="success" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
