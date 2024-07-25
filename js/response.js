function post() {
    let btn = document.getElementById("button-addon2")
    let input = document.getElementById("input-box");
    let value = input.value;
    var chatDiv = document.getElementById("messages");
    var message = document.createElement("li");
    const img = document.createElement("img");
    img.src = "penguin.jpg";
    img.classList.add("avatar");


    message.setAttribute("class", "bubble sender");

    message.appendChild(document.createTextNode(value));
    chatDiv.appendChild(message);
    message.appendChild(img);

    input.value = "";;
    btn.disabled = true;

    respond();
}

function respond() {
    let value = "Great! Let's get started.";
    var chatDiv = document.getElementById("messages");
    const words = value.split(" ");
    let index = 0;
    var message = document.createElement("li");
    const img = document.createElement("img");
        img.src = "penguin.jpg";
        img.classList.add("avatar");
    message.setAttribute("class", "bubble receiver");
    message.appendChild(img);
    message.appendChild(document.createTextNode(value));
    chatDiv.appendChild(message);
}

