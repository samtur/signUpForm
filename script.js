function matchPwd() {
  let pwd1 = document.getElementById("pwd1").value;
  let pwd2 = document.getElementById("pwd2").value;

  if (pwd1 != pwd2) {
    if (pwd2 == "") {
      document.getElementById("wrong_pass_alert").innerHTML = "";
      return;
    }
    document.getElementById("wrong_pass_alert").innerHTML =
      "☒ Use same password";
    document.getElementById("create").disabled = true;
    document.getElementById("create").style.opacity = 0.4;
  } else {
    document.getElementById("wrong_pass_alert").innerHTML =
      "🗹 Password Matched";
    document.getElementById("create").disabled = false;
    document.getElementById("create").style.opacity = 1;
  }
}
