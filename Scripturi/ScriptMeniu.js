$("document").ready(function() {
/*Meniu */
$(".drop1").hide();
$(".drop2").hide();
var timeOutStire;
var timeOutCampioni;

$("#stire").mouseenter(function(){
	clearTimeout(timeOutStire);
	$(".drop2").hide();
	$(".drop1").show();
});
$("#stire").mouseleave(function(){
	timeOutStire=setTimeout(function(){$(".drop1").hide();},500);
});

$(".drop1").mouseenter(function(){
	clearTimeout(timeOutStire);
});
$(".drop1").mouseleave(function(){
	timeOutStire=setTimeout(function(){$(".drop1").hide();},500);
});
$("#campioni").mouseenter(function(){
	clearTimeout(timeOutCampioni);
	$(".drop1").hide();
	$(".drop2").show();
	});

$("#campioni").mouseleave(function(){
	timeOutCampioni=setTimeout(function(){$(".drop2").hide();},500);
});

$(".drop2").mouseenter(function(){
	clearTimeout(timeOutCampioni);
});
$(".drop2").mouseleave(function(){
	timeOutCampioni=setTimeout(function(){$(".drop2").hide();},500);
});

$("#introducere").mouseenter(function(){
	$(".drop1").hide();
	$(".drop2").hide();
	});
$("#contact").mouseenter(function(){
	$(".drop1").hide();
	$(".drop2").hide();
	});
});