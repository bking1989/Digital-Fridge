$(document).ready(function() {
  // New User Modal
  $("#newUserBtn").on("click", function() {
    $("#newUserModal").modal("show");
  });

  // New User Submit
  $("#newSubmitBtn").on("click", function() {
    var newUser = $("input#newUserName").val().trim();
    $("#dropdownMenu").append(`<option value="${newUser}">${newUser}</option>`);
    console.log("New user submitted!");
    $("input#newUserName").val("");
  });

  // Username Select
  $("#loginBtn").on("click", function() {
    var userSelect = $("#dropdownMenu option:selected").data("id");
    window.location.href = "api/" + userSelect + "/ingredients/";
  });
});