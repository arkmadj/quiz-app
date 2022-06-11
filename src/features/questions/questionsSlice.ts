import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Question } from "../../Types";
import axios from "axios";

const url =
	"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

type QuestionsSliceState =  {
  questions: Question[];
  correctAnswers: number;
  isLoading: boolean;
  error: string | undefined | null | any;
}

const initialState: QuestionsSliceState = {
	questions: [],
  correctAnswers: 0,
	isLoading: true,
  error: null,
};

export const getAllQuestions = createAsyncThunk(
	"question/getAllQuestions",
	async (name,{rejectWithValue}) => {
    try{
      const response = await axios.get(url);
      return response.data;
    }catch(error: any){
      return rejectWithValue(error.message);
    }
	}
);

const questionsSlice = createSlice({
	name: "questions",
	initialState,
	reducers: {
    addUserAnswer: (state, action) => {
      const { answer, id } = action.payload;
      if (answer === state.questions[id].correct_answer) {
        state.correctAnswers++;
      }
      state.questions[id].user_answer = answer
    },
    resetResult: (state) => {
      state.correctAnswers = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllQuestions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllQuestions.fulfilled, (state, action) => {
      state.questions = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(getAllQuestions.rejected, (state, action) => {
      if (action.error) {
        state.error = action.payload;
      }else{
        state.error = action.error;
      }
      state.isLoading = false;
    });
  }
});

export const {addUserAnswer, resetResult} = questionsSlice.actions;

export default questionsSlice.reducer;
