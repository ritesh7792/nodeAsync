/**
 * Created by ritesh on 6/15/15.
 */
function forEachOf(arr,iterator,callback){
    for(var i = 0 ; i < arr.length ; i++){
        iterator(arr[i],i,function(err,data){
            if(err) callback(err);
            if(i == (arr.length - 1)) callback();
        })
    }
}

module.exports.forEachOf = forEachOf;