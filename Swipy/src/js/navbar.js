$(document).ready(function () {
  $(".list__group__item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
