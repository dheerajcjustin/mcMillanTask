import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { showQuestionNumber } from "../../redux/questionSlice";

const EndTransition = ({ onTransitionEnd = () => {} }) => {
      return (
            <div
                  className="text-white w-full   delay-700 animate-blink-end flex justify-center items-center relative 
            
            
            "
                  onAnimationEnd={onTransitionEnd}
            ></div>
      );
};

export default EndTransition;
