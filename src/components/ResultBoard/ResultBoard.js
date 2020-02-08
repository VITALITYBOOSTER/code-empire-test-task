import React from "react";
import { connect } from "react-redux";
import rightAnswers from "../../pluguins/rightAnswers";
import ResultBoardElement from "./ResultBoardElement";

const ResultBoard = props => {
  return (
    <div className='results-board'>
      <h2>RESULTS OF YOUT TEST</h2>
      <ResultBoardElement
        number={"first"}
        answer={props.firstA}
        right={rightAnswers.first}
      />
      <ResultBoardElement
        number={"second"}
        answer={props.secondA}
        right={rightAnswers.second}
      />
      <ResultBoardElement
        number={"third"}
        answer={props.thirdA}
        right={rightAnswers.third}
      />
      <ResultBoardElement
        number={"fourth"}
        answer={props.fourthA}
        right={rightAnswers.fourth}
      />
      <ResultBoardElement
        number={"fifth"}
        answer={props.fifthA}
        right={rightAnswers.fifth}
      />
      <div className="results">
        The number of right answers is:
        <div>{props.results} / 5</div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    firstA: state.firstAnswer,
    secondA: state.secondAnswer,
    thirdA: state.thirdAnswer,
    fourthA: state.fourthAnswer,
    fifthA: state.fifthAnswer,
    results: state.results
  };
}

export default connect(mapStateToProps)(ResultBoard);
