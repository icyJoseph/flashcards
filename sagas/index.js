import { takeEvery } from "redux-saga/effects";
import { loadAllDecks } from "./loadAllDecks";
import { createNewDeck } from "./createNewDeck";
import { types } from "../constants";

function* rootSaga() {
  yield takeEvery(types.GET_ALL_DECKS, loadAllDecks);
  yield takeEvery(types.CREATE_NEW_DECK, createNewDeck);
}

export default rootSaga;
