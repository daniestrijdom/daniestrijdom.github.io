$(document).ready(function() {

$("#g").click(function() {
  $("#general").slideToggle("slow");
});

$("#w").on("click", function() {
  $("#work").slideToggle();
});

$("#e").on("click", function() {
  $("#education").slideToggle("slow");
});

$("#s").on("click", function() {
  $("#skillset").slideToggle("slow");
});

$("#c").on("click", function() {
  $("#contact").slideToggle("slow");
});


console.log("Hey DOM perve....")
});
