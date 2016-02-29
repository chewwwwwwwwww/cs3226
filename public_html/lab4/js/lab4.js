/************************************************************
******************* ):GLOBAL VARIABLES:( ********************
************************************************************/

var imageListFirst = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg"];
var imageListSecond = ["images/11.jpg", "images/12.jpg", "images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg", "images/17.jpg", "images/18.jpg", "images/19.jpg", "images/20.jpg"];
var myMessages = ['warning','error','success'];
var successMessages = ["Well Done!", "Correct Match! Way to go!", "You're so good at this!", "Keep at it. You're doing fine!", "Whoopee! That's Correct!"];
var errorMessages = ['Try again!', 'Incorrect. You can do it!', "Oops! That wasn't right ):", "Uh Oh! Looks like you got the wrong match :("];
var requiredMatches = undefined;
var leftCount = undefined;
var rightCount = undefined;
var count = 0;
var id1 = '';
var id2 = '';
var JSONArray = [];
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
var canvas1h = document.getElementById('canvas1h');
canvas1h.height = 215;
var ctx1 = undefined;
var ctx2 = undefined;

/************************************************************
************************ FUNCTIONS **************************
************************************************************/

function generateFirstPage(e) {    
    e.preventDefault();
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
    $('.firstright').html(listHTML);
    resizeImages();
    $('.refresher').fadeIn();
    $('.refresher').css('display', 'block');

    canvasHeight(canvas1);
    ctx1 = canvas1.getContext("2d");
    ctx1.lineWidth = 3;
    var gradient=ctx1.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    ctx1.strokeStyle = gradient;
    canvasWidth(canvas1h);
    ctx2 = canvas1h.getContext("2d");
    ctx2.lineWidth = 3;
    var gradient=ctx2.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    ctx2.strokeStyle = gradient;
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

function resizeImages() {
    if(portrait) {
        switch(leftCount) {
            case '6':
            imageHeight = (840 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 126;
            calculateX();
            calculateY();
            break;
            case '7':
            imageHeight = (830 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 107;
            calculateX();
            calculateY();
            break;
            case '8':
            imageHeight = (820 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 92;
            calculateX();
            calculateY();
            break;
            case '9':
            imageHeight = (810 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 81;
            calculateX();
            calculateY();
            break;
            case '10':
            imageHeight = (800 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 80;
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
        switch(leftCount) {
            case '7':
            imageHeight = (840 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 108;
            calculateX();
            calculateY();
            break;
            case '8':
            imageHeight = (830 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 93;
            calculateX();
            calculateY();
            break;
            case '9':
            imageHeight = (820 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 82;
            calculateX();
            calculateY();
            break;
            case '10':
            imageHeight = (810 / leftCount);
            $('li img').height(imageHeight + 'px');
            imageWidth = 73;
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
    for(var i = 0; i < leftCount; i++) {
        xCoordinate.push(imageWidth*i + imageWidth/2 + 10 * (i+1) +10);
    }
}

function calculateY() {
    yCoordinate = [];
    for(var i = 0; i < leftCount; i++) {
        yCoordinate.push(imageHeight*i + imageHeight/2);
    }
}



function canvasHeight(canvas) {
    switch(leftCount) {
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
    switch(leftCount) {
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
        if(leftCount == 0) {
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
        if(leftCount == 0) {
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
        contentType: 'application/json',
        type: 'post',
        success: function(response) {
            leftCount = response.N;
            rightCount = response.M;
            JSONArray = response.E;
            generateFirstPage();
        }
    });

})

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
});