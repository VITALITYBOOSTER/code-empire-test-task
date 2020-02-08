import React from "react";

const ResultBoardElement = props => {
  return (
    <div className="result-element">
      <div className='result-element-header'>The {props.number} question</div>
      <div>You have answered : {props.answer}</div>
      <div>The right answer is : {props.right}</div>
    </div>
  );
};

export default ResultBoardElement;
