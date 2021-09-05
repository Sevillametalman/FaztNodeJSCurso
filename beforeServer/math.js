const Math = {}
const Everything = {}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  if (y == 0) {
    console.log("Don't");
  } else {
    return x / y;
  }
}

function hello(name){
    console.log("Hello " + name);
}

Math.add = add;
Math.sub = sub;
Math.mul = mul;
Math.div = div;
Everything.hello = hello;
Everything.Math = Math;

module.exports = Everything;
