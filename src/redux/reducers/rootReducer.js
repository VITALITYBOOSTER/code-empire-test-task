const initialState = {
  firstAnswer: "",
  secondAnswer: "",
  fourthAnswer: "",
  thirdAnswer: "",
  fifthAnswer: "",
  results: 0,
  isResult: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_RESULT":
      return {
        ...state,
        firstAnswer: action.payloadResults.first,
        secondAnswer: action.payloadResults.second,
        thirdAnswer: action.payloadResults.third,
        fourthAnswer: action.payloadResults.fourth,
        fifthAnswer: action.payloadResults.fifth,
        results: action.payloadResults.result,
        isResult: action.value
      };
    default:
      return state;
  }
}
