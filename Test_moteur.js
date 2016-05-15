var moteur=new Moteur("arene",50);
var joueur_humain=new Joueur(1,moteur,"humain");
var joueur_machine=new Joueur(0,moteur,"IA_1");
var envie=1;
function deplacementIA(){
  if(envie==1){
    moteur.proposerMouvement(1,joueur_humain.proposerMouvement(moteur.positionProtagoniste()));
    moteur.proposerMouvement(0,joueur_machine.proposerMouvement(moteur.positionProtagoniste()));
  }
  else
    return
}

var interIA;
function IAseconde(){
  if(envie==0){
    location.reload();
  }
  if(interIA != undefined){
    clearInterval(interIA);
    interIA=undefined;
  }
  else
    interIA=setInterval(deplacementIA,200);
}
var button=document.getElementById("buttonStart");
button.onclick=IAseconde;

document.onkeypress = function(evt)
{
  switch(evt.keyCode)
  {
    case 37 :
    case 113 :
      buffer="gch";
      break;
    case 38 :
    case 122 :
      buffer="haut";
      break;
    case 39 :
    case 100 :
      buffer="drt";
      break;
    case 40 :
    case 115 :
      buffer="bas";
      break;
    default:
      return;
  }
}
