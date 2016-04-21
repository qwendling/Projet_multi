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
  for (var i = 0; i < this.arene.nbLigne(); i++) {
    this.occupation.occuper(new Point(i,0));
    this.occupation.occuper(new Point(i,this.arene.nbLigne()-1));

  }
  this.occupation.visuDebug(this.carrelage);

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

  this.proposerMouvement=function(indice,mouvement){
    var serpentCible=this.tabSer[indice];
    var tete = serpentCible.tete();
    var nouv_tete;
    switch(mouvement)
    {
      case "gch" :
        if(this.occupation.listeVoisinLibres(tete).length==0){
          alert("Tu as perdu");
          return;
        }
        if(tete.x<=0){
          nouv_tete=this.occupation.voisinLibreAuHasard(tete);
          break;
        }
        if(this.occupation.estLibre(new Point(tete.x-1,tete.y)))
          nouv_tete = tete.voisin("gch");
        else {
          nouv_tete=this.occupation.voisinLibreAuHasard(tete);
        }
        break;
      case "haut" :
        if(this.occupation.listeVoisinLibres(tete).length==0){
          alert("Tu as perdu");
          return;
        }
        if(tete.y<=0){
          nouv_tete=this.occupation.voisinLibreAuHasard(tete);
          break;
        }
        if(this.occupation.estLibre(new Point(tete.x,tete.y-1)))
          nouv_tete = tete.voisin("haut");
        else {
          nouv_tete=this.occupation.voisinLibreAuHasard(tete);
        }
        break;
      case "drt" :
        if(this.occupation.listeVoisinLibres(tete).length==0){
          alert("Tu as perdu");
          return;
        }
        if(tete.x>=this.arene.nbColonne()-1){
          nouv_tete=this.occupation.voisinLibreAuHasard(tete);
          break;
        }
        if(this.occupation.estLibre(new Point(tete.x+1,tete.y)))
          nouv_tete = tete.voisin("drt");
        else {
          nouv_tete=this.occupation.voisinLibreAuHasard(tete);
        }
        break;
      case "bas" :
        if(this.occupation.listeVoisinLibres(tete).length==0){
          alert("Tu as perdu");
          return;
        }
        if(tete.y>=this.arene.nbLigne()-1){
          nouv_tete=this.occupation.voisinLibreAuHasard(tete);
          break;
        }
        if(this.occupation.estLibre(new Point(tete.x,tete.y+1)))
          nouv_tete = tete.voisin("bas");
        else {
          nouv_tete=this.occupation.voisinLibreAuHasard(tete);
        }
        break;
      default:
        return;
    }
    this.occupation.liberer(serpentCible.queue());
    serpentCible.placerTete(nouv_tete);
    this.occupation.occuper(nouv_tete);
    this.occupation.visuDebug(this.carrelage);
  }

}
