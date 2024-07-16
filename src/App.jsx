import Footer from "./components/Footer";
import Header from "./components/Header";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledRapper = styled.div`
  min-height: calc(100vh - 200px);
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <StyledRapper>
        <RouterProvider router={router} />
      </StyledRapper>
      <Footer />
    </StyledApp>
  );
}

export default App;
