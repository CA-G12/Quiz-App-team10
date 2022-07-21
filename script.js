const questions = [
  {
    question: "Which organ belongs to the Digestive System:",
    options: ["Thymus", "Stomach", "Heart", "Trachea"],
    answer: 1,
  },
  {
    question: "Adults have fewer bones than babies do.",
    options: ["true", "false"],
    answer: 0,
  },
  {
    question: "Our human body has.........",
    options: ["206 bones", "210 bones", "306 bones", "706 bones"],
    answer: 0,
  },
  {
    question: "Your fingernails and hair keep growing after you die.",
    options: ["true", "false"],
    answer: 1,
  },
  {
    question: "One important function of bones is to produce.",
    options: ["tendons", "ligaments", "blood cells", "cartilage"],
    answer: 2,
  },
  {
    question:
      "Which of the following has become the first country to make all forms of public transport free?",
    options: ["Monaco", "Liechtenstein", "Luxembourg", "Andorra"],
    answer: 2,
  },
  {
    question:
      "Which of the following has become the first country to make all forms of public transport free?",
    options: ["Monaco", "India", "Japan", "Singapore"],
    answer: 3,
  },
  {
    question:
      "Which country is to host Commonwealth shooting, archery events in 2022?",
    options: ["Australia", "India", "Brunei", "Cameroon"],
    answer: 3,
  },
  {
    question:
      "26 The International Criminal Police Organisation (INTERPOL) has its headquarters at",
    options: ["Montreal", "Bonn", "Paris", "London"],
    answer: 2,
  },
  {
    question:
      "30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question: "Who was known as Iron man of India?",
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
      "30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question:
      "30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question:
      "30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question:
      "30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
  {
    question:
      "30 Where is the headquarters of Botanical Survey of India located?",
    options: ["Kolkata", "Lucknow", "Ootacmund", "Darjeeling"],
    answer: 0,
  },
];

function loadFunction() {
  console.log("HERE");
  const qContainer = document.getElementById("question");
  const question = questions[Math.floor(Math.random() * 10)];
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

loadFunction();
