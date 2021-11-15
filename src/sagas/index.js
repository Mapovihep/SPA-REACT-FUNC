import {take, takeEvery, takeLatest, takeLeading, put, call, fork, spawn} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispatch'a в приложении
import getPosts from './getPosts'
import getProfile from './getProfile';
import logIn from './logIn';
import signUp from './signUp';

export function* workerSaga(){
        yield call(signUp)
        yield call(logIn)
        yield call(getProfile)
        yield call(getPosts)
}

export function* watchClickSaga(){
    yield takeEvery('LOAD_DATA', workerSaga)
}
export default function* rootSaga(){
    yield watchClickSaga();
}

