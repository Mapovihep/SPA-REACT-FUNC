import {put} from 'redux-saga/effects' 
import { LOG_IN } from '../../actions/ReducerActions';

export default function* logIn(data) {
    const response = yield fetch( "https://test-api-post.herokuapp.com/auth/sign_in", {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            email: data.eMail, 
            password: data.password})
    })
    let token = yield response.headers.get('Authorization');
    token !== null ? 
    localStorage.setItem('token', token)&&(yield put({ type: LOG_IN, payload: true})) 
    : alert('Access API error!');
 }