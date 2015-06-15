/**
 * Created by ritesh on 6/15/15.
 */


var arr = [1,2,3,4,5,6,7,8,9];

function iterator(a){
    console.log(a+5);
}


function eachLimit(arr,limit,iterator,callback){
    var curr = 0;
    var lastProcessedTill = 0;
    var i = 0;
    while(i < arr.length){
        debugger;
        console.log("current position: " +i);
        if(curr < limit){
            i++;
            debugger;
            console.log("curr < limit: " +curr + "i value: " +i);
            curr++;
            lastProcessedTill = i;
            iterator(arr[i],function(){
                    curr--;
            })
        }
    }
}

eachLimit(arr,3,iterator,function(err){
    if (err) throw err;
})