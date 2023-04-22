let likes = 3;

document.querySelector("#like-button").addEventListener("click", function () {
    likes++;
    document.querySelector("#likes-count").textContent = likes;
});
