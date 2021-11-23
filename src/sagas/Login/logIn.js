import {put} from 'redux-saga/effects' 

export default function* logIn(data) {
    const response = yield fetch( "https://test-api-post.herokuapp.com/auth/sign_in", {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            email: data.eMail, 
            password: data.password})
    })
    let token = yield response.headers.get('Authorization');
    if (token !== null) {
        localStorage.setItem('token', token);
    }
    
    yield put({ type: "LOGIN_POST", payload: true});
 }