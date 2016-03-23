var Carrelage=function(nbLigne,nbColonne,tailleCarreaux,arene,color){
  this.nbLigne=nbLigne;
  this.nbColonne=nbColonne;
  this.tailleCarreaux=tailleCarreaux;
  this.arene=arene;
  this.color=color;
  var i,j,c;
  for(i=0;i<nbLigne;i++){
    for(j=0;j<nbColonne;j++){
      c=new Carre(this.tailleCarreaux,this.color,this.arene,"Carreau"+i+","+j,0);
      c.placeSurCellule(new Point(i,j));
    }
  }
}
