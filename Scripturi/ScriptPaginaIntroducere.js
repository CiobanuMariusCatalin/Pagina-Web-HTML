
$("document").ready(function() {
/*Daca widhthu e mai mic decat heightu nu arata pozele cum intentionam eu de aceea le scot*/
setInterval(function(){
	if(window.innerWidth<window.innerHeight){
		$(".divTemplate").hide();
	}
	if(window.innerWidth>window.innerHeight){
		$(".divTemplate").show();
	}
},1000);

/*Buton CONTINUARE DE PE PAGINA INTRO*/

document.getElementById('HomeLinkContinuare').addEventListener('mouseenter',handler,false);


function handler(){
document.getElementById('HomeLinkContinuare').removeEventListener('mouseenter',handler,false);
$("#HomeLinkContinuare").addClass("invarteala");
setTimeout(function(){$("#HomeLinkContinuare").removeClass("invarteala");},1250);
setTimeout(function(){document.getElementById('HomeLinkContinuare').addEventListener('mouseenter',handler,false);},3000);
}




/*SCRIPT PENTRU POZELE DIN CENTRU*/
/*AATROX*/
document.getElementById('Aatrox').onclick=function(){
	var rez=document.querySelector('#Aatrox p');
	rez.className="scrisVizibil";
	this.id='Aatrox2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Aatrox2').id='Aatrox';
		document.querySelector('#Aatrox p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}

/*VELKOZ*/
document.getElementById('Velkoz').onclick=function(){
	var rez=document.querySelector('#Velkoz p');
	rez.className="scrisVizibil";
	this.id='Velkoz2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Velkoz2').id='Velkoz';
		document.querySelector('#Velkoz p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}
/*ELISE*/
document.getElementById('Elise').onclick=function(){
	var rez=document.querySelector('#Elise p');
	rez.className="scrisVizibil";
	this.id='Elise2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Elise2').id='Elise';
		document.querySelector('#Elise p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}

/*GAREN*/
document.getElementById('Garen').onclick=function(){
	var rez=document.querySelector('#Garen p');
	rez.className="scrisVizibil";
	this.id='Garen2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Garen2').id='Garen';
		document.querySelector('#Garen p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}

/*KHAZIX*/
document.getElementById('Khazix').onclick=function(){
	var rez=document.querySelector('#Khazix p');
	rez.className="scrisVizibil";
	this.id='Khazix2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Khazix2').id='Khazix';
		document.querySelector('#Khazix p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}
/*LUCIAN*/
document.getElementById('Lucian').onclick=function(){
	var rez=document.querySelector('#Lucian p');
	rez.className="scrisVizibil";
	this.id='Lucian2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Lucian2').id='Lucian';
		document.querySelector('#Lucian p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}

/*TRYNDAMERE*/
document.getElementById('Tryndamere').onclick=function(){
	var rez=document.querySelector('#Tryndamere p');
	rez.className="scrisVizibil";
	this.id='Tryndamere2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Tryndamere2').id='Tryndamere';
		document.querySelector('#Tryndamere p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}


/*VI*/
document.getElementById('Vi').onclick=function(){
	var rez=document.querySelector('#Vi p');
	rez.className="scrisVizibil";
	this.id='Vi2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Vi2').id='Vi';
		document.querySelector('#Vi p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}

/*YASUO*/
document.getElementById('Yasuo').onclick=function(){
	var rez=document.querySelector('#Yasuo p');
	rez.className="scrisVizibil";
	this.id='Yasuo2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Yasuo2').id='Yasuo';
		document.querySelector('#Yasuo p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}

/*ZED*/
document.getElementById('Zed').onclick=function(){
	var rez=document.querySelector('#Zed p');
	rez.className="scrisVizibil";
	this.id='Zed2';
	var imgn=document.createElement("img");
	imgn.setAttribute('src','images/alb.png');
	imgn.setAttribute('class','ImagineFundalAnimatie');
	document.getElementsByTagName("body")[0].appendChild(imgn);
	
	
imgn.onclick=function(){
		document.getElementById('Zed2').id='Zed';
		document.querySelector('#Zed p').className="scrisAscuns";
		var sterge=document.getElementsByTagName("body")[0];
		sterge.removeChild(this);
}
}




});

