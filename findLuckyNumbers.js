// Write your code below this line.

// const luckyNums = num => {
//     if(num <= 10 && num >= 1){
//         let luckyNumberArr = []
//          while(luckyNumberArr.legnth < num){
//             let randInt = Math.floor(Math.random() * 10) + 1
//             if(!luckyNumberArr.includes(randInt)) {
//                 luckyNumberArr.push(randInt)
//             }
//          }
// let luckyNumberSet = new Set()
//     while(luckyNumberSet.size < num) [
//         let randInt = Math.floor(Math.random())
//     ]

//     }else {
//         return "Not a valid number"
//     }

// }

// console.log(luckyNums(6))
// console.log(luckyNums(9))
// console.log(luckyNums(5))
// console.log(luckyNums(3))
// console.log(luckyNums(15))
// console.log(luckyNums(-3))

// const meal = {
//     appetizer: 'chips and salsa',
//     main: 'burrito',
//     drink: 'water'
// }
// let appetizer = meal.appetizer
// console.log(appetizer)

// meal.appetizer = 'chips and guac'

// console.log(meal)

// class Meal {
//     constuctor(app, main, drink){
//         this.app = app
//         this.main = main
//         this.drink = drink
//     }
// }

let lunch = new Meal('chips', 'sandwich', 'apple juice')

class Dinner extends Meal {
    constuctor(app, main, drink, dessert)
  }

  class Person{
    constuctor(name,age){
        this.name = name
        this.age = age
    }
    greeting(){
        console.log(`Hello my name is ${this.name} i am ${this.age} years old`)

    }
  }
  
  let cameron = new Person('Cameron', 27)
  let lukas = new Person('Lukas', 25)
  let bob = new Person('bob', 15)
  let sam = new Person('sam', 12)
//   for(let key in cameron){
//     console.log(cameron[key])
//   }

  let arr = [cameron,lukas,bab,sam]
  let names = []

  for(let i = 0; i<arr.length; i++){
    // names.push(arr[i].name)
    if(arr[i].age>=18){

        adults.push(arr[i])
    }else{
        children.push(arr[i])
    }
}

  console.log('these are adults', adults)
  console.log('these are children', children)