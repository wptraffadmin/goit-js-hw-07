function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо обробник події на кнопку
button.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); // Генеруємо випадковий колір
  document.body.style.backgroundColor = randomColor; // Задаємо колір фону
  colorSpan.textContent = randomColor; // Встановлюємо колір в span
});
