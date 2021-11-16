const SET_PEOPLE = 'SET_PEOPLE'
const SET_POSTS = 'SET_POSTS'
const LOGIN_POST = 'LOGIN_POST'
const LOAD_PROFILE = 'LOAD_PROFILE'
const LOAD_POSTS = 'LOAD_POSTS'
const SIGN_UP_POST = 'SIGN_UP_POST'
const DEL_POST = 'DEL_POST'

const initialState = {
    people: [],
    posts: [],
    request: {},
    response: [],
    loggedIn: false,
    signedUp: false
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
            state.posts = mass
            return state
        // case LOGIN_POST: 
        // return { ...state,
        //         planets: [...state.posts,
        //         ...action.payload]
        // }
        // case LOAD_PROFILE: 
        // return { ...state,
        //         response: action.payload
        // }
        // case LOAD_POSTS: 
        // return { ...state,
        //         response: action.payload
        // }
            //FROM SAGA
        default:
            return state
       }
}