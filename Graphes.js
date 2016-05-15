var Graphes=function(arene){
  this.arene=arene;
  this.tab=new Array(arene.nbColonne());
  for(var i=0;i<arene.nbColonne();i++){
    this.tab[i]=new Array(arene.nbLigne());
  }
  for(var i=0;i<arene.nbColonne();i++){
    for (var j = 0; j < arene.nbLigne(); j++) {
      this.tab[i][j]=-1;
    }
  }
  this.initGraphe=function(posProta){
    for(var i=0;i<posProta.length;i++){
      for(var j=0;j<posProta[i].length;j++){
        this.tab[posProta[i][j].x][posProta[i][j].y]=-2;
      }
    }
  }

  this.PointValide=function(point){
    return point.x>=0 && point.x<arene.nbColonne() && point.y>=0 && point.y<arene.nbLigne();
  }

  this.dijkstra=function(source,destination){
    var liste=new Fifo();
    var elem,haut,bas,droite,gauche,val;
    this.tab[source.x][source.y]=0;
    liste.ajouter(source);
    while(!liste.estVide()){
      elem=liste.premier();
      val=this.tab[elem.x][elem.y];
      haut=elem.voisin("haut");
      bas=elem.voisin("bas");
      gauche=elem.voisin("gch");
      droite=elem.voisin("drt");
      if(this.PointValide(haut)){
        if(this.tab[haut.x][haut.y]!=-2){
          if(this.tab[haut.x][haut.y]==-1){
            this.tab[haut.x][haut.y]=1+val;
            if(sontAuMemePoint(destination,haut)){
              return;
            }
            liste.ajouter(haut);
          }else if (this.tab[haut.x][haut.y]>val) {
            this.tab[haut.x][haut.y]=1+val;
            if(sontAuMemePoint(destination,haut)){
              return;
            }
            liste.ajouter(haut);
          }
        }
      }
      if(this.PointValide(bas)){
        if(this.tab[bas.x][bas.y]!=-2){
          if(this.tab[bas.x][bas.y]==-1){
            this.tab[bas.x][bas.y]=1+val;
            if(sontAuMemePoint(destination,bas)){
              return;
            }
            liste.ajouter(bas);
          }else if (this.tab[bas.x][bas.y]>val) {
            this.tab[bas.x][bas.y]=1+val;
            if(sontAuMemePoint(destination,bas)){
              return;
            }
            liste.ajouter(bas);
          }
        }
      }
      if(this.PointValide(gauche)){
        if(this.tab[gauche.x][gauche.y]!=-2){
          if(this.tab[gauche.x][gauche.y]==-1){
            this.tab[gauche.x][gauche.y]=1+val;
            if(sontAuMemePoint(destination,gauche)){
              return;
            }
            liste.ajouter(gauche);
          }else if (this.tab[gauche.x][gauche.y]>val) {
            this.tab[gauche.x][gauche.y]=1+val;
            if(sontAuMemePoint(destination,gauche)){
              return;
            }
            liste.ajouter(gauche);
          }
        }
      }
      if(this.PointValide(droite)){
        if(this.tab[droite.x][droite.y]!=-2){
          if(this.tab[droite.x][droite.y]==-1){
            this.tab[droite.x][droite.y]=1+val;
            if(sontAuMemePoint(destination,droite)){
              return;
            }
            liste.ajouter(droite);
          }else if (this.tab[haut.droite.x][haut.droite.y]>val) {
            this.tab[haut.droite.x][haut.droite.y]=1+val;
            if(sontAuMemePoint(destination,droite)){
              return;
            }
            liste.ajouter(haut.droite);
          }
        }
      }
      liste.liberer();
    }
  }
}
