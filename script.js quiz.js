const quizData = [
    {
    question: "Which HTML tag is used to create a hyperlink?",
    a: "<link>",
    b: "<a>",
    c: "<href>",
    d: "<hyper>",
    correct: "b",
},
{
    question: "Which CSS property is used to make text bold?",
    a: "font-weight",
    b: "bold",
    c: "text-bold",
    d: "weight",
    correct: "a",
},
{
    question: "Which JavaScript keyword is used to define a function?",
    a: "func",
    b: "method",
    c: "function",
    d: "define",
    correct: "c",
},
{
    question: "Which HTML element is used for inserting a line break?",
    a: "<break>",
    b: "<br>",
    c: "<lb>",
    d: "<line>",
    correct: "b",
},
{
    question: "Which CSS property is used to center text?",
    a: "align-text",
    b: "text-center",
    c: "text-align",
    d: "center",
    correct: "c",
},
{
    question: "Which operator is used to assign a value in JavaScript?",
    a: "-",
    b: "x",
    c: "=",
    d: "==",
    correct: "c",
},
{
    question: "Which HTML element is used to display images?",
    a: "<img>",
    b: "<image>",
    c: "<pic>",
    d: "<src>",
    correct: "a",
},
{
    question: "Which CSS property controls the space inside an element?",
    a: "margin",
    b: "padding",
    c: "spacing",
    d: "gap",
    correct: "b",
},
{
    question: "Which method is used to print something in the browser console?",
    a: "console.print()",
    b: "log.console()",
    c: "console.log()",
    d: "print()",
    correct: "c",
},
{
    question: "Which HTML tag is used to create a table row?",
    a: "<tr>",
    b: "<td>",
    c: "<table>",
    d: "<row>",
    correct: "a",
},
{
    question: "Which CSS property controls the border?",
    a: "border-style",
    b: "border",
    c: "outline",
    d: "border-width",
    correct: "b",
},
{
    question: "Which JavaScript method is used to join array elements?",
    a: "concat()",
    b: "join()",
    c: "combine()",
    d: "merge()",
    correct: "b",
},
{
    question: "Which HTML tag is used to make text italic?",
    a: "<i>",
    b: "<italics>",
    c: "<italic>",
    d: "<em>",
    correct: "a",
},
{
    question: "Which CSS property is used to hide an element?",
    a: "display: none",
    b: "visibility: hide",
    c: "hide: true",
    d: "opacity: 0",
    correct: "a",
},
{
    question: "Which JavaScript symbol is used for strict equality?",
    a: "=",
    b: "==",
    c: "===",
    d: "!==",
    correct: "c",
},
{
    question: "Which HTML tag is used to show a numbered list?",
    a: "<ol>",
    b: "<ul>",
    c: "<li>",
    d: "<num>",
    correct: "a",
},
{
    question: "Which CSS unit is relative to the root font size?",
    a: "px",
    b: "rem",
    c: "%",
    d: "em",
    correct: "b",
},
{
    question: "Which JavaScript function converts a string to an integer?",
    a: "Number()",
    b: "toInt()",
    c: "parseInt()",
    d: "int()",
    correct: "c",
},
{
    question: "Which HTML attribute is used to provide alternative text for an image?",
    a: "src",
    b: "title",
    c: "alt",
    d: "text",
    correct: "c",
},
{
    question: "Which CSS property is used to make corners rounded?",
    a: "border-curve",
    b: "radius",
    c: "border-radius",
    d: "corner-round",
    correct: "c",
},

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})