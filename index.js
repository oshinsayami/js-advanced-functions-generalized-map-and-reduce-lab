// Add your functions here
function map(src, fxn){
    let a=[]

    for(let i=0; i< src.length; i++){
        let b = src[i]
        a.push(fxn(b))
    }
    return a;
}

function reduce (src, fxn, starting){
    let r = (!!starting)? starting : src[0]

    let i = (!!starting)? 0 :1
    for(; i<src.length; i++){
        r= fxn(src[i],r);
    }
    return r;
}