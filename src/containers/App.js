import { AppBar, Typography, Toolbar, Button, ButtonGroup  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import store from '../store/index'
import LoginPage from "../components/LoginPage";
import MainPage from "../components/MainPage";
import ProfilePage from "../components/ProfilePage";
import SignUpPage from "../components/SignUpPage";
import { logOut } from "../actions/LogOut";
import { Post } from "../components/MainPageParts/Post";
// import { redirectOnPost, onPostId, loggedIn, posts } from './selectors'
const App = props => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.saga.loggedIn);
  const posts = useSelector(state => [...state.page.posts||[], ...state.saga.posts||[]])
  let {action, token} = logOut();
  const logOutLocal = () => {dispatch(action)}
  const redirectOnPost = useSelector((state => state.saga.redirectOnPost));
  const onPostId = useSelector((state => state.saga.onPostId));//должно меняться из стора
  const onPostInfo = useSelector((state=>state.saga.onPostInfo));
  console.log(onPostInfo);
  // debugger;
    return (
      <Router>
        {
        <div className="header_container__App">
          <nav>
            <AppBar position="static" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Toolbar>
            <ButtonGroup variant="contained">
              <Link to="/"><Button>Main Page</Button></Link>
              {!loggedIn&&<Link to="/loginPage"><Button>Login Page</Button></Link>}
              {!loggedIn&&<Link to="/signUpPage"><Button>Sign Up Page</Button></Link>}
              {loggedIn&&<Link to="/profilePage"><Button>Profile Page</Button></Link>}
              {loggedIn&&<Link to="/"><Button onClick={logOutLocal}>Log Out</Button></Link>}
              {/* {redirectOnPost&&<Navigate to={`/posts/:${onPostId}`}/>} */}
            </ButtonGroup>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/loginPage" element={loggedIn ? <Navigate to="/"/> : <LoginPage/>}></Route>
              <Route path="/signUpPage" element={loggedIn ? <Navigate to="/"/> : <SignUpPage />} ></Route>
              <Route path="/profilePage" element={!loggedIn ? <Navigate to="/loginPage"/> : <ProfilePage posts={posts}/>} ></Route>
              <Route path="/" element={!loggedIn ? <Navigate to="/loginPage"/> : <MainPage posts={posts}/>}></Route>
              {/* <Route path={`/posts/:${onPostId}`}  element={redirectOnPost&&<Post header=''/>}>{console.log(onPostId)}</Route> */}
              {redirectOnPost&&<Route path={`/posts/:${onPostId}`} element={onPostInfo===undefined ? <Navigate to={`/`}/> : <Post onPostInfo={onPostInfo}/>}></Route>}
              {/* <Post onPostInfo={onPostInfo}>{console.log(onPostInfo)}</Post> */}
              {/* <Route><Navigate to='/'></Navigate></Route> */}
            </Routes>
          </nav>
        </div>}
      </Router>)  
}

export default App;
