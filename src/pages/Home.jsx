import styled from "styled-components";
import React, { useState, useEffect } from "react";

const StyledHome = styled.div`
  .pictureContainer {
    object-fit: cover;
  }
`;

function Home() {
  const [img, setImg] = useState(1);

  return (
    <StyledHome>
      <div className="pictureContainer">
        <img src={`main${img}`} alt="mainImg" />
      </div>
    </StyledHome>
  );
}

export default Home;
