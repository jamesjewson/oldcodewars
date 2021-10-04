
let user = {}
user.name="John"
user.surname= "Smith"

user["name"] = "Pete"

delete user.name


//Checkfor emptiness

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let emptyObj = {
// }


// function isEmpty(obj) {
//     for (let key in obj) {
//         alert( false )
//     } 
//     alert(true)
// }

// isEmpty(emptyObj)


//Sum object properties (I did this one without help!)

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   function sumSalaries(salaries){
//       let sum = 0
//       for(let sal in salaries){
//         sum += salaries[sal]
//       }
//       alert(sum)
//   }

//   sumSalaries(salaries)

//-----------------------------------------------------

// Multiply numeric property values by 2 (I did this one too!)


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
function multiplyNumeric(obj){
    for(let nums in obj){
        if(Number(obj[nums])){
            (obj[nums]) *= 2
        }
    }
}

