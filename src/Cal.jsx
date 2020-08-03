import react from 'react';

function add(a,b) {
    let sum = a + b;
    return sum;
}
function mul(a,b){
    let mul = a*b;
    return mul;
}
function sub(a,b){
    let sub = a-b;
    return sub;
}
function div (a,b){
    let div = a/b;
    return div.toFixed(2);
}

export {add,mul,sub,div}
