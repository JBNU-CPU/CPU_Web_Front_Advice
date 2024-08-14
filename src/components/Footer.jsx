import styled from "styled-components";

const StyledFooter = styled.div`
  height: 100px;
  align-content: center;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <text>made with ❤️ by CPU web dev team</text>
    </StyledFooter>
  );
}

export default Footer;
