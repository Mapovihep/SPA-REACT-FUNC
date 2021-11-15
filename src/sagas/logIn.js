import {put, call} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении

export default function* logIn() {
    let response = yield fetch( "https://test-api-post.herokuapp.com/auth/sign_in", {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({email: "email@kik.ru", password: "password"})
    })
    let token = yield response.headers.get('Authorization');

    if (token !== null) {
        localStorage.setItem('token', token);
    }
    
    let data = yield response.json(); // тут информация про всякую чушь
    console.log(data);
    yield put({ type: "LOGIN_POST"});
 }