import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <Spinner animation="border" variant="success" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading