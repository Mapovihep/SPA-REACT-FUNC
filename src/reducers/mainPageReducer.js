
import { ADD_POST, DEL_POST } from "../actions/MainPageActions";
const initialState = {
    user: {
        name: 'users object',
        surname: 'familia',
        id: Date.now()
    },
    posts: [{text: 'Post_1', date: '22.02.19'}, {text: 'Post_2', date: '22.02.20'}]
};
export const mainPageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            return{
                ...state.posts,
                addedPost: action.payload,
            };
        case DEL_POST:
            let neededEl = 0;
            for(let el of state.posts){
                if(el===action.payload){
                    neededEl = el;
                    console.log(neededEl); 
                }
            }
            return{
                ...state,
                deletedPost: action.payload,
            };
        default:
            return state;
    }
}