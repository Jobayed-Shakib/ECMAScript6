const ages = [23, 12, 14, 17, 19];
const ages1 =[23, 34, 56, 45, 32, 33, 35];
const ages2 =[23, 34, 56, 45, 32, 33, 35];
const ages3 =[23, 34, 56, 45, 32, 33, 35];
const allAges = [...ages, 25, ...ages1, ...ages2, ...ages3];
console.log(allAges);


const taka = [342, 455, 675, 876];
const maxTaka = Math.max(...taka);
console.log(maxTaka);