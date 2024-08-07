import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes"
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Dashboard } from "@mui/icons-material";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Favourite from "./pages/Favourite";
import PodcastDetails from "./pages/PodcastDetails";
import DisplayPodcast from "./pages/DisplayPodcast";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserData from "./pages/UserData";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x : hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = window.localStorage.setItem("loggedIn", false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container className="App">
          {menuOpen && (
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
          <Frame>
            <Navbar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            <Routes>
              <Route path="/" exact element={<Dashboard/>} />
              <Route path="/search" exact element={<Search/>} />
              <Route path="/favourite" exact element={<Favourite/>} />
              <Route path="/profile" exact element={<Profile/>} />
              <Route path="/podcast/:id" exact element={<PodcastDetails/>} />
              <Route path="/showpodcasts/:type" exact element={<DisplayPodcast/>} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/user-data" exaxt element={<UserData />} />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
