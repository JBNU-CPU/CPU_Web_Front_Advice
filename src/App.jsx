import Footer from "./components/Footer";
import Header from "./components/Header";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import styled from "styled-components";
import colors from "./constants/colors";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.MAIN.DARK};
  color: white;
`;

const StyledRapper = styled.div`
  min-height: calc(100vh - 170px);
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <StyledRapper>
        <RouterProvider router={router} />
      </StyledRapper>
      <Footer className="Footer" />
    </StyledApp>
  );
}

export default App;
