(()=>{
// let myNumber: number = undefind;
// let myString: string = null;
let myNull:null = null;
let myUndefind:undefined= undefined

let myNumber:number | null =null;
myNumber= 12;

let myString: string | undefined = undefined;
myString= 'hola'

function hi (name: string|null){
  let hello:string= 'hola'
  if(name){
    hello += name;
  }else{
    hello += 'nobody';
  }
  console.log((hello))
}

function hiV2 (name: string|null){
  let hello:string= 'hola'

  hello += name?.toLowerCase()|| 'nobody'
  console.log((hello))
}


hi('nicolas')
hi(null)
hiV2('nicolas')
hiV2(null)
})()
