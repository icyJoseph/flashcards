import { call, put } from "redux-saga/effects";
import { getDecks } from "../api";
import { types } from "../constants";

export function* loadAllDecks() {
  try {
    const decks = yield call(getDecks);
    yield put({ type: types.LOAD_ALL_DECKS, payload: decks });
  } catch (error) {
    yield put({ type: types.FAILED_ALL_DECKS, error });
  }
}
