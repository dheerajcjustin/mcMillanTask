import React from "react";
import { useSelector } from "react-redux";
import { getResult } from "../redux/questionSlice";

const Result = () => {
      const result = useSelector(getResult);

      return (
            <div className=" px-4 w-full h-[80%] relative">
                  <div className="text-white w-full  bg-fuchsia-800 h-full rounded-xl text-6xl flex justify-center items-center">
                        <div className="w-[40%]  p-6 rounded-lg">
                              <div className=" bg-slate-950   p-6 rounded-lg">
                                    <div className="flex justify-around">
                                          <span>correct :</span>
                                          <span>{result.correct}</span>
                                    </div>
                                    <div className="pt-5 flex justify-around">
                                          <span>incorrect:</span>
                                          <span>{result.wrong}</span>
                                    </div>
                              </div>
                              <button
                                    onClick={() => window.location.reload()}
                                    className="bg-sky-600  p-6 rounded-lg flex justify-center w-full mt-5"
                              >
                                    Play Again{" "}
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Result;
