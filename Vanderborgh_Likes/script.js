console.log("page loading...");
var likes = [9, 12, 9];
var spans = [
    document.querySelector("#post1"),
    document.querySelector("#post2"),
    document.querySelector("#post3")
];
function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}