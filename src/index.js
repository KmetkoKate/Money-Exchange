// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var res = {};
var H = 50;
var Q = 25;
var D = 10;
var N = 5;
var P = 1;
if(currency < 10000) {
var h = Math.floor(currency/H);
currency = currency -(h*H);
var q = Math.floor(currency/Q);
currency = currency -(q*Q);
var d = Math.floor(currency/D);
currency = currency-(d*D);
var n = Math.floor(currency/N);
currency = currency -(n*N);
var p = Math.floor(currency/P);
if (h > 0){
res.H = h;
}
if(q > 0){
res.Q = q;
}
if(d > 0){
res.D = d;
}
if(n > 0){
res.N = n;
}
if(p > 0){
res.P = p;
}
return res;
} else {
var error = {error: "You are rich, my friend! We don't have so much coins for exchange"}
return error;
}
}
