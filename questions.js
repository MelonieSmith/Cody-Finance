function wrongAnswer() {
  oof.pause()
  oof.currentTime = 0;
  if (!lifeOne.classList.contains("invisible")) {
    lifeOne.classList.add("invisible");
    oof.play();
  }
  else if (!lifeTwo.classList.contains("invisible")) {
    lifeTwo.classList.add("invisible");
    oof.play();
  }
  else {
    lifeThree.classList.add("invisible");
    sectionOne.classList.add("invisible");
    sectionTwo.classList.add("invisible");
    sectionThree.classList.add("invisible");
    sectionFour.classList.add("invisible");
    body.classList.remove("backColour");
    body.classList.add("black");
    gameOver.classList.remove("invisible");
    slowOof.play();
  }
}

sectionOneButton.onclick = checkSectionOne;
function checkSectionOne() {
  var sectionOneCorrect = 1;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  if (questionOne.value == 576.9231) {
    questionOne.parentNode.classList.remove("wrong");
    questionOne.parentNode.classList.add("correct");
    questionOne.disabled = true;
  }
  else {
    questionOne.parentNode.classList.add("wrong");
    sectionOneCorrect = 0;
  }
  if (questionTwo.value == 2307.69) {
    questionTwo.parentNode.classList.remove("wrong");
    questionTwo.parentNode.classList.add("correct");
    questionTwo.disabled = true;
  }
  else {
    questionTwo.parentNode.classList.add("wrong");
    sectionOneCorrect = 0;
  }
  if (questionThree.value == 19850) {
    questionThree.parentNode.classList.remove("wrong");
    questionThree.parentNode.classList.add("correct");
    questionThree.disabled = true;
  }
  else {
    questionThree.parentNode.classList.add("wrong");
    sectionOneCorrect = 0;
  }
  if (questionFour.value == 30950) {
    questionFour.parentNode.classList.remove("wrong");
    questionFour.parentNode.classList.add("correct");
    questionFour.disabled = true;
  }
  else {
    questionFour.parentNode.classList.add("wrong");
    sectionOneCorrect = 0;
  }
  if (questionFive.value == 3350) {
    questionFive.parentNode.classList.remove("wrong");
    questionFive.parentNode.classList.add("correct");
    questionFive.disabled = true;
  }
  else {
    questionFive.parentNode.classList.add("wrong");
    sectionOneCorrect = 0;
  }
  if (questionSix.value == 7250) {
    questionSix.parentNode.classList.remove("wrong");
    questionSix.parentNode.classList.add("correct");
    questionSix.disabled = true;
  }
  else {
    questionSix.parentNode.classList.add("wrong");
    sectionOneCorrect = 0;
  }
  if (questionSeven.value == 8059.70) {
    questionSeven.parentNode.classList.remove("wrong");
    questionSeven.parentNode.classList.add("correct");
    questionSeven.disabled = true;
  }
  else {
    questionSeven.parentNode.classList.add("wrong");
    sectionOneCorrect = 0;
  }
  if (questionEight.value == 277.16) {
    questionEight.parentNode.classList.remove("wrong");
    questionEight.parentNode.classList.add("correct");
    questionEight.disabled = true;
  }
  else {
    questionEight.parentNode.classList.add("wrong");
    sectionOneCorrect = 0;
  }
  if (sectionOneCorrect == 0) {
    wrongAnswer();
  }
  else {
    ding.play()
    sectionOne.classList.add("invisible");
    sectionTwo.classList.remove("invisible");
  }
}

sectionTwoButton.onclick = checkSectionTwo;
function checkSectionTwo() {
  var sectionTwoCorrect = 1;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  if (questionNine.value == 20) {
    questionNine.parentNode.classList.remove("wrong");
    questionNine.parentNode.classList.add("correct");
    questionNine.disabled = true;
  }
  else {
    questionNine.parentNode.classList.add("wrong");
    sectionTwoCorrect = 0;
  }
  if (questionTen.value == 110) {
    questionTen.parentNode.classList.remove("wrong");
    questionTen.parentNode.classList.add("correct");
    questionTen.disabled = true;
  }
  else {
    questionTen.parentNode.classList.add("wrong");
    sectionTwoCorrect = 0;
  }
  if (questionEleven.value == 500) {
    questionEleven.parentNode.classList.remove("wrong");
    questionEleven.parentNode.classList.add("correct");
    questionEleven.disabled = true;
  }
  else {
    questionEleven.parentNode.classList.add("wrong");
    sectionTwoCorrect = 0;
  }
  if (questionTwelve.value == 240) {
    questionTwelve.parentNode.classList.remove("wrong");
    questionTwelve.parentNode.classList.add("correct");
    questionTwelve.disabled = true;
  }
  else {
    questionTwelve.parentNode.classList.add("wrong");
    sectionTwoCorrect = 0;
  }
  if (questionThirteen.value == 2.50) {
    questionThirteen.parentNode.classList.remove("wrong");
    questionThirteen.parentNode.classList.add("correct");
    questionThirteen.disabled = true;
  }
  else {
    questionThirteen.parentNode.classList.add("wrong");
    sectionTwoCorrect = 0;
  }
  if (questionFourteen.value == 233.44) {
    questionFourteen.parentNode.classList.remove("wrong");
    questionFourteen.parentNode.classList.add("correct");
    questionFourteen.disabled = true;
  }
  else {
    questionFourteen.parentNode.classList.add("wrong");
    sectionTwoCorrect = 0;
  }
  if (questionFifteen.value == 18) {
    questionFifteen.parentNode.classList.remove("wrong");
    questionFifteen.parentNode.classList.add("correct");
    questionFifteen.disabled = true;
  }
  else {
    questionFifteen.parentNode.classList.add("wrong");
    sectionTwoCorrect = 0;
  }
  if (sectionTwoCorrect == 0) {
    wrongAnswer();
  }
  else {
    ding.play()
    sectionTwo.classList.add("invisible");
    sectionThree.classList.remove("invisible");
  }
}

sectionThreeButton.onclick = checkSectionThree;
function checkSectionThree() {
  var sectionThreeCorrect = 1;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  if (questionSixteen.value == 84000) {
    questionSixteen.parentNode.classList.remove("wrong");
    questionSixteen.parentNode.classList.add("correct");
    questionSixteen.disabled = true;
  }
  else {
    questionSixteen.parentNode.classList.add("wrong");
    sectionThreeCorrect = 0;
  }
  if (questionSeventeen.value == 336000) {
    questionSeventeen.parentNode.classList.remove("wrong");
    questionSeventeen.parentNode.classList.add("correct");
    questionSeventeen.disabled = true;
  }
  else {
    questionSeventeen.parentNode.classList.add("wrong");
    sectionThreeCorrect = 0;
  }
  if (questionEighteen.value == 1764.15) {
    questionEighteen.parentNode.classList.remove("wrong");
    questionEighteen.parentNode.classList.add("correct");
    questionEighteen.disabled = true;
  }
  else {
    questionEighteen.parentNode.classList.add("wrong");
    sectionThreeCorrect = 0;
  }
  if (questionNineteen.value == 25) {
    questionNineteen.parentNode.classList.remove("wrong");
    questionNineteen.parentNode.classList.add("correct");
    questionNineteen.disabled = true;
  }
  else {
    questionNineteen.parentNode.classList.add("wrong");
    sectionThreeCorrect = 0;
  }
  if (questionTwenty.value == 23) {
    questionTwenty.parentNode.classList.remove("wrong");
    questionTwenty.parentNode.classList.add("correct");
    questionTwenty.disabled = true;
  }
  else {
    questionTwenty.parentNode.classList.add("wrong");
    sectionThreeCorrect = 0;
  }
  if (questionTwentyOne.value == 5) {
    questionTwentyOne.parentNode.classList.remove("wrong");
    questionTwentyOne.parentNode.classList.add("correct");
    questionTwentyOne.disabled = true;
  }
  else {
    questionTwentyOne.parentNode.classList.add("wrong");
    sectionThreeCorrect = 0;
  }
  if (questionTwentyTwo.value == 808) {
    questionTwentyTwo.parentNode.classList.remove("wrong");
    questionTwentyTwo.parentNode.classList.add("correct");
    questionTwentyTwo.disabled = true;
  }
  else {
    questionTwentyTwo.parentNode.classList.add("wrong");
    sectionThreeCorrect = 0;
  }
  if (sectionThreeCorrect == 0) {
    wrongAnswer();
  }
  else {
    ding.play()
    sectionThree.classList.add("invisible");
    sectionFour.classList.remove("invisible");
  }
}

sectionFourButton.onclick = checkSectionFour;
function checkSectionFour() {
  var sectionFourCorrect = 1;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  if (questionTwentyThree.value == 0.11) {
    questionTwentyThree.parentNode.classList.remove("wrong");
    questionTwentyThree.parentNode.classList.add("correct");
    questionTwentyThree.disabled = true;
  }
  else {
    questionTwentyThree.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionTwentyFour.value == 454545.45) {
    questionTwentyFour.parentNode.classList.remove("wrong");
    questionTwentyFour.parentNode.classList.add("correct");
    questionTwentyFour.disabled = true;
  }
  else {
    questionTwentyFour.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionTwentyFive.value.toLowerCase() == "no") {
    questionTwentyFive.parentNode.classList.remove("wrong");
    questionTwentyFive.parentNode.classList.add("correct");
    questionTwentyFive.disabled = true;
  }
  else {
    questionTwentyFive.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionTwentySix.value == 451543.80) {
    questionTwentySix.parentNode.classList.remove("wrong");
    questionTwentySix.parentNode.classList.add("correct");
    questionTwentySix.disabled = true;
  }
  else {
    questionTwentySix.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionTwentySeven.value == 5) {
    questionTwentySeven.parentNode.classList.remove("wrong");
    questionTwentySeven.parentNode.classList.add("correct");
    questionTwentySeven.disabled = true;
  }
  else {
    questionTwentySeven.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionTwentyEight.value == 27768) {
    questionTwentyEight.parentNode.classList.remove("wrong");
    questionTwentyEight.parentNode.classList.add("correct");
    questionTwentyEight.disabled = true;
  }
  else {
    questionTwentyEight.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionTwentyNine.value == 33409) {
    questionTwentyNine.parentNode.classList.remove("wrong");
    questionTwentyNine.parentNode.classList.add("correct");
    questionTwentyNine.disabled = true;
  }
  else {
    questionTwentyNine.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionThirty.value == 36238) {
    questionThirty.parentNode.classList.remove("wrong");
    questionThirty.parentNode.classList.add("correct");
    questionThirty.disabled = true;
  }
  else {
    questionThirty.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionThirtyOne.value == 35543) {
    questionThirtyOne.parentNode.classList.remove("wrong");
    questionThirtyOne.parentNode.classList.add("correct");
    questionThirtyOne.disabled = true;
  }
  else {
    questionThirtyOne.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionThirtyTwo.value == 168) {
    questionThirtyTwo.parentNode.classList.remove("wrong");
    questionThirtyTwo.parentNode.classList.add("correct");
    questionThirtyTwo.disabled = true;
  }
  else {
    questionThirtyTwo.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionThirtyThree.value == 8109.13) {
    questionThirtyThree.parentNode.classList.remove("wrong");
    questionThirtyThree.parentNode.classList.add("correct");
    questionThirtyThree.disabled = true;
  }
  else {
    questionThirtyThree.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (questionThirtyFour.value == 40.78) {
    questionThirtyFour.parentNode.classList.remove("wrong");
    questionThirtyFour.parentNode.classList.add("correct");
    questionThirtyFour.disabled = true;
  }
  else {
    questionThirtyFour.parentNode.classList.add("wrong");
    sectionFourCorrect = 0;
  }
  if (sectionFourCorrect == 0) {
    wrongAnswer();
  }
  else {
    ding.play();
    clap.play();
    lives.classList.add("invisible");
    sectionFour.classList.add("invisible");
    finish.classList.remove("invisible");
  }
}

retry.onclick = tryAgain;
function tryAgain() {
  window.location.href = "menu.html";
}

thisButton.onclick = changeBack;
function changeBack() {
  caramelldansen.play();
  if (body.classList.contains('purpleChange')) {
    body.classList.add('questionBack');
    body.classList.remove('purpleChange');
  }
  if (body.classList.contains('blueChange')) {
    body.classList.add('purpleChange');
    body.classList.remove('blueChange');
  }
  if (body.classList.contains('greenChange')) {
    body.classList.add('blueChange');
    body.classList.remove('greenChange');
  }
  if (body.classList.contains('yellowChange')) {
    body.classList.add('greenChange');
    body.classList.remove('yellowChange');
  }
  if (body.classList.contains('orangeChange')) {
    body.classList.add('yellowChange');
    body.classList.remove('orangeChange');
  }
  if (body.classList.contains('redChange')) {
    body.classList.add('orangeChange');
    body.classList.remove('redChange');
  }
  if (body.classList.contains('questionBack')) {
    body.classList.add('redChange');
    body.classList.remove('questionBack');
  }
}
