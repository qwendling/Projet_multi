var Carrelage=function(nbLigne,nbColonne,tailleCarreaux,arene,color){
  this.nbLigne=nbLigne;
  this.nbColonne=nbColonne;
  this.tailleCarreaux=tailleCarreaux;
  this.arene=arene;
  this.color=color;
  var i,j,c;
  for(i=0;i<this.nbLigne;i++){
    for(j=0;j<this.nbColonne;j++){
      c=new Carre(this.tailleCarreaux,this.color,this.arene,"Carreau"+i+","+j,0);
      c.placeSurCellule(new Point(j,i));
    }
  }

  this.colorier=function(x,y,couleur){
    var div=document.getElementById("Carreau"+y+","+x);
    div.style.backgroundColor=couleur;
  }

  this.couleurDefaut=function(){
    var i,j,div;
    for(i=0;i<this.nbLigne;i++){
      for(j=0;j<this.nbColonne;j++){
        this.colorier(j,i,this.color);
      }
    }
  }
}
