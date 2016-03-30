var Occupation=function(arene,carrelage){
  this.arene=arene;
  this.carrelage=carrelage;
  this.tab=new Array(arene.nbColonne());
  for(var i=0;i<arene.nbColonne();i++){
    this.tab[i]=new Array(arene.nbLigne());
  }

  for(i=0;i<arene.nbColonne();i++){
    for (var j = 0; j < arene.nbLigne(); j++) {
      this.tab[i][j]=0;
    }
  }

  this.occuper=function(cell){
    this.tab[cell.x][cell.y]=1;
  }

  this.liberer=function(cell){
    this.tab[cell.x][cell.y]=0;
  }

  this.touLiberer=function(){
    for(var i=0;i<arene.nbColonne();i++){
      for (var j = 0; j < arene.nbLigne(); j++) {
        this.tab[i][j]=0;
      }
    }
  }

  this.estLibre=function(cell){
    return this.tab[cell.x][cell.y]==0;
  }

  this.listeVoisinLibres=function(cell){
    var liste=[];
    var haut=cell.y-1;
    var bas=cell.y+1;
    var droite=cell.x+1;
    var gauche=cell.x-1;
    if(haut >= 0 && this.tab[cell.x][haut]==0)
      liste.push(new Point(cell.x,haut));
    if(bas < arene.nbLigne() && this.tab[cell.x][bas]==0)
      liste.push(new Point(cell.x,bas));
    if(droite < arene.nbColonne() && this.tab[droite][cell.y]==0)
      liste.push(new Point(droite,cell.y));
    if(gauche >= 0 && this.tab[gauche][cell.y]==0)
      liste.push(new Point(gauche,cell.y));
    return liste;
  }

  this.voisinLibreAuHasard=function(cell){
    var liste=this.listeVoisinLibres(cell);
    if(liste.length==0)
      return undefined;
    return liste[parseInt(Math.random()*liste.length)];
  }

  this.visuDebug=function(carrelage){
    for(var i=0;i<arene.nbColonne();i++){
      for (var j = 0; j < arene.nbLigne(); j++) {
        if(this.tab[i][j]==0)
          carrelage.colorier(i,j,carrelage.color);
        if(this.tab[i][j]==1)
          carrelage.colorier(i,j,"#ff0000");
      }
    }
  }
}
