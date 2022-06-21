// Carousel

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");
const image6 = document.querySelector(".image6");
const image7 = document.querySelector(".image7");
const image8 = document.querySelector(".image8");

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");


rightArrow.addEventListener("click", rightArrowKey);
rightArrow.onkeydown = rightArrowKey;

function rightArrowKey() {

    if (image1.classList.contains("reaktor")) {
        image1.classList.remove("reaktor");
        image2.classList.add("reaktor");


    }

    else if (image2.classList.contains("reaktor")) {
        image2.classList.remove("reaktor");
        image3.classList.add("reaktor");

    }

    else if (image3.classList.contains("reaktor")) {
        image3.classList.remove("reaktor");
        image4.classList.add("reaktor");

    }

    else if (image4.classList.contains("reaktor")) {
        image4.classList.remove("reaktor");
        image5.classList.add("reaktor");

    }

    else if (image5.classList.contains("reaktor")) {
        image5.classList.remove("reaktor");
        image6.classList.add("reaktor");

    }

    else if (image6.classList.contains("reaktor")) {
        image6.classList.remove("reaktor");
        image7.classList.add("reaktor");

    }

    else if (image7.classList.contains("reaktor")) {
        image7.classList.remove("reaktor");
        image8.classList.add("reaktor");

    }

    else if (image8.classList.contains("reaktor")) {
        image8.classList.remove("reaktor");
        image1.classList.add("reaktor");

    }

};

leftArrow.addEventListener("click", leftArrowKey);
leftArrow.onkeydown = leftArrowKey;

function leftArrowKey() {

    if (image1.classList.contains("reaktor")) {
        image1.classList.remove("reaktor");
        image8.classList.add("reaktor");


    }

    else if (image2.classList.contains("reaktor")) {
        image2.classList.remove("reaktor");
        image1.classList.add("reaktor");

    }

    else if (image3.classList.contains("reaktor")) {
        image3.classList.remove("reaktor");
        image2.classList.add("reaktor");

    }

    else if (image4.classList.contains("reaktor")) {
        image4.classList.remove("reaktor");
        image3.classList.add("reaktor");

    }

    else if (image5.classList.contains("reaktor")) {
        image5.classList.remove("reaktor");
        image4.classList.add("reaktor");

    }

    else if (image6.classList.contains("reaktor")) {
        image6.classList.remove("reaktor");
        image5.classList.add("reaktor");

    }

    else if (image7.classList.contains("reaktor")) {
        image7.classList.remove("reaktor");
        image6.classList.add("reaktor");

    }

    else if (image8.classList.contains("reaktor")) {
        image8.classList.remove("reaktor");
        image7.classList.add("reaktor");

    }

};