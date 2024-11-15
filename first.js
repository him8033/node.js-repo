for(let i=0;i<5;i++){
    console.log("Hello",i);
}
console.log(process.argv);
let args=process.argv;
for(i=2;i<args.length;i++){
    console.log("Hello to, ",args[i]);
}