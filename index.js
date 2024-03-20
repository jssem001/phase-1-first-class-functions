function returnsAnAnonymousFunction(){
    return function(){

    }
}
function receivesAFunction(callback){
    callback()
}
 
function returnsANamedFunction(){
    return function namedFunction(){

    }
}

