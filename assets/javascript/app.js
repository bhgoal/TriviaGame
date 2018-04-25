//Containers- Question number
//            Question
//            Timer
//            Four answer choices
//
//Object quiz questions
//    Questions
//        Answers
//            Correct = "B"

//Intro screen, click to continue

//Question number 1
//Math.random for selecting a question
//Load choices into containers
//Begin countdown timer

//User clicks a choice
//show Correct answer
//if userAnswer = correctAnswer,
//"Yay", answeredRight++

//if userAnswer != correctAnswer,
//"Boo", answeredWrong++

//if timer = 0,
//"Out of time", outoftime++

//After short delay, repeat question selection and display loading function

//After all questions asked,
//display stats
  
var questions = [{
    actual: "What is question one?",
    answers: [ 
        "This is Answer A",
        "This is Answer B",
        "This is Answer C",
        "This is Answer D"],
    correct: 1
},  {
    actual: "What is question two?",
    answers: [ 
        "This is Answer A",
        "This is Answer B",
        "This is Answer C",
        "This is Answer D"],
    correct: 2
},  {
    actual: "What is question three?",
    answers: [ 
        "This is Answer A",
        "This is Answer B",
        "This is Answer C",
        "This is Answer D"],
    correct: 0
},  {
    actual: "What is question four?",
    answers: [ 
        "This is Answer A",
        "This is Answer B",
        "This is Answer C",
        "This is Answer D"],
    correct: 4
}];


var quesNum = 0;

function loadQuestion() {
    $("#quesNumBox").html(quesNum + 1);
    $("#quesActualBox").html(questions[quesNum].actual);
    for (i = 0; i < 4; i++) {
        $(`#answerBox${i}`).html(questions[quesNum].answers[i]);
    }
    userResponse();
}
loadQuestion();

function randomQuesAnsw() {
    $("#quesNumBox").html(quesNum);
    var randQues = Math.floor(Math.random() * 4);
    $("#quesActualBox").html(questions[randQues].actual);
    for (i = 0; i < 4; i++) {
        var randAnsw = Math.floor(Math.random() * questions[randQues].answers.length);
        // Needs exclusion of already selected questions
        $(`#answerBox${i}`).html(questions[randQues].answers[randAnsw]);
        questions[randQues].answers.splice($.inArray(randAnsw, questions[randQues].answers),1);
        console.log(questions[randQues].answers);
        // Problem: already selected answers still coming up again
    }
}

function userResponse() {
    $(".answerBox").on("click", function(event) {
        event.stopPropagation();
        console.log("answer box clicked");
        var chosenAnswer = $(this).attr("id");
        console.log(chosenAnswer);
        console.log(questions[quesNum].correct);
        if (chosenAnswer == questions[quesNum].correct) {
            console.log("correct");
        } else {
            console.log("the price is wrong bitch");
        }
    });
}
