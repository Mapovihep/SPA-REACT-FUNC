import { ADD_POST } from "../actions/MainPageActions"

const SET_PEOPLE = 'SET_PEOPLE'
const SET_POSTS = 'SET_POSTS'
const LOGIN_POST = 'LOGIN_POST'
const LOAD_PROFILE = 'LOAD_PROFILE'
const LOAD_POSTS = 'LOAD_POSTS'
const SIGN_UP_POST = 'SIGN_UP_POST'
const DEL_POST = 'DEL_POST'

const initialState = {
    posts: [],
    userProfile: [],
    loggedIn: false
}
export const sagaReducer = (state = initialState, action) =>{
       switch (action.type) {
            //FROM SAGA
        case SIGN_UP_POST:
            return {
                ...state,
                  signedUp: action.payload
                } 
        case LOAD_POSTS: 
            return {
                ...state, 
                posts: action.payload
            }
        case LOGIN_POST:
            return {
                ...state,
                    loggedIn: action.payload
                } 
        case DEL_POST:
            let mass = state.posts.filter(el => el.id !== action.payload)
            console.log(mass);
            state.posts = mass
            console.log(state.posts)
            console.log(state)
            return state
        case LOAD_PROFILE:
            console.log(state)
            console.log(action.payload)
            return {
                ...state,
                    userProfile: action.payload
                }
        case ADD_POST:
            state.posts.push(action.payload)
            return state
        default:
            return state
       }
}