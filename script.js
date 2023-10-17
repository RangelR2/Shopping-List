function pushData() {
    let list = document.getElementById("list");
    let content = document.createElement('li');
    let button = document.createElement('button');
    var inputText = document.getElementById("inputText").value;
    var node = document.createTextNode(inputText);
    content.appendChild(node);
    list.appendChild(content);

}