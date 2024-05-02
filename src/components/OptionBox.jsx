import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
      answerQuestion,
      answerStateOptions,
      getCurrentQuestionStatus,
      getQuestionSelector,
      nextQuestion,
} from "../redux/questionSlice";

export const bgColors = {
      correct: "bg-emerald-600",
      wrong: " bg-red-600",
};
export const OptionBox = ({
      option,
      onclick,
      answer,
      defaultBg,
      defaultShadow,
}) => {
      const dispatch = useDispatch();

      const [isWrongAnswer, setIsWrongAnswer] = useState(false);

      const currentQuentinStatus = useSelector(getCurrentQuestionStatus);
      const isCorrect = currentQuentinStatus === answerStateOptions.correct;
      const isWrong = currentQuentinStatus === answerStateOptions.wrong;
      const quastionAnswered = isWrong || isCorrect;

      const onclickHandler = () => {
            if (answer !== option) setIsWrongAnswer(true);

            dispatch(answerQuestion(option));

            setTimeout(() => {
                  setIsWrongAnswer(false);
            }, 2000);
      };

      const isOptionCorrect = option === answer;

      const getBgColor = () => {
            const get = () => {
                  if (isWrongAnswer) return bgColors.wrong;
                  if (isOptionCorrect && quastionAnswered)
                        return bgColors.correct;
                  if (quastionAnswered) return " opacity-0 ";
                  return defaultBg;
            };

            console.log("the get value", get());
            return get();
      };

      return (
            <button
                  disabled={quastionAnswered}
                  className={`  duration-300 h-full w-6/12 
                   ${getBgColor()} 
                     rounded-md  ${
                           quastionAnswered
                                 ? "border-white border-4  "
                                 : `${defaultShadow}   shadow-bottom  `
                     }   `}
                  onClick={onclickHandler}
            >
                  <h3 className="text-4xl">{option}</h3>
            </button>
      );
};
