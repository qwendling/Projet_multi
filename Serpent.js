var nbSerpent=0;
var Serpent=function(taille,couleur,arene,pos){
  this.taille=taille;
  this.couleur=couleur;
  this.arene=arene;
  this.pos=pos;
  this.file=new Fifo();
  var nb=nbSerpent;
  nbSerpent++;
  var i,cell,celltmp,carre;
  switch(pos){
    case "haut":
      for(i=0;i<taille;i++){
        cell=new Point(0,i);
        this.file.ajouter(cell);
        carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"Carre num:"+i,1);
        carre.placeSurCellule(cell);
        if(i<taille-1){
          carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"CarreInter num:"+i,1);
          celltmp=new Point(0,i+1);
          carre.placeEntreCellules(cell,celltmp);
        }
      }
      break;
    case "bas":
      for(i=taille-1;i>=0;i--){
        cell=new Point(taille-1,i);
        this.file.ajouter(cell);
        carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"Carre num:"+i,1);
        carre.placeSurCellule(cell);
        if(i>0){
          carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"CarreInter num:"+i,1);
          celltmp=new Point(0,i-1);
          carre.placeEntreCellules(cell,celltmp);
        }
      }
      break;
    default:
      console.log("Position non reconnu : "+pos);
      break;
  }


  this.tete=function(){

  }
  this.queue=function(){

  }

  this.toList=function(){

  }

  this.PlacerTete=function(c){

  }
}
