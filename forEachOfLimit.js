/**
 * Created by ritesh on 6/16/15.
 */

function forEachOfLimit(obj,iterator,callback){
    var curr = 0;
    var i = 0;
    var keys = Object.keys(obj);
    while(i < keys.length){
        if(curr < limit){
            i++;
            curr++;
            iterator(obj[keys[i]],keys[i],function(err,data){
                if (err) callback(err);
                curr--;
            })
        }
    }
    callback();
}
