//-------- creation de l’arene -----------
var arene = new Arene("arene", 100); // taille de la cellule : 200 pixels
//--------- creation du carré jaune ------
var rouge =new Carre(50,"#ff0000",arene,"carreRouge",1);
var jaune = document.createElement("div"); // creation d’un calque
jaune.style.backgroundColor = "#ffff00"; // de couleur jaune
jaune.style.width = 50 + 'px'; // de largeur et de
jaune.style.height = 50 + 'px'; // hauteur 150 pixels
arene.parenterAuJeu(jaune); // parenté à l’arène
//--------- placement du carré jaune dans l’arène -------
var cell = new Point(0,0); // la case en haut à gauche
//var cell2=new Point(1,0);
//rouge.placeSurCellule(cell2);
var pix = arene.positionCentreDeCase(cell); // la position du centre de cette cellule
jaune.style.position = "relative";
jaune.style.zIndex = 1;
jaune.style.left = pix.x + 'px'; // devrait placer le coin supérieur gauche
jaune.style.top = pix.y + 'px'; // du carré jaune au centre de la cellule (cf figure 3).
