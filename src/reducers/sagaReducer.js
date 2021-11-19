
const LOGIN_POST = 'LOGIN_POST'
const LOAD_PROFILE = 'LOAD_PROFILE'
const LOAD_POSTS = 'LOAD_POSTS'
const SIGN_UP_POST = 'SIGN_UP_POST'
const DEL_POST = 'DEL_POST'
const LOG_OUT = 'LOG_OUT'
const REDIRECT_ON_POST = 'REDIRECT_ON_POST'
const ALREADY_REDIRECTED = 'ALREADY_REDIRECTED'
const ADD_POST = 'ADD_POST'
const initialState = {
    posts: [],
    userProfile: [],
    loggedIn: false,
    redirectOnPost: false,
    onPostId: ''
}
export const sagaReducer = (state = initialState, action) =>{
       switch (action.type) {
        case ALREADY_REDIRECTED:
            
                state = {...state, 
                    redirectOnPost: false}
            
            return state
        case REDIRECT_ON_POST:
            let post = state.posts.filter(el => el.id === action.payload)
            // console.log(post)
            return {...state,
                redirectOnPost: true,
                onPostId: action.payload,
                onPostInfo: post[0]}
        case LOG_OUT:
            return {...state,
                loggedIn: false}
            //FROM SAGA
        case SIGN_UP_POST:
            return {...state,
                  signedUp: action.payload
                } 
        case LOAD_POSTS: 
            let dates = [];
            for(let el of action.payload){
                dates.push(Math.round(new Date(el.createdAt).getTime()/10000))
                // console.log(dates)
            }
            dates.sort(function(a, b) {
                return a - b;
              });
            let sortedMass = [];
            let count = 0;
            for(let i =0; i<action.payload.length;i++){
                for(let el of dates){
                    if(el===(Math.round(new Date(action.payload[i].createdAt).getTime()/10000)))
                    {
                        // console.log(Math.round(new Date(action.payload[i].createdAt).getTime()/10000))
                        // console.log(count + ' дата = ' +  action.payload[i].createdAt)
                        sortedMass.unshift(action.payload[i])
                        count++;
                    }
                }
            }
            return {...state, 
                posts: sortedMass
            }
        case LOGIN_POST:
            return {...state,
                    loggedIn: action.payload
                } 
        case DEL_POST:
            let mass = state.posts.filter(el => el.id !== action.payload)
            // console.log(mass);
            state.posts = mass
            // console.log(state.posts)
            // console.log(state)
            return state
        case LOAD_PROFILE:
            return {...state,
                    userProfile: action.payload
                }
        case ADD_POST:
            console.log(action.payload)
            console.log(state.posts)
            console.log({...state,
                posts: [...state.posts,
                    action.payload]})
            return {...state,
                posts: [...state.posts,
                    action.payload]}
        default:
            return state
       }
}