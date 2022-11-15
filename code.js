// Variable - a value that can change, depending on conditions or on information passed to the program
// Data types:
let name = "Bob";// string
let age  =  19;// Integer
let savings =  1.99; //Float
let hasPet = false;//Boolean 

//Function - a set of statements that performs a task or calculates a value. It is like a reusable piece of code.


function greeting() {
    console.log("Hello")// = "Hello" console.log prints to the terminal in the browser(right click - inspect) 
  }
greeting() // = "Hello"
// Parameters - are values that can be passed into a function. The variable to reference the values passed is put into the parentheses next to the function name
function greeting(name) {
    console.log("Hello "+ name)
}
greeting("Bob")// = "Hello Bob"

// Data Structure
let colors =  ["green","red","blue"];//List
colors[1] //= "red"

//object
let userInfo = {
    name: "Bob",
    age: 19,
    hasPet:false,
    colors: ["green","red","blue"],
    car:{
        make:"Nissan",
        year:2022
      }
    }

userInfo.name // = "Bob"
userInfo.car.make // = "Nissan"

// Advanced Data Structure:
colors.push("yellow") // colors =  ["green","red","blue","yellow"]
colors[1] = "pink"// colors =  ["green","pink","blue","yellow"]
let listofListsExample = [[0,22,95,3],["zero","one","two","three"]]
listofListsExample[0][3] // = 3
let listOfVariables = [name,age,colors]
userInfo["name"] // = "Bob"
userInfo.colors[1] // = "red"
userInfo["hasPet"] = true
userInfo["petName"] = "Spot" // new key value

let listOfObjects = [
    {
      name: "Jill",
      age: 30,
      colors: ["pink","red"],
      car:{
            make:"Honda",
            year:2010
          }
      },
      {
        name: "john",
        age: 20,
        colors: ["blue"],
        car:{
              make:"Nissan",
              year:2022
            }
        }
  ]

listOfObjects[0].name // = "Jill"

function changeHeader() {
    let inputText = document.getElementById("myText").value;
    document.getElementById("myHeader").innerHTML = inputText;
}

// VUE STARTER CODE
// Vue is class and a class is a fancy data structure object
 
  let AppName = new Vue({
    el: '#AppName',
    data: {
        test: 'Hello test',
    },
    // methods are functions contained in a data structure
    methods: {
        myMethod: function () {
        }
    },
    created: function () {
    }
})

// Advanced vue

// let AppName = new Vue({
//     el: '#AppName',
//     data: {
//         test: 'Hello test',
//         show: false,
//         textList:[],
//     },
//     // methods are functions contained in a data structure
//     methods: {
//         addText: function () {
//             this.textList.push(this.test)
//         }
//     },
//     created: function () {
//     }
// })

