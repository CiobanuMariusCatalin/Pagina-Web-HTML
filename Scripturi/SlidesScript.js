$("document").ready(function() {
/*SLIDES*/
$(function(){
  $("#slides").slidesjs({
  width:500,
  height:250,
  pagination: {active: false},
  navigation: {active:false,effect:"slide"},
  play:{auto:true,interval: 3000,pauseOnHover:true,restartDelay: 1500},
	effect: { slide: { speed: 1000 } }
});
});
});