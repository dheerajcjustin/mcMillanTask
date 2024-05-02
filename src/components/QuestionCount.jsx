import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionIndex, showQuestion } from "../redux/questionSlice";

const QuestionCount = () => {
      const questionIndex = useSelector(getQuestionIndex);
      const dispatch = useDispatch();

      return (
            <div className="  w-[97.9%] h-full  absolute ">
                  <div
                        className="text-white w-full text-8xl  animate-fade-out  bg-fuchsia-900 h-full rounded-xl flex justify-center items-center"
                        onAnimationEnd={() => dispatch(showQuestion())}
                  >
                        {questionIndex + 1}
                  </div>
            </div>
      );
};

export default QuestionCount;
