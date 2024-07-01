function hidden_password() {
  var icon_eye = document.getElementById("icon_eye");
  var password_input = document.getElementById("password_input");

  if (password_input.type === "text") {
    password_input.type = "password";
    icon_eye.setAttribute("data-lucide", "eye-off");
    lucide.createIcons();
  } else if (password_input.type === "password") {
    password_input.type = "text";
    icon_eye.setAttribute("data-lucide", "eye");
    lucide.createIcons();
  }
}

document
  .getElementById("password_input")
  .addEventListener("input", function () {
    var value = this.value;
    if (value != "") {
      var icon_eye = document.getElementById("icon_eye");
      icon_eye.style.display = "block";
    } else if (value === "") {
      var icon_eye = document.getElementById("icon_eye");
      icon_eye.style.display = "none";
    }
  });

function check_icon() {
  var icon_check = document.getElementById("icon_check");
  if (icon_check.classList.contains("hidden")) {
    icon_check.classList.remove("hidden");
    icon_check.classList.add("block");
  } else if (icon_check.classList.contains("block")) {
    icon_check.classList.remove("block");
    icon_check.classList.add("hidden");
  }
}
