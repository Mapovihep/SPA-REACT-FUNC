const SET_PEOPLE = 'SET_PEOPLE'
const SET_POSTS = 'SET_POSTS'
const LOGIN_POST = 'LOGIN_POST'
const LOAD_PROFILE = 'LOAD_PROFILE'
const LOAD_POSTS = 'LOAD_POSTS'
const SIGN_UP = 'SIGN_UP'
const initialState = {
    people: [],
    posts: [],
    request: {},
    response: [],
    loggedIn: false
}
export const sagaReducer = (state = initialState, action) =>{
       switch (action.type) {
            //FROM SAGA
        case SIGN_UP:
            return {
                ...state,
                  loggedIn: action.payload
                } 
        case LOAD_POSTS: 
            return {
                ...state, 
                posts: action.payload
            }
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