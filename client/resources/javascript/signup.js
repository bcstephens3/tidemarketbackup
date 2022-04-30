const baseUrl = "https://localhost:6201/api/user"; 
var userList = [];
var myUser = {};

function postUsers(){
    console.log("Hi")
    const postUserUrl = baseUrl;
    const firstNameHTML = document.getElementById("firstName").value;
    const lastNameHTML = document.getElementById("lastName").value;
    const userNameHTML = document.getElementById("userName").value;
    const passwordHTML = document.getElementById("psw").value;
    const emailHTML = document.getElementById("email").value;
    const addressHTML = document.getElementById("address").value;
    const companyNameHTML = document.getElementById("companyName").value;
    const companyTypeHTML = document.getElementById("type").value;
    const phoneNumberHTML = document.getElementById("phoneNumber").value;
    fetch(postUserUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            firstName : firstNameHTML,
            lastName : lastNameHTML,
            userName : userNameHTML,
            password : passwordHTML,
            email : emailHTML,
            address : addressHTML,
            companyName : companyNameHTML,
            businessType : companyTypeHTML,
            phoneNumber : phoneNumberHTML,
        })
        
    })
    .then((response)=>{
        console.log(response);
        sendToBusinessUserHomescreen();
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("userName").value = "";
        document.getElementById("psw").value = "";
        document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        document.getElementById("companyName").value = "";
        document.getElementById("type").value = "";
        document.getElementById("phoneNumber").value = "";
    })
}

function sendToBusinessUserHomescreen()
{
    window.location.replace("bizuserhomescreen.html");
}

