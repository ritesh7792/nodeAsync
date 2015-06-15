/**
 * Created by ritesh on 6/15/15.
 */

function forEachOf(obj,iterator,callback){
    var keys = Object.keys(obj);
    for(var i = 0 ; i < keys.length ; i++){
        iterator(obj[keys[i]],keys[i],function(err,data){
            if(err) callback(err);
            if(i == (keys.length - 1)) callback();
        })
    }
}

module.exports.forEachOf = forEachOf;