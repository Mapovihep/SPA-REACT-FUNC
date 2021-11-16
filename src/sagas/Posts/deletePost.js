import {put, call} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении

export default function* deletePost (id){
    const response = yield fetch( `https://test-api-post.herokuapp.com/posts/post/:${id.payload}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json;charset=utf-8','Authorization': localStorage.getItem('token')},
        })
        const deleteResponse = yield response.json();
        console.log(deleteResponse)
    yield put({type: "DEL_POST", payload: id.payload});
 }

//  DELETE /posts/post/:id
//  response example:
//  {"status": "success", "data":{post id deleted}}