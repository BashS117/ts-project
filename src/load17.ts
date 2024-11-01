import _ from 'lodash';
const data = [
  {
  username:'Sebas',
  role: 'admin'
},
  {
  username:'Deisy',
  role: 'seller'
},
  {
  username:'Valen',
  role: 'seller'
},
  {
  username:'Lorena',
  role: 'customer'
},

];
const rta = _.groupBy(data, (item)=>item.role);
console.log(rta)

const prueba = 1 + '1';
console.log(prueba)
