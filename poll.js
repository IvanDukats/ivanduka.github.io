function onHomeButtonClick() {
  var newHomePageLink = document.createElement('a');
  newHomePageLink.href = 'index.html';
  document.body.appendChild(newHomePageLink);
  newHomePageLink.click();
}

document.getElementById('homeButton').addEventListener('click', onHomeButtonClick);

// Функция для обработки нажатия на кнопку "Submit"
function onSubmitButtonClick() {
  const userInput = document.getElementById('userInput').value;
  const currentMessages = new URLSearchParams(window.location.search).get('messages') || '';
  const updatedMessages = currentMessages ? currentMessages + '|' + userInput : userInput;
  const newPageLink = document.createElement('a');
  newPageLink.href = 'newResult.html?messages=' + encodeURIComponent(updatedMessages);
  document.body.appendChild(newPageLink);
  newPageLink.click();
}

// Добавляем обработчик события для кнопки "Submit"
document.getElementById('submitButton').addEventListener('click', onSubmitButtonClick);

