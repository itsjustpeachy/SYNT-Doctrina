var searchKeyword1 = ""
var searchKeyword2 = ""
var searchKeyword3 = ""
var searchKeyword4 = ""
var searchKeyword5 = ""
var searchKeyword6 = ""

//Primary tags, Play, Work, School
var primaryTag1 = document.getElementById('primaryTag1')
var primaryTag2 = document.getElementById('primaryTag2')
var primaryTag3 = document.getElementById('primaryTag3')

//Secondary Tags, dependent on primaryTag
//var secondaryTag1 = document.getElementById('secondaryTag1')
//var secondaryTag2 = document.getElementById('secondaryTag2')
//var secondaryTag3 = document.getElementById('secondaryTag3')
//var secondaryTag4 = document.getElementById('secondaryTag4')
//var secondaryTag5 = document.getElementById('secondaryTag5')
//var secondaryTag6 = document.getElementById('secondaryTag6')

//var secondaryTag1_p = secondaryTag1.getElementsByClassName('title')
//var secondaryTag2_p = secondaryTag2.getElementsByClassName('title')
//var secondaryTag3_p = secondaryTag3.getElementsByClassName('title')
//var secondaryTag4_p = secondaryTag4.getElementsByClassName('title')
//var secondaryTag5_p = secondaryTag5.getElementsByClassName('title')
//var secondaryTag6_p = secondaryTag6.getElementsByClassName('subtitle')

//settings for ajax request from API
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://learning-objects-v2.p.rapidapi.com/search?keywords=" + searchKeyword1 + "&lang=en&type=video&sort=popularity&model=strict&max=10&page=0",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "learning-objects-v2.p.rapidapi.com",
        "x-rapidapi-key": "4b7db33ab6msh45b94f727f01691p1606f5jsn1f672badea4c"
    }
};

$(document).ready(function () {
    console.log("ready!")
//Sets Tag text based on primary Tag press
    $("#primaryTag1").click(function () {
        console.log('primaryTag1 clicked!')
        $('#secondaryTag1').children().text("Painting")
        $('#secondaryTag2').children().text("Crochet")
        $('#secondaryTag3').children().text("Music")
        $('#secondaryTag4').children().text("Creative Writing")
        $('#secondaryTag5').toggle(true).children().text("Coding")
        $('#secondaryTag6').toggle(true).children().text("Digital Art")
    });
    $("#primaryTag2").click(function () {
        console.log('primaryTag2 clicked!')
        $('#secondaryTag1').children().text("Team building")
        $('#secondaryTag2').children().text("Management")
        $('#secondaryTag3').children().text("Customer Service")
        $('#secondaryTag4').children().text("Time Management")
        $('#secondaryTag5').toggle(false).children().text("")
        $('#secondaryTag6').toggle(false).children().text("")
    });
    $("#primaryTag3").click(function () {
        console.log('primaryTag3 clicked!')
        $('#secondaryTag1').children().text("Essays")
        $('#secondaryTag2').children().text("Studying")
        $('#secondaryTag3').children().text("Testing")
        $('#secondaryTag4').children().text("Time Management")
        $('#secondaryTag5').toggle(false).children().text("")
        $('#secondaryTag6').toggle(false).children().text("")
    });
    
});

//API call with chosen settings
//$.ajax(settings).done(function (response) {
//    console.log(response);
//});

