let nameinput = document.getElementById('nameinput');
let pasinput = document.getElementById('pasinput');
let captcha = document.getElementById('captcha');
let fillinput = document.getElementById('fillinput');
let submitBtn = document.getElementById('submit');
let reloadBtn = document.getElementById('captchaBtn');

let ran = "";

function generateCaptcha() {
    ran = Math.floor(Math.random() * 100000000).toString(16).toUpperCase();
    captcha.innerText = ran;
}

reloadBtn.addEventListener('click', generateCaptcha);

submitBtn.addEventListener("click", function () {
    let filVal = fillinput.value.trim();

    if (filVal === ran && ran !== "") {
        nameinput.value = "";
        pasinput.value = "";
        fillinput.value = "";
        generateCaptcha();
        alert("Submitted");
    } else {
        alert("Captcha does not match");
    }
});

generateCaptcha();