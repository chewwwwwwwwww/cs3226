$(document).ready(function()	{
	$("#PairMatch").hide();
	$("#AnimalFeed").hide();
	$("#SneakySilhouettes").hide();
	$("#SuperShapes").hide();
	$("#CoolCounting").hide();
	$("#WordPlay").hide();

	function randomImage(tableName) {
		var imageToReturn = '';
		imageNumber = Math.floor(Math.random()*tableName.length);
		imageToReturn = tableName[imageNumber];
		tableName.splice(imageNumber, 1);
		return imageToReturn;
	}

	function randomize()	{

		var imageList = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];

		document.getElementById("firstR1").src = randomImage(imageList);
		document.getElementById("firstR2").src = randomImage(imageList);
		document.getElementById("firstR3").src = randomImage(imageList);
		document.getElementById("firstR4").src = randomImage(imageList);
		document.getElementById("firstR5").src = randomImage(imageList);

		imageList = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];

		document.getElementById("firstL1").src = randomImage(imageList);
		document.getElementById("firstL2").src = randomImage(imageList);
		document.getElementById("firstL3").src = randomImage(imageList);
		document.getElementById("firstL4").src = randomImage(imageList);
		document.getElementById("firstL5").src = randomImage(imageList);

		imageList = ["images/image10.jpg", "images/image11.jpg", "images/image12.jpg", "images/image13.jpg"]

		document.getElementById("secondR1").src = randomImage(imageList);
		document.getElementById("secondR2").src = randomImage(imageList);
		document.getElementById("secondR3").src = randomImage(imageList);
		document.getElementById("secondR4").src = randomImage(imageList);

		imageList = ["images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg"];

		document.getElementById("secondL1").src = randomImage(imageList);
		document.getElementById("secondL2").src = randomImage(imageList);
		document.getElementById("secondL3").src = randomImage(imageList);
		document.getElementById("secondL4").src = randomImage(imageList);

		imageList = ["images/image18.jpg", "images/image19.jpg", "images/image20.jpg", "images/image21.jpg"];

		document.getElementById("thirdR1").src = randomImage(imageList);
		document.getElementById("thirdR2").src = randomImage(imageList);
		document.getElementById("thirdR3").src = randomImage(imageList);
		document.getElementById("thirdR4").src = randomImage(imageList);

		imageList = ["images/image14.jpg", "images/image15.jpg", "images/image16.jpg", "images/image17.jpg"]

		document.getElementById("thirdL1").src = randomImage(imageList);
		document.getElementById("thirdL2").src = randomImage(imageList);
		document.getElementById("thirdL3").src = randomImage(imageList);
		document.getElementById("thirdL4").src = randomImage(imageList);

		imageList = ["images/image22.jpg", "images/image23.jpg", "images/image24.jpg", "images/image25.jpg"];

		document.getElementById("fourthR1").src = randomImage(imageList);
		document.getElementById("fourthR2").src = randomImage(imageList);
		document.getElementById("fourthR3").src = randomImage(imageList);
		document.getElementById("fourthR4").src = randomImage(imageList);

		imageList = ["images/image22.jpg", "images/image23.jpg", "images/image24.jpg", "images/image25.jpg"];

		document.getElementById("fourthL1").src = randomImage(imageList);
		document.getElementById("fourthL2").src = randomImage(imageList);
		document.getElementById("fourthL3").src = randomImage(imageList);
		document.getElementById("fourthL4").src = randomImage(imageList);

		imageList = ["images/image31.jpg", "images/image32.jpg", "images/image33.jpg", "images/image34.jpg", "images/image35.jpg"];

		document.getElementById("fifthR1").src = randomImage(imageList);
		document.getElementById("fifthR2").src = randomImage(imageList);
		document.getElementById("fifthR3").src = randomImage(imageList);
		document.getElementById("fifthR4").src = randomImage(imageList);
		document.getElementById("fifthR5").src = randomImage(imageList);

		imageList = ["images/image26.jpg", "images/image27.jpg", "images/image28.jpg", "images/image29.jpg", "images/image30.jpg"]

		document.getElementById("fifthL1").src = randomImage(imageList);
		document.getElementById("fifthL2").src = randomImage(imageList);
		document.getElementById("fifthL3").src = randomImage(imageList);
		document.getElementById("fifthL4").src = randomImage(imageList);
		document.getElementById("fifthL5").src = randomImage(imageList);

		imageList = ["images/image39.jpg", "images/image40.jpg", "images/image41.jpg"];

		document.getElementById("sixthR1").src = randomImage(imageList);
		document.getElementById("sixthR2").src = randomImage(imageList);
		document.getElementById("sixthR3").src = randomImage(imageList);

		imageList = ["images/image36.jpg", "images/image37.jpg", "images/image38.jpg"]

		document.getElementById("sixthL1").src = randomImage(imageList);
		document.getElementById("sixthL2").src = randomImage(imageList);
		document.getElementById("sixthL3").src = randomImage(imageList);
	}

	$(".homebutton").click(function(){
		$(".row").fadeIn();
		$("#PairMatch").hide();
		$("#AnimalFeed").hide();
		$("#SneakySilhouettes").hide();
		$("#SuperShapes").hide();
		$("#CoolCounting").hide();
		$("#WordPlay").hide();
		randomize();
	}); 
	$(".pmbutton").click(function(){
		$(".row").hide();
		$("#PairMatch").fadeIn();
		$("#AnimalFeed").hide();
		$("#SneakySilhouettes").hide();
		$("#SuperShapes").hide();
		$("#CoolCounting").hide();
		$("#WordPlay").hide();
		randomize();
	}); 
	$(".afbutton").click(function(){
		$(".row").hide();
		$("#PairMatch").hide();
		$("#AnimalFeed").fadeIn();
		$("#SneakySilhouettes").hide();
		$("#SuperShapes").hide();
		$("#CoolCounting").hide();
		$("#WordPlay").hide();
		randomize();
	}); 
	$(".ssbutton").click(function(){
		$(".row").hide();
		$("#PairMatch").hide();
		$("#AnimalFeed").hide();
		$("#SneakySilhouettes").fadeIn();
		$("#SuperShapes").hide();
		$("#CoolCounting").hide();
		$("#WordPlay").hide();
		randomize();
	}); 
	$(".sssbutton").click(function(){
		$(".row").hide();
		$("#PairMatch").hide();
		$("#AnimalFeed").hide();
		$("#SneakySilhouettes").hide();
		$("#SuperShapes").fadeIn();
		$("#CoolCounting").hide();
		$("#WordPlay").hide();
		randomize();
	}); 
	$(".ccbutton").click(function(){
		$(".row").hide();
		$("#PairMatch").hide();
		$("#AnimalFeed").hide();
		$("#SneakySilhouettes").hide();
		$("#SuperShapes").hide();
		$("#CoolCounting").fadeIn();
		$("#WordPlay").hide();
		randomize();
	}); 
	$(".wpbutton").click(function(){
		$(".row").hide();
		$("#PairMatch").hide();
		$("#AnimalFeed").hide();
		$("#SneakySilhouettes").hide();
		$("#SuperShapes").hide();
		$("#CoolCounting").hide();
		$("#WordPlay").fadeIn();
		randomize();
	}); 
});