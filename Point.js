var Point=function(x,y){
	this.x=x;
	this.y=y;
	this.toString=function(){
		return "("+this.x+","+this.y+")";
	}
	this.copie=function(){
		return new Point(this.x,this.y);
	}
	this.voisin=function(dir){
		switch(dir){
			case "haut":
				return new Point(this.x,this.y-1);
			case "bas":
				return new Point(this.x,this.y+1);
			case "gch":
				return new Point(this.x-1,this.y);
			case "drt":
				return new Point(this.x+1,this.y);
			default:
				console.log("Dir non reconnu");
				return undefined; 
		}
	}
}

function sontAuMemePoint(p1,p2){
	return p1.x==p2.x && p2.y==p1.y;
}