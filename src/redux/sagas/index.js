import { spawn } from "redux-saga/effects";
import loginUserSaga from './user_saga';

export default function* rootsaga(){
    yield spawn(loginUserSaga);
}