let returnsAnAnonymousFunction = function (){
    return "A String"
}
function receivesAFunction(callback){
    callback()
}
//iInvokeThings(function () { return 4 + 5; });
var fn 
fn = returnsANamedFunction(function (){return returnsANamedFunction}) 
function returnsANamedFunction(something){
    return something()
}

//fn = returnsANamedFunction()

//receivesAFunction(aNewFunction)