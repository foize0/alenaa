let animationStarted = false;

document.getElementById("photo-page").style.display = "none";
document.getElementById("stars-page").style.display = "none";
// Появление строк
function typeLines(lines, element, delay = 4000){

    element.innerHTML = "";

    let index = 0;

    function showLine(){

        if(index >= lines.length){
            return;
        }

        const p = document.createElement("p");

        p.style.opacity = "0";
        p.style.transition = "1.5s";

        p.textContent = lines[index];

        element.appendChild(p);

        setTimeout(() => {
            p.style.opacity = "1";
        },100);

        index++;

        setTimeout(showLine, delay);

    }

    showLine();
}


// Звезды
function createStars(){

    const sky = document.getElementById("stars-page");

    for(let i = 0; i < 150; i++){

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left = Math.random()*100 + "%";

        star.style.top = Math.random()*100 + "%";

        star.style.animationDuration =
            (2 + Math.random()*3) + "s";

        sky.appendChild(star);

    }

}


// Падающая звезда
function createShootingStar(){

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.left = (Math.random()*100) + "%";

    star.style.top = (Math.random()*50) + "%";

    document.getElementById("stars-page")
        .appendChild(star);

    setTimeout(() => {

        star.remove();

    },2000);

}


// Сердечки
function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = (Math.random()*100) + "%";

    heart.style.bottom = "0px";

    heart.style.fontSize =
        (15 + Math.random()*20) + "px";

    heart.style.animationDuration =
        (4 + Math.random()*4) + "s";

    document.getElementById("stars-page")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

}


// Запуск сайта
function startAnimation(){

    if(animationStarted) return;

    animationStarted = true;

    document.getElementById("photo-page").style.display = "flex";


    const music = document.getElementById("music");

    music.volume = 0.5;

    music.play().catch(error => {
        console.log(error);
    });


    typeLines([

        "Именно здесь всё началось ❤️",

        "Именно здесь я очень волновался.",

        "И именно здесь ты сделала меня самым счастливым человеком.",

        "Спасибо за этот прекрасный месяц.",

        "Ты делаешь мою жизнь намного счастливее.",

        "И я очень надеюсь, что это только начало нашей истории ❤️"

    ],

    document.getElementById("message"),

    4000);


    setTimeout(() => {

        document.getElementById("photo-page").style.display = "none";

        document.getElementById("stars-page").style.display = "flex";

        createStars();

        setInterval(createShootingStar, 3000);

        setInterval(createHeart, 1500);

        typeLines([

            "За твою улыбку.",

            "За твой смех.",

            "За наши разговоры.",

            "За твою заботу.",

            "За каждый день рядом.",

            "За то, что рядом с тобой я счастлив.",

            "За тебя ❤️",

            "С первым месяцем, любимая ❤️",

            "И пусть это будет лишь первая глава из многих.",

            "Это только начало ❤️"

        ],

        document.getElementById("final-text"),

        3500);

    },30000);

}


document
.getElementById("start-btn")
.addEventListener("click", () => {

    document
    .getElementById("start-screen")
    .style.display = "none";

    startAnimation();

});
