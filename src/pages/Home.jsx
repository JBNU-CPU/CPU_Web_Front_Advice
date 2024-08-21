import styled from "styled-components";
import React, { useState, useEffect } from "react";
import main1 from "../assets/main1.jpeg";
import main2 from "../assets/main2.webp";
import main3 from "../assets/main3.webp";
import main4 from "../assets/main4.jpeg";
import main5 from "../assets/main5.webp";
import main6 from "../assets/main6.jpeg";

const StyledHome = styled.div`
  .pictureContainer {
    height: calc(70vh - 100px);
    object-fit: cover;
    overflow: hidden;
    display: flex;
    position: relative;
    -webkit-animation: floatBubble 20s infinite normal ease-out;
    animation: floatBubble 20s infinite normal ease-out;
    @-webkit-keyframes floatBubble {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -500px;
      }
    }
    @keyframes floatBubble {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -2950px;
      }
    }
    img {
      height: 100%;
    }
  }
  .welcome {
    text-align: center;
    margin-top: 50px;
  }
`;

function Home() {
  return (
    <StyledHome>
      <div className="pictureContainer">
        <img src={main1} alt="mainImg" />
        <img src={main2} alt="mainImg" />
        <img src={main3} alt="mainImg" />
        <img src={main4} alt="mainImg" />
        <img src={main5} alt="mainImg" />
        <img src={main6} alt="mainImg" />
      </div>
      <div className="welcome">
        <h1>전북대학교 중앙 컴퓨터 동아리 CPU에 오신 것을 환영합니다.</h1>
      </div>
    </StyledHome>
  );
}

export default Home;
