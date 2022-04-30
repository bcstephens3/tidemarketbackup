const date = new Date();

const renderCalendar = () => {
    date.setDate(1); 

    console.log(date.getDay());

    const monthDays = document.querySelector(".days");

    //gets the last day of the current month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    // console.log(prevLastDay);

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), 
    date.getMonth() + 1, 0).getDay();

    console.log(lastDayIndex);

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // shows the correct month for the h1
    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for(let x = firstDayIndex; x > 0; x--) {
        //populates dates of previous month
        days += `<div class = "prev-date">${prevLastDay - x + 1}</div>`;
    }

    for(let i = 1; i <= lastDay; i++) {
        //populates dates
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div id="${i}" class="popup today" onclick="populateTimes(${i})"><span class="popuptext" id="myPopup${i}">${i}</span>${i}</div>`;
        } else {
            days += `<div id="${i}" class="popup" onclick="populateTimes(${i})"><span class="popuptext" id="myPopup${i}">${i}</span>${i}</div>`;
        }
    }
    monthDays.innerHTML = days;

    for(let j = 1; j <= nextDays; j++) {
        
        days += `<div class = "next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
}


document.querySelector('.prev').
addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

document.querySelector('.next').
addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

renderCalendar();

const baseUrl = "https://localhost:6201/api/requests";

function populateTimes(popDate){
    const requestUrl = baseUrl;
    console.log(requestUrl);

    fetch(requestUrl).then(function(response){
        return response.json();
    }).then(function(json){
        //console.log(json);

        //shows ids of times available
        json.forEach(request => {
            var jsondate = new Date((request.startdate).replace("T"," ").replace(/-/g,"/"));
            if((request.status != "Accepted") && (popDate == jsondate.getDate()) && (jsondate.getMonth() == date.getMonth())){
                //console.log(request.requestid);
                console.log(request.startdate);
                // var jsondate = new Date((request.startdate).replace("T"," ").replace(/-/g,"/"));
                console.log(jsondate);
                console.log(jsondate.getDate());

                alert(jsondate)

                //popup
                console.log(document.getElementById(popDate))
                //var popup = document.getElementById(popDate).style.visibility = "visible";
                //document.getElementById(popDate).style.visibility = "visible";
                //document.getElementsByClassName("popuptext").style.visibility = "visible";
                
                // var popup = document.getElementById(popDate);
                // popup.classList.toggle("show");
            }
        });

    }).catch(function(error){
        console.log(error);
    });
}

populateTimes();