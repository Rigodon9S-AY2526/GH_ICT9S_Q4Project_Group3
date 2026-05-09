function login() {
  const studentId = document.getElementById("studentId").value.trim();
  const password = document.getElementById("password").value.trim();
  const section = document.getElementById("section").value.trim();

  if (studentId === "" || password === "" || section === "") {
    alert("Please fill in all fields.");
    return;
  }

  alert("Login Successful!");
  window.location.href = "dashboard.html";
}