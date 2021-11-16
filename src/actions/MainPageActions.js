import { useDispatch } from 'react'
export const ADD_POST = 'ADD_POST';
export const DEL_POST = 'DEL_POST';

export const addPost = (event, setPosts, posts) => {
    let current=event.currentTarget;
    if(event.key === 'Enter'){
        setPosts([
            ...posts,
            {text: current.querySelector('input').value, date: '1'}
        ],  
        current.querySelector('input').value='')
    }else{
        if(event.type === "click"){
            setPosts([
                ...posts,
                {text: current.parentNode.querySelector('input').value, date: '2'}
            ],
            current.parentNode.querySelector('input').value='',
        )}
    }
}
const postAction = (type, value) =>{
        if(type===ADD_POST){
            console.log('LIKE_ACTION')
            return{type: ADD_POST,
                payload: value}
        }else{
            return {type: DEL_POST,
                payload: value}
        }
}
export default postAction