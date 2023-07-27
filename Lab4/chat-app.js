let chatHistory = [];

// if chat history exists in local storage
if(localStorage.getItem("chatHistory") !== null) {
    // retrieve the data
    const encodedData = localStorage.getItem("chatHistory");
    
    // decode the data into an array
    const savedMessages = JSON.parse(decodeURIComponent(encodedData));
    chatHistory = savedMessages;
    // this is a for each loop (in the functional paradigm) 
    savedMessages.forEach(message => {
        if (message.type === "message-self") {
            // create messages where message.message is the content
            let newElement = document.createElement('p');
            newElement.textContent = message.message;

            let divElement = document.createElement('div');
            divElement.setAttribute('class', 'message-self');

            divElement.append(newElement);
            let main = document.querySelector("main")
            main.append(divElement);

        } else if (message.type == "message-other") {
            // create messages where message.message is the content
            let newElement = document.createElement('p');
            newElement.textContent = message.message;

            let divElement = document.createElement('div');
            divElement.setAttribute('class', 'message-other');

            divElement.append(newElement);
            let main = document.querySelector("main")
            main.append(divElement);
            
        }
    });
}

console.log('JavaScript works!');

function myEventHandler(eventData) {
    // Keep this! Otherwise the <form> will reload the page
    eventData.preventDefault();
    console.log('event happened!');
    console.log(eventData);

    let inputRef = document.querySelector("#message-text");

    let newElement = document.createElement('p');
    let messageContent = inputRef.value;
    newElement.textContent = messageContent;

    let timestamp = document.createElement('p');
    timestamp.setAttribute('class', 'timestamp');
    d = new Date();
    timestamp.textContent =  d.toString();

    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'message-self');

    divElement.append(newElement);
    divElement.append(timestamp);

    let main = document.querySelector("main")
    main.append(divElement);
    
    const type = "message-self";
    const message = messageContent;
    const messageObject  = {
        "type": type,
        "message": message
    };

    chatHistory.push(messageObject);
    const encodedData = encodeURIComponent(JSON.stringify(chatHistory))
    localStorage.setItem("chatHistory", encodedData);
    inputRef.value = '';
    setTimeout(receiveMessage, 1000);
}

function receiveMessage() {
    let bot_messages = [];
    bot_messages[0] = "How's Antarctica?";
    bot_messages[1] = "Wanna get some sushi later? 🍣😋";
    bot_messages[2] = "I 🐳 always be here for you.";  
    bot_messages[3] = "Noot noot 🐧";
    bot_messages[4] = "There's plenty of 🐟 in the 🌊 but I like you best ❤️";

    let newElement = document.createElement('p');
    let messageContent = bot_messages[Math.floor(bot_messages.length*Math.random())];
    newElement.textContent = messageContent;

    let timestamp = document.createElement('p');
    timestamp.setAttribute('class', 'timestamp');
    d = new Date();
    timestamp.textContent =  d.toString();

    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'message-other');

    divElement.append(newElement);
    divElement.append(timestamp);

    let main = document.querySelector("main")
    main.append(divElement);

    const type = "message-other";
    const message = messageContent;
    const messageObject  = {
        "type": type,
        "message": message
    };

    chatHistory.push(messageObject);
    const encodedData = encodeURIComponent(JSON.stringify(chatHistory))
    localStorage.setItem("chatHistory", encodedData);
}
function clearChatHistory() {
    chatHistory = [];
    localStorage.removeItem("chatHistory");
    document.querySelector('#chat-log-container').innerHTML = "";
}

let btnRef = document.querySelector("#message-button");
btnRef.addEventListener('click', myEventHandler);
