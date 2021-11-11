import {take, takeEvery, takeLatest, takeLeading, put, call, fork, spawn} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении

async function getData(pattern){
    const request = await fetch(`test-api-post.herokuapp.com${pattern}`);
    console.log(request)
    const data = await request.json(); 
    console.log(data)
    return data;
}

// function* loadPeople(){
//     const peopleData = yield call(getData, 'people');
//     yield put({type:'SET_PEOPLE', payload: peopleData.results})
//     // console.log('load people')
// }
// function* loadPlanets(){
//     const planetsData = yield call(getData, 'planets');
//     yield put({type:'SET_PLANETS', payload: planetsData.results})
//     // console.log('load planets')
// }

function* loadPeople(){
    const peopleData = yield call(getData, '/user/profile');
    console.log(peopleData)
    yield put({type:'SET_PEOPLE', payload: peopleData.data})
    console.log('load people')
}
function* loadPosts(){
    const postsData = yield call(getData, '/posts/all');
    console.log(postsData)
    yield put({type:'SET_PEOPLE', payload: postsData.data})
    console.log('load posts')
}
export function* workerSaga(){
    // console.log('начинаем выполнение параллельных действий')
    yield fork(loadPeople);
    yield fork(loadPosts);
    // console.log('Заканчиваем выполнение параллельных действий')
}

export function* watchClickSaga(){
    yield takeEvery('LOAD_DATA', workerSaga)
}
export default function* rootSaga(){
    // yield console.log("saga")
    yield watchClickSaga();
}

