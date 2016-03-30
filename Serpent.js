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
      for(i=taille-1;i>=0;i--){
        cell=new Point(i,0);
        this.file.ajouter(cell);
        carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"Carre num:"+i+0,1);
        carre.placeSurCellule(cell);
        if(i>0){
          carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"CarreInter num:"+i+0,1);
          celltmp=new Point(i-1,0);
          carre.placeEntreCellules(cell,celltmp);
        }
      }
      break;
    case "bas":
      for(i=0;i<taille;i++){
        cell=new Point(i,taille-1);
        this.file.ajouter(cell);
        carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"Carre num:"+i+(taille-1),1);
        carre.placeSurCellule(cell);
        if(i<taille-1){
          carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"CarreInter num:"+i+(taille-1),1);
          celltmp=new Point(i+1,taille-1);
          carre.placeEntreCellules(cell,celltmp);
        }
      }
      break;
    default:
      console.log("Position non reconnu : "+pos);
      break;
  }


  this.tete=function(){
    var tmp=this.file.dernier();
    return new Point(tmp.x,tmp.y);
  }
  this.queue=function(){
    var tmp=this.file.premier();
    return new Point(tmp.x,tmp.y);
  }

  this.toList=function(){
    return this.file.to_Array();
  }

  this.placerTete=function(c){
    var fin=this.queue();
    var debut=this.tete();
    var sup1=document.getElementById("Serpent"+nb+"Carre num:"+fin.x+fin.y);
    var sup2=document.getElementById("Serpent"+nb+"CarreInter num:"+fin.x+fin.y);
    this.arene.div.removeChild(sup1);
    this.arene.div.removeChild(sup2);
    carre=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"CarreInter num:"+debut.x+debut.y,1);
    carre.placeEntreCellules(c,debut);
    carre2=new Carre(arene.tailleCellule()/2,this.couleur,this.arene,"Serpent"+nb+"Carre num:"+c.x+c.y,1);
    carre2.placeSurCellule(c);
    this.file.liberer();
    this.file.ajouter(new Point(c.x,c.y));
  }
}
