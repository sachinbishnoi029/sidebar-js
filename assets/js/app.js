let button = document.querySelector(".btn")
let cross = document.querySelector(".closeimg");
let overlay = document.querySelector(".overlay");
let sidebar = document.querySelector(".sidebar");

button.addEventListener("click", function () {
    sidebar.classList.add("show");
    overlay.classList.add("show2");
})

cross.addEventListener("click", function () {
    sidebar.classList.remove("show");
    overlay.classList.remove("show2");
})

overlay.addEventListener("click", function () {
    sidebar.classList.remove("show");
    overlay.classList.remove("show2");
})