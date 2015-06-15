var each = require('./error');

var arr = [1,2,3,4,5];

function plusone(a){
    debugger;
    console.log(a);
    console.log(a + 5);
}

each.forEach(arr,plusone,function(err){
    if(err) console.log("error here");
    else console.log("function completed");
})




