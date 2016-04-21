var Moteur=function(id,taille_cell,color){
  this.id=id;
  this.taille_cell=taille_cell;
  this.color=color;
  this.arene=new Arene(id,taille_cell,color);
  this.carrelage=new Carrelage(this.arene.nbLigne(),this.arene.nbColonne(),parseInt(this.arene.tailleCellule()*0.9),this.arene,"#72A431");
  this.occupation=new Occupation(this.arene,this.carrelage);
  this.tabSer=[];
  this.tabSer.push(new Serpent(this.arene.nbLigne(),"#FF612C",this.arene,"haut"));
  this.tabSer.push(new Serpent(this.arene.nbLigne(),"#007DD6",this.arene,"bas"));

  this.nbLigne=function(){
    return this.arene.nbLigne();
  }

  this.nbColonne=function(){
    return this.arene.nbColonne();
  }

  this.ajouterSerpent=function(couleur="#a59b6f",depart){
    switch(depart){
      case "haut":
        this.tabSer.push(new Serpent(this.arene.nbLigne(),couleur,this.arene,"haut"));
        break;
      case "bas":
        this.tabSer.push(new Serpent(this.arene.nbLigne(),couleur,this.arene,"bas"))
        break;
      default:
        console.log("Erreur: Position non reconnu pour les serpent");
        return;
    }
  }
  this.positionProtagoniste=function(){
    var tabdePos=[];
    for(var i=0;i<this.tabSer.length;i++){
      tabdePos.push(this.tabSer[i].toList());
    }
    return tabdePos;
  }

}
