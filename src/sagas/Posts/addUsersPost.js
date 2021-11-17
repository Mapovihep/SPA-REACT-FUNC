import {put} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении

export default function* addUsersPost (post){
    console.log(post)
    const response = yield fetch( `https://test-api-post.herokuapp.com/posts/post/add`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json;charset=utf-8','Authorization': localStorage.getItem('token')},
        body:   JSON.stringify({title: post.title,
            description: post.description})
        })
        const addResponse = yield response.json();
        console.log(addResponse)
    yield put({type: "ADD_POST", payload: post});
 }
