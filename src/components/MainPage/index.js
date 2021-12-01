import React, {useState, useEffect} from 'react'
import { List } from "@mui/material"
import { Post } from "../MainPageParts/Post"
import { InputForNewPost } from "../MainPageParts/InputForNewPost"
import './styles.css'
import { useLocation, useNavigate } from 'react-router'
import { routesSaver } from '../../actions/RoutesForComponents'
import { useDispatch, useSelector } from 'react-redux'
const MainPage = props => {
    const [posts, setPosts] = useState(props.posts||[]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentLocation = useSelector(state => state.history.currentLocation)
    const flagLoaded = useSelector(state => state.saga.loaded)
    const history = useSelector(state => state.history.history)
    useEffect(()=>{
        setPosts(props.posts);
    }, [props]);  
    useEffect(()=>{
        if(flagLoaded&&history.length!==0){
            navigate(history[history.length-1])
        }else{
            navigate('/');
        }
    }, [flagLoaded])
    return (
        <div>
            <InputForNewPost/>
            <span 
            style={{display: "inline-block",
            width:"100px", fontSize: "30px",
            paddingLeft: "30px"
            }}>{posts.length}</span>
            <List className='container_MainPage'>
                {posts.map(newPost=> 
            <Post className='post_MainPage'
            postInfo={newPost}
            key={Math.random()}>
            </Post>)}
            </List>
        </div>
    );
}

export default MainPage;