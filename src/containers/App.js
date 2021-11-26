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
import LoginPage from "../components/LoginPage/LoginPage";
import MainPage from "../components/MainPage/MainPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import SignUpPage from "../components/SignUpPage/SignUpPage";
import { logOut } from "../actions/LogOut";
import { Post } from "../components/MainPageParts/Post";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.saga.loggedIn);
  const posts = useSelector(state => [...state.saga.posts||[]])
  const logOutLocal = () => {dispatch(logOut())}
  let postRoutes  = posts.map(newPost=><Route 
      path={`/posts/${newPost.id}`} 
      element={<Post 
      fromRouter={true}
      postInfo={newPost} />} 
      key={Math.random()} />)
  
  return (
      <Router>
        {
        <div className="header_container__App">
          <nav>
            <AppBar position="static" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Toolbar>
            <ButtonGroup variant="contained">
              <Link style={{textDecoration: "none"}} to="/"><Button>Main Page</Button></Link>
              {!loggedIn&&<Link style={{textDecoration: "none"}} to="/loginPage"><Button>Login Page</Button></Link>}
              {!loggedIn&&<Link style={{textDecoration: "none"}} to="/signUpPage"><Button>Sign Up Page</Button></Link>}
              {loggedIn&&<Link style={{textDecoration: "none"}} to="/profilePage"><Button>Profile Page</Button></Link>}
              {loggedIn&&<Link style={{textDecoration: "none"}} to="/"><Button onClick={logOutLocal}>Log Out</Button></Link>}
            </ButtonGroup>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/loginPage" element={loggedIn ? <Navigate to="/"/> : <LoginPage/>} />
              <Route path="/signUpPage" element={loggedIn ? <Navigate to="/"/> : <SignUpPage />}  />
              <Route path="/profilePage" element={!loggedIn ? <Navigate to="/loginPage"/> : <ProfilePage posts={posts}/>}  />
              <Route path="/" element={!loggedIn ? <Navigate to="/loginPage"/> : <MainPage posts={posts}/>}>
              </Route>
              {postRoutes}
              <Route path="*" element={!loggedIn?<Navigate to="/loginPage"/>:<Navigate to="/"/>}/>
            </Routes>
          </nav>
        </div>}
      </Router>)  
}

export default App;
