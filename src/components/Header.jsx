import styled from "styled-components";

const StyledHeader = styled.div`
  height: 100px;
  background: blue;
  h1 {
    color: red;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}

export default Header;
