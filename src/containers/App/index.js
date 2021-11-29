import  './styles.css'

import { AppBar, Toolbar, Button, ButtonGroup  } from "@mui/material";
import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import LoginPage from "../../components/LoginPage";
import MainPage from "../../components/MainPage/index";
import ProfilePage from "../../components/ProfilePage/index";
import SignUpPage from "../../components/SignUpPage";
import { Post } from "../../components/MainPageParts/Post";
import { LOG_OUT } from "../../actions/ReducerActions";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.saga.loggedIn);
  const posts = useSelector(state => [...state.saga.posts||[]])
  const logOutLocal = () => {dispatch({type:LOG_OUT})}
  let postRoutes  = posts.map(newPost=><Route 
      path={`/posts/${newPost.id}`} 
      element={<Post 
      fromRouter={true}
      postInfo={newPost} />} 
      key={Math.random()} />)
  const s = {textDecoration: "none"};
  return (
        <Router>
        {<nav className="header_container__App">
            <AppBar position="static" className="header_content">
              <Toolbar>
            <ButtonGroup variant="contained" >
              {loggedIn&&<Link style={s} to="/"><Button>Main Page</Button></Link>}
              {!loggedIn&&<Link style={s} to="/loginPage"><Button>Login Page</Button></Link>}
              {!loggedIn&&<Link style={s} to="/signUpPage"><Button>Sign Up Page</Button></Link>}
              {loggedIn&&<Link style={s} to="/profilePage"><Button>Profile Page</Button></Link>}
              {loggedIn&&<Link style={s} to="/"><Button onClick={logOutLocal}>Log Out</Button></Link>}
            </ButtonGroup>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/loginPage" element={loggedIn ? <Navigate to="/"/> : <LoginPage/>} />
              <Route path="/signUpPage" element={loggedIn ? <Navigate to="/"/> : <SignUpPage />}  />
              <Route path="/profilePage" element={!loggedIn ? <Navigate to="/loginPage"/> : <ProfilePage posts={posts}/>}  />
              <Route path="/" element={!loggedIn ? <Navigate to="/loginPage"/> : <MainPage posts={posts}/>}>
              </Route>
              <Route path="*" element={!loggedIn?<Navigate to="/loginPage"/>:<Navigate to="/"/>}/>
              {postRoutes}
            </Routes>
          </nav>}
      </Router>)  
}

export default App;
