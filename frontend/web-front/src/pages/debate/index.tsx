import React from "react";
import styled from "styled-components";

const StyledHello = styled.div`
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
      <StyledHello>debate</StyledHello>
    </div>
  );
};

export default App;
