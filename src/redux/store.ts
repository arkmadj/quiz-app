import { configureStore } from "@reduxjs/toolkit";
import QuestionsReducer from '../features/questions/questionsSlice'
export const store = configureStore({
  reducer: {
    questions: QuestionsReducer,
  },
  // middleware: (getD)
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
