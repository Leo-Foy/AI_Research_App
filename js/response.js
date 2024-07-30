let input = document.getElementById("chatInput");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("post-btn").click();
    }
});

function post() {
    let btn = document.getElementById("post-btn");
    let input = document.getElementById("chatInput");
    let value = input.value;
    var chatDiv = document.getElementById("messages");
    var message = document.createElement("li");
    const img = document.createElement("img");
    img.src = "Assets/penguin.jpg";
    img.classList.add("avatar");


    message.setAttribute("class", "bubble sender");

    message.appendChild(document.createTextNode(value));
    chatDiv.appendChild(message);
    message.appendChild(img);

    input.value = "";;
    btn.disabled = true;

    respond();
}

function postPromt(promt) {
    let btn = document.getElementById("post-btn");
    var value = promt.textContent;
    var chatDiv = document.getElementById("messages");
    var message = document.createElement("li");
    const img = document.createElement("img");
    img.src = "Assets/penguin.jpg";
    img.classList.add("avatar");

    message.setAttribute("class", "bubble sender");
    message.appendChild(document.createTextNode(value));
    chatDiv.appendChild(message);
    message.appendChild(img);
    

    btn.disabled = true;
    /*mainContent.scrollTop = mainContent.scrollHeight;*/

    /*respond();*/
    
}

function format () {
    return Array.prototype.slice.call(arguments).join(' ')
}

function respond() {
    let value = "Great! Let's get started.";
    var chatDiv = document.getElementById("messages");
    const words = value.split(" ");
    let index = 0;
    var message = document.createElement("li");
    const img = document.createElement("img");
        img.src = "Assets/AI_Logo.jpg";
        img.classList.add("avatar");
    message.setAttribute("class", "bubble receiver");
    message.appendChild(img);
    message.appendChild(document.createTextNode(value));
    chatDiv.appendChild(message);
}

function darkMode() {
    var mainContainer = document.getElementsByClassName("container");
    mainContainer.classList.toggle("darkMode-Container");
}