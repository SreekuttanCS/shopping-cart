import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { MdDelete } from "react-icons/md";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text>
            <FormControl
              placeholder="Search a product"
              style={{ width: 500 }}
            ></FormControl>
          </Navbar.Text>

          <Dropdown className="cardItem">
            <Dropdown.Toggle>
              <FaShoppingCart />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu className="cardMenu">
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <div key={prod.id} className="cardItem">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cardImage"
                      />
                      <div className="cardDetail">
                        <span>{prod.name}</span>
                        <span>{prod.price.split(".")[0]}</span>
                      </div>
                      <div className="cardIcon">
                        <MdDelete
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <span className="cardEmpty">Cart is empty</span>
              )}
              <Link to="/cart">
                <button className="goto">Go to cart</button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
