// Your code here
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Content loaded");
    getAllCuties()
});

function getAllCuties(){
    fetch('http://localhost:3000/characters')
    .then(resp=>resp.json())
    .then(cuties=>{
        console.log(cuties);
    })
}


// console.log("Some changes")
