
import { ADD_POST, DEL_POST } from "../actions/MainPageActions";
const initialState = {
    user: {
        name: 'users object',
        surname: 'familia',
        id: Date.now()
    },
    posts: ['Post_1','Post_2','Post_3','Post_4','Post_5']
};
export const mainPageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            return{
                ...state.posts,
                addedPost: action.payload,
            };
        case DEL_POST:
            return{
                ...state,
                addedPost: action.payload,
            };
        default:
            return state;
    }
}