// const baseUrlPostManuel = "https://localhost:6201/api/requests";
const baseUrlManualAdmin = "https://localhost:6201/api/user"; 
userStringAdmin1 = sessionStorage.getItem('user3');
userStringAdmin3 = JSON.parse(userStringAdmin1);

function handleOnload()
{
    console.log("is it workin yo");
    console.log(userStringAdmin3);
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