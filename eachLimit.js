/**
 * Created by ritesh on 6/15/15.
 */
function eachLimit(arr,limit,iterator,callback){
    var curr = 0;
    var lastProcessedTill = 0;
    var i = 0;
    while(i < arr.length){
        console.log("current position: " +i);
        if(curr < limit){
            i++;
            console.log("curr < limit: " +curr + "i value: " +i);
            curr++;
            lastProcessedTill = i;
            iterator(arr[i],function(err,data){
                if (err) callback(err);
                curr--;
            })
        }
    }
}

module.exports.eachLimit = eachLimit;