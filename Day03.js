var a = "Hello"
console.log(a)

fruits = ["apple", "kiwi", "banana", "mango"]

//Simplw for loop
// for(i = 0; i< array.length;i++){
//     console.log(array[i])
// }

//for in loop
// for(frt in array){
//     console.log(frt)
// }
for(fr of fruits){
    console.log(fr)
    var hh = document.querySelector(".two")
    hh.innerHTML += fr + " " ;
    
}