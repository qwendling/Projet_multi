var Moteur=function(id,taille_cell,color){
  this.id=id;
  this.taille_cell=taille_cell;
  this.color=color;
  this.arene=new Arene(id,taille_cell,color);
  this.carrelage=new Carrelage(this.arene.nbLigne(),this.arene.nbColonne(),parseInt(this.arene.tailleCellule()*0.9),this.arene,"#72A431");
  this.occupation=new Occupation(this.arene,this.carrelage);
  this.serpent1=new Serpent(this.arene.nbLigne(),"#FF612C",this.arene,"haut");
  this.serpent2=new Serpent(this.arene.nbLigne(),"#007DD6",this.arene,"bas");
}
