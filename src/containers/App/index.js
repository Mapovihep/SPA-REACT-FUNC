import  './styles.css'

import { AppBar, 
  Toolbar, 
  Button, 
  ButtonGroup, 
  CircularProgress  } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { routesSaver } from '../../actions/RoutesForComponents';

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.saga.loggedIn);
  const posts = useSelector(state => [...state.saga.posts||[]]);
  const loaded = useSelector(state => state.saga.loaded);
  const loadedProfile = useSelector(state => state.saga.loadedProfile);
  const logOutLocal = () => {dispatch({type:LOG_OUT})}
  const s = {textDecoration: "none"};
  let postRoutes  = posts.map(newPost=><Route 
      path={`/posts/${newPost.id}`} 
      element={<Post 
      fromRouter={true}
      postInfo={newPost} />} 
      key={Math.random()} />)
  return (
        <nav className="header_container__App">
            <AppBar position="static" className="header_content">
              <Toolbar>
            <ButtonGroup variant="contained" >
              {loggedIn&&<Link style={s} to="/"><Button id={'/'} onClick={()=>{dispatch({type: "CHANGE_ROUTE_TO_MAIN"})}}>Main Page</Button></Link>}
              {!loggedIn&&<Link style={s} to="/login" ><Button id={'/login'} onClick={routesSaver}>Login</Button></Link>}
              {!loggedIn&&<Link style={s} to="/signUp"><Button id={'/signUp'} onClick={routesSaver}>Sign Up</Button></Link>}
              {loggedIn&&<Link style={s} to="/profile"><Button id={'/profile'} onClick={routesSaver}>Profile</Button></Link>}
              {loggedIn&&<Link style={s} to="/"><Button onClick={logOutLocal}>Log Out</Button></Link>}
            </ButtonGroup>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/login" element={loggedIn ? <Navigate to="/"/> : <LoginPage/>} />
              <Route path="/signUp" element={loggedIn ? <Navigate to="/"/> : <SignUpPage />}  />
              <Route path="/profile" 
                    element={!loggedIn ? <Navigate to="/login"/> 
                      : (loadedProfile ? 
                        <ProfilePage posts={posts}/> 
                        : <CircularProgress style={{position: "absolute", right: "50%", top: "100px"}}/>)
                    }/>
              <Route path="/" 
                    element={!loggedIn ? 
                    <Navigate to="/login"/> 
                    : (loaded ?  
                      <MainPage posts={posts} /> 
                      : <CircularProgress style={{position: "absolute", right: "50%", top: "100px"}}/>) 
                    }/>
              <Route path="*" element={!loggedIn?<Navigate to="/login"/>:<Navigate to="/"/>}/>
              {postRoutes}
            </Routes>
          </nav>
      )  
}
export default App;
