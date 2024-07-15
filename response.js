function post() {
    let btn = document.getElementById("button-addon2")
    let input = document.getElementById("input-box");
    let value = input.value;
    var chatDiv = document.getElementById("messages");
    var message = document.createElement("li");

    message.appendChild(document.createTextNode(value));
    chatDiv.appendChild(message);
    message.style.textAlign = "right";
    message.style.paddingRight = "40px";

    input.value = "";;
    btn.disabled = true;
    
    respond();
}

let value = "Great! Let's get started.";
var chatDiv = document.getElementById("messages");
const words = value.split(" ");
let index = 0;
var message = document.createElement("li");
function respond() {
    if (index < words.length) {
        
        message.textContent += words[index] + " ";
        chatDiv.appendChild(message);
        index++;

        setTimeout(respond, 200);
    }

    
}

