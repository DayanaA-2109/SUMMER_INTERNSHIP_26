
document.addEventListener('DOMContentLoaded', function() {
    
   
    const menuItems = document.querySelectorAll('.menu-item');

   
    menuItems.forEach(item => {
        const arrow = item.querySelector('.arrow');
        
       
        arrow.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
            
           
            menuItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle the current menu
            item.classList.toggle('active');
        });
    });

   
    document.addEventListener('click', (e) => {
        // Check if click is outside any menu-item
        if (!e.target.closest('.menu-item')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

});
function validform() {

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

   
    document.getElementById("nameError").textContent = "";
    document.getElementById("mobileError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let valid = true;

    // Name validation
    if(name === ""){
        document.getElementById("nameError").textContent =
        "This field is mandatory";
        valid = false;
    }

    // Mobile validation
    if(mobile === ""){
        document.getElementById("mobileError").textContent =
        "This field is mandatory";
        valid = false;
    }
    else if(!/^[0-9]{10}$/.test(mobile)){
        document.getElementById("mobileError").textContent =
        "Mobile number must contain exactly 10 digits";
        valid = false;
    }

    // Email validation
    if(email === ""){
        document.getElementById("emailError").textContent =
        "This field is mandatory";
        valid = false;
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById("emailError").textContent =
        "Enter a valid email address";
        valid = false;
    }

    // Message validation
    if(message === ""){
        document.getElementById("messageError").textContent =
        "This field is mandatory";
        valid = false;
    }

    return valid;
}
function checkName() {
    let name = document.getElementById("name").value.trim();
    let error = document.getElementById("nameError");

    if(name === ""){
        error.textContent = "This field is mandatory";
    }
    else{
        error.textContent = "";
    }
}

function checkMobile() {
    let mobile = document.getElementById("mobile").value.trim();
    let error = document.getElementById("mobileError");

    if(mobile === ""){
        error.textContent = "This field is mandatory";
    }
    else if(!/^[0-9]{10}$/.test(mobile)){
        error.textContent = "Mobile number must contain exactly 10 digits";
    }
    else{
        error.textContent = "";
    }
}

function checkEmail() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("emailError");

    if(email === ""){
        error.textContent = "This field is mandatory";
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        error.textContent = "Enter a valid email address";
    }
    else{
        error.textContent = "";
    }
}

function checkMessage() {
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("messageError");

    if(message === ""){
        error.textContent = "This field is mandatory";
    }
    else{
        error.textContent = "";
    }
}
const items = document.querySelectorAll('.edu-item, .skill-item, .project-card');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
}, {
    threshold: 0.3
});

items.forEach((item) => {
    observer.observe(item);
});
