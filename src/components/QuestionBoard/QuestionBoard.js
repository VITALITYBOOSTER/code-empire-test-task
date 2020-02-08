import React from "react";
import { connect } from "react-redux";
import checkResult from "../../pluguins/chkedResult";
import clear from "../../pluguins/clear";

const QuestionBoard = props => {
  return (
    <div className="q-b">
      <div className="first-q">
        <div>Type in the data of USA`s independency</div>
        <input type="text" placeholder="Input data here" />
      </div>
      <div className="second-q">
        <div>What is the year when WWI started?</div>
        <select id="select">
          <option>1917</option>
          <option>1923</option>
          <option>1914</option>
          <option>1912</option>
        </select>
      </div>
      <div className="third-q">
        <div>Was Germany the winner of WWI?</div>
        <div>
          <input name="third" checked type="radio" value="Yes" />
          Yes
          <input name="third" checked type="radio" value="No" />
          No
        </div>
      </div>
      <div className="fourth-q">
        <div>What were the alias of France in WWI</div>
        <div className="check-box-inputs">
          <div>
            <input type="checkbox" value="Great Britain" />
            <div>Great Britain</div>
          </div>
          <div>
            <input type="checkbox" value="Germany" />
            <div>Germany</div>
          </div>
          <div>
            <input type="checkbox" value="Russia" />
            <div>Russia</div>
          </div>
          <div>
            <input type="checkbox" value="Italy" />
            <div>Italy </div>{" "}
          </div>
          <div>
            <input type="checkbox" value="Netherlands" />
            <div>Netherlands </div>{" "}
          </div>
        </div>
      </div>

      <div className="fifth-q">
        <div>Who is the Nikolai II</div>
        <div>
          <input checked name="fifth" type="radio" value="Men" />
          Men
          <input checked name="fifth" type="radio" value="Women" />
          Women
          <input checked name="fifth" type="radio" value="Tsar" />
          Tsar
        </div>
      </div>
      <button onClick={() => handleConfirm(props)}>Submit</button>
      <button onClick={clear}>Clear all answers</button>
    </div>
  );
};

function handleConfirm(props) {
  const result = window.confirm(
    "Каждый не отвеченный ответ считается неправильным, Вы уверены что хотите продолжить?"
  );

  const firstQuestionResult = document.querySelectorAll(".first-q input");
  const secondQuestionResult = document.getElementById("select");
  const thirdQuestionResult = [
    ...document.querySelectorAll(".third-q input")
  ].map(el => {
    if (el.checked) return el.value;
  });
  const fourthQuestionResult = [
    ...document.querySelectorAll(".fourth-q input")
  ].map(el => {
    if (el.checked) return el.value;
  });
  const fifthQuestionResult = [
    ...document.querySelectorAll(".fifth-q input")
  ].map(el => {
    if (el.checked) return el.value;
  });
  const checked = checkResult(
    firstQuestionResult[0].value,
    secondQuestionResult[secondQuestionResult.selectedIndex].text,
    thirdQuestionResult,
    fourthQuestionResult,
    fifthQuestionResult
  );
  if (result)
    props.onResult(result, {
      first: firstQuestionResult[0].value,
      second: secondQuestionResult[secondQuestionResult.selectedIndex].text,
      third: thirdQuestionResult,
      fourth: fourthQuestionResult,
      fifth: fifthQuestionResult,
      result: checked
    });
}

function mapDispatchToProps(dispatch) {
  return {
    onResult: (redirect, results) =>
      dispatch({
        type: "CHANGE_RESULT",
        value: redirect,
        payloadResults: results
      })
  };
}

export default connect(null, mapDispatchToProps)(QuestionBoard);
