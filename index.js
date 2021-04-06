/** Calcula automáticamente la edad */
function getAge() {
    let now = Date.now()
    let birth = new Date(2000, 1, 5)
    let milisecByYear = 365 * 24 * 60 * 60 * 1000
    return parseInt((now - birth) / milisecByYear)
}

const animateCSS = (element, animation, prefix = 'animate__', delay = 'null') => {
    // We create a Promise and return it
    return new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName, delay);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
}




window.addEventListener('load', () => {
    document.getElementById("age").innerHTML = `${getAge()} años`;
    document.getElementById("MG").style.visibility = "visible";
    animateCSS("#MG", "lightSpeedInLeft").then((message) => {
        animateCSS("#MG", "bounceOut", "animate__", "animate__delay-1s").then((res) => {
            document.getElementById("MG").style.visibility = "hidden";
        });
    });

    document.getElementById("brandShape").style.visibility = "visible";
    animateCSS("#brandShape", "lightSpeedInRight").then((message) => {
        animateCSS("#brandShape", "bounceOut", "animate__", "animate__delay-1s").then((res) => {
            bgColor = getComputedStyle(document.documentElement).getPropertyValue('--third');

            document.getElementById("brandShape").style.visibility = "hidden";
            document.getElementById("principalSectionBg").style.backgroundColor = bgColor;
            document.getElementById("meetCard").style.visibility = "visible";
            animateCSS("#meetCard", "zoomIn").then((message) => {
                document.getElementById("carousel-inner").style.visibility = "visible";
                animateCSS("#carousel-inner","zoomIn").then((message) =>{})
            });
        });
    });
});

