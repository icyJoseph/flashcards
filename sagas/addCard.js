import { call, put } from "redux-saga/effects";
import { addCardToDeck } from "../api";
import { types } from "../constants";

export function* addNewCardToDeck(action) {
  try {
    yield call(addCardToDeck, action.payload.title, action.payload.card);
    yield put({ type: types.GET_ALL_DECKS });
  } catch (error) {
    yield put({ type: types.FAILED_ADD_CARD, error });
  }
}
