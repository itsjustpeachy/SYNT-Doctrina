
var search = document.querySelector(".button")
var chicagoInstitute = 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number=3'

// funtion to fech data from th API
// function searchBtn(){

fetch(chicagoInstitute)
.then(function(response){
return response.json();
})
.then(function(data){
search.addEventListener("click", ()=>{
    console.log(data);
    // $("#option1").text(data);
     
     // funtion to get info for subcategory options 1 and 2
   
     $("#option1").text(data.data[0].title);
     console.log(data);
     $("#option2").text(data[1]);
     console.log("option 2")
     $("option3").text(data[2]);
     console.log("option 3")
     



    });
});


// }
