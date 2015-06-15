/**
 * Created by ritesh on 6/15/15.
 */

function eachSeries(arr, iterator, callback){
    eachSeriesUtil(arr,iterator,callback,0);
}

function eachSeriesUtil(arr,iterator,callback,index){
    if (index = arr.length) callback();
    else{
        iterator(arr[i],function(err){
            callback(err);
        })
        index++;
        eachSeriesUtil(arr,iterator,index,callback);
    }
}