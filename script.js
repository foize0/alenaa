const targetDate = new Date("June 25, 2026 00:35:00");

const countdown = document.getElementById("countdown");

let animationStarted = false;



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



// Создание звезд
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



// Главная анимация
function startAnimation(){

    if(animationStarted) return;

    animationStarted = true;


    document.getElementById("timer-page").style.opacity = "0";


    setTimeout(() => {

        document.getElementById("timer-page").style.display = "none";

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



        // Через 30 секунд звездное небо

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


    },2000);

}



// Таймер
function updateTimer(){

    const now = new Date();

    const diff = targetDate - now;


    if(diff <= 0){

        startAnimation();

        countdown.innerHTML = "00:00:00";

        return;

    }


    const hours = Math.floor(diff / 1000 / 60 / 60);

    const minutes = Math.floor(diff / 1000 / 60) % 60;

    const seconds = Math.floor(diff / 1000) % 60;


    countdown.innerHTML =

        String(hours).padStart(2,"0")

        + ":"

        + String(minutes).padStart(2,"0")

        + ":"

        + String(seconds).padStart(2,"0");

}



setInterval(updateTimer,1000);

updateTimer();
