import styled from "styled-components";
import logo from "../assets/CPU_logo_white.png";
import { useState } from "react";
import colors from "../constants/colors";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
  display: flex;
  height: 90px;
  .headerLeft {
    display: flex;
    cursor: pointer;
    margin-left: 7px;
    font-size: 20px;
    img {
      width: 70px;
    }
    h1 {
      margin: auto;
    }
  }
  .navBtn {
    position: absolute;
    top: 20px;
    right: 10px;
  }
  button {
    width: 70px;
    font-size: 30px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
  .navBar {
    display: flex;
    list-style: none;
    position: absolute;
    background: ${colors.MAIN.GREEN};
    right: 0;
    width: 140px;
    height: 100vh;
    flex-direction: column;
    align-items: end;
    z-index: 1;
    .X {
      width: 40px;
      color: ${colors.MAIN.LIGHT};
    }
    .item {
      width: 180px;
      padding: 10px;
      border-bottom: 1px ridge ${colors.MAIN.LIGHT};
      color: ${colors.MAIN.LIGHT};
      font-size: 20px;
      text-align: left;
    }
    .innerNav {
      background: ${colors.MAIN.LIGHT};
      button {
        color: ${colors.MAIN.GREEN};
      }
    }
  }
`;

function Header() {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const handleHomeClick = async () => {
    setNavOpen(false);
    navigate("/");
  };

  const handleStudyClick = async () => {
    setNavOpen(false);
    navigate("/study");
  };

  return (
    <StyledHeader>
      <div className="headerLeft" onClick={() => handleHomeClick()}>
        <img src={logo} alt="logo" />
        <h1>CPU of JBNU</h1>
      </div>
      <button className="navBtn" onClick={() => setNavOpen(true)}>
        =
      </button>
      <ul
        className="navBar"
        style={{ visibility: navOpen ? "visible" : "hidden" }}
      >
        <button
          className="X"
          onClick={() => {
            setNavOpen(false);
            setAboutOpen(false);
            setBoardOpen(false);
            setProgramsOpen(false);
          }}
        >
          X
        </button>
        <button
          className="item"
          onClick={() => {
            setAboutOpen(!aboutOpen);
            setBoardOpen(false);
            setProgramsOpen(false);
          }}
        >
          About
        </button>
        <ul
          className="innerNav"
          style={{ display: aboutOpen ? "inline" : "none" }}
        >
          <button className="item" onClick={() => {}}>
            History
          </button>
          <button className="item" onClick={() => {}}>
            Excecutives
          </button>
          <button className="item" onClick={() => {}}>
            Activities
          </button>
        </ul>
        <button
          className="item"
          onClick={() => {
            setAboutOpen(false);
            setBoardOpen(!boardOpen);
            setProgramsOpen(false);
          }}
        >
          Board
        </button>
        <ul
          className="innerNav"
          style={{ display: boardOpen ? "inline" : "none" }}
        >
          <button className="item" onClick={() => {}}>
            Ask anything
          </button>
          <button className="item" onClick={() => {}}>
            Hobbies
          </button>
          <button className="item" onClick={() => {}}>
            Small talk
          </button>
        </ul>
        <button
          className="item"
          onClick={() => {
            setAboutOpen(false);
            setBoardOpen(false);
            setProgramsOpen(false);
            handleStudyClick();
          }}
        >
          Study
        </button>
        <button
          className="item"
          onClick={() => {
            setAboutOpen(false);
            setBoardOpen(false);
            setProgramsOpen(!programsOpen);
          }}
        >
          Programs
        </button>
        <ul
          className="innerNav"
          style={{ display: programsOpen ? "inline" : "none" }}
        >
          <button className="item" onClick={() => {}}>
            Let's find friends
          </button>
          <button className="item" onClick={() => {}}>
            CPU MT
          </button>
          <button className="item" onClick={() => {}}>
            CPU DAY
          </button>
        </ul>
      </ul>
    </StyledHeader>
  );
}

export default Header;
