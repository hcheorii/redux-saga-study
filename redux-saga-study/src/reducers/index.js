import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import userSaga from "./user/saga";
import { all, fork } from "redux-saga/effects";

export const reducers = combineReducers({
    userReducer,
});

//사가 함수를 작성할 땐 *을 꼭 붙혀야 한다.
export function* rootSaga() {
    yield all([fork(userSaga)]);
}
