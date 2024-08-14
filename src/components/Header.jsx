import styled from "styled-components";
import logo from "../assets/CPU_logo.png";
import { useState } from "react";
import colors from "../constants/colors";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .headerLeft {
    display: flex;
    img {
      width: 70px;
    }
    h1 {
      margin: auto;
    }
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
  const [navOpen, setNavOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <StyledHeader>
      <div className="headerLeft">
        <img src={logo} alt="logo" />
        <h1>CPU of JBNU</h1>
      </div>
      <button onClick={() => setNavOpen(true)}>=</button>
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
            setStudyOpen(false);
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
            setStudyOpen(false);
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
            setStudyOpen(false);
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
            setStudyOpen(!studyOpen);
            setProgramsOpen(false);
          }}
        >
          Study
        </button>
        <ul
          className="innerNav"
          style={{ display: studyOpen ? "inline" : "none" }}
        >
          <button className="item" onClick={() => {}}>
            Web study
          </button>
          <button className="item" onClick={() => {}}>
            AI study
          </button>
          <button className="item" onClick={() => {}}>
            Game study
          </button>
        </ul>
        <button
          className="item"
          onClick={() => {
            setAboutOpen(false);
            setBoardOpen(false);
            setStudyOpen(false);
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
