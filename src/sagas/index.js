import {takeEvery, call} from 'redux-saga/effects' 

import getPosts from './Posts/getPosts'
import logIn from './Login/logIn';
import getProfile from './Profile/getProfile';
import signUp from './SignUp/signUp';
import deletePost from './Posts/deletePost';
import addUsersPost from './Posts/addUsersPost';
import addComment from './Comments/addComment';
import changeComment from './Comments/changeComment';
import deleteComment from './Comments/deleteComment';

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
}
export function* changeCommentWorker(data){
    yield call(changeComment, data)
}
export function* deleteCommentWorker(data){
    yield call(deleteComment, data)
}
export function* watchClickSaga(){
    yield takeEvery('SIGN_UP', signUpWorker)//ловим action - если передать состояние элемента, можно увидеть их из функции "воркера"
    yield takeEvery('LOG_IN', logInWorker)
    yield takeEvery('DELETE_POST', deleteWorker)
    yield takeEvery('LOAD_USERS_DATA', getProfileWorker)
    yield takeEvery('LOAD_USERS_POST', getAddPostWorker)
    yield takeEvery('ADDING_COMMENT', addCommentWorker)
    yield takeEvery('DELETING_COMMENT', deleteCommentWorker)
    yield takeEvery('CHANGING_COMMENT', changeCommentWorker)
}
export default function* rootSaga(){
    yield watchClickSaga();
}

