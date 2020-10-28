function add (num1, num2 = 0){
    return num1 + num2;

}
const total = add(22);
console.log(total);

//   =>>OR<<=

function ok (num1, num2){
num2 = num2 || 0;
return num1 + num2;
}
const most = ok(22);
console.log(most);

