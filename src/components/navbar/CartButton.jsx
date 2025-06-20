import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartButton = () => {
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <StyledWrapper>
      <button className="button w-[100px] md:w-[200px]" onClick={goToCart}>
        Cart
        <svg className="cartIcon" viewBox="0 0 576 512">
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    height: 40px;
    border: none;
    border-radius: 50px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    box-shadow: 1px 3px 0px #a4b49f;
    transition-duration: 0.3s;
  }

  .cartIcon {
    width: 14px;
    height: fit-content;
  }

  .cartIcon path {
    fill: white;
  }

  .button:active {
    transform: translate(2px, 0px);
    box-shadow: 0px 1px 0px rgb(139, 113, 255);
    padding-bottom: 1px;
  }
`;

export default CartButton;
