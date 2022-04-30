const userString = sessionStorage.getItem('user');
const userString2 = JSON.parse(userString);



function handleOnload()
{
    console.log(userString2); 
}

function handleHandleRequestClick()
{
    console.log("we are in HANDLE request click");
}

function handleManuelRequestClick()
{
    console.log("we are in MANUEL request click");
}

function handleReportsClick()
{
    console.log("we are in reports click");
}

