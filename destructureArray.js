const arr=[1,2,3]
const [x,y,z]=arr
console.log(x,y,z)

const [a,,b]=arr;
console.log(a,b)

//Switch variable value
[b,a]=[a,b]
console.log(a,b)

// 2d array

const arr1=[1,2,3,[4,5]]
let [p,,q,[r,t]]=arr1
console.log(p,q,r,t)

//Dont know the array
[l,q,n,m]=arr;
console.log(l,q,n,m)
