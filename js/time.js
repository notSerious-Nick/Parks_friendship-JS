const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

setInterval(() => {
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();

    console.log(second);
    hr.style.transform = `rotateZ(${hour * 30 + minute * 0.5}deg)`;
    min.style.transform = `rotateZ(${second * 0.1 + minute * 6}deg)`;
    sec.style.transform = `rotateZ(${6 * second}deg)`; 
})