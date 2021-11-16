//Primary tags, Play, Work, School
var primaryTag1 = document.getElementById('primaryTag1')
var primaryTag2 = document.getElementById('primaryTag2')
var primaryTag3 = document.getElementById('primaryTag3')

var searchKeyword1 = ""
var searchKeyword2 = ""
var searchKeyword3 = ""
var searchKeyword4 = ""
var searchKeyword5 = ""
var searchKeyword6 = ""
var searchKeyword7 = ""

//$(document).ready(function () {
console.log("ready!")
//Sets Tag text based on primary Tag press
//TODO: use arrays to simplify code
$("#primaryTag1").click(function () {
    console.log('primaryTag1')
    $("#primaryTag1").toggleClass('on')
    $("#primaryTag2, #primaryTag3").removeClass('on')

    $('#secondaryTag1').children().text("Painting")
    $('#secondaryTag2').children().text("Crochet")
    $('#secondaryTag3').children().text("Music")
    $('#secondaryTag4').children().text("Creative Writing")
    $('#secondaryTag5').toggle(true).children().text("Coding")
    $('#secondaryTag6').toggle(true).children().text("Digital Art")
    $('#secondaryTag7').toggle(true).children().text("Classical Art")
});
$("#primaryTag2").click(function () {
    console.log('primaryTag2')
    $('#primaryTag2').toggleClass('on')
    $("#primaryTag1, #primaryTag3").removeClass('on')

    $('#secondaryTag1').children().text("Team building")
    $('#secondaryTag2').children().text("Management")
    $('#secondaryTag3').children().text("Customer Service")
    $('#secondaryTag4').children().text("Time Management")
    $('#secondaryTag5').toggle(false).children().text("")
    $('#secondaryTag6').toggle(false).children().text("")
});
$("#primaryTag3").click(function () {
    console.log('primaryTag3')
    $('#primaryTag3').toggleClass('on')
    $("#primaryTag1, #primaryTag2").removeClass('on')

    $('#secondaryTag1').children().text("Essays")
    $('#secondaryTag2').children().text("Studying")
    $('#secondaryTag3').children().text("Testing")
    $('#secondaryTag4').children().text("Time Management")
    $('#secondaryTag5').toggle(false).children().text("")
    $('#secondaryTag6').toggle(false).children().text("")
});

//Sets keywords for search in settings
$('#secondaryTag1').click(function () {
    if ($('#primaryTag1').hasClass('on')) {
        searchKeyword1 = " painting"
        console.log(searchKeyword1)
        return
    }
    if ($('#primaryTag2').hasClass('on')) {
        searchKeyword1 = " team building"
        console.log(searchKeyword1)
        return
    }
    if ($('#primaryTag3').hasClass('on')) {
        searchKeyword1 = " essays"
        console.log(searchKeyword1)
        return
    }
})
$('#secondaryTag2').click(function () {
    if ($('#primaryTag1').hasClass('on')) {
        searchKeyword2 = " crochet"
        console.log(searchKeyword2)
        return
    }
    if ($('#primaryTag2').hasClass('on')) {
        searchKeyword2 = " management"
        console.log(searchKeyword2)
        return
    }
    if ($('#primaryTag3').hasClass('on')) {
        searchKeyword2 = " studying"
        console.log(searchKeyword2)
        return
    }
})
$('#secondaryTag3').click(function () {
    if ($('#primaryTag1').hasClass('on')) {
        searchKeyword3 = " music"
        console.log(searchKeyword3)
        return
    }
    if ($('#primaryTag2').hasClass('on')) {
        searchKeyword3 = " customer service"
        console.log(searchKeyword3)
        return
    }
    if ($('#primaryTag3').hasClass('on')) {
        searchKeyword3 = " testing"
        console.log(searchKeyword3)
        return
    }
})
$('#secondaryTag4').click(function () {
    if ($('#primaryTag1').hasClass('on')) {
        searchKeyword4 = " creative writing"
        console.log(searchKeyword4)
        return
    }
    if ($('#primaryTag2').hasClass('on')) {
        searchKeyword4 = " time management"
        console.log(searchKeyword4)
        return
    }
    if ($('#primaryTag3').hasClass('on')) {
        searchKeyword4 = " time management"
        console.log(searchKeyword4)
        return
    }
})
$('#secondaryTag5').click(function () {
    if ($('#primaryTag1').hasClass('on')) {
        searchKeyword5 = " coding"
        console.log(searchKeyword5)
        return
    }
})
$('#secondaryTag6').click(function () {
    if ($('#primaryTag1').hasClass('on')) {
        searchKeyword6 = " digital art"
        console.log(searchKeyword6)
        return
    }
})
$('#secondaryTag7').click(function () {
    
    if ($('#primaryTag1').hasClass('on')) {
        searchKeyword7 = " classical art"
        console.log(searchKeyword7)
        return
    }
})


//settings for ajax request from API on button press
$('#submitButton').click(function () {
    console.log('button pressed with keywords' + searchKeyword1 + searchKeyword2 + searchKeyword3 + searchKeyword4 + searchKeyword5 + searchKeyword6 + searchKeyword7)
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://learning-objects-v2.p.rapidapi.com/search?keywords=" + searchKeyword1 + searchKeyword2 + searchKeyword3 + searchKeyword4 + searchKeyword5 + searchKeyword6 + "&lang=en&sort=popularity&model=strict&max=10&page=0",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "learning-objects-v2.p.rapidapi.com",
            "x-rapidapi-key": "4b7db33ab6msh45b94f727f01691p1606f5jsn1f672badea4c"
        }
    }
    $.ajax(settings).done(function (response) {


        console.log(response)
    })
})
//})

//searchKeywords affected by tag

//API call with chosen settings
var search = document.querySelector(".button")
var chicagoInstitute = 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number=3'

// funtion to fech data from th API
// function searchBtn(){

fetch(chicagoInstitute)
.then(function(response){
return response.json();
})
.then(function(data){

    
     console.log(data);
    // $("#option1").text(data);
     
     // funtion to get info for subcategory options 1 and 2
   
    console.log(data.data[0].title);
     console.log(data.data[0].artist_display);
      console.log(data.data[0].date_display);
      console.log(data.config.website_url);
      console.log(data.config.iiif_url);
     
    
});


// }
