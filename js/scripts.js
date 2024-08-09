function writeCurrentAge() {
    let ageParagraph = document.querySelector('p[data-birthday]');

    let birthdate = ageParagraph.getAttribute('data-birthday');

    let birthdateObj = new Date(birthdate);

    let today = new Date();

    let age = today.getFullYear() - birthdateObj.getFullYear();

    let currentMonth = today.getMonth();
    let currentDay = today.getDate();
    let birthMonth = birthdateObj.getMonth();
    let birthDay = birthdateObj.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    ageParagraph.innerText = age;
}

document.addEventListener('DOMContentLoaded', function () {
    writeCurrentAge();
});