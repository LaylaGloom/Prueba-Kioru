var jugador;
var computadora;
var img_user= document.getElementById("r-user");
var img_compu=document.getElementById("r-compu");
var url_raiz=window.location;
var mar_user=document.getElementById("jugador");
var mar_compu=document.getElementById("compu");
var r_user=0, r_compu=0;
var frase=document.getElementById("frase");
/*
1=piedra
2=papel
3=tijera
*/
$('#iu-1').click(function() {
	jugador=1;
	console.log('jugador: ',jugador);
	random_c();
	img_user.src=src_img(jugador);
	img_compu.src=src_img(computadora);
	ganador(jugador,computadora);
});
$('#iu-2').click(function() {
	jugador=2;
	console.log('jugador: ',jugador);
	random_c();
	img_user.src=src_img(jugador);
	img_compu.src=src_img(computadora);
	ganador(jugador,computadora);
});
$('#iu-3').click(function() {
	jugador=3;
	console.log('jugador: ',jugador);
	random_c();
	img_user.src=src_img(jugador);
	img_compu.src=src_img(computadora);
	ganador(jugador,computadora);
});


function random_c() {
	computadora=Math.floor(1 +(Math.random() * 3));
	console.log('computadora: ', computadora);
}
function src_img(resul) {
	img_src=url_raiz;
	if(resul==1){
		img_src="../images/piedra.svg";
	}
	else if(resul==2){
		img_src="../images/papel.svg";
	}
	else if(resul==3){
		img_src="../images/tijeras.svg"
	}
	return img_src;

}
function ganador(jugador,computadora) {
	if(jugador==computadora){
		frase.innerHTML="¡Empate!";
	}
	else if((jugador==1 && computadora==2) || (jugador==2 && computadora==3) || (jugador==3 && computadora==1)){
		frase.innerHTML="¡Perdiste!";
		r_compu++;
		mar_user.innerHTML=r_user;
		mar_compu.innerHTML=r_compu;
	}
	else if((jugador==1 && computadora==3) || (jugador==2 && computadora==1) || (jugador==3 && computadora==2)){
		frase.innerHTML="¡Ganaste!";
		r_user++;
		mar_user.innerHTML=r_user;
		mar_compu.innerHTML=r_compu;
	}
}