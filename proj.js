function login() {
    const studentID = "2026-0001";
    const p = "12345";
    const s = "9-Sapphire";

    let studentIDInput = document.getElementById("StudentID").value;
    let passInput = document.getElementById("Password").value;
    let sectionInput = document.getElementById("Section").value;

    if (studentIDInput === "" || passInput === "" || sectionInput === "") {
        alert("Please fill in all fields.");
    } else if (studentIDInput === studentID && passInput === p && sectionInput === s) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter valid credentials.");
    }
}
