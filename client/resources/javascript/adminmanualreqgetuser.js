async function handleUserFindClick()
{
    //console.log("we are in user find click");
    const allUsersAPIUrl = baseUrlManualAdmin; 
    const sendUsername = document.getElementById("username").value;  
    console.log(sendUsername)  
    fetch(allUsersAPIUrl).then(function(response){ 
        //console.log(response);
        return response.json();
    }).then(function(json){
        usernameHTML = sendUsername;
        //console.log(json);
        let html =``;
        json.forEach((user) => {
            if(user.role == "b" && user.userName == usernameHTML)
            {
                console.log(user.userName)
                sessionStorage.setItem('username', JSON.stringify(user));
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
        console.log(json);
        window.location.replace("adminmanuelreqhasacc.html");
    }).catch(function(error){
        console.log(error);
    });
}