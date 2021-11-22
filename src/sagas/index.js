import {take, takeEvery, takeLatest, takeLeading, put, call, fork, spawn} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispatch'a в приложении
import getPosts from './Posts/getPosts'
import getProfile from './getProfile';
import logIn from './logIn';
import signUp from './signUp';
import deletePost from './Posts/deletePost';
import addUsersPost from './Posts/addUsersPost';
import addComment from './Comments/addComment';

export function* workerSaga(){
        yield call(logIn)
        yield call(getProfile)
        yield call(getPosts)
}
export function* signUpWorker(data){
    yield call(signUp, data.state)
}
export function* logInWorker(data){
    yield call(logIn, data.state)
    yield call(getPosts)
    yield call(getProfile)
}
export function* deleteWorker(id){
    yield call(deletePost, id)
    yield call(getPosts)
}
export function* getProfileWorker(){
    yield call(getProfile)
}
export function* getAddPostWorker(data){
    yield call(addUsersPost, data.payload)
    yield call(getPosts)
}
export function* addCommentWorker(data){
    yield call(addComment, data)
    yield call(getPosts)
}
export function* watchClickSaga(){
    yield takeEvery('LOAD_DATA', workerSaga)
    yield takeEvery('SIGN_UP', signUpWorker)//ловим action - если передать состояние элемента, можно увидеть их из функции "воркера"
    yield takeEvery('LOG_IN', logInWorker)
    yield takeEvery('DELETE_POST', deleteWorker)
    yield takeEvery('LOAD_USERS_DATA', getProfileWorker)
    yield takeEvery('LOAD_USERS_POST', getAddPostWorker)
    yield takeEvery('ADD_COMMENT', addCommentWorker)
    // yield takeEvery('DELETE_COMMENT', deleteCommentWorker)

}
export default function* rootSaga(){
    yield watchClickSaga();
}

