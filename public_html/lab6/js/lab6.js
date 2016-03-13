/************************************************************
******************* ):GLOBAL VARIABLES:( ********************
************************************************************/

var imageListFirst = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png", "images/10.png"];
var imageListSecond = ["images/11.png", "images/12.png", "images/13.png", "images/14.png", "images/15.png", "images/16.png", "images/17.png", "images/18.png", "images/19.png", "images/20.png"];
var myMessages = ['warning','error','success'];
var successMessages = ["Well Done. Most optimal answer and new high score obtained!", "You obtained the highest and optimal score but try to do it faster:)"];
var errorMessages = ['New high score! But not the optimal answer :(', "There is a better answer!"];
var matches = undefined;
var numMatches = undefined;
var highscore = undefined;
var highscoretime = undefined;
var matchscore = undefined;
var timescore = undefined;
var score = 0;
var matchArray = [];
var wrong = false;
var leftCount = undefined;
var rightCount = undefined;
var noOfImages = undefined;
var leftOrRight = 'left';
var count = 0;
var id1 = '';
var id2 = '';
var graphString = '';
var returnedArray = [];
var returnedData = undefined;
var imagesToCopy = [];
var portrait = undefined;
var random = false;
var up = false;
var down = false;
var leftImageArray = [];
var rightImageArray = [];
var xCoordinateLeft = [];
var	xCoordinateRight = [];
var yCoordinateLeft = [];
var yCoordinateRight = [];
var imageWidth = undefined;
var imageHeight = undefined;
var canvas1 = document.getElementById('canvas1');
canvas1.width = 300;
var canvas1h = document.getElementById('canvas1h');
canvas1h.height = 215;
var ctx1 = undefined;
var ctx2 = undefined;

/************************************************************
************************ FUNCTIONS **************************
************************************************************/

function generateFirstPage() {   
    score = 0;
    matches = 0; 
    noOfImages = Math.max(leftCount,rightCount);
    var listHTML = '';
    leftImageArray = randomImages(imageListFirst, leftCount);
    for(var i = 0; i < leftCount; i++)   {
        listHTML += '<li><img src="' + leftImageArray[i] + '"></li>';
    }
    imageListFirst = imageListFirst.concat(leftImageArray);
    $('.firstleft').html(listHTML);
    rightImageArray = randomImages(imageListSecond, rightCount);
    listHTML = '';
    for(var i = 0; i < rightCount; i++)   {
        listHTML += '<li><img src="' + rightImageArray[i] + '"></li>';
    }
    imageListSecond = imageListSecond.concat(rightImageArray);
    $('.firstright').html(listHTML);
    resizeImages();
    $('.refresher').fadeIn();
    $('.refresher').css('display', 'block');

    canvasHeight(canvas1);
    ctx1 = canvas1.getContext("2d");
    ctx1.lineWidth = 3;
    ctx1.font="20px Mclaren";
    ctx1.fillStyle = 'red';
    canvasWidth(canvas1h);
    ctx2 = canvas1h.getContext("2d");
    ctx2.lineWidth = 3;
    ctx2.font="20px Mclaren";
    ctx2.fillStyle = 'red';
    determineLine();
    $("#homepage").hide();
    $("#PairMatch").fadeIn();
    

}

function randomImages(tableName, num) {
    var imagesToReturn = [];
    for(; num > 0; num--)   {
        imageNumber = Math.floor(Math.random()*tableName.length);
        imagesToReturn.push(tableName.splice(imageNumber, 1));
    }
    return imagesToReturn;
}


function randomize(messageArray) {
    arraylen = messageArray.length;
    var i = Math.floor(Math.random() * arraylen);
    return messageArray[i];
}

function findImageIndex(left, right)   {
    for(var i=0; i<leftImageArray.length; i++)  {
        if(left.attr('src') == leftImageArray[i])   {
            break;
        }
    }
    for(var j=0; j<rightImageArray.length; j++)  {
        if(right.attr('src') == rightImageArray[j])   {
            break;
        }
    }
    matchArray.push([i,j]);
    calculateAndDraw(i,j);
}

function resizeImages() {
    if(portrait) {
        switch(noOfImages) {
            case 6:
            imageHeight = (840 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 126;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            case 7:
            imageHeight = (830 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 107;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            case 8:
            imageHeight = (820 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 92;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            case 9:
            imageHeight = (810 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 81;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            case 10:
            imageHeight = (800 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 80;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            default:
            imageHeight = 160;
            $('li img').height(imageHeight + 'px');
            imageWidth = 144;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
        }
    }
    else {
        switch(noOfImages) {
            case 7:
            imageHeight = (840 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 108;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            case 8:
            imageHeight = (830 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 93;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            case 9:
            imageHeight = (820 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 82;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            case 10:
            imageHeight = (810 / noOfImages);
            $('li img').height(imageHeight + 'px');
            imageWidth = 73;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
            default:
            imageHeight = 160;
            $('li img').height(imageHeight + 'px');
            imageWidth = 144;
            $('li img').width(imageWidth + 'px');
            calculateX();
            calculateY();
            break;
        }
    }
}

function calculateX() {
    xCoordinateLeft = [];
    xCoordinateRight = [];
    for(var i = 0; i < leftCount; i++) {
        xCoordinateLeft.push(imageWidth*i + imageWidth/2 + 10 * (i+1) +10);
    }
    for(var i = 0; i < rightCount; i++) {
        xCoordinateRight.push(imageWidth*i + imageWidth/2 + 10 * (i+1) +10);
    }
}

function calculateY() {
    yCoordinateLeft = [];
    yCoordinateRight = [];
    for(var i = 0; i < leftCount; i++) {
        yCoordinateLeft.push(imageHeight*i + imageHeight/2);
    }
    for(var i = 0; i < rightCount; i++) {
        yCoordinateRight.push(imageHeight*i + imageHeight/2);
    }
}



function canvasHeight(canvas) {
	var noOfImages = Math.max(leftCount,rightCount);
    switch(noOfImages) {
        case 2:
        canvas.height = 320;
        break;
        case 3:
        canvas.height = 480;
        break;
        case 4:
        canvas.height = 640;
        break;
        case 5:
        canvas.height = 800;
        break;
        case 6:
        canvas.height = 840;
        break;
        case 7:
        canvas.height = 829.938;
        break;
        case 8:
        canvas.height = 820;
        break;
        case 9:
        canvas.height = 810;
        break;
        case 10:
        canvas.height = 800;
        break;
    }
}

function canvasWidth(canvas) {
    var noOfImages = Math.max(leftCount,rightCount);
    switch(noOfImages) {
        case 2:
        canvas.width = 308;
        break;
        case 3:
        canvas.width = 462;
        break;
        case 4:
        canvas.width = 616;
        break;
        case 5:
        canvas.width = 770;
        break;
        case 6:
        canvas.width = 924;
        break;
        case 7:
        canvas.width = 826;
        break;
        case 8:
        canvas.width = 824;
        break;
        case 9:
        canvas.width = 828;
        break;
        case 10:
        canvas.width = 830;
        break;
    }
}

function calculateAndDraw(left,right) {
    var gradient=ctx1.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    ctx1.strokeStyle = gradient;
    ctx1.lineWidth = 5;
    gradient=ctx2.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    ctx2.strokeStyle = gradient;
    ctx2.lineWidth = 5;
    if(left-right == -1 || left-right == 1 || left-right == 0){
        console.log("Straight");
        ctx1.beginPath();
        ctx1.moveTo(0, yCoordinateLeft[left]);
        ctx1.lineTo(300, yCoordinateRight[right]);
        ctx1.stroke();
        ctx2.beginPath();
        ctx2.moveTo(xCoordinateLeft[left], 0);
        ctx2.lineTo(xCoordinateRight[right], 215);
        ctx2.stroke();
    }
    else if(left-right <-1) {
        console.log("Curve");       
        ctx1.beginPath();
        ctx1.moveTo(0, yCoordinateLeft[left]);
        ctx1.bezierCurveTo(100, yCoordinateLeft[left]-50, 200, yCoordinateRight[right]+50, 300, yCoordinateRight[right]);
        ctx1.stroke();
        ctx2.beginPath();
        ctx2.moveTo(xCoordinateLeft[left], 0);
        ctx2.bezierCurveTo(xCoordinateLeft[left]-50, 72, xCoordinateRight[right]+50, 144, xCoordinateRight[right], 215);
        ctx2.stroke();
    }
    else if(left-right > 1) {
        console.log("Curved");
        ctx1.beginPath();
        ctx1.moveTo(0, yCoordinateLeft[left]);
        ctx1.bezierCurveTo(100, yCoordinateLeft[left]+50, 200, yCoordinateRight[right]-50, 300, yCoordinateRight[right]);
        ctx1.stroke();
        ctx2.beginPath();
        ctx2.moveTo(xCoordinateLeft[left], 0);
        ctx2.bezierCurveTo(xCoordinateLeft[left]+50, 72, xCoordinateRight[right]-50, 144, xCoordinateRight[right], 215);
        ctx2.stroke();
    }

    matches++;
    for(var i=0; i<returnedArray.length; i++) {
        if(left == returnedArray[i][0] && right == returnedArray[i][1]) {
            score += parseInt(returnedArray[i][2]);
            break;
        }
    }
}

function determineLine() {
    for(var i = 0; i < returnedArray.length; i++)	{
      if(returnedArray[i][1] - returnedArray[i][0] == -1 || returnedArray[i][1] - returnedArray[i][0] == 1 || returnedArray[i][1] - returnedArray[i][0] == 0) {
       drawStraightLine(i);			
   }
   else if(returnedArray[i][1] - returnedArray[i][0] < -1) {
       up = true;
       drawCurvyLine(i);
   }
   else {
       down = true;
       drawCurvyLine(i);
   }
}
}

function drawCurvyLine(i) {

    if(up) {
        up = false;
        ctx1.beginPath();
        ctx1.moveTo(0, yCoordinateLeft[returnedArray[i][0]]);
        ctx1.bezierCurveTo(100, yCoordinateLeft[returnedArray[i][0]]+50, 200, yCoordinateRight[returnedArray[i][1]]-50, 300, yCoordinateRight[returnedArray[i][1]]);
        ctx1.stroke();
        if(leftOrRight == 'left') {
            leftOrRight = 'right';
            ctx1.fillText(returnedArray[i][2].toString(),150, (yCoordinateLeft[returnedArray[i][0]] + yCoordinateRight[returnedArray[i][1]])/2 -30);
        }
        else {
            leftOrRight = 'left';
            ctx1.fillText(returnedArray[i][2].toString(),150, (yCoordinateLeft[returnedArray[i][0]] + yCoordinateRight[returnedArray[i][1]])/2 +30);
        }
        ctx2.beginPath();
        ctx2.moveTo(xCoordinateLeft[returnedArray[i][0]], 0);
        ctx2.bezierCurveTo(xCoordinateLeft[returnedArray[i][0]]+50, 72, xCoordinateRight[returnedArray[i][1]]-50, 144, xCoordinateRight[returnedArray[i][1]], 215);
        ctx2.stroke();
        if(leftOrRight == 'left') {
            leftOrRight = 'right';
            ctx2.fillText(returnedArray[i][2].toString(),(xCoordinateLeft[returnedArray[i][0]] + xCoordinateRight[returnedArray[i][1]]) / 2 +30, 107);
        }
        else {
            leftOrRight = 'left';
            leftOrRight = 'left';
            ctx2.fillText(returnedArray[i][2].toString(),(xCoordinateLeft[returnedArray[i][0]] + xCoordinateRight[returnedArray[i][1]]) / 2 -30, 107);
        }
    }
    if(down) {
        down = false;
        ctx1.beginPath();
        ctx1.moveTo(0, yCoordinateLeft[returnedArray[i][0]]);
        ctx1.bezierCurveTo(100, yCoordinateLeft[returnedArray[i][0]]-50, 200, yCoordinateRight[returnedArray[i][1]]+50, 300, yCoordinateRight[returnedArray[i][1]]);
        ctx1.stroke();
        if(leftOrRight == 'left') {
            leftOrRight = 'right';
            ctx1.fillText(returnedArray[i][2].toString(),150, (yCoordinateLeft[returnedArray[i][0]] + yCoordinateRight[returnedArray[i][1]])/2 -30);
        }
        else {
            leftOrRight = 'left';
            ctx1.fillText(returnedArray[i][2].toString(),150, (yCoordinateLeft[returnedArray[i][0]] + yCoordinateRight[returnedArray[i][1]])/2 +30);
        }
        ctx2.beginPath();
        ctx2.moveTo(xCoordinateLeft[returnedArray[i][0]], 0);
        ctx2.bezierCurveTo(xCoordinateLeft[returnedArray[i][0]]-50, 72, xCoordinateRight[returnedArray[i][1]]+50, 144, xCoordinateRight[returnedArray[i][1]], 215);
        ctx2.stroke();
        if(leftOrRight == 'left') {
            leftOrRight = 'right';
            ctx2.fillText(returnedArray[i][2].toString(),(xCoordinateLeft[returnedArray[i][0]] + xCoordinateRight[returnedArray[i][1]]) / 2 +30, 107);
        }
        else {
            leftOrRight = 'left';
            leftOrRight = 'left';
            ctx2.fillText(returnedArray[i][2].toString(),(xCoordinateLeft[returnedArray[i][0]] + xCoordinateRight[returnedArray[i][1]]) / 2 -30, 107);
        }
    }
}

function drawStraightLine(i) {

    ctx1.beginPath();
    ctx1.moveTo(0, yCoordinateLeft[returnedArray[i][0]]);
    ctx1.lineTo(300, yCoordinateRight[returnedArray[i][1]]);
    ctx1.stroke();
    ctx1.fillText(returnedArray[i][2].toString(),150, (yCoordinateLeft[returnedArray[i][0]] + yCoordinateRight[returnedArray[i][1]])/2);
    ctx2.beginPath();
    ctx2.moveTo(xCoordinateLeft[returnedArray[i][0]], 0);
    ctx2.lineTo(xCoordinateRight[returnedArray[i][1]], 215);
    ctx2.stroke();
    ctx2.fillText(returnedArray[i][2].toString(),(xCoordinateLeft[returnedArray[i][0]] + xCoordinateRight[returnedArray[i][1]]) / 2, 107);
    ;

}

function portraitToLandscape() {

    $('img').each(function () {
        if($(this).attr('class') == "complete disabled" && ($.inArray($(this).attr('src'), imagesToCopy)) == -1) {
            imagesToCopy.push($(this).attr('src'));
        }
    });
    $('img').each(function () {


        for(var i=0; i<imagesToCopy.length; i++){
            if($(this).attr('src') == imagesToCopy[i]) {
                $(this).addClass('complete');
                $(this).addClass('disabled');
            }
        }
    });
    if($('.refresher').css('display') == 'none') {
        $('.firstleft li img, .firstright li img, .horizontal.firstleft li img, .horizontal.firstright li img').addClass('complete disabled');
        $('.secondleft li img, .secondright li img, .horizontal.secondleft li img, .horizontal.secondright li img').addClass('complete disabled');
        $('.thirdleft li img, .thirdright li img, .horizontal.thirdleft li img, .horizontal.thirdright li img').addClass('complete disabled');
    }
}

function landscapeToPortrait() {
    $('img').each(function () {

        if($(this).attr('class') == "complete disabled" && ($.inArray($(this).attr('src'), imagesToCopy)) == -1) {
            imagesToCopy.push($(this).attr('src'));
        }
    });
    $('img').each(function () {


     for(var i=0; i<imagesToCopy.length; i++){
        if($(this).attr('src') == imagesToCopy[i]) {

            $(this).addClass('complete');
            $(this).addClass('disabled');
        }
    }
});
    if($('.refresher').css('display') == 'none') {
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
        hideMessage();
        portraitToLandscape();
        $('.tableh').show();
        $('.vertical').hide();
    } else {
        //Portrait
        portrait = true;
        hideMessage();
        landscapeToPortrait();
        $('.tableh').hide();
        $('.vertical').show();
    }
});  





/************************************************************
************************ BUTTONS ****************************
************************************************************/

$('#firstbtn').click(generateFirstPage);

$(".homebutton").click(function(){
    $('button').removeClass('active');
    $('button.homebutton').addClass('active');
    $("#homepage").fadeIn();
    $("#PairMatch").hide();
    $('.playagain').hide();
    $('li img').removeClass('disabled');
}); 

$('.playagain').on('click', 'button', function()    {
    imagesToCopy = [];
    hideMessage();
    $('.playagain').hide();
    $('li img').removeClass('disabled');
    $('#PairMatch').hide();
    $('#homepage').fadeIn();
});

$('.refresher').on('click', function()  {
    hideMessage();
	score = 0;
    matches = 0;
    matchArray = [];
    $('#msg').html(matches + " cat(s) have eaten, current total score is " + score);
    $('.playagain').hide();
    $('.homebutton').trigger('click');
});

$('.navbar-brand').on('click', function()   {
    $('.homebutton').trigger('click');
});

$('#matchnum1').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: 'matching.php',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: 'GET',
        data: {
            cmd: "generate",
            graph_id: $('#n1').val()
        },
       success: function(data) {
        returnedData = data;
        leftCount = data.N;
        rightCount = data.M;
        returnedArray = data.E;
        generateFirstPage();
    },
    error: function(request,error) { 
        console.log(request.responseText);
    }
});

})

$('#matchnum2').on('submit', function(event) {
	imagesToCopy = [];
    event.preventDefault();
    $.ajax({
        url: 'matching.php',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: 'GET',
        data: {
            cmd: 'submit',
            graph_id: $('#n1').val(),
            solution: JSON.stringify(matchArray)
        },
        success: function(data) {
            console.log(data);
            highscore = data.new_best;
            highscoretime = data.new_best_time;
			numMatches = data.num_match;
			matchscore = data.match_score;
            timescore = data.time_elapsed;
            console.log(highscore + " " + numMatches + " " + matchscore);
			if(numMatches == 'DNE') {
				$('.errormsg').html('Edge(s) ' + matchscore + ' does not exist!');
				showMessage('error');
                $('#msg').html("You have " + matches + " matche(s) with a score of " + score + " and you took " + timescore + " second(s)");
			}
			else if(highscore != null && highscoretime !=null && score == matchscore || highscore == null && highscoretime !=null && score == matchscore ) { //highscoretime optimal
				$('.successmsg').html((successMessages[0]));
				showMessage('success');
                $('#msg').html("You have " + matches + " matche(s) with a score of " + score + " and you took " + timescore + " second(s)");
			}
            else if(highscore != null && highscoretime ==null && score == matchscore || highscore == null && highscoretime ==null && score == matchscore ) { //highscore optimal
                $('.successmsg').html((successMessages[1]));
                showMessage('success');
                $('#msg').html("You have " + matches + " matche(s) with a score of " + score + " and you took " + timescore + " second(s)");
            }
			else if(highscore != null && score != matchscore) { //highscore not optimal
				$('.errormsg').html((errorMessages[0]));
				showMessage('error');
                $('#msg').html("You have " + matches + " matche(s) with a score of " + score + " and you took " + timescore + " second(s)");
			}
			else if(highscore == null && score != matchscore) { //not highscore not optimal
				$('.errormsg').html((errorMessages[1]));
				showMessage('error');
                $('#msg').html("You have " + matches + " matche(s) with a score of " + score + " and you took " + timescore + " second(s)");
			}
        }
    });
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
        else    {
            findImageIndex(id2, id1);
            $('#msg').html(matches + " cat(s) have eaten, current total score is " + score);            
            id1.addClass('complete');       
            id1.addClass('disabled');
            id2.addClass('complete');       
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
});

//RIGHT TABLE FOR PAIR MATCH AND SUPER SHAPES
$('.firstright, .secondright').on('click', 'img', function()   {
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
        else    {
            findImageIndex(id1, id2);
            $('#msg').html(matches + " cat(s) have eaten, current total score is " + score);
            id1.addClass('complete');       
            id1.addClass('disabled');
            id2.addClass('complete');
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
});

});