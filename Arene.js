

var Arene=function(id,taille,color){
	var _id=id;
	var _taille=taille;
	var _color=color;
	this.div=document.getElementById(_id);
	this.tailleCellule=function(){
		return _taille;
	}
	this.nbColonne=function(){
		return (parseInt(this.div.style.height))/_taille;
	}
	this.nbLigne=function(){
		return (parseInt(this.div.style.width))/_taille;
	}
	this.parenterAuJeu=function(div){
		this.div.appendChild(div);
	}
	this.positionCentreDeCase=function(p){
		return (new Point((p.x*_taille)+(_taille/2),(p.y*_taille)+(_taille/2)));
	}
}
