import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import colors from "./constants/colors";
import Home from "./pages/Home";
import Study from "./pages/Study";

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
    <BrowserRouter>
      <StyledApp className="App">
        <Header />
        <StyledRapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/study" element={<Study />} />
          </Routes>
        </StyledRapper>
        <Footer className="Footer" />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
