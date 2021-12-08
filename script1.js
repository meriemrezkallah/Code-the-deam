let test = document.querySelector('#test')
let Name = document.querySelector('#name')
function getData() {
   await fetch('https://www.swapi.tech/api/people/1')
        .then(res => res.json())
       .then(data => {
           
           //test.innerHTML = data.result.properties.gender;
           Name.textContent =data.result.properties.name;
           test.textContent = data.result.properties.gender
        })
        
}

//t = document.getElementsByClassName("count")[0];

getData();

