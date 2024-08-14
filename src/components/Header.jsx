import styled from "styled-components";

const StyledHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  h1 {
    color: #486284;
    flex: 1;
    text-align: center;
    margin: auto;
  }
  ul {
    flex: 4;
    display: flex;
    color: grey;
    justify-content: space-between;
    list-style-type: none;
    margin: auto;
  }
  div {
    margin: auto;
    flex: 1.5;
    display: flex;
    justify-content: space-evenly;
    height: 30px;
    #joinBtn {
      background: none;
      border: none;
      color: #486284;
    }
    #loginBtn {
      border: none;
      background: #486284;
      color: white;
      border-radius: 5px;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>CPU</h1>
      <ul>
        <li>ABOUT CPU</li>
        <li>STUDIES</li>
        <li>ACTIVITIES</li>
        <li>BOARD</li>
        <li>APPLY</li>
      </ul>
      <div>
        <button id="joinBtn">JOIN</button>
        <button id="loginBtn">Login</button>
      </div>
    </StyledHeader>
  );
}

export default Header;
