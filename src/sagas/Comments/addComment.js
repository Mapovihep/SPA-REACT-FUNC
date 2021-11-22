import {put} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении

export default function* addComment (comment) {
    console.log(comment)
    const response = yield fetch( `https://test-api-post.herokuapp.com/comments/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8','Authorization': localStorage.getItem('token')},
        body:   JSON.stringify({"title": comment.payload.value,
            "post_id": comment.payload.postId})
        })
        const addResponse = yield response.json();
        console.log(addResponse)
 }
