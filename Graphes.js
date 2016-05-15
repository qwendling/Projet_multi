function estDansliste(liste,point){
  var tab=liste.to_Array();
  for(var i=0;i<tab.length;i++){
    if(sontAuMemePoint(tab[i],point)){
      return true;
    }
  }
  return false;
}

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
    for(var i=0;i<arene.nbColonne();i++){
      for (var j = 0; j < arene.nbLigne(); j++) {
        this.tab[i][j]=154154861;
      }
    }
    for(var i=0;i<posProta.length;i++){
      for(var j=0;j<posProta[i].length;j++){
        this.tab[posProta[i][j].x][posProta[i][j].y]=-2;
      }
    }
  }

  this.PointValide=function(point){
    return point.x>=0 && point.x<arene.nbColonne() && point.y>=0 && point.y<arene.nbLigne();
  }

  this.majDistance=function(s1,s2){
    if(this.tab[s2.x][s2.y]>this.tab[s1.x][s1.y]+1){
      this.tab[s2.x][s2.y]=this.tab[s1.x][s1.y]+1;
    }
  }

  this.minTab=function(Q){
    var min=Q[0];
    for(var i=0;i<Q.length;i++){
      if(this.tab[min.x][min.y]>this.tab[Q[i].x][Q[i].y]){
        min=Q[i];
      }
    }
    return min;
  }

  this.dijkstra=function(source,posProta){
    var P=[];
    var Q=[];
    this.initGraphe(posProta);
    for(var i=0;i<arene.nbColonne();i++){
      for (var j = 0; j < arene.nbLigne(); j++) {
        if(this.tab[i][j]!=-2){
          Q.push(new Point(i,j));
        }
      }
    }
    if(this.tab[source.x][source.y]==-2){
      Q.push(source);
    }
    this.tab[source.x][source.y]=0;
    var elem,index,haut,bas,gauche,droite;
    while(Q.length!=0){
      elem=this.minTab(Q);
      index=Q.indexOf(elem);
      Q.splice(index,1);
      haut=elem.voisin("haut");
      bas=elem.voisin("bas");
      gauche=elem.voisin("gch");
      droite=elem.voisin("drt");
      if(this.PointValide(haut)){
        this.majDistance(elem,haut);
      }
      if(this.PointValide(bas)){
        this.majDistance(elem,bas);
      }
      if(this.PointValide(droite)){
        this.majDistance(elem,droite);
      }
      if(this.PointValide(gauche)){
        this.majDistance(elem,gauche);
      }
    }
  }
  this.DistanceMax=function(){
    var max=new Point(0,0);
    for(var i=0;i<arene.nbColonne();i++){
      for (var j = 0; j < arene.nbLigne(); j++) {
        if(this.tab[i][j]!=-2 && this.tab[i][j]!=154154861){
          if(this.tab[i][j]>this.tab[max.x][max.y])
            max=new Point(i,j);
        }
      }
    }
    return max;
  }
  this.DirSafe=function(point,posProta){
    this.dijkstra(point,posProta);
    var max=this.DistanceMax();
    this.dijkstra(max,posProta);
    var haut=point.voisin("haut");
    var bas=point.voisin("bas");
    var gauche=point.voisin("gch");
    var droite=point.voisin("drt");
    var min=haut;
    var choix="haut";
    if(!this.PointValide(min) || this.tab[min.x][min.y]<0){
      min=bas;
      choix="bas";
      if(!this.PointValide(min) || this.tab[min.x][min.y]<0){
        min=droite;
        choix="drt";
        if(!this.PointValide(min) || this.tab[min.x][min.y]<0){
          min=gauche;
          choix="gch";
          return choix;
        }
      }
    }
    // if(this.PointValide(haut)){
    //   console.log("haut : "+this.tab[haut.x][haut.y]);
    // }
    // if(this.PointValide(bas)){
    //   console.log("bas : "+this.tab[bas.x][bas.y]);
    // }
    // if(this.PointValide(droite)){
    //   console.log("droite : "+this.tab[droite.x][droite.y]);
    // }
    // if(this.PointValide(gauche)){
    //   console.log("gauche : "+this.tab[gauche.x][gauche.y]);
    // }
    if(this.PointValide(bas) &&  this.tab[bas.x][bas.y]>0 && this.tab[bas.x][bas.y] < this.tab[min.x][min.y]){
      min=bas;
      choix="bas";
    }
    if(this.PointValide(droite) &&  this.tab[droite.x][droite.y]>0 && this.tab[droite.x][droite.y] < this.tab[min.x][min.y]){
      min=droite;
      choix="drt";
    }
    if(this.PointValide(gauche) &&  this.tab[gauche.x][gauche.y]>0 && this.tab[gauche.x][gauche.y] < this.tab[min.x][min.y]){
      min=gauche;
      choix="gch";
    }
    return choix;
  }
}
