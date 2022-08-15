// Select elements
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

// On send, render the users message
send.addEventListener("click", () => renderUserMessage());

// If we use enter as our event to send a message, we should render usermessage
txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

// User message consists of this this input
// SetTimeout to give a lifelike function
const renderUserMessage = () => {
  const userInput = txtInput.value.toLowerCase(); // changes input to lowercase to ensure it can match the object
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

// Get the chatbot response based on userInput
const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

// Append the messages in the chat box area
const renderMessageEle = (txt, type) => {
    let className = "user-message";
    if (type !== "user") {
        className = "chatbot-message";
    }

    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBody.append(messageEle);
};

// This grabs the response based on the user input
const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Please try something else" // if input is undefined
    : responseObj[userInput];     // otherwise respond with response
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};