//Date picker
$(".form-calendar-input").flatpickr();

//Menu
let menu = $(".header-nav");
$(".header .header-toggle .fa-bars").on("click", function (e) {
  menu.addClass("active");
  $(".fa-times").css("display", "block");
  $(this).css("display", "none");
});
$(".header .header-toggle .fa-times").on("click", function (e) {
  menu.removeClass("active");
  $(".fa-bars").css("display", "block");
  $(this).css("display", "none");
});
