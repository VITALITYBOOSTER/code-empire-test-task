const clear = () => {
  document.querySelectorAll(".first-q input")[0].value = "";
  document.getElementById("select").selectedIndex = 0;
  [...document.querySelectorAll(".third-q input")].map(el => {
    el.checked = false;
  });
  const fourthQuestionResult = [
    ...document.querySelectorAll(".fourth-q input")
  ].map(el => {
    el.checked = false;
  });
  const fifthQuestionResult = [
    ...document.querySelectorAll(".fifth-q input")
  ].map(el => {
    el.checked = false;
  });
};
export default clear;
