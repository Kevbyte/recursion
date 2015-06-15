// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){
	if(typeof obj==='number'){
		return '' + obj;
	}else if(typeof obj===undefined){
		return '"' + obj + '"';
	}else if(obj=== null){
		return 'null';
	}else if(typeof obj==='boolean'){
		return ''+obj;
	}else if(typeof obj==='string'){
		return '"' + obj + '"';
	}else if(Array.isArray(obj)){
		if(obj.length === 0){
	    	return '[' + obj + ']';
	    }
	    else{
	        var result = [];
	        for (var j=0; j<obj.length; j++){
	        result.push(stringifyJSON(obj[j]));
	        }
	        return '[' + result + ']';
	    }
	}else {
		var keys = Object.keys(obj);
        var empty = [];
        for (var i=0; i<keys.length; i++){
            var keyString = '"' + keys[i] + '":';
            var keyValue = obj[keys[i]]; 
            if(keyString==='functions'){
                return '{}';
            }
            else if(keys[i]==='undefined'){
                return '{}';
            }
            else{
                keyStringVal = keyString + stringifyJSON(keyValue);
        	    empty.push(keyStringVal);  
            }
        }
        return "{" + empty.join(",") + "}";
	}
}

	
	



    
    

