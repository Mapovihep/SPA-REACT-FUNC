const SET_PEOPLE = 'SET_PEOPLE'
const SET_PLANETS = 'SET_PLANETS'
const initialState = {
    people: [],
    posts: []
}
export const sagaReducer = (state = initialState, action) =>{
       switch (action.type) {
            //FROM SAGA
        case SET_PEOPLE: 
            return { ...state,
                    people: [...state.people,
                    ...action.payload]
            }
        case SET_PLANETS: 
            return { ...state,
                    planets: [...state.posts,
                    ...action.payload]
            }
            //FROM SAGA
        default:
            return state
       }
}