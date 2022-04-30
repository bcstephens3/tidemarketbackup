const userString = sessionStorage.getItem('user');
const userString2 = JSON.parse(userString);

function handleOnload()
{
    console.log(userString2); 
}

function handleAvailabilityClick()
{
    console.log("we are in Availability click");
}

function handleMakeRequestClick()
{
    console.log("we are in make request click");
}

function handleStatusClick()
{
    console.log("we are in status click");
}

function handleOnLoad()
{
    
}