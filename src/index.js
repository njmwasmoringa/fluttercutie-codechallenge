// Your code here
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Content loaded");
    getAllCuties()
});

function getAllCuties(){
    fetch('https://my-json-server.typicode.com/njmwasmoringa/fluttercutie-codechallenge/characters')
    .then(resp=>resp.json())
    .then(cuties=>{
        console.log(cuties);
    })
}


// console.log("Some changes")
