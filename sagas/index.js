import { takeEvery, all } from "redux-saga/effects";
import { loadAllDecks } from "./loadAllDecks";
import { types } from "../constants";

function* rootSaga() {
  yield all[takeEvery(types.GET_ALL_DECKS, loadAllDecks)];
}

export default rootSaga();
