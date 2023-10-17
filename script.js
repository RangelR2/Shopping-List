document.getElementById("vamoquevamo").addEventListener("submit", function (event) {
    event.preventDefault();
    let userName = document.getElementById("item").value;
    content.textContent = userName;
});

const list = document.querySelector('#list');
const content = document.createElement('li')
content.classList.add('content');

list.appendChild(content);

const btn = document.querySelector('#btn');
btn.onclick = () => console.log("Teste");
