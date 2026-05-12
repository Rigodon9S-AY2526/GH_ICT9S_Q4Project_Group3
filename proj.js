function login() {
    const studentID = "2026-0001";
    const password = "12345";
    const section = "9-Sapphire";

    let studentIDInput = document.getElementById("StudentID").value;
    let passwordInput = document.getElementById("Password").value;
    let sectionInput = document.getElementById("Section").value;

    if (studentIDInput === "" || passwordInput === "" || sectionInput === "") {
        alert("Please fill in all fields.");

    } else if (studentIDInput === studentID && passwordInput === password && sectionInput === section) {
        alert("Login Successful!");
        
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter valid credentials.");
    }
}
