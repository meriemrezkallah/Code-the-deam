  // declaration of variable needed 
  let button = document.querySelector('#button')
  let buttons = document.querySelector('#buttons')
  let title = document.querySelector('#title')
  let producer = document.querySelector('#producer')
  let director = document.querySelector('#director')
  let loading = document.querySelector('#loading')
  let release_date = document.querySelector('#release_date')
  const item=document.querySelector('#item');

  
  
 //main where to start the program 
  async function getFilms(){
            generateDataLoading();
            // we have 6 films and i chosed 10 to handle errors
            let randomnum = Math.floor((Math.random()*10+1));
            const api_url = 'https://swapi.dev/api/films/'+randomnum;
            const response= await fetch(api_url);
            const data = await response.json();
            if(response.ok){
                
                  generateData(data);
            
                    fetchAll(data.characters);
                  
            }if(!response.ok){
                generateDataFail();
              }
 }



//get information about  the films   
 async function moreInfo(value){
  const response= await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  console.log(value)
  data.results.forEach(item => {
      if(item.name === value){
      console.log(value)
      console.log(item.name)
      console.log(" Name: " + item.name + " | Gender: " + item.gender + " | Birth Year: " + item.birth_year + " | Skin Color: " + item.skin_color + " | Hair Color: " + item.hair_color)
      window.alert(" Name: " + item.name + " | Gender: " + item.gender + " | Birth Year: " + item.birth_year + " | Skin Color: " + item.skin_color + " | Hair Color: " + item.hair_color);
      }
  
  }
   ) }


// generate data
 function generateData(data) {

  loading.innerHTML =''
  title.innerText = data.title
  producer.innerText = data.producer
  director.innerText = data.director
  release_date.innerHTML = data.release_date

}


//to return the name of people 
 const fetchAll = async (urls) => {
                let output = "";
                const res = await Promise.all(urls.map(u => fetch(u)))
                const jsons = await Promise.all(res.map(r => r.json()))
                console.log(jsons)
                jsons.forEach(data=>{
                          console.log(data.name)
                        return output+= `  <label  class="btn btn-primary ">
                            <input type="radio" name="options" autocomplete="off"> ${data.name} 
                        </label>`;
              })
item.innerHTML = output;
}


//loading data
function generateDataLoading() {
  loading.innerHTML='<img src="./loading-buffering.gif" width="50" height="50">'
  title.innerText = ''
  producer.innerText = ''
  director.innerText = ''
  release_date.innerHTML = ''
  item.innerHTML= '<img src="./loading-buffering.gif" width="50" height="50">'
}


// to handle errors
function generateDataFail() {
  loading.innerText = 'Error'
  title.innerText = ''
  director.innerText = ''
  release_date.innerText = ''
  producer.innerHTML=''
  item.innerText = ''
}


//buttpn Next
button.addEventListener('click', getFilms);
//buttons to redirecte and retrieve the information about people
document.querySelector('#buttons').addEventListener('click', e => {
moreInfo(e.target.textContent.trim());
})