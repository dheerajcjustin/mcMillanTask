import React, { useEffect } from "react";
import { OptionBox } from "./OptionBox";
import { useDispatch, useSelector } from "react-redux";
import {
      answerStateOptions,
      getQuestionSelector,
      loadAllQuestions,
      nextQuestion,
      showQuestionNumber,
} from "../redux/questionSlice";
import Timer from "./Timer";
import QuestionCount from "./QuestionCount";
const defaultBgs = ["bg-blue-700", "bg-sky-600", "bg-amber-400", "bg-red-400"];
const defaultShadow = [
      "shadow-blue-800",
      "shadow-sky-700",
      "shadow-amber-500",
      "shadow-red-500",
];

const GameWrap = () => {
      const {
            questions,
            loading,
            currentQuestionIndex,
            currentQuentin,
            answerState,
      } = useSelector(getQuestionSelector);

      const { question, answer, options = [] } = currentQuentin;

      useEffect(() => {
            dispatch(loadAllQuestions());
      }, []);

      const isWrongORcorrect =
            answerState === answerStateOptions.wrong ||
            answerState === answerStateOptions.correct;

      const isIdle = answerState === answerStateOptions.idle;
      const isQuestionNumberVisible =
            answerState === answerStateOptions.questionNumber;
      const dispatch = useDispatch();

      useEffect(() => {
            let timeoutId;
            if (isWrongORcorrect) {
                  timeoutId = setTimeout(() => {
                        dispatch(nextQuestion());
                  }, 2000);
            }
            return () => {
                  clearTimeout(timeoutId);
            };
      }, [isWrongORcorrect, dispatch]);

      console.log("isQuestionNumberVisible", isQuestionNumberVisible);

      return (
            <div className=" px-4 w-full h-[80%] relative">
                  {isQuestionNumberVisible ? <QuestionCount /> : null}

                  {isIdle ? <Timer /> : null}
                  <div className="text-white w-full  bg-fuchsia-800 h-full rounded-xl">
                        <div className="h-[40%] flex justify-center items-center">
                              <h2 className="text-6xl ">
                                    {currentQuentin?.question}
                              </h2>
                        </div>
                        <div className="flex  h-[60%] gap-3  p-3">
                              {options.map((option, index) => (
                                    <OptionBox
                                          defaultShadow={defaultShadow[index]}
                                          defaultBg={defaultBgs[index]}
                                          option={option}
                                          answer={answer}
                                          key={index}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default GameWrap;
