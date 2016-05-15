var buffer="haut";
var Joueur=function(id,moteur,type){
  this.id=id;
  this.moteur=moteur;
  this.type=type;
  this.graphe=new Graphes(moteur.arene);
  this.proposerMouvement=function(pos_prota){
    if(type=="humain"){
      return buffer;
    }
    if(type=="IA_1"){
      return "haut";
    }
    if(type=="IA_2"){
      var alea=parseInt(Math.random()*4);
      switch(alea){
        case 0:
          return "haut";
        case 1:
          return "bas";
        case 2:
          return "gch";
        case 3:
          return "drt";
      }
    }
    if(type=="IA_3"){
      var tailleSer=pos_prota[this.id].length;
      return this.graphe.DirSafe(pos_prota[this.id][tailleSer-1],pos_prota);
    }
    if(type=="IA_4"){
      var tailleSer=pos_prota[(this.id+1)%2].length;
      this.graphe.dijkstra(pos_prota[(this.id+1)%2][tailleSer-1],pos_prota);
      var haut=pos_prota[this.id][tailleSer-1].voisin("haut");
      var bas=pos_prota[this.id][tailleSer-1].voisin("bas");
      var gauche=pos_prota[this.id][tailleSer-1].voisin("gch");
      var droite=pos_prota[this.id][tailleSer-1].voisin("drt");
      var max=haut;
      var choix="haut";
      if(!this.graphe.PointValide(max) || this.graphe.tab[max.x][max.y]==154154861){
        max=bas;
        choix="bas";
        if(!this.graphe.PointValide(max) || this.graphe.tab[max.x][max.y]==154154861){
          max=droite;
          choix="drt";
          if(!this.graphe.PointValide(max) || this.graphe.tab[max.x][max.y]==154154861){
            max=gauche;
            choix="gch";
            return this.graphe.DirSafe(pos_prota[this.id][tailleSer-1],pos_prota);
          }
        }
      }
      if(this.graphe.PointValide(bas) && this.graphe.tab[bas.x][bas.y]!=154154861 && this.graphe.tab[bas.x][bas.y] > this.graphe.tab[max.x][max.y]){
        max=bas;
        choix="bas";
      }
      if(this.graphe.PointValide(droite) && this.graphe.tab[droite.x][droite.y]!=154154861 && this.graphe.tab[droite.x][droite.y] > this.graphe.tab[max.x][max.y]){
        max=droite;
        choix="drt";
      }
      if(this.graphe.PointValide(gauche) && this.graphe.tab[gauche.x][gauche.y]!=154154861 && this.graphe.tab[gauche.x][gauche.y] > this.graphe.tab[max.x][max.y]){
        max=gauche;
        choix="gch";
      }
      return choix;
    }
    if(type=="IA_5"){
      var tailleSer=pos_prota[(this.id+1)%2].length;
      this.graphe.dijkstra(pos_prota[(this.id+1)%2][tailleSer-1],pos_prota);
      var haut=pos_prota[this.id][tailleSer-1].voisin("haut");
      var bas=pos_prota[this.id][tailleSer-1].voisin("bas");
      var gauche=pos_prota[this.id][tailleSer-1].voisin("gch");
      var droite=pos_prota[this.id][tailleSer-1].voisin("drt");
      var min=haut;
      var choix="haut";
      if(!this.graphe.PointValide(min) || this.graphe.tab[min.x][min.y]<0){
        min=bas;
        choix="bas";
        if(!this.graphe.PointValide(min) || this.graphe.tab[min.x][min.y]<0){
          min=droite;
          choix="drt";
          if(!this.graphe.PointValide(min) || this.graphe.tab[min.x][min.y]<0){
            min=gauche;
            choix="gch";
            return this.graphe.DirSafe(pos_prota[this.id][tailleSer-1],pos_prota);
          }
        }
      }
      if(this.graphe.PointValide(bas) &&  this.graphe.tab[bas.x][bas.y]>0 && this.graphe.tab[bas.x][bas.y] < this.graphe.tab[min.x][min.y]){
        min=bas;
        choix="bas";
      }
      if(this.graphe.PointValide(droite) &&  this.graphe.tab[droite.x][droite.y]>0 && this.graphe.tab[droite.x][droite.y] < this.graphe.tab[min.x][min.y]){
        min=droite;
        choix="drt";
      }
      if(this.graphe.PointValide(gauche) &&  this.graphe.tab[gauche.x][gauche.y]>0 && this.graphe.tab[gauche.x][gauche.y] < this.graphe.tab[min.x][min.y]){
        min=gauche;
        choix="gch";
      }
      return choix;
    }
    return "bas";
  }
}
