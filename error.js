function eachFunction(arr,iterator,callback){
    for( var i  = 0 ; i < arr.length ; i++){
        iterator(arr[i],function(err){
            if(err) callback(err);
            if(i == (arr.length - 1)) callback();
        });
    }
}

module.exports.forEach = eachFunction;