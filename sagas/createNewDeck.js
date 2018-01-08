import { call, put } from "redux-saga/effects";
import { saveDeckTitle } from "../api";
import { types } from "../constants";

export function* createNewDeck(action) {
  try {
    const title = action.payload;
    yield call(saveDeckTitle, title);
    yield put({ type: types.GET_ALL_DECKS });
  } catch (error) {
    yield put({ type: types.FAIL_DECK, error });
  }
}
