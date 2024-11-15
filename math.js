//      for exporting the object we add module.exports keyword

// module.exports.sum = (a,b) => a+b;
// module.exports.mul = (a,b) => a*b;
// module.exports.divide = (a,b) => a/b;
// module.exports.sub = (a,b) => a-b;

// //      module keyword are optional if we direct write exports keyword that work properly

// exports.pi = () => 3.14;
// exports.g = () => 9.8;

//      if there are many object will be exports then you add all the objects in a seprate object and then those object exported

sum = (a,b) => a+b;
mul = (a,b) => a*b;
divide = (a,b) => a/b;
sub = (a,b) => a-b;
pi = () => 3.14;
g = () => 9.8;

module.exports = {
    sum : sum,
    mul : mul,
    divide : divide,
    sub : sub,
    pi : pi,
    g : g
}