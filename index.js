function displayPage2() {
  $("#section1").css({ display: "none" });
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $("#section2").css({ display: "block" });
  $(".sidebar-2").css({ backgroundColor: "#fff", color: "black" });
}
function displayPage3() {
  $("#section3").css({ display: "block" });
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
  $("#section2").css({ display: "none" });
  $(".sidebar-3").css({ backgroundColor: "#fff", color: "black" });
}
function displayPage4() {
  $("#section4").css({ display: "block" });
  $("#section3").css({ display: "none" });
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-3").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-4").css({ backgroundColor: "#fff", color: "black" });
}
function displayPage5() {
  $("#section5").css({ display: "flex" });
  $("#section4").css({ display: "none" });
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-3").css({ backgroundColor: "inherit", color: "#fff" });
  $(".sidebar-4").css({ backgroundColor: "#fff", color: "black" });
}
function back2Page1() {
  $("#section1").css({ display: "block" });
  $(".sidebar-1").css({ backgroundColor: "#fff", color: "black" });
  $("#section2").css({ display: "none" });
  $(".sidebar-2").css({ backgroundColor: "inherit", color: "#fff" });
}
function back2Page2() {
  $("#section1").css({ display: "none" });
  $(".sidebar-1").css({ backgroundColor: "inherit", color: "#fff" });
  $("#section2").css({ display: "block" });
  $(".sidebar-2").css({ backgroundColor: "#fff", color: "black" });
  $("#section3").css({ display: "none" });
  $(".sidebar-3").css({ backgroundColor: "inherit", color: "#fff" });
}
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
