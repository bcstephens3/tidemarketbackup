// const baseUrlPostManuel = "https://localhost:6201/api/requests";
const baseUrlManualAdmin = "https://localhost:6201/api/user"; 
userStringAdmin = sessionStorage.getItem('username');
userStringAdmin2 = JSON.parse(userStringAdmin);

function handleSubmitClick()
{
    console.log(userStringAdmin2);
    console.log("YEAH BOY")
    //postUsers();
    postRequests();
    //window.location.replace("adminthankyou.html");
}

function postRequests(){
    console.log("in post request")
    const postRequestUrlManuel = "https://localhost:6201/api/requests"
    const spaceidHTML = document.getElementById("spaceid").value;
    const startdateHTML = document.getElementById("start-time").value;
    const enddateHTML = document.getElementById("end-time").value;
    
    fetch(postRequestUrlManuel, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            requestspaceid : spaceidHTML,
            startdate : startdateHTML,
            enddate : enddateHTML,
            userid : userStringAdmin2.userId,
        })
        
    })
    .then((response)=>{
        console.log(response);
        //window.location.replace("bizthankyou.html");
    })
}

function postUsersManReq(){
    //console.log("Hi")
    const postUserUrlManuel = "https://localhost:6201/api/user";
    const userNameHTML = document.getElementById("username").value;
    const passwordHTML = document.getElementById("temppassword").value;
    const firstNameHTML = document.getElementById("firstName").value;
    const lastNameHTML = document.getElementById("lastName").value;
    const emailHTML = document.getElementById("email").value;
    const addressHTML = document.getElementById("address").value;
    const companyNameHTML = document.getElementById("companyName").value;
    const companyTypeHTML = document.getElementById("type").value;
    const phoneNumberHTML = document.getElementById("phoneNumber").value;
    // sessionStorage.setItem('userAdmin', JSON.stringify(user));
    fetch(postUserUrlManuel, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            
            userName : userNameHTML,
            password : passwordHTML,
            firstName : firstNameHTML,
            lastName : lastNameHTML,
            email : emailHTML,
            address : addressHTML,
            companyName : companyNameHTML,
            businessType : companyTypeHTML,
            phoneNumber : phoneNumberHTML,
        })
        
    })
    .then((response)=>{
        console.log(response);
        handleSignInNewCustomer();
        //sessionStorage.setItem('user', JSON.stringify(user));
        // document.getElementById("username").value = "";
        // document.getElementById("temppassword").value = "";
        // document.getElementById("firstName").value = "";
        // document.getElementById("lastName").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("address").value = "";
        // document.getElementById("companyName").value = "";
        // document.getElementById("type").value = "";
        // document.getElementById("phoneNumber").value = "";
    })
}

function handleNextClick()
{
    postUsersManReq();
}

async function handleSignInNewCustomer()
{
    console.log("we are in handle sign in click");
    const allUsersAPIUrl = "https://localhost:6201/api/user";; 
    const sendUsername = document.getElementById("username").value;
    const sendPassword = document.getElementById("temppassword").value;
    
    fetch(allUsersAPIUrl).then(function(response){ 
        console.log(response);
        return response.json();
    }).then(function(json){
        usernameHTML = sendUsername;
        passwordHTML = sendPassword;
        console.log(json);
        let html =``;
        json.forEach((user) => {
            //console.log(user);
            //console.log(usernameHTML);
            //console.log(passwordHTML);
            //console.log(user.userName);
            if(user.role == "a" && user.userName == usernameHTML && user.password == passwordHTML)
            {
                console.log("sign in worked");
                console.log("username and password worked")
                console.log(user.userName)
                sessionStorage.setItem('user', JSON.stringify(user));
                sendToManualReqNoAcc();

            }
            else if(user.role == "b" && user.userName == usernameHTML && user.password == passwordHTML)
            {
                console.log("sign in worked");
                console.log("username and password worked")
                console.log(user.userName)
                sessionStorage.setItem('user', JSON.stringify(user));
                sendToManualReqNoAcc();
            }
            else
            {
                html += `<section class= "py-5 text-center container">`
                html += `<div id="invalidsignin">`
                html += `<p class="lead text-muted">Invalid crap try again</p>`
                html += `</div>`
                html += `</section>`
            }

        });
        
        //songList = json;
        console.log(json);
        //displaySongs(json);
        //blankFields();
        // if(user.username )
        // {
        //     sendToHomePage
        // }
    }).catch(function(error){
        console.log(error);
    });
}

function sendToManualReqNoAcc()
{
    window.location.replace("adminmanuelreqhasnoacc.html");
}