const imgArray = ["nick1",
    "nick2",
    "nick3",
    "nick4",
    "nick5",
    "ung1",
    "ung2",
    "ung3",
    "ung4",
    "ung5",
    "nickung1",
    "nickung2"
];

const imgChosen = imgArray[Math.floor(Math.random() * imgArray.length)];
const bgimg = document.createElement("img");
bgimg.src = `img/memories/${imgChosen}.jpg`;
bgimg.classList.toggle("background");
document.body.querySelector(".mainboard").appendChild(bgimg);