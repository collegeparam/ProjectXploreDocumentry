let content = document.querySelectorAll(".containerChild");

for (let i = 0; i < content.length; i++) {
    content[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}
