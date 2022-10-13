var likes = 3;

var likesElement = document.querySelector(".likes");

function add1() {
    likes++;
    likesElement.innerText = likes + " " + "like(s)"
}