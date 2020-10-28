const person = {name:'amir khna', age:15, phone:02222, adrress:'kolabagan'};
const {age, name}= person;
console.log(age, name );

const friend= ['amir khan', 'salman khan', 'shakib khan'];
const  [first, ...second] = friend;
console.log(second);

const person1 = {
    name: 'sharruk khan',
    info:{
      adrress: 'kolabagan',
      phone: 0303030
      
    }
}
const {phone} = person1.info;
console.log(phone);
