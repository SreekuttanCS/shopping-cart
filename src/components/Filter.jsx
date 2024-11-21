import React from "react";
import { Form } from "react-bootstrap";

function Filter() {
  return (
    <>
      <div className="filter">
        <h2 className="mt-2">Filter </h2>
        <span className="my-4">
          <Form.Check
            type="radio"
            id={`inline-1}`}
            label="Ascending"
            name="order"
          />
        </span>
        <span >
          <Form.Check
            type="radio"
            id={`inline-2}`}
            label="Descending"
            name="order"
          />
        </span>
        <button className="my-4">Clear Filter</button>
      </div>
    </>
  );
}

export default Filter;
