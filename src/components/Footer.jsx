import styled from "styled-components";

const StyledFooter = styled.div`
  height: 100px;
  background: blue;
  h1 {
    color: red;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
}

export default Footer;
