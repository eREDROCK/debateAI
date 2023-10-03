import React from "react";
import styled from "styled-components";

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

const explainBox = () => {
  return <div>top</div>;
};

export default explainBox;
