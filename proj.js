function login() {

    const studentID = "2026-0001";
    const password = "12345";

    let studentIDInput = document.getElementById("StudentID").value;
    let passwordInput = document.getElementById("Password").value;
    let sectionInput = document.getElementById("Section").value;

    if (studentIDInput === "" || passwordInput === "" || sectionInput === ""){
        alert("Please fill in all fields.");
    }
     else if (
        studentIDInput === studentID && passwordInput === password) {
        alert("Login Successful!");

        localStorage.setItem("studentSection", sectionInput);
        localStorage.setItem("studentID", studentIDInput);

        window.location.href = "profile.html";
    } 
    
    else {
        alert("Please enter valid credentials.");
    }
}
