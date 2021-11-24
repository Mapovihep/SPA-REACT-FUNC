export const ADD_USERS_POST = 'ADD_USERS_POST';
export const DEL_POST = 'DEL_POST';
export const DELETE_POST = 'DELETE_POST';
export const REDIRECT_ON_POST = 'REDIRECT_ON_POST';
export const inputAction = (post) =>{
    return {type: ADD_USERS_POST, payload: post}
}
export const deletePostAction = (id) => {
    return {type: DELETE_POST, payload: id}
}
export const redirectOnPostAction = (id) => {
    return {type: REDIRECT_ON_POST, payload: id}
}
