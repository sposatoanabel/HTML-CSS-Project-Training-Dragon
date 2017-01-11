/*
 *This file belongs to Training Dragon and been modified.
 * */

(function () {
    $(document).ready(function () {
        $(".navigationLinks").click(function (e) {

            e.preventDefault();
            var a = $(this).attr("href");

            $("html, body").animate(
                {
                    "scrollTop": $(a).offset().top - 70
                },
                800
            );// animate
        });//on
    });//ready
})();
