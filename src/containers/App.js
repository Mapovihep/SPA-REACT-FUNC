import { AppBar, Typography, Toolbar, Button, ButtonGroup  } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LoginPage from "../components/LoginPage";
import MainPage from "../components/MainPage";
import ProfilePage from "../components/ProfilePage";
import SignUpPage from "../components/SignUpPage";
import store from "../store";

const App = props => {

  const [posts, setPostsToState] = useState(props.store)
  console.log()
  return (
    <Router>
      <div className="header_container__App">
        <nav>
          <AppBar position="static" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Toolbar>
          <ButtonGroup variant="contained">
            <Link to="/"><Button>Main Page</Button></Link>
            {/* <Button><Link to="/profilePage">Profile Page</Link></Button> */}
            <Link to="/loginPage"><Button>Login Page</Button></Link>
            <Link to="/signUpPage"><Button>Sign Up Page</Button></Link>
          </ButtonGroup>
            </Toolbar>
          </AppBar>
          <Routes>
            {/* <Route path="/profilePage" element={<ProfilePage />} ></Route> */}
            <Route path="/loginPage" element={<LoginPage />} ></Route>
            <Route path="/signUpPage" element={<SignUpPage />} ></Route>
            <Route path="/" element={<MainPage posts={posts} dispatch={store.dispatch}/>} ></Route>
          </Routes>
        </nav>
      </div>
    </Router>
  );
}

export default App;
