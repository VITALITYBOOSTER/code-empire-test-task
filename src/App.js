import React from "react";
import QuestionBoard from "./components/QuestionBoard/QuestionBoard";
import ResultBoard from "./components/ResultBoard/ResultBoard";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <Route exact path="/">
        {props.isResult ? <Redirect to="/result" /> : <QuestionBoard />}
      </Route>
      <Route path="/result">
        <ResultBoard />
      </Route>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isResult: state.isResult
  };
}

export default connect(mapStateToProps)(App);
