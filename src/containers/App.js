import { AppBar, Typography, Toolbar, Button, ButtonGroup  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import LoginPage from "../components/LoginPage";
import MainPage from "../components/MainPage";
import ProfilePage from "../components/ProfilePage";
import SignUpPage from "../components/SignUpPage";

const App = props => {
  const dispatch = useDispatch();
  const logOut = () => {
      dispatch({type: 'LOG_OUT'})
  }

  const loggedIn = useSelector(state => state.saga.loggedIn);
  const posts = useSelector(state => [...state.page.posts||[], ...state.saga.posts||[]])
  // const [loggedIn, setLoggedIn] = useState(loggedInSel);
  // const [posts, setPosts] = useState(postsSel);
  // let [token, setToken] = useState(localStorage.getItem('token'))
  // const [prepPosts, setPrepPosts] = useState([{title: 'title', descr:'descr'}]);
  // console.log(prepPosts);
  // setPrepPosts([...prepPosts, {title: 'new', descr: 'new'}])
  // console.log(prepPosts);
  
  // useEffect(() => {
  //   // You need to restrict it at some point
  //   // This is just dummy code and should be replaced by actual
  //   if (posts === 0) {
  //       getPerson();
  //   }
  // }, []);
    return (<Router>
        <div className="header_container__App">
          <nav>
            <AppBar position="static" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Toolbar>
            <ButtonGroup variant="contained">
              <Link to="/"><Button>Main Page</Button></Link>
              {localStorage.getItem('token')===null&&<Link to="/loginPage"><Button>Login Page</Button></Link>}
              {localStorage.getItem('token')===null&&<Link to="/signUpPage"><Button>Sign Up Page</Button></Link>}
              {localStorage.getItem('token')!==null&&<Link to="/profilePage"><Button>Profile Page</Button></Link>}
              {localStorage.getItem('token')!==null&&<Button onClick={logOut}>Log Out</Button>}
            </ButtonGroup>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/loginPage" element={localStorage.getItem('token')!==null ? <Navigate to="/"/> : <LoginPage/>}></Route>
              <Route path="/signUpPage" element={localStorage.getItem('token')!==null ? <Navigate to="/"/> : <SignUpPage />} ></Route>
              <Route path="/profilePage" element={<ProfilePage/>} ></Route>
              <Route path="/" element={<MainPage posts={posts}/>}></Route>
            </Routes>
          </nav>
        </div>
      </Router>)  
}

export default App;
