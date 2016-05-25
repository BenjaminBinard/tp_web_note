var test=setInterval(timer,5000);//declenchement du pop-up apres 5s
var compteur=0;

function timer(){//Affichage du pop-up
	
	var suiv=document.getElementById("defilement");
	
	if(compteur==0){
		suiv.style.background="url('images/promo2.jpg') no-repeat";
		compteur++;
	}
	else{
		suiv.style.background="url('images/promo1.jpg') no-repeat";
		compteur--;
		
	}
}

function prix1(cout){
	
	document.getElementById('cout1').innerHTML = cout + '&#128';
}

function nom1(chaine){
	
	document.getElementById('cout1').innerHTML = chaine;
}

function prix2(cout){
	
	document.getElementById('cout2').innerHTML = cout + '&#128';
}

function nom2(chaine){
	
	document.getElementById('cout2').innerHTML = chaine;
}

function prix3(cout){
	
	document.getElementById('cout3').innerHTML = cout + '&#128';
}

function nom3(chaine){
	
	document.getElementById('cout3').innerHTML = chaine;
}
function prix4(cout){
	
	document.getElementById('cout4').innerHTML = cout + '&#128';
}

function nom4(chaine){
	
	document.getElementById('cout4').innerHTML = chaine;
}


function prix5(cout){
	
	document.getElementById('cout5').innerHTML = cout + '&#128';
}

function nom5(chaine){
	
	document.getElementById('cout5').innerHTML = chaine;
}

function prix6(cout){
	
	document.getElementById('cout6').innerHTML = cout + '&#128';
}

function nom6(chaine){
	
	document.getElementById('cout6').innerHTML = chaine;
}

function prix7(cout){
	
	document.getElementById('cout7').innerHTML = cout + '&#128';
}

function nom7(chaine){
	
	document.getElementById('cout7').innerHTML = chaine;
}

function prix8(cout){
	
	document.getElementById('cout8').innerHTML = cout + '&#128';
}

function nom8(chaine){
	
	document.getElementById('cout8').innerHTML = chaine;
}

function prix9(cout){
	
	document.getElementById('cout9').innerHTML = cout + '&#128';
}

function nom9(chaine){
	
	document.getElementById('cout9').innerHTML = chaine;
}





