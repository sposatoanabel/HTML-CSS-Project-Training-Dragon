/**
 * Created by asposato on 30/10/2016.
 */

var
    slideIndex = 0,
    prevIndex = 0,
    sliders = document.getElementsByClassName("sliders"),
    overlay = document.getElementsByClassName("overlay");


    function gallery() {

        if (slideIndex >= sliders.length) {slideIndex = 0}

        sliders[prevIndex].style.display = "none";

        prevIndex = slideIndex++;


        sliders[prevIndex].style.display = "block";
        setTimeout(gallery, 3000);

    }// gallery()

    gallery();


