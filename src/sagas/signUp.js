import {put, call} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении


export default function* signUp(){
    const signUpPost = yield fetch("https://test-api-post.herokuapp.com/auth/sign_up",  {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            email: "email@kik.ru",
            password: "password", 
            first_name:"firstName", 
            last_name: "lastName" })
    })
    console.log(signUpPost)
    yield put({type:'SIGN_UP', payload: true})
}