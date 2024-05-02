import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion, getStartTimerFlag } from "../redux/questionSlice";

const seconds = 1000;
const countDownTime = 10;

const Timer = () => {
      const timmerFlag = useSelector(getStartTimerFlag);
      const disaptch = useDispatch();
      useEffect(() => {
            const interval = setInterval(() => {
                  setTimeLeft((prevTime) => {
                        if (prevTime < 0) {
                              disaptch(answerQuestion());
                              clearInterval(interval);

                              return 0;
                        }
                        return prevTime - 0.5;
                  });
            }, 500);
            return () => clearInterval(interval);
      }, []);

      useEffect(() => {
            setTimeLeft(countDownTime);
            return () => {};
      }, [timmerFlag]);

      const [timeLeft, setTimeLeft] = useState(countDownTime);

      const timeLeftInPercentage = (timeLeft / countDownTime) * 100;

      return (
            <div className=" absolute left-2 -top-10 w-[98%] px-3">
                  <div
                        className="  rounded-md  bg-slate-50  duration-500 ease-linear transition-width  h-1"
                        style={{ width: `${timeLeftInPercentage}%` }}
                  ></div>
            </div>
      );
};

export default Timer;
