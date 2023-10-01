let a="33aaa";
console.log(typeof a)
a=Number(a)
console.log(typeof a)
console.log(a)

let b=33
console.log(typeof b)
b=String(b)
console.log(typeof b)
console.log(b)

let c=10
console.log(typeof c)
c=Boolean(c)
console.log(typeof c)
console.log(c)

let d=0
console.log(typeof Boolean(d))
console.log(Boolean(d))

let e=null
console.log(typeof c)  //undefined
console.log(Number(e))  //zero

//parts which cant be converted are not a number or NaN

// null is zero in number and undefined is not anumber similarly string in number is NAN