(()=>{
   const calcTotal=(prices:number[]) =>{
    let total = 0;
    prices.forEach(item => {
      total += item;
    });
    return total
   }
const rta = calcTotal([1,4,3,2]);
console.log(rta)
})()
