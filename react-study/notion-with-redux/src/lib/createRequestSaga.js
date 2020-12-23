import {all, fork, take, call, put} from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
    return axios.post('url/api/login', data);
}

function* logIn(action) {
    try {
        // call은 동기이기 때문에 axios요청은 call로 요청한다. 
        // logInAPI에 들어갈 파라미터를 두번째 파라미터로 지정해준다. 
        const result = yield call(logInAPI, action.data);
        // put은 dispatch이다! 파라미터로는 액션 객체가 들어간다. 
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data
        });
    }
}

function* watchLogIn() {
    yield take('LOG_IN', logIn); // 'LOG_IN'이 들어오면 logIn 함수 실행
}

// fork와 call로 generator 함수를 실행할 수 있다. 
// fork와 call 모두 파라미터는 함수 
// 동기, 비동기 처리 임이 다름 
export default function* rootSaga() {
    yield all([
        fork(watchLogIn),
        call(watchLogIn)
    ]);
}

