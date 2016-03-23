var Carre=function(taille,color,arene,id,profondeur){
	this.taille=taille;
	this.color=color;
	this.arene=arene;
	this.id=id;
	this.profondeur=profondeur;
	var _div=document.createElement("div");
	_div.id=id;
	_div.style.width=taille+"px";
	_div.style.height=taille+"px";
	_div.style.zIndex=profondeur;
	_div.style.color=color;
	_div.style.position="relative";
	arene.parenterAuJeu(_div);

	this.placeSurCellule=function(cell){
		var pos=this.arene.positionCentreDeCase(cell);
		_div.style.left=(pos.x-(this.taille/2))+"px";
		_div.style.top=(pos.y-(this.taille/2))+"px";
	}

	this.placeEntreCellules=function(cell1,cell2){
		var pos1=this.arene.positionCentreDeCase(cell1);
		var pos2=this.arene.positionCentreDeCase(cell2);
		var newpos=new Point((pos1.x+pos2.x)/2,(pos1.y+pos2.y)/2);
		_div.style.left=(newpos.x-(this.taille/2))+"px";
		_div.style.top=(newpos.y-(this.taille/2))+"px";
	}

	this.colorier=function(c){
		this.color=c;
		_div.style.color=c;
	}


}
