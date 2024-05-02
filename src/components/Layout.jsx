import React, { useEffect } from "react";
import Timer from "./Timer";
import { useDispatch, useSelector } from "react-redux";
import {
      answerStateOptions,
      getCurrentQuestionStatus,
      nextQuestion,
} from "../redux/questionSlice";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
      const currentQuentinStatus = useSelector(getCurrentQuestionStatus);
      const isIdle = currentQuentinStatus === answerStateOptions.idle;

      return (
            <div className="bg-black text-white w-full h-screen overflow-hidden relative">
                  <Header />

                  {children}

                  <Footer />
            </div>
      );
};

export default Layout;
