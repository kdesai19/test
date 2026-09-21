/* =========================
   START EXPERIENCE
========================= */

function startExperience() {

    const opening =
        document.getElementById("opening");

    const main =
        document.getElementById("main-content");


    opening.style.opacity = "0";

    opening.style.transition =
        "opacity 0.8s ease";


    setTimeout(() => {

        opening.style.display =
            "none";

        main.classList.remove(
            "hidden"
        );

        window.scrollTo(
            0,
            0
        );

    }, 800);

}


/* =========================
   LOVE ANSWER
========================= */

function showLove() {

    const answer =
        document.getElementById(
            "love-answer"
        );


    answer.classList.remove(
        "hidden"
    );


    createHeartExplosion();

}


/* =========================
   FINAL SURPRISE
========================= */

function finalSurprise() {

    const message =
        document.getElementById(
            "final-message"
        );


    message.classList.remove(
        "hidden"
    );


    createHeartExplosion();

}


/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"
    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.top =
            Math.random() * 100 + "vh";


        heart.style.fontSize =
            (20 +
            Math.random() * 35)
            + "px";


        heart.style.zIndex =
            "9999";


        heart.style.pointerEvents =
            "none";


        heart.style.transition =
            "all 2s ease";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.style.transform =
                `
                translate(
                    ${(Math.random() - 0.5) * 400}px,
                    ${(Math.random() - 0.5) * 400}px
                )
                scale(1.5)
                `;

            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHeart() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖"
    ];


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "floating-heart";


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 +
        Math.random() * 25)
        + "px";


    heart.style.animationDuration =
        (5 +
        Math.random() * 5)
        + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(
    createFloatingHeart,
    600
);