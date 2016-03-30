var Fifo=function(){
    var array=[];

    this.estVide=function(){
        return array.length==0?true : false;
    }

    this.ajouter=function(x){
        array.push(x);
    }

    this.dernier=function(){
      return array[array.length-1];
    }

    this.premier=function(){
        return array[0];
    }

    this.liberer=function(){
        array.reverse();
        array.pop();
        array.reverse();
    }

    this.print=function(){
        for(var x in array){
            console.log(array[x]);
        }
    }

    this.to_Array=function(){
        var nouv=[];
        return nouv.concat(array);
    }

}
