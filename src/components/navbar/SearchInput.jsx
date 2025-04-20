import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setInputData, setSearchQuery } from "../../redux/searchSlice";

const SearchInput = () => {
  const { inputData } = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();
  const inputHandle = (e) => {
    dispatch(setInputData(e.target.value));
  };
  const handleSearch = () => {
    console.log(inputData);
    dispatch(setInputData(inputData));
    dispatch(setSearchQuery(true));
  };
  return (
    <StyledWrapper>
      <div className="input-container">
        <input
          type="text"
          name="text"
          className="input"
          placeholder="search..."
          value={inputData}
          onChange={(e) => inputHandle(e)}
        />
        <span className="icon" onClick={handleSearch}>
          <svg
            width="19px"
            height="19px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                opacity={1}
                d="M14 5H20"
                stroke="#fff" // Updated to white
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={1}
                d="M14 8H17"
                stroke="#fff" // Updated to white
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                stroke="#fff" // Updated to white
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={1}
                d="M22 22L20 20"
                stroke="#fff" // Updated to white
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-container {
    width: 100%;
    position: relative;
  }

  .icon {
    position: absolute;
    right: 10px;
    top: calc(50% + 5px);
    transform: translateY(calc(-50% - 5px));
  }

  .input {
    width: 100%;
    height: 40px;
    padding: 10px;
    transition: 0.2s linear;
    border: 2.5px solid #a4b49f;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
  }

  .input:focus {
    outline: none;
    border: 0.5px solid white;
    box-shadow: -5px -5px 0px #a4b49f;
  }

  .input-container:hover > .icon {
    animation: anim 1s linear infinite;
  }

  @keyframes anim {
    0%,
    100% {
      transform: translateY(calc(-50% - 5px)) scale(1);
    }

    50% {
      transform: translateY(calc(-50% - 5px)) scale(1.1);
    }
  }
`;

export default SearchInput;
