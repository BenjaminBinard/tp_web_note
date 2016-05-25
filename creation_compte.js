function submit(){
  var compteur=0;
  compteur=compteur+mail();
  compteur=compteur+mot_passe();
  compteur=compteur+telephone();
  compteur=compteur+nom();
  compteur=compteur+check();

  if(compteur==5){
    ouverture();
  }
}

 function mail(){
   var box=document.getElementById("mail");
   var mail=document.getElementById("mail");
   var form=document.getElementById("form");

     if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(mail.value)) {
       box.style.borderStyle="solid";
       box.style.borderColor="green";
       box.style.borderWidth="5px";
       return 1;
     } else {
       box.style.borderStyle="solid";
       box.style.borderColor="red";
       box.style.borderWidth="5px";
     }
 }

 function mot_passe(){
   var box=document.getElementById("password").value;
   var passwordverif1=document.getElementById("password_verif").value;
   var passwordverif=document.getElementById("password_verif");
   var taille=document.getElementById("password").value;
   taille=taille.length;

   if(box==passwordverif1){
     passwordverif.style.borderStyle="solid";
     passwordverif.style.borderColor="green";
     passwordverif.style.borderWidth="5px";
     return 1;
   }
   else{
     passwordverif.style.borderStyle="solid";
     passwordverif.style.borderColor="red";
     passwordverif.style.borderWidth="5px";
    }
 }

function telephone(){
  var taille=document.getElementById("telephone").value;
  var tel=document.getElementById("telephone");
  taille=taille.length;

  if(taille==10){
    tel.style.borderStyle="solid";
    tel.style.borderColor="green";
    tel.style.borderWidth="5px";
    return 1;
  }
  else{
    tel.style.borderStyle="solid";
    tel.style.borderColor="red";
    tel.style.borderWidth="5px";
  }
}

function nom() {
  var taille=document.getElementById("nom").value;
  var nom=document.getElementById("nom");
  var taille2=document.getElementById("prenom").value;
  var prenom=document.getElementById("prenom");
  taille=taille.length;
  taille2=taille2.length;

  if(taille2>2 && taille>2){
    return 1;
  }
  else{
    alert("Veuillez saisir votre nom et prenom");
  }
}

function check(){
  var check_button=document.getElementById("condition").checked;

  if(check_button==1){
    return 1;
  }
  else{
    alert("Merci de lire et accepter nos conditions générales de ventes");
  }
}

function ouverture(){
  alert("Merci pour votre inscription ! Bonne continuation sur Game Store");
  window.open("index.html");
}
