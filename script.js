window.alert(`Welcome to Jeremiah's website!`);

window.addEventListener('DOMContentLoaded', function () {
    const greetingMessage = document.getElementById('greeting-message');
    if (!greetingMessage) return;

    const now = new Date();
    const hour = now.getHours();
    let greetingText = 'Hello and welcome to Riverstone Hotel & Resort!';

    if (hour >= 5 && hour < 12) {
        greetingText = 'Good morning! Welcome to Riverstone Hotel & Resort.';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Good afternoon! Welcome to Riverstone Hotel & Resort.';
    } else {
        greetingText = 'Good evening! Welcome to Riverstone Hotel & Resort.';
    }

    greetingMessage.textContent = greetingText;
});

//let element =
//document.querySelector(".heading");
//element.style.color = "red";//
