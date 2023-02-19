"use strict";

const QandA = document.querySelectorAll(".Q-and-A");
console.log(QandA);

QandA.forEach((item) =>
  item.addEventListener("click", function () {
    // console.log("clicked");
    item.classList.toggle("open");
  })
);
