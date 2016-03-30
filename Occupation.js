var Occupation=function(arene){
  this.arene=arene;
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
}
