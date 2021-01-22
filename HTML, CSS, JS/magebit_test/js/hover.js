"use strict"

document.addEventListener('DOMContentLoaded', function () {
const submit = document.querySelector('.submit-btn');
const block = document.querySelector('.email');


submit.onmouseover = () => {
    block.classList.add('active');
};
submit.onmouseout = () => {
    block.classList.remove('active');
};
});
