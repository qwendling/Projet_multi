var moteur=new Moteur("arene",50);

var envie=1;
function deplacementIA(){
  if(envie==1){
    var tete=moteur.tabSer[0].tete();
    var nouv_tete=moteur.occupation.voisinLibreAuHasard(tete);
    if(nouv_tete==undefined){
      alert("IA dead");
      envie=0;
      return;
    }
    moteur.occupation.liberer(moteur.tabSer[0].queue());
    moteur.tabSer[0].placerTete(nouv_tete);
    moteur.occupation.occuper(nouv_tete);
    moteur.occupation.visuDebug(moteur.carrelage);
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
      moteur.proposerMouvement(1,"gch");
      break;
    case 38 :
    case 122 :
      moteur.proposerMouvement(1,"haut");
      break;
    case 39 :
    case 100 :
      moteur.proposerMouvement(1,"drt");
      break;
    case 40 :
    case 115 :
      moteur.proposerMouvement(1,"bas");
      break;
    default:
      return;
  }
}
