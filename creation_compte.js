function submit(){
  mail();
  mot_passe();
  telephone();
  nom();
}
 function mail(){
   var box=document.getElementById("mail");
   var mail=document.getElementById("mail");
   var form=document.getElementById("form");

     if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(mail.value)) {
       box.style.borderStyle="solid";
       box.style.borderColor="green";
       box.style.borderWidth="5px";
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
     return 0;
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
    return 0;
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
    return 0;
  }
  else{
    alert("Veuillez saisir votre nom et prenom");
  }
}
