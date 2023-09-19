import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './base-api'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {modalSlice} from "@/services/modal/modal.slice.ts";
import {deckSlice} from "@/services/decks/deck.slice.ts";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [deckSlice.name]: deckSlice.reducer,
    // [cardsSlice.name]: cardsSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector