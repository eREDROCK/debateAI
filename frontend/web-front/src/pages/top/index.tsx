import React from "react";
import styled from "styled-components";
import UserNameBox from "../../components/Username-box/UserNameBox";

const StyledHello = styled.h1`
  color: red;
  span {
    color: blue;
  }

  @media (min-width: 768px) {
    span {
      display: block;
    }
  }
`;

const App = () => {
  return (
    <div>
      <UserNameBox />
    </div>
  );
};

export default App;
