images = ["RRR.jpg","bhul.jpeg"];
let cnt = 0;
function Changeimg(){
    cnt = (cnt + 1)%images.length;
    inpic = document.getElementById("pic")
    inpic.src = images[cnt]
    

}

function Preimg(){
    cnt = (cnt - 1 + images.length)%images.length;
    inpic = document.getElementById("pic")
    inpic.src = images[cnt]
}


