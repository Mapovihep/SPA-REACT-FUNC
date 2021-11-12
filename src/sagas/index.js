import {take, takeEvery, takeLatest, takeLeading, put, call, fork, spawn} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении

async function getData(pattern, option){
    debugger;
    const request = await fetch(`test-api-post.herokuapp.com${pattern}`, option);
    console.log(request)
    const data = await request.json(); 
    console.log(data)
    return data;
}

function* signUp(){
    const signUpPost = yield call(getData, '/auth/sign_up',  {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            email: "email@kik.ru",
            password: "password", 
            first_name:"firstName", 
            last_name: "lastName" })
    })
    console.log(signUpPost)
    yield put({type:'SIGN_UP_POST', payload: signUpPost})
}
function* login(){
    const loginPost = yield call(getData, '/auth/sign_in',  {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            email: "email@kik.ru",
            password: "password", })
    })
    console.log(loginPost)
    yield put({type:'LOGIN_POST', payload: loginPost})
}
// function* getProfile(){
//     let response = yield call(getData, '/user/profile', {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json;charset=utf-8'},
//         })
//     yield put({type : "LOAD_PROFILE", payload : response.json()});
// }
export function* workerSaga(){
    // console.log('начинаем выполнение параллельных действий')
        yield call(signUp)
        yield call(login)
    // console.log('Заканчиваем выполнение параллельных действий')
}

export function* watchClickSaga(){
    yield takeEvery('LOAD_DATA', workerSaga)
}
export default function* rootSaga(){
    yield watchClickSaga();
}

