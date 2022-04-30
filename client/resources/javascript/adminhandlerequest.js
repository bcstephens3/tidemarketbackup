const baseUrl = "https://localhost:6201/api/requests";
const baseUrl2 = "https://localhost:6201/api/user";
var requests;
var users;

function handleOnLoad() {
  getRequests();
}

function getRequests() {
  const allRequestsAPIUrl = baseUrl;
  const allUserAPIUrl = baseUrl2;

  fetch(allRequestsAPIUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      requests = json;
      console.log(requests);
      fetch(allUserAPIUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        users = json;
        console.log(users);
        displayRequests(requests, users);
      })
      .catch(function (error) {
        console.log(error);
      });
    })

}

//new one
function displayRequests(requests, users) {
  let html = `<div class="row">`;
  requests.forEach((test) => {
      users.forEach((person) => {
          if(test.userid == person.userId && test.status == "Pending")
          {
                let id = test.requestid;
                html += `<div class="card col-md-4 bg-dark text-white">`;
                html += `<img src="../resources/images/ivys.png" class="card-img" alt="...">`;
                html += `<div class="card-img-overlay">`;
                html += `<h5 class="card-title">`+person.companyName +`</h5>`;
                html += `<h5 class="card-title">`+test.startdate+`</h5>`;
                html += `<h5 class="card-title">`+test.enddate+`</h5>`;
                html += `<h5 class="card-title">`+test.status+`</h5>`;
                //trying to add button
                html += `<button id="` + test.requestid +`"class="btn btn-danger" onclick="handleDenyClick(this.id)">Deny</button>`
                html += `<button id="` + test.requestid + `"class="btn btn-info" onclick="handleAcceptClick(this.id)">Accept</button>`
                //trying to add button
                html += `</div>`;
                html += `</div>`;  
          }
      })
  });
  if (html === ``) {
    html = "No Requests found :(";
  }
  html += "</div>";
  document.getElementById("cards").innerHTML = html; //document --> refers to index.html
}



function handleDenyClick(id)
{
  const denyRequestUrl = baseUrl + "/deny/" + id;

  fetch(denyRequestUrl, {
    method: "PUT",
    headers: { "Accept": 'application/json',
    "Content-Type": 'application/json',
      }

    })
    .then((response)=>{
    console.log(response);
    sendEmail();
    getRequests()
    });

  }

function handleAcceptClick(id){

  const denyRequestUrl = baseUrl + "/accept/" + id;
  console.log(denyRequestUrl)

  fetch(denyRequestUrl, {
    method: "PUT",
    headers: { "Accept": 'application/json',
    "Content-Type": 'application/json',
      }

    })
    .then((response)=>{
    console.log(response);
    getRequests()
    });

}

function sendEmail(){

  const emailRequestUrl = baseUrl + "/email";

  console.log(emailRequestUrl)



  fetch(emailRequestUrl, {

    method: "PUT",
    headers: { "Accept": 'application/json',

    "Content-Type": 'application/json',
      }
    })
    .then((response)=>{

    console.log(response);

    });
}