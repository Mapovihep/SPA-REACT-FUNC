
const LOGIN_POST = 'LOGIN_POST'
const LOAD_PROFILE = 'LOAD_PROFILE'
const LOAD_POSTS = 'LOAD_POSTS'
const SIGN_UP_POST = 'SIGN_UP_POST'
const DEL_POST = 'DEL_POST'
const LOG_OUT = 'LOG_OUT'
const CHANGE_POST = 'CHANGE_POST'
const ADD_POST = 'ADD_POST'
const ADD_COMMENT = 'ADD_COMMENT'
const DEL_COMMENT = 'DEL_COMMENT'
const CHANGE_COMMENT = 'CHANGE_COMMENT'
const SET_LAST_CHANGE = 'SET_LAST_CHANGE'
const initialState = {
    posts: [],
    userProfile: [],
    loggedIn: false,
    editCommentMode: false
}
export const sagaReducer = (state = initialState, action) =>{
       switch (action.type) {
        case LOG_OUT:
            localStorage.clear();
            return {...state,
                loggedIn: false}
        case SIGN_UP_POST:
            return {...state,
                  signedUp: action.payload
                } 
        case LOAD_POSTS: 
            let dates = [];
            for(let el of action.payload){
                dates.unshift({
                    date: Math.round(new Date(el.createdAt).getTime()/10000),
                    index: action.payload.indexOf(el)
                })
            }
            console.log(dates)
            dates.sort(function(a, b) {
                return a - b;
              });
            let sortedMass = [];
            for(let el of action.payload){
                sortedMass.unshift({...el, editCommentMode: false})
            }
            return {...state, 
                posts: sortedMass
            }
        case LOGIN_POST:
            return {...state,
                    loggedIn: action.payload
                } 
        case LOAD_PROFILE:
            return {...state,
                    userProfile: action.payload
                }
        case CHANGE_POST:
            let changedPostIndex = {}; 
            for(let post of state.posts){
                if(post.id === action.payload.id){
                    changedPostIndex = state.posts.indexOf(post);
                }
            }
            let postsWithChangedPost = state.posts;
            postsWithChangedPost[changedPostIndex] = action.payload;
            return {...state,
                posts: postsWithChangedPost}
        case DEL_POST:
            let mass = state.posts.filter(el => el.id !== action.payload)
            return {...state,
                posts: mass}
        
        case ADD_POST:
            let updatedPosts = state.posts;
            updatedPosts.unshift({...action.payload, comments:[]});
            return {...state,
                posts: updatedPosts}
        case DEL_COMMENT:
            const {postId, commentId} = action.payload;
            console.log('PostId = ' + postId + ' CommentId = ' + commentId)
            let [currentPostDelComm] = state.posts.filter(post => post.id===postId);
            let numberOfPostDelComm = state.posts.indexOf(currentPostDelComm)
            let arrayWithoutComment = state.posts[numberOfPostDelComm].comments.filter(comm=> comm.id!==commentId)
            let postsDelComm = state.posts;
            postsDelComm[numberOfPostDelComm].comments = arrayWithoutComment;
            postsDelComm[numberOfPostDelComm].editCommentMode = true;
            console.log(state.posts[numberOfPostDelComm]);
            return {...state, 
                posts: postsDelComm
            }
        case CHANGE_COMMENT:  
            let numberOfChangedPost = 0;
            for(let element of state.posts){
                if(element.id===action.payload.post_id){
                    let numberOfChangedComm = 0;
                    for(let comm of state.posts[numberOfChangedPost].comments){
                        if(comm.id===action.payload.id){
                            state.posts[numberOfChangedPost].comments[numberOfChangedComm].title = action.payload.title;
                        }
                        numberOfChangedComm++;
                    }
                    break;
                }
                numberOfChangedPost++;
            }
            return state
        case ADD_COMMENT: 
            let [currentPostAddCom] = state.posts.filter(post=> post.id===action.payload.post_id);
            let numberOfPostAddCom = state.posts.indexOf(currentPostAddCom)
            let postsAddComm = state.posts;
            postsAddComm[numberOfPostAddCom].comments = [...state.posts[numberOfPostAddCom].comments,
            action.payload]
            postsAddComm[numberOfPostAddCom].editCommentMode = true;
            return {...state,
            posts: postsAddComm}
        case SET_LAST_CHANGE:
            let postsAfterShowComm = state.posts;
            let [lastChangedPost] = postsAfterShowComm.filter(el => el.id===action.payload.postId);
            let ind = postsAfterShowComm.indexOf(lastChangedPost);
            postsAfterShowComm[ind].editCommentMode = action.payload.editMode;
            console.log(lastChangedPost) 
            return {...state,
                posts: postsAfterShowComm}
        default:
            return state
       }
       
}