/************************************************************
******************* ):GLOBAL VARIABLES:( ********************
************************************************************/

var imageListFirst = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg"];
var imageListSecond = ["images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg", "images/17.jpg", "images/18.jpg", "images/19.jpg", "images/20.jpg", "images/21.jpg", "images/22.jpg", "images/23.jpg", "images/24.jpg"];
var imageListThird = ["images/25.jpg", "images/26.jpg", "images/27.jpg", "images/28.jpg", "images/29.jpg", "images/30.jpg", "images/31.jpg", "images/32.jpg", "images/33.jpg", "images/34.jpg", "images/35.jpg", "images/36.jpg"];
var imageListFourth = ["images/37.jpg", "images/38.jpg", "images/39.jpg", "images/40.jpg", "images/41.jpg", "images/42.jpg", "images/43.jpg", "images/44.jpg", "images/45.jpg", "images/46.jpg", "images/47.jpg", "images/48.jpg"];
var myMessages = ['warning','error','success'];
var successMessages = ["Well Done!", "Correct Match! Way to go!", "You're so good at this!", "Keep at it. You're doing fine!", "Whoopee! That's Correct!"];
var errorMessages = ['Try again!', 'Incorrect. You can do it!', "Oops! That wasn't right ):", "Uh Oh! Looks like you got the wrong match :("];
var requiredMatches = undefined;
var count = 0;
var id1 = '';
var id2 = '';
var imagesToCopy = [];
var portrait = undefined;
var random = false;
var up = false;
var down = false;
var leftImageArray = [];
var rightImageArray = [];
var xCoordinate = [];
var yCoordinate = [];
var imageWidth = undefined;
var imageHeight = undefined;
var canvas1 = document.getElementById('canvas1');
canvas1.width = 300;
var canvas2 = document.getElementById('canvas2');
canvas2.width = 300;
var canvas3 = document.getElementById('canvas3');
canvas3.width = 300;
var canvas1h = document.getElementById('canvas1h');
canvas1h.height = 215;
var canvas2h = document.getElementById('canvas2h');
canvas2h.height = 215;
var canvas3h = document.getElementById('canvas3h');
canvas3h.height = 215;
var ctx1 = undefined;
var ctx2 = undefined;
var ctx3 = undefined;
var ctx4 = undefined;

/************************************************************
************************ FUNCTIONS **************************
************************************************************/

function generateFirstPage(e) {    
    requiredMatches = $('#n1').val();
    if(requiredMatches >=2 && requiredMatches <= 12) {
        e.preventDefault();
        $('.firstnum').hide();
        var listHTML = '';
        leftImageArray = randomImages(imageListFirst, requiredMatches);
        for(var i = 0; i < requiredMatches; i++)   {
            listHTML += '<li><img src="' + leftImageArray[i] + '"></li>';
        }
        imageListFirst = imageListFirst.concat(leftImageArray);
        $('.firstleft').html(listHTML);
        random = false;
        while(random == false)	{
           rightImageArray = shuffleArray(leftImageArray);
           random = checkRandom(leftImageArray, rightImageArray);
       }
       listHTML = '';
       for(var i = 0; i < requiredMatches; i++)   {
        listHTML += '<li><img src="' + rightImageArray[i] + '"></li>';
    }
    $('.firstright').html(listHTML);
    resizeImages();
    $('.refresher').fadeIn();
    $('.refresher').css('display', 'block');

    canvasHeight(canvas1);
    ctx1 = canvas1.getContext("2d");
    ctx1.lineWidth = 3;
    ctx1.strokeStyle = "#333";
    canvasWidth(canvas1h);
    ctx2 = canvas1h.getContext("2d");
    ctx2.lineWidth = 3;
    ctx2.strokeStyle = "#333";

    $("#PairMatch").fadeIn();
}

}

function generateSecondPage(e) {
    requiredMatches = $('#n2').val();
    if(requiredMatches >=2 && requiredMatches <= 12) {
        e.preventDefault();  
        $('.secondnum').hide();
        var listHTML = '';
        leftImageArray = randomImages(imageListSecond, requiredMatches);
        for(var i = 0; i < requiredMatches; i++)   {
            listHTML += '<li><img src="' + leftImageArray[i] + '"></li>';
        }
        imageListSecond = imageListSecond.concat(leftImageArray);
        $('.secondleft').html(listHTML);
        random = false;
        while(random == false)	{
           rightImageArray = shuffleArray(leftImageArray);
           random = checkRandom(leftImageArray, rightImageArray);
       }
       listHTML = '';
       for(var i = 0; i < requiredMatches; i++)   {
        listHTML += '<li><img src="' + rightImageArray[i] + '"></li>';
    }
    $('.secondright').html(listHTML);
    resizeImages();
    $('.refresher').fadeIn();
    $('.refresher').css('display', 'block');

    canvasHeight(canvas2);
    ctx1 = canvas2.getContext("2d");
    ctx1.lineWidth = 3;
    ctx1.strokeStyle = "#333";
    canvasWidth(canvas2h);
    ctx2 = canvas2h.getContext("2d");
    ctx2.lineWidth = 3;
    ctx2.strokeStyle = "#333";

    $("#SuperShapes").fadeIn();
}

}

function generateThirdPage(e) {
    requiredMatches = $('#n3').val();
    if(requiredMatches >=2 && requiredMatches <= 12) {
       e.preventDefault();
       $('.thirdnum').hide();
       var listHTML = '';
       leftImageArray = randomImages(imageListThird, requiredMatches);
       for(var i = 0; i < requiredMatches; i++)   {
        listHTML += '<li><img src="' + leftImageArray[i] + '"></li>';
    }
    imageListThird = imageListThird.concat(leftImageArray);
    $('.thirdleft').html(listHTML);
    listHTML = '';
    rightImageArray = matchPictures(leftImageArray);
    random = false;
    while(random == false)  {
       rightImageArray = shuffleArray(rightImageArray);
       random = checkRandomThird(leftImageArray, rightImageArray);
   }
   for(var i = 0; i < requiredMatches; i++)   {
    listHTML += '<li><img src="' + rightImageArray[i] + '"></li>';
}
$('.thirdright').html(listHTML);
resizeImages();
$('.refresher').fadeIn();
$('.refresher').css('display', 'block');

canvasHeight(canvas3);
ctx1 = canvas3.getContext("2d");
ctx1.lineWidth = 3;
ctx1.strokeStyle = "#333";
canvasWidth(canvas3h);
ctx2 = canvas3h.getContext("2d");
ctx2.lineWidth = 3;
ctx2.strokeStyle = "#333";

$("#CoolCounting").fadeIn();
}

}

function checkRandom(left, right)	{
	for(var i = 0; i < requiredMatches; i++)	{
		if(left[i] == right[i])	{
			return false;
		}
	}
	return true;
}

function checkRandomThird(left,right) {
    for(var i = 0; i < requiredMatches; i++)    {
        if(left[i] == "images/25.jpg" && right[i] == "images/37.jpg" ||
            left[i] == "images/26.jpg" && right[i] == "images/38.jpg" ||
            left[i] == "images/27.jpg" && right[i] == "images/39.jpg" ||
            left[i] == "images/28.jpg" && right[i] == "images/40.jpg" ||
            left[i] == "images/29.jpg" && right[i] == "images/41.jpg" ||
            left[i] == "images/30.jpg" && right[i] == "images/42.jpg" ||
            left[i] == "images/31.jpg" && right[i] == "images/43.jpg" ||
            left[i] == "images/32.jpg" && right[i] == "images/44.jpg" ||
            left[i] == "images/33.jpg" && right[i] == "images/45.jpg" ||
            left[i] == "images/34.jpg" && right[i] == "images/46.jpg" ||
            left[i] == "images/35.jpg" && right[i] == "images/47.jpg" ||
            left[i] == "images/36.jpg" && right[i] == "images/48.jpg") {
            return false;
    }
}
return true;
}

function randomImages(tableName, num) {
    var imagesToReturn = [];
    for(; num > 0; num--)   {
        imageNumber = Math.floor(Math.random()*tableName.length);
        imagesToReturn.push(tableName.splice(imageNumber, 1));
    }
    return imagesToReturn;
}

function shuffleArray(tableName) {
	var tableToReturn = [];
	for(var i = 0; i < tableName.length; i++)	{
		tableToReturn.push(tableName[i]);
	}
    for (var i = tableName.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tableToReturn[i];
        tableToReturn[i] = tableToReturn[j];
        tableToReturn[j] = temp;
    }
    return tableToReturn;
}

function randomize(messageArray) {
    arraylen = messageArray.length;
    var i = Math.floor(Math.random() * arraylen);
    return messageArray[i];
}

function matchPictures(images)  {
    var imageLength = images.length;
    var imageArray = [];
    for(var i = 0; i < imageLength; i++)        {
        if(images[i] == "images/25.jpg")    {
          imageArray.push(imageListFourth[0]);
      }
      else if(images[i] == "images/26.jpg"){
        imageArray.push(imageListFourth[1]);
    }
    else if(images[i] == "images/27.jpg"){
        imageArray.push(imageListFourth[2]);
    }
    else if(images[i] == "images/28.jpg"){
        imageArray.push(imageListFourth[3]);
    }
    else if(images[i] == "images/29.jpg"){
        imageArray.push(imageListFourth[4]);
    }
    else if(images[i] == "images/30.jpg"){
        imageArray.push(imageListFourth[5]);
    }
    else if(images[i] == "images/31.jpg"){
        imageArray.push(imageListFourth[6]);
    }
    else if(images[i] == "images/32.jpg"){
        imageArray.push(imageListFourth[7]);
    }
    else if(images[i] == "images/33.jpg"){
        imageArray.push(imageListFourth[8]);
    }
    else if(images[i] == "images/34.jpg"){
        imageArray.push(imageListFourth[9]);
    }
    else if(images[i] == "images/35.jpg"){
        imageArray.push(imageListFourth[10]);
    }
    else if(images[i] == "images/36.jpg"){
        imageArray.push(imageListFourth[11]);
    }

}
return imageArray;
}

function correctMatch(id1, id2) {
    if((id1 == "images/25.jpg" && id2 == "images/37.jpg") || (id1 == "images/37.jpg" && id2 == "images/25.jpg")){
        return true;
    }
    else if((id1 == "images/26.jpg" && id2 == "images/38.jpg") || (id1 == "images/38.jpg" && id2 == "images/26.jpg")){
        return true;
    }
    else if((id1 == "images/27.jpg" && id2 == "images/39.jpg") || (id1 == "images/39.jpg" && id2 == "images/27.jpg")){
        return true;
    }
    else if((id1 == "images/28.jpg" && id2 == "images/40.jpg") || (id1 == "images/40.jpg" && id2 == "images/28.jpg")){
        return true;
    }
    else if((id1 == "images/29.jpg" && id2 == "images/41.jpg") || (id1 == "images/41.jpg" && id2 == "images/29.jpg")){
        return true;
    }
    else if((id1 == "images/30.jpg" && id2 == "images/42.jpg") || (id1 == "images/42.jpg" && id2 == "images/30.jpg")){
        return true;
    }
    else if((id1 == "images/31.jpg" && id2 == "images/43.jpg") || (id1 == "images/43.jpg" && id2 == "images/31.jpg")){
        return true;
    }
    else if((id1 == "images/32.jpg" && id2 == "images/44.jpg") || (id1 == "images/44.jpg" && id2 == "images/32.jpg")){
        return true;
    }
    else if((id1 == "images/33.jpg" && id2 == "images/45.jpg") || (id1 == "images/45.jpg" && id2 == "images/33.jpg")){
        return true;
    }
    else if((id1 == "images/34.jpg" && id2 == "images/46.jpg") || (id1 == "images/46.jpg" && id2 == "images/34.jpg")){
        return true;
    }
    else if((id1 == "images/35.jpg" && id2 == "images/47.jpg") || (id1 == "images/47.jpg" && id2 == "images/35.jpg")){
        return true;
    }
    else if((id1 == "images/36.jpg" && id2 == "images/48.jpg") || (id1 == "images/48.jpg" && id2 == "images/36.jpg")){
        return true;
    }
    else
        return false;
}

function resizeImages() {
    if(portrait) {
        switch(requiredMatches) {
            case '6':
            imageHeight = (840 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = $('li img').width();
            calculateX();
            calculateY();
            break;
            case '7':
            imageHeight = (830 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = $('li img').width();
            calculateX();
            calculateY();
            break;
            case '8':
            imageHeight = (820 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = $('li img').width();
            calculateX();
            calculateY();
            break;
            case '9':
            imageHeight = (810 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = $('li img').width();
            calculateX();
            calculateY();
            break;
            case '10':
            imageHeight = (800 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = $('li img').width();
            calculateX();
            calculateY();
            break;
            case '11':
            imageHeight = (790 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = $('li img').width();
            calculateX();
            calculateY();
            break;
            case '12':
            imageHeight = (780 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = $('li img').width();
            calculateX();
            calculateY();
            break;
            default:
            imageHeight = 160;
            imageWidth = 144;
            calculateX();
            calculateY();
            break;
        }
    }
    else {
        switch(requiredMatches) {
            case '7':
            imageHeight = (840 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = 108;
            calculateX();
            calculateY();
            break;
            case '8':
            imageHeight = (830 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = 93;
            calculateX();
            calculateY();
            break;
            case '9':
            imageHeight = (820 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = 82;
            calculateX();
            calculateY();
            break;
            case '10':
            imageHeight = (810 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = 73;
            calculateX();
            calculateY();
            break;
            case '11':
            imageHeight = (800 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = 65;
            calculateX();
            calculateY();
            break;
            case '12':
            imageHeight = (790 / requiredMatches);
            $('li img').height(imageHeight + 'px');
            imageWidth = 59;
            calculateX();
            calculateY();
            break;
            default:
            imageHeight = 160;
            imageWidth = 144;
            calculateX();
            calculateY();
            break;
        }
    }
}

function calculateX() {
    xCoordinate = [];
    for(var i = 0; i < requiredMatches; i++) {
        xCoordinate.push(imageWidth*i + imageWidth/2 + 10 * (i+1) +10);
    }
}

function calculateY() {
    yCoordinate = [];
    for(var i = 0; i < requiredMatches; i++) {
        yCoordinate.push(imageHeight*i + imageHeight/2);
    }
}



function canvasHeight(canvas) {
    switch(requiredMatches) {
        case '2':
        canvas.height = 320;
        break;
        case '3':
        canvas.height = 480;
        break;
        case '4':
        canvas.height = 640;
        break;
        case '5':
        canvas.height = 800;
        break;
        case '6':
        canvas.height = 840;
        break;
        case '7':
        canvas.height = 829.938;
        break;
        case '8':
        canvas.height = 820;
        break;
        case '9':
        canvas.height = 810;
        break;
        case '10':
        canvas.height = 800;
        break;
        case '11':
        canvas.height = 789.938
        case '12':
        canvas.height = 780;
        break;
    }
}

function canvasWidth(canvas) {
    switch(requiredMatches) {
        case '2':
        canvas.width = 308;
        break;
        case '3':
        canvas.width = 462;
        break;
        case '4':
        canvas.width = 616;
        break;
        case '5':
        canvas.width = 770;
        break;
        case '6':
        canvas.width = 924;
        break;
        case '7':
        canvas.width = 826;
        break;
        case '8':
        canvas.width = 824;
        break;
        case '9':
        canvas.width = 828;
        break;
        case '10':
        canvas.width = 830;
        break;
        case '11':
        canvas.width = 825;
        case '12':
        canvas.width = 828;
        break;
    }
}

function determineLine() {
    len1 = leftImageArray.length;
    len2 = rightImageArray.length;
    if(id1.closest('ul').attr('class') == 'firstleft' || id1.closest('ul').attr('class') == 'horizontal firstleft' ||
        id1.closest('ul').attr('class') == 'secondleft' || id1.closest('ul').attr('class') == 'horizontal secondleft' ||
        id1.closest('ul').attr('class') == 'thirdleft' || id1.closest('ul').attr('class') == 'horizontal thirdleft') {
        left = id1;
    right = id2;
}
else {
    left = id2;
    right = id1;
}
for(var i=0; i<len1; i++) {
    if (leftImageArray[i] == left.attr('src')) {
        break;
    }
}
for(var j=0; j<len2; j++) {
    if (rightImageArray[j] == right.attr('src')) {
        break;
    }
}
diff = j-i;
if(diff == -1 || diff == 1) {
    drawStraightLine(i, j);
}
else if(diff == 0) {
    drawStraightLine(i, j);
}
else if(diff<-1) {
    up = true;
    drawCurvyLine(i, j);
}
else {
    down = true;
    drawCurvyLine(i, j);
}

}

function drawCurvyLine(i, j) {

    if(up) {
        up = false;
        ctx1.beginPath();
        ctx1.moveTo(0, yCoordinate[i]);
        ctx1.bezierCurveTo(100, yCoordinate[i]+50, 200, yCoordinate[j]-50, 300, yCoordinate[j]);
        ctx1.stroke();
            //up = false;
            ctx2.beginPath();
            ctx2.moveTo(xCoordinate[i], 0);
            ctx2.bezierCurveTo(xCoordinate[i]+50, 72, xCoordinate[j]-50, 144, xCoordinate[j], 215);
            ctx2.stroke();

          
        }
        if(down) {
            down = false;
            ctx1.beginPath();
            ctx1.moveTo(0, yCoordinate[i]);
            ctx1.bezierCurveTo(100, yCoordinate[i]-50, 200, yCoordinate[j]+50, 300, yCoordinate[j]);
            ctx1.stroke();
            //down = false;
            ctx2.beginPath();
            ctx2.moveTo(xCoordinate[i], 0);
            ctx2.bezierCurveTo(xCoordinate[i]-50, 72, xCoordinate[j]+50, 144, xCoordinate[j], 215);
            ctx2.stroke();
            
        }
    }

    function drawStraightLine(i, j) {

        ctx1.beginPath();
        ctx1.moveTo(0, yCoordinate[i]);
        ctx1.lineTo(300, yCoordinate[j]);
        ctx1.stroke();
        ctx2.beginPath();
        ctx2.moveTo(xCoordinate[i], 0);
        ctx2.lineTo(xCoordinate[j], 215);
        ctx2.stroke();
        ;

    }

    function portraitToLandscape() {

        $.each($('img'), function (index, img){
            console.log(imagesToCopy.length);
            if($(img).attr('class') == "complete disabled" && ($.inArray($(img).attr('src'), imagesToCopy)) == -1) {
                imagesToCopy.push($(img).attr('src'));
            }
        });
        $.each($('img'), function (index, img){
            console.log($('img'));
            console.log($('img').attr('src'));
            if($(img).attr('src') == imagesToCopy[i]) {
                $(img).addClass('complete');
                $(img).addClass('disabled');
            }
        });
        if(requiredMatches == 0) {
            $('.firstleft li img, .firstright li img, .horizontal.firstleft li img, .horizontal.firstright li img').addClass('complete disabled');
            $('.secondleft li img, .secondright li img, .horizontal.secondleft li img, .horizontal.secondright li img').addClass('complete disabled');
            $('.thirdleft li img, .thirdright li img, .horizontal.thirdleft li img, .horizontal.thirdright li img').addClass('complete disabled');
        }
    }

    function landscapeToPortrait() {
        $.each($('img'), function (index, img){
            console.log(imagesToCopy.length);
            if($(img).attr('class') == "complete disabled" && ($.inArray($(img).attr('src'), imagesToCopy)) == -1) {
                imagesToCopy.push($(img).attr('src'));
            }
        });
        $.each($('img'), function (index, img){
            console.log($('img'));
            console.log($('img').attr('src'));
            if($(img).attr('src') == imagesToCopy[i]) {
                $(img).addClass('complete');
                $(img).addClass('disabled');
            }
        });
        if(requiredMatches == 0) {
            $('.firstleft li img, .firstright li img, .horizontal.firstleft li img, .horizontal.firstright li img').addClass('complete disabled');
            $('.secondleft li img, .secondright li img, .horizontal.secondleft li img, .horizontal.secondright li img').addClass('complete disabled');
            $('.thirdleft li img, .thirdright li img, .horizontal.thirdleft li img, .horizontal.thirdright li img').addClass('complete disabled');
        }
    }

    function showMessage(type){
        $('.'+type).animate({top:"0"}, 500);
    }

    function hideMessage() {
        for (i=0; i<myMessages.length; i++){
           $('.' + myMessages[i]).animate({top:"-89"}, 500);
       }
   }

   function hideAllMessages(){
     var messagesHeights = new Array(); 
     for (i=0; i<myMessages.length; i++){
       messagesHeights[i] = $('.' + myMessages[i]).outerHeight(); 
       $('.' + myMessages[i]).css('top', -messagesHeights[i]);
   }
}

/************************************************************
********************* DOCUMENT READY ************************
************************************************************/


$(document).ready(function()    {
    $('.refresher').show();
    $('.refresher').hide();
    $("#homepage").hide();
    $("#PairMatch").hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    $('.firstnum').hide();
    $('.secondnum').hide();
    $('.thirdnum').hide();
    $("#homepage").fadeIn();

    hideAllMessages();
    $('.message').click(function(){
      $(this).animate({top: -$(this).outerHeight()}, 500);
  });  

    if(window.innerHeight < window.innerWidth) {
        portrait = false;
        $('.tableh').show();
        $('.vertical').hide();
    }
    else {
        portrait = true;
        $('.tableh').hide();
        $('.vertical').show();
    }
    
    $(window).resize(function() {
        if (Math.abs(window.orientation) === 90 || window.innerHeight < window.innerWidth) {
        //Landscape
        portrait = false;

        portraitToLandscape();
        $('.tableh').show();
        $('.vertical').hide();
    } else {
        //Portrait
        portrait = true;

        landscapeToPortrait();
        $('.tableh').hide();
        $('.vertical').show();
    }
});  





/************************************************************
************************ BUTTONS ****************************
************************************************************/

$('#firstbtn').click(generateFirstPage);
$('#secondbtn').click(generateSecondPage);
$('#thirdbtn').click(generateThirdPage);

$(".homebutton").click(function(){
    $('button').removeClass('active');
    $('button.homebutton').addClass('active');
    $("#homepage").fadeIn();
    $("#PairMatch").hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    $('.firstnum').hide();
    $('.secondnum').hide();
    $('.thirdnum').hide();
    $('.playagain').hide();
    $('li img').removeClass('disabled');
    $('.ssbutton').prop('disabled', false);
    $('.pmbutton').prop('disabled', false);
    $('.ccbutton').prop('disabled', false);
}); 
$(".pmbutton").click(function(){
    imagesToCopy = [];
    count = 0;
    $('button').removeClass('active');
    $('button.pmbutton').addClass('active');
    $('.firstnum').hide();
    $("#PairMatch").hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    $('#homepage').hide();
    $('.firstnum').fadeIn();
    $('.secondnum').hide();
    $('.thirdnum').hide();
    $('.playagain').hide();  
    $('.refresher').hide();
    $('li img').removeClass('disabled');
    $('.ssbutton').prop('disabled', false);
    $('.ccbutton').prop('disabled', false);
    $('.pmbutton').prop('disabled', true);
}); 
$(".ssbutton").click(function(){
    imagesToCopy = [];
    count = 0;
    $('button').removeClass('active');
    $('button.ssbutton').addClass('active');
    $('.secondnum').hide();
    $("#PairMatch").hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    $('#homepage').hide();
    $('.firstnum').hide();
    $('.thirdnum').hide();
    $('.secondnum').fadeIn();
    $('.playagain').hide(); 
    $('.refresher').hide();
    $('li img').removeClass('disabled');
    $('.ssbutton').prop('disabled', true);
    $('.pmbutton').prop('disabled', false);
    $('.ccbutton').prop('disabled', false);
}); 
$(".ccbutton").click(function(){
    imagesToCopy = [];
    count = 0;
    $('button').removeClass('active');
    $('button.ccbutton').addClass('active');
    $('.thirdnum').hide();
    $("#PairMatch").hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    $('#homepage').hide();
    $('.firstnum').hide();
    $('.secondnum').hide();
    $('.thirdnum').fadeIn();
    $('.playagain').hide();        
    $('.refresher').hide();
    $('li img').removeClass('disabled');
    $('.ccbutton').prop('disabled', true);
    $('.ssbutton').prop('disabled', false);
    $('.pmbutton').prop('disabled', false);
}); 

$('.playagain').on('click', 'button', function()    {
    imagesToCopy = [];
    hideMessage();
    $('.playagain').hide();
    $('li img').removeClass('disabled');
    $('#PairMatch').hide();
    $("#SuperShapes").hide();
    $("#CoolCounting").hide();
    if($('.pmbutton').prop("disabled"))   {
        $('.firstnum').fadeIn();
    }
    else if($('.ssbutton').prop("disabled")) {
        $('.secondnum').fadeIn();
    }
    else if($('.ccbutton').prop("disabled")) {
        $('.thirdnum').fadeIn();
    }
});

$('.refresher').on('click', function()  {
    hideMessage();
    $('.playagain').hide();
    if($('.pmbutton').prop("disabled"))   {
        $('.pmbutton').trigger('click');
    }
    else if($('.ssbutton').prop("disabled")) {
        $('.ssbutton').trigger('click');
    }
    else if($('.ccbutton').prop("disabled")) {
        $('.ccbutton').trigger('click');
    }
});

$('.navbar-brand').on('click', function()   {
    $('.homebutton').trigger('click');
});

/************************************************************
************************ TABLE BUTTONS **********************
************************************************************/

//LEFT TABLE FOR PAIR MATCH AND SUPER SHAPES
$('.firstleft, .secondleft').on('click', 'img', function()   {
    if(portrait) {
        $(this).toggleClass('leftselected');
    }
    else {
        $(this).toggleClass('topselected');
    }

    count++;
    if(count == 1)  {
        hideMessage();
        id1 = $(this);
    }
    if(count == 2)  {
        count = 0;
        id2 = $(this);
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class') && id1.attr('src') == id2.attr('src'))   {
            if(portrait) {
                $(this).removeClass('leftselected');
            }
            else {
                $(this).removeClass('topselected');
            }
            return;
        }
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class'))  {
            showMessage('warning');
            if(portrait) {
                id1.removeClass('leftselected');
                id2.removeClass('leftselected');

            }
            else {
                id1.removeClass('topselected');
                id2.removeClass('topselected');
            }
        }
        else if(id1.attr('src') != id2.attr('src')) {
            $('.errormsg').html(randomize(errorMessages));
            showMessage('error');
            if(portrait) {
                id1.removeClass('leftselected');
                id1.removeClass('rightselected');
                id2.removeClass('leftselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('topselected');
                id1.removeClass('botselected');
                id2.removeClass('topselected');
                id2.removeClass('botselected');
            }
        }
        else    {
            determineLine();
            requiredMatches--;
            if(requiredMatches != 0) {
                $('.successmsg').html(randomize(successMessages));
                showMessage('success');
            }
            id1.addClass('complete');
            id2.addClass('complete');
            id1.addClass('disabled');
            id2.addClass('disabled');
            if(portrait) {
                id1.removeClass('leftselected');
                id1.removeClass('rightselected');
                id2.removeClass('leftselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('topselected');
                id1.removeClass('botselected');
                id2.removeClass('topselected');
                id2.removeClass('botselected');
            }
        }
    }
    if(requiredMatches == 0)    {
        imagesToCopy = [];
        $('.successmsg').html("Congratulations! You're a star!");
        showMessage('success');
        $('.refresher').hide();
        $('.playagain').fadeIn();
        $('.playagain button').css('display', 'block');
    }
});

//RIGHT TABLE FOR PAIR MATCH AND SUPER SHAPES
$('.firstright, .secondright').on('click', 'img', function()   {
    if(portrait) {
        $(this).toggleClass('rightselected');
    }
    else {
        $(this).toggleClass('botselected');
    }

    count++;
    if(count == 1)  {
        hideMessage();
        id1 = $(this);
    }
    if(count == 2)  {
        count = 0;
        id2 = $(this);
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class') && id1.attr('src') == id2.attr('src'))   {
            if(portrait) {
                $(this).removeClass('rightselected');
            }
            else {
                $(this).removeClass('botselected');
            }
            return;
        }
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class'))  {
            showMessage('warning');
            if(portrait) {
                id1.removeClass('rightselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('botselected');
                id2.removeClass('botselected');
            }
        }
        else if(id1.attr('src') != id2.attr('src')) {
            $('.errormsg').html(randomize(errorMessages));
            showMessage('error');
            if(portrait) {
                id1.removeClass('leftselected');
                id1.removeClass('rightselected');
                id2.removeClass('leftselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('topselected');
                id1.removeClass('botselected');
                id2.removeClass('topselected');
                id2.removeClass('botselected');
            }
        }
        else    {
            determineLine();
            requiredMatches--;
            if(requiredMatches != 0) {
                $('.successmsg').html(randomize(successMessages));
                showMessage('success');
            }
            id1.addClass('complete');
            id2.addClass('complete');
            id1.addClass('disabled');
            id2.addClass('disabled');
            if(portrait) {
                id1.removeClass('leftselected');
                id1.removeClass('rightselected');
                id2.removeClass('leftselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('topselected');
                id1.removeClass('botselected');
                id2.removeClass('topselected');
                id2.removeClass('botselected');
            }
        }
    }
    if(requiredMatches == 0)    {
        imagesToCopy = [];
        $('.successmsg').html("Congratulations! You're a star!");
        showMessage('success');
        $('.refresher').hide();
        $('.playagain').fadeIn();
        $('.playagain button').css('display', 'block');
    }
});

//LEFT TABLE FOR COOL COUNTING
$('.thirdleft').on('click', 'img', function()   {
    if(portrait) {
        $(this).toggleClass('leftselected');
    }
    else {
        $(this).toggleClass('topselected');
    }
    count++;
    if(count == 1)  {
        hideMessage();
        id1 = $(this);
    }
    if(count == 2)  {
        count = 0;
        id2 = $(this);
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class') && id1.attr('src') == id2.attr('src'))   {
            if(portrait) {
                $(this).removeClass('leftselected');
            }
            else {
                $(this).removeClass('topselected');
            }
            return;
        }        
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class'))  {
            showMessage('warning');
            if(portrait) {
                id1.removeClass('leftselected');
                id2.removeClass('leftselected');
            }
            else {
                id1.removeClass('topselected');
                id2.removeClass('botselected');
            }
        }
        else if(!correctMatch(id1.attr('src'), id2.attr('src'))) {
            $('.errormsg').html(randomize(errorMessages));
            showMessage('error');
            if(portrait) {
                id1.removeClass('leftselected');
                id1.removeClass('rightselected');
                id2.removeClass('leftselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('topselected');
                id1.removeClass('botselected');
                id2.removeClass('topselected');
                id2.removeClass('botselected');
            }
        }
        else    {
            determineLine();
            requiredMatches--;
            if(requiredMatches != 0) {
                $('.successmsg').html(randomize(successMessages));
                showMessage('success');
            }
            id1.addClass('complete');
            id2.addClass('complete');
            id1.addClass('disabled');
            id2.addClass('disabled');
            if(portrait) {
                id1.removeClass('leftselected');
                id1.removeClass('rightselected');
                id2.removeClass('leftselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('topselected');
                id1.removeClass('botselected');
                id2.removeClass('topselected');
                id2.removeClass('botselected');
            }
        }
    }
    if(requiredMatches == 0)    {
        imagesToCopy = [];
        $('.successmsg').html("Congratulations! You're a star!");
        showMessage('success');
        $('.refresher').hide();
        $('.playagain').fadeIn();
        $('.playagain button').css('display', 'block');
    }
});

//RIGHT TABLE FOR COOL COUNTING
$('.thirdright').on('click', 'img', function()   {
    if(portrait) {
        $(this).toggleClass('rightselected');
    }
    else {
        $(this).toggleClass('botselected');
    }
    count++;
    if(count == 1)  {
        hideMessage();
        id1 = $(this);
    }
    if(count == 2)  {
        count = 0;
        id2 = $(this);
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class') && id1.attr('src') == id2.attr('src'))   {
            if(portrait) {
                $(this).removeClass('rightselected');
            }
            else {
                $(this).removeClass('botselected');
            }
            return;
        }         
        if(id1.closest('ul').attr('class') == id2.closest('ul').attr('class'))  {
            showMessage('warning');
            if(portrait) {
                id1.removeClass('rightselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('botselected');
                id2.removeClass('botselected');
            }
        }
        else if(!correctMatch(id1.attr('src'), id2.attr('src'))) {
            $('.errormsg').html(randomize(errorMessages));
            showMessage('error');
            if(portrait) {
                id1.removeClass('leftselected');
                id1.removeClass('rightselected');
                id2.removeClass('leftselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('topselected');
                id1.removeClass('botselected');
                id2.removeClass('topselected');
                id2.removeClass('botselected');
            }
        }
        else    {
            determineLine();
            requiredMatches--;
            if(requiredMatches != 0) {
                $('.successmsg').html(randomize(successMessages));
                showMessage('success');
            }
            id1.addClass('complete');
            id2.addClass('complete');
            id1.addClass('disabled');
            id2.addClass('disabled');
            if(portrait) {
                id1.removeClass('leftselected');
                id1.removeClass('rightselected');
                id2.removeClass('leftselected');
                id2.removeClass('rightselected');
            }
            else {
                id1.removeClass('topselected');
                id1.removeClass('botselected');
                id2.removeClass('topselected');
                id2.removeClass('botselected');
            }            
        }
    }
    if(requiredMatches == 0)    {
        imagesToCopy = [];
        $('.successmsg').html("Congratulations! You're a star!");
        showMessage('success');
        $('.refresher').hide();
        $('.playagain').fadeIn();
        $('.playagain button').css('display', 'block');
    }
});
});