var likes = [9, 12, 9];
var posts = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3"),
];

function like(i) {
    likes[i]++;
    posts[i].innerHTML = likes[i] + " " + "like(s)";
}