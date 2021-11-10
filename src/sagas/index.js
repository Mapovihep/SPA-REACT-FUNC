import {take, takeEvery, takeLatest, takeLeading, put, call, fork, spawn} from 'redux-saga/effects' //указывает middleWare ждать выполнения указанного действия - ждёт dispztch'a в приложении

async function getData(pattern){
    const request = await fetch(`https://swapi.dev/api/${pattern}`);
    console.log(request)
    const data = await request.json(); 
    console.log(data)
    return data;
}

function* loadPeople(){
    const peopleData = yield call(getData, 'people');
    yield put({type:'SET_PEOPLE', payload: peopleData.results})
    // console.log('load people')
}
function* loadPlanets(){
    const planetsData = yield call(getData, 'planets');
    yield put({type:'SET_PLANETS', payload: planetsData.results})
    // console.log('load planets')
}

export function* workerSaga(){
    // console.log('начинаем выполнение параллельных действий')
    yield fork(loadPeople);
    yield fork(loadPlanets);
    // console.log('Заканчиваем выполнение параллельных действий')
}

export function* watchClickSaga(){
    yield takeEvery('LOAD_DATA', workerSaga)
}
export default function* rootSaga(){
    // yield console.log("saga")
    yield watchClickSaga();

}