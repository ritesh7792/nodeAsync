/**
 * Created by ritesh on 6/15/15.
 */

function forEachOfSeries(obj,iterator,callback){
    var keys = Object.keys(obj);
    forEachOfSeriesUtil(obj,iterator,callback,keys,0);
}

function forEachOfSeriesutil(obj,iterator,callback,keys,index){
    if(index == keys.length) callback();
    else{
        iterator(obj[keys[index]],keys[index],function(err,data){
            if(err) callback(err);
            forEachOfSeriesutil(obj,iterator,callback,keys,index+1)
        });
    }
}
