a = "day 06";
console.log(a);
images = ["image1.jpg","image2.jpg","image3.jpeg","image4.jpeg"];
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
