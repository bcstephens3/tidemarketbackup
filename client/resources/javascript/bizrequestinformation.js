const userString = sessionStorage.getItem('user');
const userString2 = JSON.parse(userString);

const baseUrl = "https://localhost:6201/api/requests"; 
const base1Url = "https://localhost:6201/api/makesrequest"; 

var requestList = [];
var myRequest = {};

function handleSubmitClick()
{
    console.log("we are submitting biz req in the onclick");
    console.log(userString2.userId);
    postRequests();
    //window.location.replace("bizthankyou.html");
}

function postRequests(){
    console.log("in post request")
    const postRequestUrl = baseUrl;
    const spaceidHTML = document.getElementById("spaceid").value;
    const startdateHTML = document.getElementById("start-time").value;
    const enddateHTML = document.getElementById("end-time").value;
    //const starttimeHTML = document.getElementById("starttime").value;
    //console.log(startdateHTML);
    //var fullstartdateHTML = startdateHTML + "T" + starttimeHTML + ":00";
    // const unixTimeZero = Date.parse(fullstartdateHTML);

    //const d = new Date(fullstartdateHTML);
    //const s = '01-01-1970 00:03:44';
    
    //console.log(d);
    //const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

    //console.log(unixTimeZero);
// expected output: 0

//console.log(javaScriptRelease);
// expected output: 818035920000
    //console.log(fullstartdateHTML)
    // console.log(startdateHTML) //2000-12-25
    // console.log(starttimeHTML) //08:00
    //                             //2022-02-01T00:00:00

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
            userid : userString2.userId
        })
    })
    .then((response)=>{
        console.log(response);
        //window.location.replace("bizthankyou.html");
        // document.getElementById("spaceid").value = "";
        // document.getElementById("startdate").value = "";
        // document.getElementById("enddate").value = "";
    })
}

// function postMakesRequests()
// {
//     console.log("in post makes request")
//     const postMakesRequestUrl = base1Url;
//     const mrequestidHTML = document.getElementById("mrequestid").value;
//     const museridHTML = document.getElementById("muserid").value;

//     fetch(postRequestUrl, {
//         method: "POST",
//         headers: {
//             "Accept": 'application/json',
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify({
//             requestspaceid : spaceidHTML,
//             startdate : startdateHTML,
//             enddate : enddateHTML,
//         })
        
//     })
//     .then((response)=>{
//         console.log(response);
//         window.location.replace("bizthankyou.html");
//         // document.getElementById("spaceid").value = "";
//         // document.getElementById("startdate").value = "";
//         // document.getElementById("enddate").value = "";
//     })
// }