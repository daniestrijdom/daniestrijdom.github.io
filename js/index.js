$(document).ready(function() {

$("#g").click(function() {
  $("#general").slideToggle();
});

$("#w").on("click", function() {
  $("#work").slideToggle();
});

$("#e").on("click", function() {
  $("#education").slideToggle();
});

$("#s").on("click", function() {
  $("#skillset").slideToggle();
});

$("#c").on("click", function() {
  $("#contact").slideToggle();
});


console.log("working?")
});
