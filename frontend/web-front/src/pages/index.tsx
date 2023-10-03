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

const App = () => {
  return (
    <div>
      {/* ↓「span」を追加 */}
      <StyledHello>
        Hello, world!<span>Hello, world!</span>
      </StyledHello>
    </div>
  );
};

export default App;
