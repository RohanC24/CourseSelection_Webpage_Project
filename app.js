function validate() {
    let firstname = document.getElementById("firstName");
    let lastname = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Check if the first name is too long
    if (firstname.value.trim().length > 8) {
        firstname.style.border = "solid 3px red";
        document.getElementById("firstN").style.visibility = "visible";
        return false;
    } else {
        firstname.style.border = ""; // Correct way to remove border
        document.getElementById("firstN").style.visibility = "hidden";
    }

    // Check if the last name is too long
    if (lastname.value.trim().length > 8) {
        lastname.style.border = "solid 3px red";
        document.getElementById("lastN").style.visibility = "visible";
        return false;
    } else {
        lastname.style.border = ""; // Correct way to remove border
        document.getElementById("lastN").style.visibility = "hidden";
    }

    // Check if the password meets the criteria
    if (!passwordRegex.test(password.value.trim())) {
        password.style.border = "solid 3px red";
        document.getElementById("passW").style.visibility = "visible";
        return false;
    } else {
        password.style.border = ""; // Correct way to remove border
        document.getElementById("passW").style.visibility = "hidden";
    }

    // If all validations pass
    alert("Registration Successful");
    Courses(); // Call the function to display the courses section
    return true;
}

function Courses(){
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        if (validate()) {
            alert("Registration Successful");
            document.getElementById("courses").classList.remove('d-none'); // Show the courses section
            document.getElementById("courses").scrollIntoView({ behavior: 'smooth' });
        }
    });
};

let payment = document.getElementById("paymentid");
payment.addEventListener("click",()=>{
    document.getElementById('Payment').classList.remove('d-none');
});

let Aibtn = document.getElementsByClassName("btn btn-primary btn1")[0];
let Devopbtn = document.getElementsByClassName("btn btn-primary btn2")[0];
let Webbtn = document.getElementsByClassName("btn btn-primary btn3")[0];

Aibtn.addEventListener("click",()=>{
    document.getElementById("TotalAmount").value= "1000 Rs";
});

Devopbtn.addEventListener("click", () => {
    document.getElementById("TotalAmount").value = "2000 Rs";
});
Webbtn.addEventListener("click", () => {
    document.getElementById("TotalAmount").value = "1500 Rs";
});

function updateRemAmt(){
    let TotAmt = parseFloat(document.getElementById("TotalAmount").value.replace(" Rs", "")) || 0;
    let userAmt = parseFloat(document.getElementById("Amountpaid").value.replace("Rs", ""))|| 0;
    let remAmt = TotAmt - userAmt;
    document.getElementById("Remaining").value = remAmt + " Rs";
}

document.getElementById("Amountpaid").addEventListener("input", updateRemAmt);

document.querySelector(".paysubmitbtn").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission for demonstration
    let remainingamt = parseFloat(document.getElementById("Remaining").value.replace(" Rs", "")) || 0;
    if (remainingamt === 0) {
        alert("Payment successful!");
    } else {
        alert("Please pay the full amount.");
    }
});