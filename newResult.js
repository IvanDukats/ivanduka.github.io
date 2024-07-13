function onHomeButtonClick() {
    var newHomePageLink = document.createElement('a');
    newHomePageLink.href = 'index.html';
    document.body.appendChild(newHomePageLink);
    newHomePageLink.click();
  }
  
  document.getElementById('homeButton').addEventListener('click', onHomeButtonClick);


// Функция для извлечения параметров из URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split('&');
    
    queryArray.forEach(query => {
      const pair = query.split('=');
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
  
    return params;
  }
  
  // Получаем все сообщения из параметров URL
  const queryParams = getQueryParams();
  const messages = queryParams['messages'] ? queryParams['messages'].split('|') : [];
  
  // Отображаем все сообщения на странице
  const messagesContainer = document.getElementById('messagesContainer');
  messages.forEach(message => {
    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;
    messagesContainer.appendChild(messageParagraph);
  });
  
  // Функция для обработки нажатия на кнопку "Submit"
  function onSubmitButtonClick() {
    const userInput = document.getElementById('userInput').value;
    const updatedMessages = messages.concat(userInput).join('|');
    const newPageLink = document.createElement('a');
    newPageLink.href = 'newResult.html?messages=' + encodeURIComponent(updatedMessages);
    document.body.appendChild(newPageLink);
    newPageLink.click();
  }
  
  // Добавляем обработчик события для кнопки "Submit"
  document.getElementById('submitButton').addEventListener('click', onSubmitButtonClick);  