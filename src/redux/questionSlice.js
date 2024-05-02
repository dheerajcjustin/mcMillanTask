import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import mockQuestion from "./mockQuestion";

export const answerStateOptions = {
      idle: "idle",
      correct: "correct",
      wrong: "wrong",
      loading: "loading",
      completed: "completed",
      questionNumber: "questionNumber",
};
const initialState = {
      questions: [],
      loading: false,
      currentQuestionIndex: 0,
      currentQuentin: {},
      answerState: answerStateOptions.loading,
      startTimer: "",
      result: { correct: 0, wrong: 0 },
};

export const loadAllQuestions = createAsyncThunk(
      "question/loadAllQuestions",
      async (_, { rejectWithValue }) => {
            try {
                  return mockQuestion;
            } catch (error) {
                  // If an error occurs, return the error object
                  return rejectWithValue(error.response.data);
            }
      }
);

const questionSlice = createSlice({
      name: "question",
      initialState,
      reducers: {
            // Reducer for adding a notification
            answerQuestion: (state, action) => {
                  const answerByUser = action.payload;
                  if (state.currentQuentin.answer === answerByUser) {
                        state.answerState = answerStateOptions.correct;
                        state.result.correct++;
                  } else {
                        state.result.wrong++;
                        state.answerState = answerStateOptions.wrong;
                  }
            },

            showQuestion: (state, action) => {
                  state.answerState = answerStateOptions.idle;
            },

            showQuestionNumber: (state, action) => {
                  console.log("calling shoq quesitn number");
                  state.answerState = answerStateOptions.questionNumber;
            },

            nextQuestion: (state, action) => {
                  const questionLength = state.questions.length;
                  const index = state.currentQuestionIndex;
                  state.startTimer = state.startTimer + "hia";
                  if (index < questionLength - 1) {
                        state.answerState = answerStateOptions.questionNumber;

                        state.currentQuentin =
                              state.questions[++state.currentQuestionIndex];
                  } else {
                        state.answerState = answerStateOptions.completed;
                  }
            },
      },
      extraReducers: (builder) => {
            // Extra reducers for handling async actions
            builder
                  .addCase(loadAllQuestions.pending, (state) => {
                        // Set loading state to true while fetching notifications
                        state.loading = true;
                        state.error = null; // Reset error state
                  })
                  .addCase(loadAllQuestions.fulfilled, (state, action) => {
                        // Set loading state to false and update notifications when fetch is successful
                        state.loading = false;
                        state.questions = action.payload;
                        console.log("action.payload", action.payload);
                        state.currentQuentin = action.payload[0];
                  })
                  .addCase(loadAllQuestions.rejected, (state, action) => {
                        // Set loading state to false and store error when fetch fails
                        state.loading = false;
                        state.error = action.payload; // Payload here will be the error object
                  });
      },
});

export const getStartTimerFlag = (state) => state.question.startTimer;

export const getResult = (state) => state.question.result;

export const getQuestionSelector = (state) => state.question;

export const getCurrentQuestionStatus = (state) => state.question?.answerState;

export const getQuestionIndex = (state) => state.question.currentQuestionIndex;

export const getCurrentQuestion = (state) => state.question?.currentQuentin;

export const {
      answerQuestion,
      nextQuestion,
      showQuestionNumber,
      showQuestion,
} = questionSlice.actions;

export default questionSlice.reducer;
