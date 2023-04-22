let likes1 = 9;
document.querySelector("#like-button1").addEventListener("click", function () {
    likes1++;
    document.querySelector("#likes-count1").textContent = likes1;
});

let likes2 = 12;
document.querySelector("#like-button2").addEventListener("click", function () {
    likes2++;
    document.querySelector("#likes-count2").textContent = likes2;
});

let likes3 = 9;
document.querySelector("#like-button3").addEventListener("click", function () {
    likes3++;
    document.querySelector("#likes-count3").textContent = likes3;
});
