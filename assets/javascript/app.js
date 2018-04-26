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
    number: 0,
    actual: "What year was Snapchat first released?? 😊",
    answers: [ 
        "2008",
        "2010",
        "2011",
        "2012"],
    correct: "C"
},  {
    number: 1,
    actual: "Advertising with a sponsored lense for one day will cost you:",
    answers: [ 
        "$10,000",
        "$50,000",
        "$100,000",
        "$400,000"],
    correct: "D"
},  {
    number: 2,
    actual: "What is question three?",
    answers: [ 
        "This is Answer A",
        "This is Answer B",
        "This is Answer C",
        "This is Answer D"],
    correct: "A"
},  {
    number: 3,
    actual: "As of early 2018, how many daily users are on Snapchat?",
    answers: [ 
        "10 million",
        "42 million",
        "187 million",
        "350 million"],
    correct: "C"
},  {
    number: 4,
    actual: "When was the Memories feature added to the app?",
    answers: [ 
        "July 2016",
        "September 2016",
        "October 2016",
        "January 2017"],
    correct: "A"
},  {
    number: 5,
    actual: "What do you see when you're someone else's Best Friend but they aren't one of yours?",
    answers: [ 
        "😊",
        "😬",
        "😳",
        "😏"],
    correct: "D"
}];


var quesNum = 0;
var quesTimer;
var intervalID;
var correct = 0;
var wrong = 0;
var unanswered = 0;
//var timeoutID;

function newGame() {
    quesNum = 0;
    correct = 0;
    wrong = 0;
    unanswered = 0;
    $("#quesNumBox").css("visibility", "visible");
    $(".answerBox").show();
    $("#quesActualBox").css({"font-size":"100%", "max-height":"90px", "display":"flex"});
    loadQuestion();
}
newGame();

function loadQuestion() {
    if (quesNum < 3) {
        $("#quesNumBox").html(quesNum + 1 + ".");
        $("#quesActualBox").html(questions[quesNum].actual);
        $("#A").html(questions[quesNum].answers[0]);
        $("#B").html(questions[quesNum].answers[1]);
        $("#C").html(questions[quesNum].answers[2]);
        $("#D").html(questions[quesNum].answers[3]);
        $(".answerBox").css("font-size", "150%");
        if (quesNum === 5) {
            $(".answerBox").css("font-size", "400%");
        }
        questionTimer();
        userResponse();
    } else {
        results();
    }
}


function userResponse() {
    $(".answerBox").off("click").on("click", function(event) {
        event.stopPropagation();
        console.log("answer box clicked");
        var chosenAnswer = $(this).attr("id");
        $(".answerBox").off("click")
        console.log(chosenAnswer);
        console.log(questions[quesNum].correct);
        if (chosenAnswer == questions[quesNum].correct) {
            console.log("correct");
            answeredCorrectly();

        } else {
            console.log("the price is wrong bitch");
            answeredWrong();

        }
    });
}

function questionTimer() {
    $("#timerBox").css("visibility", "visible");
    quesTimer = 5;
    time();
    function time() {
        if (quesTimer === 0) {
            outaTime();
        }
        $("#timerBox").text(quesTimer);
        $("#timerBox").css("font-size", "320%");
        quesTimer--;
    }
    intervalID = setInterval(time, 1000);
    //timeoutID = setTimeout(outaTime, 5000);
}

function answeredCorrectly() {
    //clearTimeout(timeoutID);
    clearInterval(intervalID);
    $("#quesActualBox").html("Correct!");
    $("#timerBox").css("visibility", "hidden");
    quesNum++;
    correct++;
    setTimeout(loadQuestion, 3000);
}

function answeredWrong() {
    //clearTimeout(timeoutID);
    clearInterval(intervalID);
    $("#quesActualBox").html("Incorrect! The answer was " + questions[quesNum].correct);
    $("#timerBox").css("visibility", "hidden");
    quesNum++;
    wrong++;
    setTimeout(loadQuestion, 3000);
}

function outaTime() {
    $("#quesActualBox").html("Out of time! The answer was " + questions[quesNum].correct);
    quesNum++;
    unanswered++;
    setTimeout(loadQuestion, 3000);
    clearInterval(intervalID);
}

function results() {
    $("#quesNumBox").css("visibility", "hidden");
    $("#timerBox").css("visibility", "hidden");
    $(".answerBox").hide();
    $("#quesActualBox").html("Quiz results: <br>Correct: " + correct + "<br>Incorrect: " + wrong + "<br>Unanswered: " + unanswered + "<br>");
    $("#quesActualBox").addClass("text-center");
    $("#quesActualBox").css({"font-size":"150%", "max-height":"500px", "display":"block"});
    var restartButton = $("<button>");
    restartButton.addClass("btn btn-lg btn-primary mt-4");
    //a.attr("type", "button");
    restartButton.text("Restart");
    $("#quesActualBox").append(restartButton);
    $(".btn-primary").click(newGame);
}

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