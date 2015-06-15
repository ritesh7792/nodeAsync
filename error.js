function eachFunction(arr,iterator,callback){
    for( var i  = 0 ; i < arr.length ; i++){
        iterator(arr[i],function(err){
            callback(err);
        });
    }
    callback();
}

module.exports.forEach = eachFunction;