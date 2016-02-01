/************************************************************
******************* ):GLOBAL VARIABLES:( ********************
************************************************************/

var imageListFirst = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg"];
var imageListSecond = ["images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg", "images/17.jpg", "images/18.jpg", "images/19.jpg", "images/20.jpg", "images/21.jpg", "images/22.jpg", "images/23.jpg", "images/24.jpg"];
var imageListThird = ["images/25.jpg", "images/26.jpg", "images/27.jpg", "images/28.jpg", "images/29.jpg", "images/30.jpg", "images/31.jpg", "images/32.jpg", "images/33.jpg", "images/34.jpg", "images/35.jpg", "images/36.jpg"];
var imageListFourth = ["images/37.jpg", "images/38.jpg", "images/39.jpg", "images/40.jpg", "images/41.jpg", "images/42.jpg", "images/43.jpg", "images/44.jpg", "images/45.jpg", "images/46.jpg", "images/47.jpg", "images/48.jpg"];
var imageListFifth = ["images/49.jpg", "images/50.jpg", "images/51.jpg", "images/52.jpg", "images/53.jpg", "images/54.jpg", "images/55.jpg", "images/56.jpg", "images/57.jpg", "images/58.jpg", "images/59.jpg", "images/60.jpg"];
var requiredMatches = undefined;
var count = 0;
var moves = 0;
var score = 0;
var lives = 3;
var id1 = '';
var id2 = '';
var timeCounter = 0;
var timeScore = undefined;

/************************************************************
************************ FUNCTIONS **************************
************************************************************/

function generateFirstPage(e) {    
    requiredMatches = $('#n1').val();
    if(requiredMatches >=2 && requiredMatches <= 12) {
        e.preventDefault();
        $('.firstnum').hide();
        var listHTML = '';
        imageArray = randomImages(imageListFirst, requiredMatches);
        for(var i = 0; i < requiredMatches; i++)   {
            listHTML += '<li><img src="' + imageArray[i] + '"></li>';
        }
        imageListFirst = imageListFirst.concat(imageArray);
        $('.firstleft').html(listHTML);
        listHTML = '';
        for(var i = 0; i < requiredMatches; i++)   {
            listHTML += '<li><img src="' + randomize(imageArray) + '"></li>';
        }
        $('.firstright').html(listHTML);
        resizeImages();
        startTimer();
        $("#PairMatch").fadeIn();
    }
    
}

/*function generateSecondPage(e) {
    requiredMatches = $('#n2').val();
    if(requiredMatches >=2 && requiredMatches <= 12)   {
       e.preventDefault();
       $('.secondnum').hide();
       var listHTML = '';
       imageArray = randomImages(imageListSecond, requiredMatches);
       for(var i = 0; i < requiredMatches; i++)   {
        listHTML += '<li><img src="' + imageArray[i] + '"></li>';
    }
    imageListSecond = imageListSecond.concat(imageArray);
    $('.secondleft').html(listHTML);
    listHTML = '';
    for(var i = 0; i < requiredMatches; i++)   {
        listHTML += '<li><img src="' + randomize(imageArray) + '"></li>';
    }
    $('.secondright').html(listHTML);
    resizeImages();
    startTimer();
    $("#SneakySilhouettes").fadeIn();
}

}*/

function generateThirdPage(e) {
    requiredMatches = $('#n3').val();
    if(requiredMatches >=2 && requiredMatches <= 12) {
        e.preventDefault();  
        $('.thirdnum').hide();
        var listHTML = '';
        imageArray = randomImages(imageListThird, requiredMatches);
        for(var i = 0; i < requiredMatches; i++)   {
            listHTML += '<li><img src="' + imageArray[i] + '"></li>';
        }
        imageListThird = imageListThird.concat(imageArray);
        $('.thirdleft').html(listHTML);
        listHTML = '';
        for(var i = 0; i < requiredMatches; i++)   {
            listHTML += '<li><img src="' + randomize(imageArray) + '"></li>';
        }
        $('.thirdright').html(listHTML);
        resizeImages();
        startTimer();
        $("#SuperShapes").fadeIn();
    }
    
}

function generateFourthPage(e) {
    requiredMatches = $('#n4').val();
    if(requiredMatches >=2 && requiredMatches <= 12) {
       e.preventDefault();
       $('.fourthnum').hide();
       var listHTML = '';
       imageArray = randomImages(imageListFourth, requiredMatches);
       for(var i = 0; i < requiredMatches; i++)   {
        listHTML += '<li><img src="' + imageArray[i] + '"></li>';
    }
    imageListFourth = imageListFourth.concat(imageArray);
    $('.fourthleft').html(listHTML);
    listHTML = '';
    var imageNumberArray = matchPictures(imageArray);
    for(var i = 0; i < requiredMatches; i++)   {
        listHTML += '<li><img src="' + randomize(imageNumberArray) + '"></li>';
    }
    $('.fourthright').html(listHTML);
    resizeImages();
    startTimer();
    $("#CoolCounting").fadeIn();
}

}

function randomImages(tableName, num) {
    var imagesToReturn = [];
    for(; num > 0; num--)   {
        imageNumber = Math.floor(Math.random()*tableName.length);
        imagesToReturn.push(tableName.splice(imageNumber, 1));
    }
    return imagesToReturn;
}

function randomize(tableName) {
    var imageToReturn = '';
    imageNumber = Math.floor(Math.random()*tableName.length);
    imageToReturn = tableName[imageNumber];
    tableName.splice(imageNumber, 1);
    return imageToReturn;
}

function matchPictures(images)  {
    var imageLength = images.length;
    var imageArray = [];
    for(var i = 0; i < imageLength; i++)        {
        if(images[i] == "images/37.jpg"){
          imageArray.push(imageListFifth[0]);
      }
      else if(images[i] == "images/38.jpg"){
        imageArray.push(imageListFifth[1]);
    }
    else if(images[i] == "images/39.jpg"){
        imageArray.push(imageListFifth[2]);
    }
    else if(images[i] == "images/40.jpg"){
        imageArray.push(imageListFifth[3]);
    }
    else if(images[i] == "images/41.jpg"){
        imageArray.push(imageListFifth[4]);
    }
    else if(images[i] == "images/42.jpg"){
        imageArray.push(imageListFifth[5]);
    }
    else if(images[i] == "images/43.jpg"){
        imageArray.push(imageListFifth[6]);
    }
    else if(images[i] == "images/44.jpg"){
        imageArray.push(imageListFifth[7]);
    }
    else if(images[i] == "images/45.jpg"){
        imageArray.push(imageListFifth[8]);
    }
    else if(images[i] == "images/46.jpg"){
        imageArray.push(imageListFifth[9]);
    }
    else if(images[i] == "images/47.jpg"){
        imageArray.push(imageListFifth[10]);
    }
    else if(images[i] == "images/48.jpg"){
        imageArray.push(imageListFifth[11]);
    }

}
return imageArray;
}

function correctMatch(id1, id2) {
    if((id1 == "images/37.jpg" && id2 == "images/49.jpg") || (id1 == "images/49.jpg" && id2 == "images/37.jpg")){
        return true;
    }
    else if((id1 == "images/38.jpg" && id2 == "images/50.jpg") || (id1 == "images/50.jpg" && id2 == "images/38.jpg")){
        return true;
    }
    else if((id1 == "images/39.jpg" && id2 == "images/51.jpg") || (id1 == "images/51.jpg" && id2 == "images/39.jpg")){
        return true;
    }
    else if((id1 == "images/40.jpg" && id2 == "images/52.jpg") || (id1 == "images/52.jpg" && id2 == "images/40.jpg")){
        return true;
    }
    else if((id1 == "images/41.jpg" && id2 == "images/53.jpg") || (id1 == "images/53.jpg" && id2 == "images/41.jpg")){
        return true;
    }
    else if((id1 == "images/42.jpg" && id2 == "images/54.jpg") || (id1 == "images/54.jpg" && id2 == "images/42.jpg")){
        return true;
    }
    else if((id1 == "images/43.jpg" && id2 == "images/55.jpg") || (id1 == "images/55.jpg" && id2 == "images/43.jpg")){
        return true;
    }
    else if((id1 == "images/44.jpg" && id2 == "images/56.jpg") || (id1 == "images/56.jpg" && id2 == "images/44.jpg")){
        return true;
    }
    else if((id1 == "images/45.jpg" && id2 == "images/57.jpg") || (id1 == "images/57.jpg" && id2 == "images/45.jpg")){
        return true;
    }
    else if((id1 == "images/46.jpg" && id2 == "images/58.jpg") || (id1 == "images/58.jpg" && id2 == "images/46.jpg")){
        return true;
    }
    else if((id1 == "images/47.jpg" && id2 == "images/59.jpg") || (id1 == "images/59.jpg" && id2 == "images/47.jpg")){
        return true;
    }
    else if((id1 == "images/48.jpg" && id2 == "images/60.jpg") || (id1 == "images/60.jpg" && id2 == "images/48.jpg")){
        return true;
    }
    else
        return false;
}

function resizeImages() {
    switch(requiredMatches) {
        case '6':
        $('li img').height(840 / requiredMatches + 'px');
        $('table ul').css('padding-left', '5px');
        break;
        case '7':
        $('li img').height(830 / requiredMatches + 'px');
        $('table ul').css('padding-left', '10px');
        break;
        case '8':
        $('li img').height(820 / requiredMatches + 'px');
        $('table ul').css('padding-left', '15px');
        break;
        case '9':
        $('li img').height(810 / requiredMatches + 'px');
        $('table ul').css('padding-left', '25px');
        break;
        case '10':
        $('li img').height(800 / requiredMatches + 'px');
        $('table ul').css('padding-left', '30px');
        break;
        case '11':
        $('li img').height(790 / requiredMatches + 'px');
        $('table ul').css('padding-left', '35px');
        break;
        case '12':
        $('li img').height(780 / requiredMatches + 'px');
        $('table ul').css('padding-left', '40px');
        break;
        default:
        $('table ul').css('padding-left', '5px');
        break;
    }
}

function startTimer()    {

    timeScore = setInterval(function() {
        timeCounter++;
        $('#timer').text(timeCounter + " seconds");
    }, 1000);
}

function stopTimer()    {
    clearInterval(timeScore);
}

function resetTimer()   {
    timeCounter = 0;
    $('#timer').text(timeCounter + " seconds");
}

function gameLost() {
    stopTimer();
    $('li img').addClass('disabled');
    $('#playagain').fadeIn();
    $('.msg').html('YOU LOST :(');
        $('.msg').removeClass('green');
        $('.msg').addClass('red');
        lives = 3;
    }

/*function hideDescription()  {
    if(id1.closest('div').attr('id') == "PairMatch")    {
        $('#PairMatch .description').hide();
    }
    if(id1.closest('div').attr('id') == "SuperShapes")    {
        $('#SuperShapes .description').hide();
    }
    if(id1.closest('div').attr('id') == "CoolCounting")    {
        $('#CoolCounting .description').hide();
    }
}*/

/************************************************************
********************* DOCUMENT READY ************************
************************************************************/


$(document).ready(function()    {
    $("#homepage").hide();
    $('.row').hide();
    $("#PairMatch").hide();
    $("#SneakySilhouettes").hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    $('.vnavbar').hide();
    $('.firstnum').hide();
    $('.secondnum').hide();
    $('.thirdnum').hide();
    $('.fourthnum').hide();
    $("#homepage").fadeIn();
    $('.row').fadeIn();

/************************************************************
************************ BUTTONS ****************************
************************************************************/

$('#firstbtn').click(generateFirstPage);
    //$('#secondbtn').click(generateSecondPage);
    $('#thirdbtn').click(generateThirdPage);
    $('#fourthbtn').click(generateFourthPage);

    $(".homebutton").click(function(){
        $('.msg').html('');
        stopTimer();
        resetTimer();
        lives = 3;
        score = 0;
        moves = 0;
        $("#homepage").fadeIn();
        $('.row').fadeIn();
        $("#PairMatch").hide();
        $("#SneakySilhouettes").hide();
        $("#SuperShapes").hide();
        $("#CoolCounting").hide();
        $('.vnavbar').hide();
        $('.firstnum').hide();
        $('.secondnum').hide();
        $('.thirdnum').hide();
        $('.fourthnum').hide();
        $('.score').hide();
        $('.playagain').hide();
        $('li img').removeClass('disabled');
        $('.ssbutton').prop('disabled', false);
        $('.sssbutton').prop('disabled', false);
        $('.pmbutton').prop('disabled', false);
        $('.ccbutton').prop('disabled', false);
    }); 
    $(".pmbutton").click(function(){
        $('.msg').html('');
        stopTimer();
        resetTimer();
        lives = 3;
        score = 0;
        moves = 0;
        $('.vnavbar button').removeClass('active');
        $('.vnavbar .pmbutton').addClass('active');
        $('.vnavbar').hide();
        $('.firstnum').hide();
        $(".row").hide();
        $("#SneakySilhouettes").hide();
        $("#SuperShapes").hide();
        $("#CoolCounting").hide();
        $('#homepage').hide();
        $('.vnavbar').fadeIn();
        $('.firstnum').fadeIn();
        $('.secondnum').hide();
        $('.thirdnum').hide();
        $('.fourthnum').hide();
        $('.playagain').fadeIn();
        $('#playagain').hide();        
        $('.timerdiv').fadeIn();
        $('#scorenum').text(score+"/"+moves);
        $('.score').fadeIn();
        $('li img').removeClass('disabled');
        $('.ssbutton').prop('disabled', false);
        $('.sssbutton').prop('disabled', false);
        $('.ccbutton').prop('disabled', false);
        $('.pmbutton').prop('disabled', true);
        $('#timer').text(timeCounter + " seconds");
        $('#livesleft').text('Lives : ' + lives);
    }); 
$(".ssbutton").click(function(){
    $('.msg').html('');
    stopTimer();
    resetTimer();
    lives = 3;
    score = 0;
    moves = 0;
    $('.vnavbar button').removeClass('active');
    $('.vnavbar .ssbutton').addClass('active');
    $('.vnavbar').hide();
    $('.secondnum').hide();
    $(".row").hide();
    $("#PairMatch").hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    $('#homepage').hide();
    $('.vnavbar').fadeIn();
    $('.firstnum').hide();
    $('.secondnum').fadeIn();
    $('.thirdnum').hide();
    $('.fourthnum').hide();
    $('.playagain').fadeIn();
    $('#playagain').hide();        
    $('.timerdiv').fadeIn();
    $('#scorenum').text(score+"/"+moves);
    $('.score').fadeIn();
    $('li img').removeClass('disabled');
    $('.ssbutton').prop('disabled', true);
    $('.pmbutton').prop('disabled', false);
    $('.sssbutton').prop('disabled', false);
    $('.ccbutton').prop('disabled', false);
    $('#timer').text(timeCounter + " seconds");
    $('#livesleft').text('Lives : ' + lives);
}); 
$(".sssbutton").click(function(){
    $('.msg').html('');
    stopTimer();
    resetTimer();
    lives = 3;
    score = 0;
    moves = 0;
    $('.vnavbar button').removeClass('active');
    $('.vnavbar .sssbutton').addClass('active');
    $('.vnavbar').hide();
    $('.thirdnum').hide();
    $(".row").hide();
    $("#PairMatch").hide();
    $("#SneakySilhouettes").hide();
    $("#CoolCounting").hide();
    $('#homepage').hide();
    $('.vnavbar').fadeIn();
    $('.firstnum').hide();
    $('.secondnum').hide();
    $('.thirdnum').fadeIn();
    $('.fourthnum').hide();
    $('.playagain').fadeIn();
    $('#playagain').hide();        
    $('.timerdiv').fadeIn();
    $('#scorenum').text(score+"/"+moves);
    $('.score').fadeIn();
    $('li img').removeClass('disabled');
    $('.sssbutton').prop('disabled', true);
    $('.ssbutton').prop('disabled', false);
    $('.pmbutton').prop('disabled', false);
    $('.ccbutton').prop('disabled', false);
    $('#timer').text(timeCounter + " seconds");
    $('#livesleft').text('Lives : ' + lives);
}); 
$(".ccbutton").click(function(){
    $('.msg').html('');
    stopTimer();
    resetTimer();
    lives = 3;
    score = 0;
    moves = 0;
    $('.vnavbar button').removeClass('active');
    $('.vnavbar .ccbutton').addClass('active');
    $('.vnavbar').hide();
    $('.fourthnum').hide();
    $(".row").hide();
    $("#PairMatch").hide();
    $("#SneakySilhouettes").hide();
    $("#SuperShapes").hide();
    $('#homepage').hide();
    $('.vnavbar').fadeIn();
    $('.firstnum').hide();
    $('.secondnum').hide();
    $('.thirdnum').hide();
    $('.fourthnum').fadeIn();
    $('.playagain').fadeIn();
    $('#playagain').hide();        
    $('.timerdiv').fadeIn();
    $('#scorenum').text(score+"/"+moves);
    $('.score').fadeIn();
    $('li img').removeClass('disabled');
    $('.ccbutton').prop('disabled', true);
    $('.ssbutton').prop('disabled', false);
    $('.sssbutton').prop('disabled', false);
    $('.pmbutton').prop('disabled', false);
    $('#timer').text(timeCounter + " seconds");
    $('#livesleft').text('Lives : ' + lives);
}); 

$('#playagain').on('click', function()    {
    $(this).hide();
    resetTimer();
    lives = 3;
    score = 0;
    moves = 0;
    $('#livesleft').text('Lives : ' + lives);
    $('#scorenum').text(score+"/"+moves);
    $('li img').removeClass('disabled');
    $('.msg').html('');
    $('#PairMatch').hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    if($('.pmbutton').prop("disabled"))   {
        $('.firstnum').fadeIn();
    }
    else if($('.sssbutton').prop("disabled")) {
        $('.thirdnum').fadeIn();
    }
    else if($('.ccbutton').prop("disabled")) {
        $('.fourthnum').fadeIn();
    }
});

/************************************************************
************************ TABLE BUTTONS **********************
************************************************************/

//LEFT TABLE FOR PAIR MATCH AND SUPER SHAPES
$('.firstleft, .secondleft, .thirdleft').on('click', 'img', function()   {
    $(this).toggleClass('leftselected');
    count++;
    if(count == 1)  {
        id1 = $(this);
    }
    if(count == 2)  {
        count = 0;
        if(id1 = $(this))   {
            $(this).removeClass('leftselected');
            return;
        }
        moves++;
        id2 = $(this);
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class'))  {
            lives--;
            $('#livesleft').effect("shake", {times:3}, 600);
            $('#livesleft').text('Lives : ' + lives);
            if(lives == 0)  {
                gameLost();
                return;
            }
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('ERROR: SELECT ONE FROM EACH SIDE!');
            $('.msg').addClass('red');
            $('.msg').fadeIn();
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
        }
        else if(id1.attr('src') != id2.attr('src')) {
            lives--;
            $('#livesleft').effect("shake", {times:3}, 600);
            $('#livesleft').text('Lives : ' + lives);
            if(lives == 0)  {
                gameLost();
                return;
            }
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('INCORRECT MATCH');
            $('.msg').removeClass('green');
            $('.msg').addClass('red');
            $('.msg').fadeIn();
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
        }
        else    {
            score++;
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('CORRECT MATCH');
            $('.msg').removeClass('red');
            $('.msg').addClass('green');
            $('.msg').fadeIn();
            id1.addClass('complete');
            id2.addClass('complete');
            id1.addClass('disabled');
            id2.addClass('disabled');
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
            requiredMatches--;
        }
    }
    if(requiredMatches == 0)    {
        stopTimer();
        $('#playagain').fadeIn();
        $('.msg').html('CONGRATULATIONS!');
        $('.msg').removeClass('red');
        $('.msg').addClass('green');
    }
});

//RIGHT TABLE FOR PAIR MATCH AND SUPER SHAPES
$('.firstright, .secondright, .thirdright').on('click', 'img', function()   {
    $(this).toggleClass('rightselected');
    count++;
    if(count == 1)  {
        id1 = $(this);
    }
    if(count == 2)  {
        count = 0;
        if(id1 = $(this))   {
            $(this).removeClass('rightselected');
            return;
        }
        moves++;
        id2 = $(this);
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class'))  {
            lives--;
            $('#livesleft').effect("shake", {times:3}, 600);
            $('#livesleft').text('Lives : ' + lives);
            if(lives == 0)  {
                gameLost();
                return;
            }
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('ERROR: SELECT ONE FROM EACH SIDE!');
            $('.msg').removeClass('green');
            $('.msg').addClass('red');
            $('.msg').fadeIn();
            id1.removeClass('rightselected');
            id2.removeClass('rightselected');
        }
        else if(id1.attr('src') != id2.attr('src')) {
            lives--;
            $('#livesleft').effect("shake", {times:3}, 600);
            $('#livesleft').text('Lives : ' + lives);
            if(lives == 0)  {
                gameLost();
                return;
            }
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('INCORRECT MATCH');
            $('.msg').removeClass('green');
            $('.msg').addClass('red');
            $('.msg').fadeIn();
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
        }
        else    {
            score++;
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('CORRECT MATCH');
            $('.msg').removeClass('red');
            $('.msg').addClass('green');
            $('.msg').fadeIn();
            id1.addClass('complete');
            id2.addClass('complete');
            id1.addClass('disabled');
            id2.addClass('disabled');
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
            requiredMatches--;
        }
    }
    if(requiredMatches == 0)    {
        stopTimer();
        $('#playagain').fadeIn();
        $('.msg').html('CONGRATULATIONS!');
        $('.msg').removeClass('red');
        $('.msg').addClass('green');
    }
});

//LEFT TABLE FOR COOL COUNTING
$('.fourthleft').on('click', 'img', function()   {
    $(this).toggleClass('leftselected');
    count++;
    if(count == 1)  {
        id1 = $(this);
    }
    if(count == 2)  {
        count = 0;
        if(id1 = $(this))   {
            $(this).removeClass('leftselected');
            return;
        }
        moves++;
        id2 = $(this);
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class'))  {
            lives--;
            $('#livesleft').effect("shake", {times:3}, 600);
            $('#livesleft').text('Lives : ' + lives);
            if(lives == 0)  {
                gameLost();
                return;
            }
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('ERROR: SELECT ONE FROM EACH SIDE!');
            $('.msg').addClass('red');
            $('.msg').fadeIn();
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
        }
        else if(!correctMatch(id1.attr('src'), id2.attr('src'))) {
            lives--;
            $('#livesleft').effect("shake", {times:3}, 600);
            $('#livesleft').text('Lives : ' + lives);
            if(lives == 0)  {
                gameLost();
                return;
            }
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('INCORRECT MATCH');
            $('.msg').removeClass('green');
            $('.msg').addClass('red');
            $('.msg').fadeIn();
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
        }
        else    {
            score++;
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('CORRECT MATCH');
            $('.msg').removeClass('red');
            $('.msg').addClass('green');
            $('.msg').fadeIn();
            id1.addClass('complete');
            id2.addClass('complete');
            id1.addClass('disabled');
            id2.addClass('disabled');
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
            requiredMatches--;
        }
    }
    if(requiredMatches == 0)    {
        stopTimer();
        $('#playagain').fadeIn();
        $('.msg').html('CONGRATULATIONS!');
        $('.msg').removeClass('red');
        $('.msg').addClass('green');
    }
});

//RIGHT TABLE FOR COOL COUNTING
$('.fourthright').on('click', 'img', function()   {
    $(this).toggleClass('rightselected');
    count++;
    if(count == 1)  {
        id1 = $(this);
    }
    if(count == 2)  {
        count = 0;
        if(id1 = $(this))   {
            $(this).removeClass('rightselected');
            return;
        }
        moves++;
        id2 = $(this);
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class'))  {
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('ERROR: SELECT ONE FROM EACH SIDE!');
            $('.msg').removeClass('green');
            $('.msg').addClass('red');
            $('.msg').fadeIn();
            id1.removeClass('rightselected');
            id2.removeClass('rightselected');
        }
        else if(!correctMatch(id1.attr('src'), id2.attr('src'))) {
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('INCORRECT MATCH');
            $('.msg').removeClass('green');
            $('.msg').addClass('red');
            $('.msg').fadeIn();
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
        }
        else    {
            score++;
            $('#scorenum').text(score+"/"+moves);
            $('.msg').html('CORRECT MATCH');
            $('.msg').removeClass('red');
            $('.msg').addClass('green');
            $('.msg').fadeIn();
            id1.addClass('complete');
            id2.addClass('complete');
            id1.addClass('disabled');
            id2.addClass('disabled');
            id1.removeClass('leftselected');
            id1.removeClass('rightselected');
            id2.removeClass('leftselected');
            id2.removeClass('rightselected');
            requiredMatches--;
        }
    }
    if(requiredMatches == 0)    {
        stopTimer();
        $('#playagain').fadeIn();
        $('.msg').html('CONGRATULATIONS!');
        $('.msg').removeClass('red');
        $('.msg').addClass('green');
    }
});

});