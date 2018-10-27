
/*
setInterval(function(){
	var theOddOnes = document.getElementsByClassName("userContentWrapper");
	var removeAr = [];
	for(var i=0; i<theOddOnes.length; i++)
	{
	    var index = theOddOnes[i].innerText.indexOf('Popular Across Facebook');
	    if(index > -1){
	    	removeAr.push(theOddOnes[i])
	    }
	    index = theOddOnes[i].innerText.indexOf('SpSonSsoSredS');
	    if(index > -1){
	    	removeAr.push(theOddOnes[i])
	    }
	    index = theOddOnes[i].innerText.indexOf('Sponsored');
	    if(index > -1){
	    	removeAr.push(theOddOnes[i])
	    }
	}
	for(var i=0; i<removeAr.length; i++){
		removeAr[i].parentElement.remove(removeAr[i]);
	}
},1000);
*/


var theOddOnes = document.getElementsByClassName("r_bkwasmj8p");
var removeAr = [];
for(var i=0; i<theOddOnes.length; i++)
{
    var index = theOddOnes[i].innerText.indexOf('Create Ad');
    if(index > -1){
    	removeAr.push(theOddOnes[i])
    }
    index = theOddOnes[i].innerText.indexOf('Sponsored');
    if(index > -1){
    	removeAr.push(theOddOnes[i])
    }
}
for(var i=0; i<removeAr.length; i++){
	removeAr[i].parentElement.remove(removeAr[i]);
}

var pathth;
var observable = document.getElementById('stream_pagelet');

observable.addEventListener('DOMSubtreeModified', function(ev) {
  for(var i=0; i<ev.path.length; i++){
	  try{
	  	pathth = ev.path[i];
	  	var attr = pathth.getAttributeNames();

	  	for(var j=0; j<attr.length; j++){

	  		if(attr[j].indexOf('class') == 0){
	  			var classNames = pathth.classList;
	  			for(var k=0; k<classNames.length; k++){
	  				if(classNames[k].indexOf('_5pcr') == 0 || classNames[k].indexOf('userContentWrapper') == 0){
	  					var content = pathth.innerText;
	  					if(content.indexOf('Popular Across Facebook') > -1 || content.indexOf('Sponsored') > -1 || content.indexOf('SpSonSsoSredS') > -1){
	  						//console.log('found');
	  						pathth.parentElement.remove(pathth);
	  					}
	  				}
	  				else if(classNames[k].indexOf('r_bkwasmj8p') == 0 ){
	  					var content = pathth.innerText;
	  					if(content.indexOf('Sponsored') > -1 || content.indexOf('Create Ad') > -1){
	  						//console.log('found');
	  						pathth.parentElement.remove(pathth);
	  					}
	  				}
	  			}
	  		}

	  	}
	  }catch(err){

	  }
  }
}, false);



