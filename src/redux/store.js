import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";

const store = configureStore({
      reducer: {
            question: questionReducer,
      },

      devTools: true,
});

export default store;
