var inter;
function clap(){
  console.log(Math.random());
}
function clapseconde(){
  if(inter != undefined){
    clearInterval(inter);
    inter=undefined;
  }
  else
    inter=setInterval(clap,500);
}
var button=document.getElementById("buttonStart");
button.onclick=clapseconde;
//-------- creation de l’arene -----------
var arene = new Arene("arene",50); // taille de la cellule : 200 pixels
//--------- creation du carré jaune ------
//var rouge =new Carre(50,"#ff0000",arene,"carreRouge",1);
var carrel=new Carrelage(arene.nbLigne(),arene.nbColonne(),parseInt(arene.tailleCellule()*0.9),arene,"#72A431");
//--------- placement du carré jaune dans l’arène -------
var cell2=new Point(1,0);
var cell=new Point(0,0);
carrel.colorier(2,1,"#ff0000");
//carrel.couleurDefaut();
//rouge.placeEntreCellules(cell2,cell);
var ser=new Serpent(arene.nbLigne(),"#FF612C",arene,"haut");
var ser2=new Serpent(arene.nbLigne(),"#007DD6",arene,"bas");
var occup=new Occupation(arene);
for (var i = 0; i < arene.nbLigne(); i++) {
  occup.occuper(new Point(i,0));
  occup.occuper(new Point(i,arene.nbLigne()-1));

}
occup.visuDebug(carrel);


document.onkeypress = function(evt)
{
  var tete = ser2.tete();
  var nouv_tete;
  switch(evt.keyCode)
  {
    case 37 :
    case 113 :
      if(tete.x<=0)
        return;
      if(occup.listeVoisinLibres(tete).length==0){
        alert("Tu as perdu");
        return;
      }
      if(occup.estLibre(new Point(tete.x-1,tete.y)))
        nouv_tete = tete.voisin("gch");
      else {
        nouv_tete=occup.voisinLibreAuHasard(tete);
      }
      break;
    case 38 :
    case 122 :
      if(tete.y<=0)
        return;
      if(occup.listeVoisinLibres(tete).length==0){
        alert("Tu as perdu");
        return;
      }
      if(occup.estLibre(new Point(tete.x,tete.y-1)))
        nouv_tete = tete.voisin("haut");
      else {
        nouv_tete=occup.voisinLibreAuHasard(tete);
      }
      break;
    case 39 :
    case 100 :
      if(tete.x>=arene.nbColonne()-1)
        return;
      if(occup.listeVoisinLibres(tete).length==0){
        alert("Tu as perdu");
        return;
      }
      if(occup.estLibre(new Point(tete.x+1,tete.y)))
        nouv_tete = tete.voisin("drt");
      else {
        nouv_tete=occup.voisinLibreAuHasard(tete);
      }
      break;
    case 40 :
    case 115 :
      if(tete.y>=arene.nbLigne()-1)
        return;
      if(occup.listeVoisinLibres(tete).length==0){
        alert("Tu as perdu");
        return;
      }
      if(occup.estLibre(new Point(tete.x,tete.y+1)))
        nouv_tete = tete.voisin("bas");
      else {
        nouv_tete=occup.voisinLibreAuHasard(tete);
      }
      break;
    default:
      return;
  }
  occup.liberer(ser2.queue());
  ser2.placerTete(nouv_tete);
  occup.occuper(nouv_tete);
  occup.visuDebug(carrel);
}
