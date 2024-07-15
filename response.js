function post() {
    let btn = document.getElementById("button-addon2")
    let input = document.getElementById("input-box");
    let value = input.value;
    var chatDiv = document.getElementById("messages");
    var message = document.createElement("li");
    message.setAttribute("class", "bubble sender");

    message.appendChild(document.createTextNode(value));
    chatDiv.appendChild(message);

    input.value = "";;
    btn.disabled = true;

    respond();
}

let value = "Great! Let's get started.";
var chatDiv = document.getElementById("messages");
const words = value.split(" ");
let index = 0;
var message = document.createElement("li");
message.setAttribute("class", "bubble receiver");
function respond() {
    if (index < words.length) {
        
        message.textContent += words[index] + " ";
        chatDiv.appendChild(message);
        index++;

        setTimeout(respond, 200);
    }

    
}

