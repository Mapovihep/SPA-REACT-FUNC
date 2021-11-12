const SET_PEOPLE = 'SET_PEOPLE'
const SET_POSTS = 'SET_POSTS'
const LOGIN_POST = 'LOGIN_POST'
const LOAD_PROFILE = 'LOAD_PROFILE'
const initialState = {
    people: [],
    posts: [],
    request: {}
}
export const sagaReducer = (state = initialState, action) =>{
       switch (action.type) {
            //FROM SAGA
        case SET_PEOPLE: 
            return { ...state,
                    people: [...state.people,
                    ...action.payload]
            }
        case SET_POSTS: 
            return { ...state,
                    planets: [...state.posts,
                    ...action.payload]
            }
        case LOGIN_POST: 
        return { ...state,
                planets: [...state.posts,
                ...action.payload]
        }
        case LOAD_PROFILE: 
        return { ...state,
                response: action.payload
        }
            //FROM SAGA
        default:
            return state
       }
}