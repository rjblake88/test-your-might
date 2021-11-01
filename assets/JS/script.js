//button elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");

//if start button is clicked

start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo");
}

//if exit button is clicked

exit_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo");
}

//if continue button is clicked

continue_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}

let questions_count = 0;

//accessing question array

function showQuestions(index) {
    const questions_list = document.querySelector(".questions_list");
    const answer_list = document.querySelector(".answer_list");
    let question_tag = '<span>' + questions[index].question +'</span>'
    let answer_tag = '<div class="answer">' + questions[index].options[0] +'<span></span></div>'
                    + '<div class="answer"><span></span></div>'
                    + '<div class="answer"><span></span></div>'
                    + '<div class="answer"><span></span></div>' ;
    questions_list.innerHTML = question_tag;
    answer_list.innerHTML = answer_tag;
}

