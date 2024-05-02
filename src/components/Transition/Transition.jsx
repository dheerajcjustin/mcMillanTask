import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showQuestionNumber } from "../../redux/questionSlice";
import StartTransition from "./StartTransition";
import EndTransition from "./EndTransition";

export const Transition = () => {
      const [showStartTransition, setShowStartTransition] = useState(true);

      const dispatch = useDispatch();

      const onEndTransitionEnd = () => {
            dispatch(showQuestionNumber());
      };

      const onStartTransitionEnd = () => {
            setShowStartTransition(false);
      };

      return (
            <div className=" px-4 w-full h-[80%] ">
                  <div className="text-white w-full   bg-fuchsia-900 h-full rounded-xl flex justify-center items-center">
                        {showStartTransition ? (
                              <StartTransition
                                    onTransitionEnd={onStartTransitionEnd}
                              />
                        ) : (
                              <EndTransition
                                    onTransitionEnd={onEndTransitionEnd}
                              />
                        )}
                  </div>
            </div>
      );
};
