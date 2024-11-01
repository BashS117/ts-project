(()=>{
type Sizes = 'S'|'M' | 'L' | 'XL';

function createProductToJson(
  title: String,
  createdAt: Date,
  stock: Number,
  size: Sizes
){
  return{
    title,
    createdAt,
    stock,
    size
  }

}
const product1 = createProductToJson('nuevo titulo', new Date(),12,'XL')
console.log(product1)
console.log(product1.title)
console.log(product1.stock)

const createProductToJsonV2 =  (
  title: String,
  createdAt: Date,
  stock: Number,
  size?: Sizes
)=>{
  return{
    title,
    createdAt,
    stock,
    size
  }

}
const product2 = createProductToJsonV2('nuevo titulo', new Date(),12)
console.log(product2)
console.log(product2.title)
console.log(product2.stock)
console.log(product2.size)


})()
