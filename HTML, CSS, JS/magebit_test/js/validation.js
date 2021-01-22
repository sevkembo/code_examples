const form = document.querySelector('.main__form-form');
const submit = document.querySelector('.submit-btn');
const email = document.querySelector('.email');
const checkbox = document.querySelector('.checkbox');
const errorBlock = document.querySelector('.error');
const container = document.querySelector('.container');
const errorCheckbox = document.querySelector('.error-check');
const RegExpColumbia = /.co$/;
const RegExpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const title = document.querySelector('.main__title');
const subTitle = document.querySelector('.main__subtitle');
const mainImage = document.querySelector('.main__img');



const validateEmailElement = () => {
        if (email.value === "") {
            errorBlock.style.opacity = "1";
            errorBlock.style.transform = "translateY(0)";
            errorBlock.style.visibility = "visible";
            errorBlock.innerHTML = "Email address is required";
            email.style.border = "2px solid red";
            email.style.boxShadow = "0px 0px 15px red";
        } 
        else if (email.value.match(RegExpColumbia)) {
            email.style.border = "2px solid red";
            email.style.boxShadow = "0px 0px 15px red";
            errorBlock.style.opacity = "1";
            errorBlock.style.transform = "translateY(0)";
            errorBlock.style.visibility = "visible";
            errorBlock.innerHTML = "We are not accepting subscriptions from Colombia emails";
        }
        else if (!email.value.match(RegExpEmail)) {
            email.style.border = "2px solid red";
            email.style.boxShadow = "0px 0px 15px red";
            errorBlock.style.opacity = "1";
            errorBlock.style.transform = "translateY(0)";
            errorBlock.style.visibility = "visible";
            errorBlock.innerHTML = "Please provide a valid e-mail address";
        }
        else {
            errorBlock.innerHTML = "";
            errorBlock.style.visibility = "hidden";
            email.style.border = "2px solid green";
            email.style.boxShadow = "0px 0px 15px green";
        }
    };
email.addEventListener('blur', () => {
    validateEmailElement();
});
checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        errorCheckbox.innerHTML = "";
        errorCheckbox.style.visibility = "hidden";
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value === "") {
        errorBlock.style.opacity = "1";
        errorBlock.style.transform = "translateY(0)";
        errorBlock.style.visibility = "visible";
        errorBlock.innerHTML = "Email address is required";
        email.style.border = "2px solid red";
        email.style.boxShadow = "0px 0px 15px red";
    } 
    else if (email.value.match(RegExp)) {
        email.style.border = "2px solid red";
        email.style.boxShadow = "0px 0px 15px red";
        errorBlock.style.opacity = "1";
        errorBlock.style.transform = "translateY(0)";
        errorBlock.style.visibility = "visible";
        errorBlock.innerHTML = "We are not accepting subscriptions from Colombia emails";
    }
    else if (!email.value.match(RegExpEmail)) {
        email.style.border = "2px solid red";
        email.style.boxShadow = "0px 0px 15px red";
        errorBlock.style.opacity = "1";
        errorBlock.style.transform = "translateY(0)";
        errorBlock.style.visibility = "visible";
        errorBlock.innerHTML = "Please provide a valid e-mail address";
    }
    else if (!checkbox.checked) {
        errorCheckbox.style.opacity = "1";
        errorCheckbox.style.transform = "translateY(0)";
        errorCheckbox.style.visibility = "visible";
        errorCheckbox.innerHTML = "You must accept the terms and conditions";
        return false;
    }
    else {
        errorCheckbox.remove();
        errorBlock.remove();
        mainImage.style.display = "block";
        title.innerHTML = "<h1>Thanks for subscribing!</h1>";
        subTitle.innerHTML = "You have successfully subscribed to our email listing. Check your email for the discount code.";
        document.querySelector('.notbig').remove();
        document.querySelector('.big').style.margin = "0";
        document.querySelector('.big').innerHTML = "";
        document.querySelector('.main').style.marginTop = "129px";
    }
});