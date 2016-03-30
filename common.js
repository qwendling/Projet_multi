//-------- creation de l’arene -----------
var arene = new Arene("arene",50); // taille de la cellule : 200 pixels
//--------- creation du carré jaune ------
//var rouge =new Carre(50,"#ff0000",arene,"carreRouge",1);
var carrel=new Carrelage(arene.nbLigne(),arene.nbColonne(),arene.tailleCellule()/2,arene,"#6D4FF0");
//--------- placement du carré jaune dans l’arène -------
var cell2=new Point(1,0);
var cell=new Point(0,0);
carrel.colorier(2,1,"#ff0000");
//carrel.couleurDefaut();
//rouge.placeEntreCellules(cell2,cell);
var ser=new Serpent(arene.nbLigne(),"#FF612C",arene,"haut");
var ser2=new Serpent(arene.nbLigne(),"#007DD6",arene,"bas");


document.onkeypress = function(evt)
{
var tete = ser2.tete();
var nouv_tete;
switch(evt.keyCode)
{
case 37 : case 113 :nouv_tete = tete.voisin("gch"); break;
case 38 : case 122 : nouv_tete = tete.voisin("haut"); break;
case 39 : case 100 : nouv_tete = tete.voisin("drt"); break;
case 40 : case 115 :nouv_tete = tete.voisin("bas"); break;
default: return;
}
console.log(evt.keyCode);
ser2.placerTete(nouv_tete);
}
