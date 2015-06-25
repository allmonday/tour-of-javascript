/*
创建全局唯一的遮盖层
*/
var singleton = function( fn ){	
		var result;
    return function(){
        return result || ( result = fn .apply( this, arguments ) );
    }
}
 
var createMask = singleton( function(){
	return document.body.appendChild( document.createElement('div') );
})


$( 'button' ).click( function(){
   createMask().show();
});
