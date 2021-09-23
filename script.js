// Initial Data
let currentQuestion = 0;
let correctAnswers= 0;

showQuestions();

//Functions
function showQuestions() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        document.querySelector('.scoreArea').style.display= 'none';
        document.querySelector('.questionArea').style.display= 'block';

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });

    }else {
        // finish questions
    }
}

function optionClickEvent(e) {
    let clickdOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickdOption) {
        correctAnswers++;
    }
    
    currentQuestion++;
    showQuestions();
}