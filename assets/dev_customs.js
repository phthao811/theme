// SEARCH HEADERS
$(".icon-search").click(function () {
  $(".close-search").addClass("active");
  $(".modal_search").addClass("show_search");
  $("#form-search-icon").addClass("active");
});
$(".close-search").click(function () {
  $(".close-search").removeClass("active");
  $(".modal_search").removeClass("show_search");
  $("#form-search-icon").removeClass("active");
});
$(".modal_search").click(function () {
  $(".close-search").removeClass("active");
  $(".modal_search").removeClass("show_search");
  $("#form-search-icon").removeClass("active");
});
