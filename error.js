/**
 * Created by ritesh on 6/15/15.
 */
function each(arr,iterator,callback){
    for( var i  = 0 ; i < arr.length ; i++){
        iterator(arr[i],function(err){
            if(typeof callback !== 'undefined') {
                console.log("No callback function passed but theres are errors");
                console.log("Please pass a callback and retry");
            }
            else callback(error);
        });
    }
    callback();
}

module.exports.each = each();