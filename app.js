// const a = [1,2,3,4,5]
//
// for (let item of a){
//     const b = item +1
//     console.log(b)
// }

// const a = 1
// const b = 2
// const d = 3
// function sum(value1,value2){
//     return value1 + value2
// }
//
// console.log(sum(a,d))

// function minus(){
//     const a =3
//     const b= 4
//
//     return b - a
// }
//
// console.log(minus())
// const name = 'Sasha'
//     function sayHi(value){
//         if (value === 'Sasha') {
//             return 'hello ' + value
//         }else {
//             return 'hello ti lox'
//         }
//
//     }
//
// console.log(sayHi(name))

// const product = 100
// const pharma = 100
// const gas = 100
//     function cashback(value1,value2,value3){
//         const money = (value1*0.01)+(value2*0.05)+(value3*0.30)
//
//         if(money > 3000){
//             return 3000
//         }
//         return money
//     }

//console.log(cashback(product,pharma,gas))

const speed60= 300
const speed90 = 200
const speed110 = 300
    function consumption(distance1,distance2,distance3){
        const size = ((distance1*8)/100)+((distance2*10)/100)+((distance3*12)/100)
        return size
    }

console.log(consumption(speed60,speed90,speed110))