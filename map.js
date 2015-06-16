/**
 * Created by ritesh on 6/16/15.
 */
function map(arr,iterator,callback){
    var callbackCount = {"count": 0};
    var obj = {};
    for(i in arr){
        obj[i] = arr[i];
    }
    var keys = Object.keys(obj);
    for (i in keys){
        helper(keys[i],obj[keys[i]],i,arr,obj,iterator,callbackCount,callback);
    }
}

function helper(key,value,pos,arr,object,iterator,callbackCount,callback){
    iterator(value,function(err,transformed){
        if(err) callback(err);
        object[key] = transformed;
        callbackCount["count"]++;
        if(callbackCount["count"] == arr.length){
            var keys = Object.keys(object);
            for(i in keys){
                arr[i] = object[keys[i]];
            }
            callback(null,arr);
        }
    })
}

function iterator(a,callback){
    setTimeout(function() {
        var res = (a + 5);
        callback(null, res);
    },(1/(a))*100000);

}

var arr = [10,20,30,40,50];
map(arr,iterator,function(err,result){
    if(err) throw err;
    console.log(result);
});

module.exports.map = map;