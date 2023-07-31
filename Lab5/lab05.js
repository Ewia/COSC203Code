const API_URL = 'http://oucs1555.staff.uod.otago.ac.nz:8080'
// const API_URL = 'http://localhost:8080'

// global variable for user name
let userName = "Dinky Donky"

/* this function reloads ALL messages from the server */
function loadAllMessages() {
    /* TASK 3 */  
    
    let e = document.getElementById('chat-log-container');
    /* 3: for each message in array */
    e.innerHTML = '';
    let URL = "http://oucs1555.staff.uod.otago.ac.nz:8080/messages.json";
    function response_callback(response) {
        if (response.status !== 200){
            return;
        } else {
            return response.text();
        }
    }    
    function data_callback(data) {
        let messages_array = JSON.parse(data);
        for(let m of messages_array){
            console.log(userName)
            let type = userName === m.name ? "message-self" : "message-other";
            console.log(type)
            new ChatMessage(m.name, m.message, m.time, type);
        }
    }
    /* 1: fetch messages.json */
    fetch(URL).then(response_callback).then(data_callback)
    /* 2: clear chat-log-container */

    /* create each message element */
    setTimeout(loadAllMessages, 3000);
}

/* this function sends a new message to the server */
function submitNewMessage() {
    /* get input form data */
    const msgInput = document.querySelector('#message-text');
    const message = msgInput.value;
    msgInput.value = ""; // clear the input form
    
    /* create local message element on the page */
    let time = new Date().getTime();
    new ChatMessage(userName, message, time, "message-self")
    /* TASK 4: POST messageData to the server */
    function response_callback(response){
        if (response.status !== 200){
            return;
        } else {
            return response.text();
        }
    }
    function data_callback(data){
        console.log(data);
    }
    let url = "http://oucs1555.staff.uod.otago.ac.nz:8080/send-message";
    const json_object = {
        "name": userName,
        "message": message,
        "time": time
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(json_object), // stringify json_object before sending!
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, options).then(response_callback).then(data_callback);
}
/* form submission event handler */
function clickHandler(event) {
    event.preventDefault();
    submitNewMessage();
}
document.querySelector("#message-button").addEventListener('click', clickHandler);

loadAllMessages();