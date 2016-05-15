var buffer="haut";
var Joueur=function(id,moteur,type){
  this.id=id;
  this.moteur=moteur;
  this.type=type;
  this.graphe=new Graphes(moteur.arene);
  this.proposerMouvement=function(pos_prota){
    if(type=="humain"){
      this.graphe.dijkstra(pos_prota[0][0],new Point(-1,-1),pos_prota);
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
      var tete=moteur.tabSer[0].tete();
      var nouv_tete=moteur.occupation.voisinLibreAuHasard(tete);
      if(nouv_tete==undefined){
        alert("IA dead");
        envie=0;
        return;
      }
      moteur.occupation.liberer(moteur.tabSer[0].queue());
      moteur.tabSer[0].placerTete(nouv_tete);
      moteur.occupation.occuper(nouv_tete);
      moteur.occupation.visuDebug(moteur.carrelage);
    }
    return "bas";
  }
}
