$(document).ready(function () {
    $(".create_order__tabs_wrapper span").on("click", function () {
        var index_el = $(this).index();
        $(".create_order__tabs_wrapper .active_bookmark").toggleClass("active_bookmark");
        $(".create_order__tabs_wrapper span").eq(index_el).toggleClass("active_bookmark");
        $(".positioned_wrap .active").toggleClass("active");
        $(".positioned_wrap .create_order__form_wrap").eq(index_el).toggleClass("active");
    });
    $(".name_tel_city__form_wrap__email__addcoment").on("click", function () {
        $(".create_order__form_wrap__name_tel_city__addcomment").toggle("slow");
    });
    $(".name_tel_city__form_wrap__city__span__input").on("click", function () {
        $(this).attr("placeholder", "Введите название Вашего города");
        $(".name_tel_city__form_wrap__city__example").toggle("slow");
    });
    $(".name_tel_city__form_wrap__city__span__input").blur(function () {
        $(this).attr("placeholder", "");
    });
    $(".name_tel_city__form_wrap__email__input").on("click", function () {
        $(".name_tel_city__form_wrap__email__toggle_block").toggle("slow")
    });
    $("select").selecter();
});
