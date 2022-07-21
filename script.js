const questions = [
  {
    question: "1- Which organ belongs to the Digestive System:",
    options: ["Thymus", "Stomach", "Heart", "Trachea"],
    answer: 1,
  },
  {
    question: "2- Adults have fewer bones than babies do.",
    options: ["true", "false"],
    answer: 0,
  },
  {
    question: "3- Our human body has.........",
    options: ["206 bones", "210 bones", "306 bones", "706 bones"],
    answer: 0,
  },
  {
    question: "4- Your fingernails and hair keep growing after you die.",
    options: ["true", "false"],
    answer: 1,
  },
  {
    question: "5- One important function of bones is to produce.",
    options: ["tendons", "ligaments", "blood cells", "cartilage"],
    answer: 2,
  },
  {
    question:
      "6- Which of the following has become the first country to make all forms of public transport free?",
    options: ["Monaco", "Liechtenstein", "Luxembourg", "Andorra"],
    answer: 2,
  },
  {
    question:
      "7- Which of the following has become the first country to make all forms of public transport free?",
    options: ["Monaco", "India", "Japan", "Singapore"],
    answer: 3,
  },
  {
    question:
      "8- Which country is to host Commonwealth shooting, archery events in 2022?",
    options: ["Australia", "India", "Brunei", "Cameroon"],
    answer: 3,
  },
  {
    question:
      "9- 26 The International Criminal Police Organisation (INTERPOL) has its headquarters at",
    options: ["Montreal", "Bonn", "Paris", "London"],
    answer: 2,
  },
  {
    question:
      "10- 30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question: "11- Who was known as Iron man of India?",
    options: [
      "Govind Ballabh Pant",
      "awaharlal Nehru",
      "Subhash Chandra Bose",
      "Sardar Vallabhbhai Patel ",
    ],
    answer: 0,
  },
  {
    question:
      "12- 30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question:
      "13- 30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question:
      "14- 30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question:
      "15- 30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question:
      "16- 30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
];



function localStorage1(){
  const gettingLS= localStorage.getItem("counter-question")
  let con = JSON.parse(gettingLS)
  console.log({con})
  let after=con+1
  console.log({after})
  const level = document.querySelector('#level')
  console.log(level)
  level.textContent = after
  localStorage.setItem('counter-question',JSON.stringify(after))
}


function loadFunction(id) {
  const qContainer = document.getElementById("question");
  const question = questions[id];

  qContainer.textContent = question.question;
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

const counterQus = 0;
localStorage.setItem('counter-question',JSON.stringify(counterQus))

const nextButton = document.querySelector(".question-button");
nextButton.addEventListener("click", nextQuestion);
function nextQuestion() {
  const ulList = document.querySelector(".options");
  const uHeader = document.querySelector(".head-question");
  uHeader.textContent = "";
  ulList.textContent = "";
  localStorage1()
  if (arrNum.length === 10) {
    console.log("STOP");
    uHeader.textContent = "Congratulations";
    ulList.textContent = "You have successfully completed the quiz";
    console.log(arrNum);
  } else if (!arrNum.includes(questionNumber)) {
    arrNum.push(questionNumber);
    loadFunction(questionNumber);
  } else {
    // console.log('fsd')
    questionNumber = Math.floor(Math.random() * 16);
    nextQuestion();
    // localStorage1()
  }
}
