const questions = [
  {
    question: "'.mov' extension refers usually to what kind of file?",
    options: [
      "Image file",
      "Animation/movie file",
      "Audio file",
      "MS Office document",
    ],
    answer: "Animation/movie file",
  },
  {
    question: "'OS' computer abbreviation usually means ?",
    options: [
      "Order of Significance",
      "Open Software",
      "Operating System",
      "Optical Sensor",
    ],
    answer: "Operating System",
  },
  {
    question: "Our human body has.........",
    options: ["206 bones", "210 bones", "306 bones", "706 bones"],
    answer: "206 bones",
  },
  {
    question:
      "	What is part of a database that holds only one type of information?",
    options: ["Report", "Field", "Record", "File"],
    answer: "Field",
  },
  {
    question: "One important function of bones is to produce.",
    options: ["tendons", "ligaments", "blood cells", "cartilage"],
    answer: "blood cells",
  },
  {
    question: "'.MPG' extension refers usually to what kind of file?",
    options: [
      "WordPerfect Document file",
      "MS Office document",
      "Animation/movie file",
      "Image file",
    ],
    answer: "Animation/movie file",
  },
  {
    question:
      "Which of the following has become the first country to make all forms of public transport free?",
    options: ["Monaco", "India", "Japan", "Singapore"],
    answer: "Singapore",
  },
  {
    question:
      "Which country is to host Commonwealth shooting, archery events in 2022?",
    options: ["Australia", "India", "Brunei", "Cameroon"],
    answer: "Cameroon",
  },
  {
    question: "Which of the following is not javascript data types?",
    options: [
      "Null type",
      "Undefined type",
      "Number type",
      "All of the mentioned",
    ],
    answer: "All of the mentioned",
  },
  {
    question: "Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: "Kolkata",
  },
  {
    question:
      "Which of the object is the main entry point to all client-side JavaScript features and APIs?",
    options: ["Position", "Window", "Standard", "Location"],
    answer: "Window",
  },
  {
    question:
      "Which of the following can be used to call a JavaScript Code Snippet?",
    options: ["Function/Method", "Preprocessor", "Triggering Event", " RMI"],
    answer: "Function/Method",
  },
  {
    question: "Which of the following scoping type does JavaScript use?",
    options: ["Sequential", "Segmental", "Lexical", "Literal"],
    answer: "Lexical",
  },
  {
    question: "Which of the following is not a framework?",
    options: ["JavaScript .NET", "JavaScript", "Cocoa JS", "jQuery"],
    answer: "JavaScript",
  },
  {
    question:
      "Which of the following is the property that is triggered in response to JS errors?",
    options: ["onclick", "onerror", "onmessage", " onexception"],
    answer: "onerror",
  },
  {
    question: "Which of the following is not an error in JavaScript?",
    options: [
      "Missing of Bracket",
      "Division by zero",
      " Syntax error",
      "Missing of semicolons",
    ],
    answer: "Division by zero",
  },
];

// let counter = 0;
let score = 0;

function loadFunction(id) {
  const qContainer = document.getElementById("question");
  const question = questions[id];

  qContainer.textContent = question.question;
  // const count = document.querySelector("#level");
  // count.textContent = ++counter;
  const ulList = document.querySelector(".options");
  question.options.map((ele, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const nameAttri = document.createAttribute("name");
    nameAttri.value = "answer";
    const typeAttri = document.createAttribute("type");
    typeAttri.value = "radio";
    input.setAttributeNode(nameAttri);
    input.setAttributeNode(typeAttri);
    const label = document.createElement("label");
    li.appendChild(input);
    li.appendChild(label);
    const id = document.createAttribute("id");
    id.value = index;
    const forAtt = document.createAttribute("for");
    forAtt.value = index;
    input.setAttributeNode(id);
    label.setAttributeNode(forAtt);
    label.textContent = ele;
    ulList.appendChild(li);
  });
}

let questionNumber = Math.floor(Math.random() * 16);
let arrNum = [];
arrNum.push(questionNumber);
loadFunction(questionNumber);

const counterId = document.querySelector("#counter");
const nextButton = document.querySelector(".question-button");
nextButton.addEventListener("click", nextQuestion);
function nextQuestion() {
  const ulList = document.querySelector(".options");
  const uHeader = document.querySelector(".head-question");
  uHeader.textContent = "";
  ulList.textContent = "";

  if (counter == 9) {
    nextButton.textContent = "submit";
  }
  if (arrNum.length === 10) {
    console.log("STOP");
    // let finalScore = localStorage.getItem("score");
    uHeader.textContent = `your score is ${score}`;
    nextButton.remove();
    counterId.remove();
  } else if (!arrNum.includes(questionNumber)) {
    arrNum.push(questionNumber);
    loadFunction(questionNumber);
  } else {
    questionNumber = Math.floor(Math.random() * 16);
    nextQuestion();
  }
}



const input = document.querySelectorAll(`[name="answer"]`);
const ulList = document.querySelector(".options");
ulList.addEventListener("click", (e) => {
  console.log(e.path[0].textContent);
  console.log(e);
  if (e.path[0].textContent === questions[questionNumber].answer) {
    score++;
    localStorage.setItem("score", JSON.stringify(score));
    console.log(score);
  }
});