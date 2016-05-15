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
    if(tab[s2.x][s2.y]>tab[s1.x][s2.y]+1){
      tab[s2.x][s2.y]=tab[s1.x][s2.y]+1;
    }
  }

  this.minTab=function(Q){
    var min=Q[0];
    for(var i=0;i<Q.length;i++){
      if(tab[min.x][min.y]>tab[Q[i].x][Q[i].y]){
        min=Q[i];
      }
    }
    return min;
  }

  this.dijkstra=function(source,destination,posProta){
    var P=[];
    var Q=[];
    this.initGraphe(posProta);
    for(var i=0;i<posProta.length;i++){
      for (var j = 0;j<posProta[i].length; j++) {
        if(this.tab[posProta[i][j].x][posProta[i][j].y]!=-2){
          Q.push(new Point(i,j));
        }
      }
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
      if(sontAuMemePoint(haut,destination)){
        return;
      }
      if(this.PointValide(bas)){
        this.majDistance(elem,bas);
      }
      if(sontAuMemePoint(bas,destination)){
        return;
      }
      if(this.PointValide(droite)){
        this.majDistance(elem,droite);
      }
      if(sontAuMemePoint(droite,destination)){
        return;
      }
      if(this.PointValide(gauche)){
        this.majDistance(elem,gauche);
      }
      if(sontAuMemePoint(gauche,destination)){
        return;
      }
    }
  }
}
