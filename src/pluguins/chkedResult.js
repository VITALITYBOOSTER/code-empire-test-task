const checkResult = (first, second, third, fourth, fifth) => {
  let result = 0;
  if (first == "1776") {
    result++;
  }
  if (second == "1914") {
    result++;
  }
  if (third.join("") == "No") {
    result++;
  }
  fourth = fourth.join("");
  if (fourth == "Great BritainRussiaItaly") {
    result++;
  }
  fifth = fifth.join("");
  if (fifth == "Tsar") {
    result++;
  }
  return result;
};

export default checkResult;
