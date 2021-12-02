buttonOne.onclick = startGame;
function startGame() {
  window.location.href = "questions.html";
}
buttonTwo.onclick = showCredits;
function showCredits() {
  menu.classList.add('invisible');
  credits.classList.remove('invisible');
}
back.onclick = goBack;
back2.onclick = goBack2;
function goBack() {
  credits.classList.add('invisible');
  menu.classList.remove('invisible');
}
function goBack2() {
  video.pause()
  joke.classList.add('invisible');
  menu.classList.remove('invisible');
}
buttonThree.onclick = noInstructions;
function noInstructions() {
  alert("The answer to question one is pizza! - Michelangelo");
}
buttonFour.onclick = rickRoll;
function rickRoll() {
  menu.classList.add('invisible');
  joke.classList.remove('invisible');
}
