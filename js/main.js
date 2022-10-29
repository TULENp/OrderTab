const userSurname = document.querySelector('[name="surname"]');
const userName = document.querySelector('[name="name"]');
const items = document.querySelectorAll('.item');

const button = document.querySelector(".btn");
const res = document.querySelector(".sum");

//adding event to checkboxes
for (let item of items) {
    item.querySelector('[type="checkbox"]').addEventListener('change', totalCount);
    item.querySelector('[type="number"]').addEventListener('change', totalCount)
}

function totalCount() {
    let checkboxEl = "";
    let number = 0;
    let sum = 0;
    for (let item of items) {
        checkboxEl = item.querySelector('[type="checkbox"]');
        number = item.querySelector('[type="number"]');
        if (checkboxEl.checked && number.value <= 0) {
            number.value = 1;
        }
        else if (!checkboxEl.checked) {
            number.value = 0;
        }
        sum += checkboxEl.value * number.value;
    }
    total = sum;
    res.textContent = sum + " р.";
}

button.addEventListener("click", function () {
    if (userName.value != "" && userSurname.value != "") {
        alert(`Заказчик: ${userSurname.value} ${userName.value} \nИтого: ${total} р.`);
    }
    else {
        alert('Введите фамилию и имя');
    }
});

