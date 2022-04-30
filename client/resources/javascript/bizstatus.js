const userString = sessionStorage.getItem('user');
const userString2 = JSON.parse(userString);
const baseUrl = "https://localhost:6201/api/requests"; 
var requestList = [];
var myRequest = {};


function handleOnLoad() //works!!
{
    getRequests();
}

function getRequests()
{
    const allRequestsAPIUrl = baseUrl; 

    fetch(allRequestsAPIUrl).then(function(response){ 
        console.log(response);
        return response.json();
    }).then(function(json){
        
        //songList = json;
        console.log(json)
        displayRequests(json);
        //blankFields();
 

    }).catch(function(error){
        console.log(error);
    });
}

//new one
function displayRequests(json)
{
    let html = `<div class="row">`;
		json.forEach((request) => { //for each song in our array we are creating some html
            // let fav = ""
            // if(song.favorited == "n"){
            //     fav = "no";
            // }
            // else{
            //     fav = "yes";
            // }
            let id = request.requestid;
            
            //console.log(song.deleted)
            //console.log(song.songTitle)
            //console.log(song.favorited)
            if(request.userid == userString2.userId)      //userString2.userId
            {
                html += `<div class="card col-md-4 bg-dark text-white">`;
                html += `<img src="../resources/images/ivys.png" class="card-img" alt="...">`;
                html += `<div class="card-img-overlay">`;
                html += `<h5 class="card-title">`+request.startdate+`</h5>`;
                html += `<h5 class="card-title">`+request.enddate+`</h5>`;
                html += `<h5 class="card-title">`+request.status+`</h5>`;
                //trying to add button
                //html += `<button id=" ` + request.requestid +`" class="btn btn-danger" onclick="handleDeleteClick(id)">Delete</button>`
                //html += `<button id=" ` + request.requestid + `" class="btn btn-info" onclick="putSong(`+ request.requestid +`)">Favorite</button>`
                //trying to add button
                html += `</div>`;
                html += `</div>`;
            }            
            
		});
        if(html === ``){
            html = "No Requests found :("
        }
        html += "</div>"
		document.getElementById("cards").innerHTML = html; //document --> refers to index.html 
}

function handleSubmitClick()
{
    console.log("we are submitting biz req in the onclick");
    postRequests();
    //window.location.replace("bizthankyou.html");
}

function postRequests(){
    console.log("in post request")
    const postRequestUrl = baseUrl;
    const spaceidHTML = document.getElementById("spaceid").value;
    const startdateHTML = document.getElementById("startdate").value;
    const enddateHTML = document.getElementById("enddate").value;

    fetch(postRequestUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            requestspaceid : spaceidHTML,
            startdate : startdateHTML,
            enddate : enddateHTML,
        })
        
    })
    .then((response)=>{
        console.log(response);
        window.location.replace("bizthankyou.html");
    })
}
