var searchKeyword1 = ""
var searchKeyword2 = ""
var searchKeyword3 = ""
var searchKeyword4 = ""
var searchKeyword5 = ""
var searchKeyword6 = ""

$(document).ready(function () {
    console.log("ready!")
    //Sets Tag text based on primary Tag press
    //TODO: use arrays to simplify code
    $("#primaryTag1").click(function () {
        $("#sectionID").show()
        console.log('primaryTag1')
        $("#primaryTag1").toggleClass('on')
        $("#primaryTag2, #primaryTag3").removeClass('on')

        $('#secondaryTag1').children().text("Painting")
        $('#secondaryTag2').children().text("Crochet")
        $('#secondaryTag3').children().text("Music")
        $('#secondaryTag4').children().text("Writing")
        $('#secondaryTagBox5').toggle(true)
        $('#secondaryTagBox6').toggle(true)
        $('#secondaryTag5').toggle(true).children().text("Coding")
        $('#secondaryTag6').toggle(true).children().text("Digital Art")
    });
    $("#primaryTag2").click(function () {
        $("#sectionID").show()
        console.log('primaryTag2')
        $('#primaryTag2').toggleClass('on')
        $("#primaryTag1, #primaryTag3").removeClass('on')

        $('#secondaryTag1').children().text("Team building")
        $('#secondaryTag2').children().text("Management")
        $('#secondaryTag3').children().text("Customer Service")
        $('#secondaryTag4').children().text("Time Management")
        $('#secondaryTagBox5').toggle(false)
        $('#secondaryTagBox6').toggle(false)
        $('#secondaryTag5').toggle(false).children().text("")
        $('#secondaryTag6').toggle(false).children().text("")
    });
    $("#primaryTag3").click(function () {
        $("#sectionID").show()
        console.log('primaryTag3')
        $('#primaryTag3').toggleClass('on')
        $("#primaryTag1, #primaryTag2").removeClass('on')

        $('#secondaryTag1').children().text("Essays")
        $('#secondaryTag2').children().text("Studying")
        $('#secondaryTag3').children().text("Testing")
        $('#secondaryTag4').children().text("Time Management")
        $('#secondaryTagBox5').toggle(false)
        $('#secondaryTagBox6').toggle(false)
        $('#secondaryTag5').toggle(false).children().text("")
        $('#secondaryTag6').toggle(false).children().text("")
    });

    //Sets keywords for search in settings
    $('#secondaryTag1').click(function () {
        if ($('#primaryTag1').hasClass('on')) {
            searchKeyword1 = "%20tips%20painting"
            console.log(searchKeyword1)
            return
        }
        if ($('#primaryTag2').hasClass('on')) {
            searchKeyword1 = "%20work%20team%20building"
            console.log(searchKeyword1)
            return
        }
        if ($('#primaryTag3').hasClass('on')) {
            searchKeyword1 = "%20writing%20essays"
            console.log(searchKeyword1)
            return
        }
    })
    $('#secondaryTag2').click(function () {
        if ($('#primaryTag1').hasClass('on')) {
            searchKeyword2 = "%20how%20crochet"
            console.log(searchKeyword2)
            return
        }
        if ($('#primaryTag2').hasClass('on')) {
            searchKeyword2 = "%20workplace%20management"
            console.log(searchKeyword2)
            return
        }
        if ($('#primaryTag3').hasClass('on')) {
            searchKeyword2 = "%20techniques%20studying"
            console.log(searchKeyword2)
            return
        }
    })
    $('#secondaryTag3').click(function () {
        if ($('#primaryTag1').hasClass('on')) {
            searchKeyword3 = "%20learn%20instrument"
            console.log(searchKeyword3)
            return
        }
        if ($('#primaryTag2').hasClass('on')) {
            searchKeyword3 = "%20customer%20service"
            console.log(searchKeyword3)
            return
        }
        if ($('#primaryTag3').hasClass('on')) {
            searchKeyword3 = "%20tips%20testing"
            console.log(searchKeyword3)
            return
        }
    })
    $('#secondaryTag4').click(function () {
        if ($('#primaryTag1').hasClass('on')) {
            searchKeyword4 = "%20creative%20writing"
            console.log(searchKeyword4)
            return
        }
        if ($('#primaryTag2').hasClass('on')) {
            searchKeyword4 = "%20work%20time%20management"
            console.log(searchKeyword4)
            return
        }
        if ($('#primaryTag3').hasClass('on')) {
            searchKeyword4 = "%20school%20time%20management"
            console.log(searchKeyword4)
            return
        }
    })
    $('#secondaryTag5').click(function () {
        if ($('#primaryTag1').hasClass('on')) {
            searchKeyword5 = "%20start%20coding"
            console.log(searchKeyword5)
            return
        }
    })
    $('#secondaryTag6').click(function () {
        if ($('#primaryTag1').hasClass('on')) {
            searchKeyword6 = "%20how%20digital art"
            console.log(searchKeyword6)
            return
        }
    })

    //settings for ajax request from API on button press
    $('#submitButton').click(function () {
        console.log('button pressed with keywords' + searchKeyword1 + searchKeyword2 + searchKeyword3 + searchKeyword4 + searchKeyword5 + searchKeyword6)
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://learning-objects-v2.p.rapidapi.com/search?keywords=" + searchKeyword1 + searchKeyword2 + searchKeyword3 + searchKeyword4 + searchKeyword5 + searchKeyword6 + "&lang=en&sort=popularity&model=strict&max=10&page=0",
            "method": "GET",
            //"dataType": "json",

            "headers": {
                "x-rapidapi-host": "learning-objects-v2.p.rapidapi.com",
                "x-rapidapi-key": "4b7db33ab6msh45b94f727f01691p1606f5jsn1f672badea4c"
            }
        }
        $.ajax(settings).done(function (response) {
            console.log(response)
            $("#apiBlocks").empty()
            for (let i = 0; i < 9; i++) {

                console.log(response.response.content[i])

                cardDescription = response.response.content[i].description
                cardUrl = response.response.content[i].url
                cardTitle = response.response.content[i].title
                cardProvider = response.response.content[i].type
                cardPicture = response.response.content[i].picture
                
                //Card Image div's made
                $cardImg = $("<img>").attr('src', cardPicture)
                $cardImgFig = $("<figure>").addClass("image is-4by3").append($cardImg)

                $cardImgDiv = $("<div>").addClass('card-image').append($cardImgFig)

                //Card Media Dive for Small Picture
                $cardMediaImg = $("<img>").attr('src', cardPicture)
                $cardMediaFig = $("<figure>").addClass("image is-16by9").append($cardMediaImg)
                $cardMediaSml = $("<div>").addClass("media-left").append($cardMediaFig)

                $cardMedia = $("<div>").addClass("media").append($cardMediaSml)

                //Card Media Div for Title and Provider
                $cardTitle = $("<p>").addClass("title is-4").text(cardTitle)
                $cardProvider = $("<p>").addClass("subtitle is-4").text(cardProvider)

                $cardTitleDiv = $("<div>").addClass("media-content").append($cardTitle, $cardProvider)

                //Card Description
                //$cardDesc = $("<div>").addClass("content").text("Price: " + cardDescription)

                $cardContent = $("<div>").addClass("card-content").append($cardMedia, $cardTitleDiv,)

                //creates the card div to hold Title, description, & image
                $cardDiv = $("<a>").attr('href', cardUrl).attr('target', '_blank').addClass("box column is-3").append($cardImgDiv, $cardContent)

                $("#apiBlocks").append($cardDiv)


            }
        })

    })
})