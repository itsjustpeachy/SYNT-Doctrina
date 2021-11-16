var search = document.querySelector(".button")
var chicagoInstitute = ' https://api.artic.edu/api/v1/artworks?page=2&limit=3'


function searchBtn(){
search.addEventListener("click", ()=>{
fetch(chicagoInstitute)
.then(function(response){
return response.json();
})
.then(function(data){

    console.log(data);
})
})

}