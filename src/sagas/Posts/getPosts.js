import {put} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении

export default function* getPosts (){
    const response = yield fetch( "https://test-api-post.herokuapp.com/posts/all", {
        method: 'GET',
        headers: {'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem('token')},
        })
        const posts = yield response.json();
        console.log(posts)
    yield put({type : "LOAD_POSTS", payload: posts});
 }

