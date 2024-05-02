import React from "react";
import { useSelector } from "react-redux";
import {
      answerStateOptions,
      getCurrentQuestionStatus,
} from "../redux/questionSlice";
import { bgColors } from "./OptionBox";

const Footer = () => {
      const currentQuentinStatus = useSelector(getCurrentQuestionStatus);
      const isCorrect = currentQuentinStatus === answerStateOptions.correct;
      const isWrong = currentQuentinStatus === answerStateOptions.wrong;

      return (
            <div className="h-[10%] pt-3  overflow-hidden">
                  {isWrong || isCorrect ? (
                        <div
                              className={` ${
                                    isCorrect
                                          ? bgColors.correct
                                          : bgColors.wrong
                              } bg-green-400 h-full flex justify-center text-4xl items-center   animate-from-bottom `}
                        >
                              {isCorrect ? "Correct" : "Wrong"}
                        </div>
                  ) : null}
            </div>
      );
};

export default Footer;
