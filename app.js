var questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
];

let time = document.getElementById('time');
let htmlQues = document.getElementById('question');
let htmlOpt1 = document.getElementById('optionOne');
let htmlOpt2 = document.getElementById('optionTwo');
let htmlOpt3 = document.getElementById('optionThree');
let htmlInput1 = document.getElementById('inputOne');
let htmlInput2 = document.getElementById('inputTwo');
let htmlInput3 = document.getElementById('inputThree');
let btn = document.getElementById('btnNext');
let input = document.getElementsByTagName('input');
let index = 0;
let score = 0;


let duration = moment.duration(3, 'minutes');
let interval = setInterval(() => {
    
    duration.subtract(1, 'second');
    let formatted = moment.utc(duration.asMilliseconds()).format('mm:ss');
    time.innerHTML = `Time: ${formatted}`

    if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        
        Swal.fire({
            title: "Time Over!",
            text: `score:${score}/${questions.length}`,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Reset"
          }).then((result) => {
           location.reload();
          });
    }
}, 1000);


const loadQuestion = () => {
    if (index > questions.length - 1) {
        Swal.fire({
            title: "Quiz End!",
            text: `score:${score}/${questions.length}`,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Reset"
          }).then((result) => {
           location.reload();
          });
        
    }else{
        htmlQues.innerText = questions[index].question;
        htmlOpt1.innerText = questions[index].option1;
        htmlOpt2.innerText = questions[index].option2;
        htmlOpt3.innerText = questions[index].option3;
        htmlInput1.value = questions[index].option1;
        htmlInput2.value = questions[index].option2;
        htmlInput3.value = questions[index].option3;
    }

    for (let i = 0; i < input.length; i++) {
        input[i].checked = false;
    }

    btn.disabled = true;
};

const next = () => {
    let selectedAns = null;

    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            selectedAns = input[i];
            break;
        }
    }

    if (selectedAns.value === questions[index].correctOption) {
        score++;
    }
    console.log(score)
    
    
    index++;
    loadQuestion();
};

const btnDisabled = () => {
    btn.disabled = false;
};

loadQuestion();

