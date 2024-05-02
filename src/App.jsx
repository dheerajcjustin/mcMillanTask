import { useSelector } from "react-redux";
import GameWrap from "./components/GameWrap";
import Layout from "./components/Layout";

import {
      answerStateOptions,
      getCurrentQuestionStatus,
} from "./redux/questionSlice";
import QuestionCount from "./components/QuestionCount";
import { Transition } from "./components/Transition/Transition";
import Result from "./components/Result";

function App() {
      const QuestionStatus = useSelector(getCurrentQuestionStatus);
      const isLoading = QuestionStatus === answerStateOptions.loading;
      const isComplted = QuestionStatus === answerStateOptions.completed;

      return (
            <div className="font-kalam">
                  <Layout>
                        {isLoading ? (
                              <Transition />
                        ) : isComplted ? (
                              <Result />
                        ) : (
                              <GameWrap />
                        )}
                        {/* {isShowQuestionCount ? <QuestionCount /> : null} */}
                  </Layout>
            </div>
      );
}

export default App;
