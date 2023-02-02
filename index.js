// Navigates to second page of form
function displayPage2() {
  $("#section1").toggle();
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $("#section2").toggle();
  $(".sidebar-2").css({ backgroundColor: "#fff", color: "black" });
}
// Navigates to third page of form
function displayPage3() {
  $("#section3").toggle();
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
  $("#section2").toggle();
  $(".sidebar-3").css({ backgroundColor: "#fff", color: "black" });
}
// Navigates to fourth page of form
function displayPage4() {
  $("#section4").toggle();
  $("#section3").toggle();
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-3").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-4").css({ backgroundColor: "#fff", color: "black" });
}
// Navigates to fifth page of form
function displayPage5() {
  $("#section5").css({ display: "flex" });
  $("#section4").toggle();
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-3").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-4").css({ backgroundColor: "#fff", color: "black" });
}
// Returns back to page 1 of form
function back2Page1() {
  $("#section1").toggle();
  $(".sidebar-1").css({ backgroundColor: "#fff", color: "black" });
  $("#section2").toggle();
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
}
// Returns back to page 2 of form

function back2Page2() {
  $("#section1").css({ display: "none" });
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $("#section2").css({ display: "block" });
  $(".sidebar-2").css({ backgroundColor: "#fff", color: "black" });
  $("#section3").css({ display: "none" });
  $(".sidebar-3").css({ backgroundColor: "inherit", color: "#fff" });
}
// Returns back to page 3 of form
function back2Page3() {
  $("#section1").css({ display: "none" });
  $("#section2").css({ display: "none" });
  $("#section3").css({ display: "block" });
  $("#section4").css({ display: "none" });
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-3").css({ backgroundColor: "#fff", color: "black" });
  $(".sidebar-4").css({ backgroundColor: "inherit", color: "#fff" });
}

$(".to-page2").click(displayPage2);
$(".to-page3").click(displayPage3);
$(".to-page4").click(displayPage4);
$(".to-page5").click(displayPage5);
$(".backTo-pg1").click(back2Page1);
$(".backTo-pg2").click(back2Page2);
$(".backTo-pg3").click(back2Page3);

// Plan-toggle section
var toggler = $("label.switch input[type=checkbox]")[0];
$(toggler).on("click", function () {
  $(".month-plan").toggle(500);
  $(".month-plan1").toggle(500);
  $(".month-plan2").toggle(500);
  $(".discount").toggle(500);
  $(".discount1").toggle(500);
  $(".discount2").toggle(500);
});

// $(".price")[0].innerText + $(".price")[0].innerText use this method to add price and add on for summary
