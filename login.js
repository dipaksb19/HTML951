console.log("Hii...")


function check( ){
    u = document.getElementById("user").value
    p = document.getElementById("pass").value
    if(u == "dipak" && p == "12345"){
        console.log("Loged in")
        window.open("loginpage.html")
    }
    else{
        console.log("Wrong input")
        alert("Invalid Input");
    }
}