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
    actual: "The most used social media site among 13-24 year olds is:",
    answers: [ 
        "Facebook",
        "Snapchat",
        "Twitter",
        "Instagram"],
    correct: "B"
},  {
    number: 2,
    actual: "Advertising with a sponsored lense for one day will cost you:",
    answers: [ 
        "$10,000",
        "$50,000",
        "$100,000",
        "$400,000"],
    correct: "D"
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
},  {
    number: 6,
    actual: "Active Snapchat users open the app how many times each day?",
    answers: [ 
        "5",
        "12",
        "18",
        "32"],
    correct: "C"
},  {
    number: 7,
    actual: "What percent of Snapchat users are female?",
    answers: [ 
        "40%",
        "50%",
        "60%",
        "70%"],
    correct: "D"
},  {
    number: 8,
    actual: "After Kylie Jenner tweeted her disappointment of an app redesign, Snapchat suffered a market value loss of:",
    answers: [ 
        "$200 million",
        "$500 million",
        "$1.3 billion",
        "$2.4 billion"],
    correct: "C"
},  {
    number: 9,
    actual: "What is your favorite color?",
    answers: [ 
        "Blue",
        "Snapchat",
        "Navy Blue",
        "Blue. No, yellow!"],
    correct: "C"
}];

var colorSources = [{
    number: 0,
    answerHeader: "#00bcff",
    bgColor: "#b0fff1",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%2300d9a9' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 1,
    answerHeader: "#ff0087",
    bgColor: "#856cae",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 2,
    answerHeader: "#00e7ff",
    bgColor: "#98d6ff",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%236453ab' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 3,
    answerHeader: "#0043ff",
    bgColor: "#ff98af",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%237f53ab' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 4,
    answerHeader: "#ff9900",
    bgColor: "#a3ffae",
    bgImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239ba2ac' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 5,
    answerHeader: "#00bcff",
    bgColor: "#b0fff1",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%2300d9a9' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 6,
    answerHeader: "#ff0087",
    bgColor: "#856cae",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 7,
    answerHeader: "#00e7ff",
    bgColor: "#98d6ff",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%236453ab' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 8,
    answerHeader: "#0043ff",
    bgColor: "#ff98af",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%237f53ab' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: 9,
    answerHeader: "#ff9900",
    bgColor: "#a3ffae",
    bgImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239ba2ac' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
},  {
    number: "results",
    bgColor: "#ffc66b",
    bgImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%239ba2ac' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")"
}];


var quesNum = 0;
var quesTimer;
var intervalID;
var correct = 0;
var wrong = 0;
var unanswered = 0;
//var timeoutID;

function introScreen() {
    $("body").css("background-color", "#fffa54");
    $("#quesNumBox").css("visibility", "hidden");
    $("#timerBox").css("visibility", "hidden");
    $(".answerBox").hide();
    $("#quesActualBox").html("<img src='assets/images/snaplogo.png'>");
    $("#quesActualBox").addClass("text-center");
    $("#quesActualBox").css({"max-height":"500px", "display":"block", "margin-top":"4em", "padding":"0", "background-color": "#fffa54"});
    $("#quesActualBox").append("<br><br><h1 style='font-size: 220%;'>Snapchat Trivia Quiz!<h1><h4>Tap to begin!</h4>");
    $(".container").off("click").on("click", function(event) {
        event.stopPropagation();
        console.log("intro screen clicked");
        newGame();
        $(".container").off("click")
    });
}
introScreen();

function newGame() {
    quesNum = 0;
    correct = 0;
    wrong = 0;
    unanswered = 0;
    $("#quesNumBox").css("visibility", "visible");
    $(".answerBox").show();
    $("#quesActualBox").css({"font-size":"100%", "max-height":"90px", "display":"flex", "margin-top":".2em", "padding":"1.6em", "background-color": "#ffffff"});
    loadQuestion();
}

function colorMe() {
    $("body").css("background-color", colorSources[quesNum].bgColor);
    $("body").css("background-image", colorSources[quesNum].bgImage);
    $(".card-header").css("background-color", colorSources[quesNum].answerHeader);
}

function loadQuestion() {
    colorMe();
    if (quesNum < 10) {
        $("#quesNumBox").html(quesNum + 1 + ".");
        $("#quesActualBox").html(questions[quesNum].actual);
        $("#answerA").html(questions[quesNum].answers[0]);
        $("#answerB").html(questions[quesNum].answers[1]);
        $("#answerC").html(questions[quesNum].answers[2]);
        $("#answerD").html(questions[quesNum].answers[3]);
        $(".card-body").css("font-size", "150%");
        if (quesNum === 5) {
            $(".card-body").css("font-size", "400%");
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
        $(".answerBox").off("click");
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
    quesTimer = 10;
    time();
    function time() {
        if (quesTimer === 0) {
            outaTime();
        }
        $("#timerBox").text(quesTimer);
        $("#timerBox").css("font-size", "270%");
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
    $("#quesActualBox").html("Incorrect! The answer was " + questions[quesNum].correct + ".");
    $("#timerBox").css("visibility", "hidden");
    quesNum++;
    wrong++;
    setTimeout(loadQuestion, 3000);
}

function outaTime() {
    $(".answerBox").off("click");
    $("#quesActualBox").html("Out of time! The answer was " + questions[quesNum].correct + ".");
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
    $(".btn-primary").click(introScreen);
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