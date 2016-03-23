//-------- creation de l’arene -----------
var arene = new Arene("arene", 100); // taille de la cellule : 200 pixels
//--------- creation du carré jaune ------
var rouge =new Carre(50,"#ff0000",arene,"carreRouge",1);
var carrel=new Carrelage(arene.nbLigne(),arene.nbColonne(),50,arene,"#25f2c4");
//--------- placement du carré jaune dans l’arène -------
var cell2=new Point(1,0);
var cell=new Point(0,0);
carrel.colorier(2,1,"#ff0000");
//carrel.couleurDefaut();
rouge.placeEntreCellules(cell2,cell);
