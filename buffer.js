const buf = Buffer.from('Hey!')
const myBuf = Buffer.alloc(12)
myBuf.write('Hello world!')
console.log(buf)
console.log(buf.toString())
console.log(buf[1])
buf[2]= 122
console.log(buf.toString())
console.log(myBuf.toString())
console.log(buf.length)
console.log('--------------')
for (const item of buf) {
  console.log(item.toString()) 
}
console.log('--------------')


buf.subarray(0).toString() 
const slice = buf.subarray(0, 2)
console.log(slice.toString()) 
buf[1] = 111 
console.log(slice.toString())

console.log('--------------')

let buffercopy = Buffer.alloc(4)
buffercopy.set(buf)
console.log(buffercopy.toString())
console.log('--------------')
buffercopy = Buffer.from('Moo!')
buffercopy.set(buf.subarray(0, 2), 1)  
console.log(buffercopy.toString())
console.log('--------------')