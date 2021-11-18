import { ADD_POST } from "../actions/MainPageActions"

const SET_PEOPLE = 'SET_PEOPLE'
const SET_POSTS = 'SET_POSTS'
const LOGIN_POST = 'LOGIN_POST'
const LOAD_PROFILE = 'LOAD_PROFILE'
const LOAD_POSTS = 'LOAD_POSTS'
const SIGN_UP_POST = 'SIGN_UP_POST'
const DEL_POST = 'DEL_POST'
const LOG_OUT = 'LOG_OUT'
const REDIRECT_ON_POST = 'REDIRECT_ON_POST'
const ALREADY_REDIRECTED = 'ALREADY_REDIRECTED'
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
            if(action.payload === state.onPostId){
                state = {...state, 
                    redirectOnPost: false}
            }
            return state
        case REDIRECT_ON_POST:
            let post = state.posts.filter(el => el.id === action.payload)
            console.log(post)
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
            console.log(state)
            let dates = [];
            for(let el of action.payload){
                dates.push(Math.round(new Date(el.createdAt).getTime()/10000))
                console.log(dates)
            }
            dates.sort(function(b, a) {
                return a - b;
              });
            let sortedMass = [];
            for(let i =0; i<action.payload.length;i++){
                for(let el of dates){
                    if(el===(Math.round(new Date(action.payload[i].createdAt).getTime()/10000)))
                    {sortedMass.push(action.payload[i])}
                }
            }
            console.log(sortedMass);
            return {...state, 
                posts: action.payload
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
            state.posts.push(action.payload)
            return state
        default:
            return state
       }
}