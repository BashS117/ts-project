(()=>{
const
login =(objetito:{email:string, password: string})=>{
  console.log(objetito.email,objetito.password);

}
// login('sebas','123')
login({
  email:'seasdfasd',
  password: '12214'
});

type Sizes = 'S'|'M' | 'L' | 'XL';

const products:any[] = [];

const addProduct=(data:{
  title: String,
  createdAt: Date,
  stock: Number,
  size?: Sizes}
  )=>{
products.push(data)
}
addProduct({
  title: 'pro1',
  createdAt: new Date(1992,2,2),
  stock:23
})
console.log(products)
})()
