import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { showQuestionNumber } from "../../redux/questionSlice";

const StartTransition = ({ onTransitionEnd }) => {
      const [showSoundDown, setShowSoundDown] = useState(false);
      const [textToShow, setTextToShow] = useState(3);

      useEffect(() => {
            const timmer = setTimeout(() => {
                  setShowSoundDown(true);
            }, 1500);
            return () => {
                  clearTimeout(timmer);
            };
      }, []);

      const animationHandler = (e) => {
            if (e.animationName === "shirking") {
                  setTextToShow((prev) => {
                        return prev <= 0 ? 0 : --prev;
                  });
            }
      };

      const onAnimationEnd = () => {
            onTransitionEnd();
            setShowSoundDown(false);
      };
      return (
            <div className="text-white w-full   delay-700 animate-blink flex justify-center items-center relative  ">
                  {showSoundDown ? (
                        <>
                              <div
                                    onAnimationEnd={() => onAnimationEnd(true)}
                                    onAnimationIteration={animationHandler}
                                    className="absolute w-full h-36  bg-stone-950 text-9xl flex justify-center items-center 
            animate-shirking "
                              >
                                    <span className="animate-opacity">
                                          {textToShow === 0
                                                ? "GO!"
                                                : textToShow}
                                    </span>
                              </div>
                        </>
                  ) : null}
            </div>
      );
};

export default StartTransition;
