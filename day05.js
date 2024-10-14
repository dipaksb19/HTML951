let a = console.log("This is day 5");

function checkUser(){
    un = document.getElementById("user").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(un);
    ums = document.getElementById("val")
    if(isValid){
        ums.innerHTML = "Valid Email";
        ums.style.color = "Green";
        return true;
    }
    else{
        ums.innerHTML = "Invalid Email";
        ums.style.color = "red";
        return false;
    }
}


function checkpass(){
    up = document.getElementById("pass").value;
    let regexpass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
  
    const passValid = regexpass.test(up);
    pms = document.getElementById("p")
    if(passValid){
        pms.innerHTML = "Valid Password";
        pms.style.color = "Green";
        return true;
    }
    else{
        pms.innerHTML = "Invalid Password";
        pms.style.color = "red";
        return false;
    }
}

function checknum(){
    unum = document.getElementById("num").value;
    let regexnum =  /(0|91)?[6-9][0-9]{9}/;
  
    const numValid = regexnum.test(unum);
    nms = document.getElementById("n")
    if(numValid){
        nms.innerHTML = "Valid Number";
        nms.style.color = "Green";
        return true;
    }
    else{
        nms.innerHTML = "Invalid Number";
        nms.style.color = "red";
        return false;
    }
}

function checklog(){

    let show = document.getElementById("nlog");
    if(checkUser() == 1){
        if(checkpass() == 1){
            if(checknum() == 1){
                return window.open("loginpage.html");
            }
            else{
                show.innerHTML = "Invalid Mobile Number";
                show.style.color = "red";
            }
        }
        else{
            show.innerHTML = "Invalid Password";
            show.style.color = "red";
        }    
    }
    else{
        show.innerHTML = "Invalid User Name";
        show.style.color = "red";
    }
}




// function checklog(){
//     us = document.getElementById("user").value;
//     up = document.getElementById("pass").value;
//     unum = document.getElementById("num").value;
    
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const isValid = emailPattern.test(us);

//     let regexpass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
//     const passValid = regexpass.test(up);

//     let regexnum =  /(0|91)?[6-9][0-9]{9}/;
//     const numValid = regexnum.test(unum);

//     if(isValid == 1 && passValid == 1 && numValid == 1){
//         return window.open("loginpage.html");
//     }
//     else{
//         alert("Invalid Input");
//     }
// }







// function checklog(){
//     uname = document.getElementById("user").val;
//     password = document.getElementById("pass").value;
//     number = document.get
// }

