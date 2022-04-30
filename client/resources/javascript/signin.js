const baseUrl = "https://localhost:6201/api/user"; 
var userList = [];
var myUser = {};

async function handleSignInClick()
{
    console.log("we are in handle sign in click");
    const allUsersAPIUrl = baseUrl; 
    const sendUsername = document.getElementById("username").value;
    const sendPassword = document.getElementById("password").value;
    
    //const userString = JSON.stringify(sendUsername);
    
    
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
                sendToAdminUserHomescreen();

            }
            else if(user.role == "b" && user.userName == usernameHTML && user.password == passwordHTML)
            {
                console.log("sign in worked");
                console.log("username and password worked")
                console.log(user.userName)
                sessionStorage.setItem('user', JSON.stringify(user));
                sendToBusinessUserHomescreen();
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

function sendToBusinessUserHomescreen()
{
    window.location.replace("bizuserhomescreen.html");
}

function sendToAdminUserHomescreen()
{
    window.location.replace("adminuserhomescreen.html");
}