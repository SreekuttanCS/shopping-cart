import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { IoIosStar } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  console.log(total);  

  return (
    <div className="home">
      <div className="productContainer">
        <div className=" cartItem ">
          <ListGroup>
            {cart.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row className="cartItem">
                  <Col md={3}>
                    <img src={prod.image} alt="" className="cartImage" />
                  </Col>

                  <Col md={2}>
                    <span className="cartRating">
                      Rating: {prod.rating}
                      <IoIosStar className="rating-icon" />
                    </span>
                  </Col>

                  <Col md={3}>
                    <span className="cartName">{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    <span className="cartPrice">{prod.price}</span>
                  </Col>
                  <Col md={2}>
                    <MdDelete
                      className="cartDelete"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        });
                      }}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
      <div className="filterContainer summary">
        <span className="filterSubTotal">Subtotal ({cart.length}) Items. </span>
        <span className="filterTotal">Total: ₹{total} </span>
        <button className="filterButton">Procced to pay</button>
      </div>
    </div>
  );
};

export default Cart;
