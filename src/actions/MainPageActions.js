import { useDispatch } from 'react'
export const LOAD_USERS_POST = 'LOAD_USERS_POST';
export const DEL_POST = 'DEL_POST';
export const DELETE_POST = 'DELETE_POST';
export const REDIRECT_ON_POST = 'REDIRECT_ON_POST';
export const inputAction = (post) =>{
    return {type: LOAD_USERS_POST, payload: post}
}
export const deletePostAction = (id) => {
    return {type: DELETE_POST, payload: id}
}
export const redirectOnPostAction = (id) => {
    return {type: REDIRECT_ON_POST, payload: id}
}

const postAction = (type, value) =>{
        // if(type===ADD_POST){
        //     console.log('LIKE_ACTION')
        //     return{type: ADD_POST,
        //         payload: value}
        // }else{
        //     return {type: DEL_POST,
        //         payload: value}
        // }
}
export default postAction