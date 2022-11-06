var questions = [
    {
        title: "Which built-in method returns the length of the string?",
        choices: ["Length()", "Size()", "Index()", "None of the Above"],
        answer: "Length()"
    },
    {
        title: "Which of the following function of Number object returns a string value version of the current number?",
        choices: ["toString()", "toFixed()", "toLocalString" , "toPrecision"],
        answer: "toString()"
    },
    {
        title: "A useful tool offered by Google Chrome is known as what?",
        choices: ["GoogleDev", "Chrome Dev Tools", "iDevelop", "ProDevelop"],
        answer: "Chrome Dev Tools"
    },
    {
        title: "How do you declare a JavaScript variable x?",
        choices: ["Define x", "def x", "var x", "variable x"],
        answer: "var x"
    },
    {
        title: "When we don’t assign a value to a variable it will be?",
        choices: ["none", "NaN", "null", "undefined"],
        answer: "undefined"
    },

    {
        title: "To add an element to the end of an array you use:",
        choices: ["pop()", "push()", "addTo()", "add()"],
        answer: "push()"
    }
];

var begin = document.querySelector("#startTime");
var qBox = document.querySelector("#qBox");
var firstQuestion = 0;
var currentQuestion = 0;
var currentTime = document.querySelector("#currentTime");
var scores = 0;
var ulCreate = document.createElement("ul");


begin.addEventListener("click", function () {
    if (firstQuestion = 0) {
        firstQuestion = setInterval(function () {
        });
}
    createQuestion (currentQuestion);
})


function createQuestion (currentQuestion) {
    ulCreate.innerHTML = "";
   
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[currentQuestion].title;
        var userChoices = questions[currentQuestion].choices;
        qBox.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        qBox.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (determine));
    })
}

function determine(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
       
        if (element.textContent == questions[currentQuestion].answer) {
            scores++;
            createDiv.textContent = "Correct!";
        }
         else {
            createDiv.textContent = "Incorrect";
        }
    }
    
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        createDiv.textContent = "End of quiz!" + " " + "You got  " + scores + "/" + questions.length + " Correct!";
    } 
    
    else {
        createQuestion(currentQuestion);
    }
}

//Add initials input and score box.