// for(let i=0;i<5;i++){
//     console.log("Hello",i);
// }
// console.log(process.argv);
// let args=process.argv;
// for(i=2;i<args.length;i++){
//     console.log("Hello to, ",args[i]);
// }

let math = require("./math");
console.log(math.sum(10,5));
console.log(math.mul(2,5));
console.log(math.divide(10,5));
console.log(math.sub(10,5));
console.log(math.pi());
console.log(math.g());