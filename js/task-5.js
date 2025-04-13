// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль по кліку
// на button.change - color і задає це значення кольору текстовим вмістом для span.color.

// На що буде звертати увагу ментор при перевірці:

// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
// На < body > і span.color значення одного й того самого кольору

const buttonColor = document.querySelector('.change-color');
const spanShowColor = document.querySelector('.color');
const bodyShowColor = document.querySelector('body');
buttonColor.addEventListener('click', event => {
  const color = getRandomHexColor();
  bodyShowColor.style.backgroundColor = color;
  spanShowColor.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
