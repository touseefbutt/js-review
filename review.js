/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
        let myName;

// 2.) Change the value of this variable
        myName = true

// 3.) Change the data type of this variable
        myName = "Touseef"

// 4.) Create another variable and the one from above to concatenate
        let otherName = 'tosi'
        console.log(myName + " " +otherName);

// 5.) Use any of the variables above or create new ones and print using string interpolation
        console.log(`My name is ${myName}`)

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
        console.log("sabrina".charAt(4))

        /*
        {
"31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
"36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
"41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
"46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
"51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
"56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
"61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
"66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
"71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
"76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
"81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
"86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
"91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
"96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
"101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
"106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
"111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
"116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
"121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
"126": "~",    "127": ""
}
        */ 
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// i'm not sure third character is by number or Index. so i did both of them.
console.log("Teddy".charCodeAt(3))
console.log("Teddy".charCodeAt(2))

// Using fromCharCode() - make it readable for us :). You'll see!

console.log(String.fromCharCode(116, 111, 115, 105))

// Take your first and last name and concat()
let firstName = "Touseef", lastName = "Butt"
console.log(firstName.concat(' ',lastName))

// Create a string and make it return true using startsWith()
console.log("Awesome".startsWith('Awe'))

// Now use any variable with endsWith() and return false
    console.log(firstName.endsWith('utt'))

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
console.log(ozgur.includes('time'))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

console.log(joshHadALittleLambOopsCow.indexOf('cow'));

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const Universe = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
console.log(Universe.lastIndexOf('Vanessa'))

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
  console.log(noWeCantTeo.length)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
console.log(replaceGokuWithVegeta.replace("Goku","Vegeta"))

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
console.log(joshIsLookingForWifey.search("Wifey 4"))

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(7, 26))

// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0, 7))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, Leshawn"
console.log(splitTheBill.split(","))

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
console.log(splitTheBill.split(''))

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
console.log(angry.toLowerCase())

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase())

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1, 4))

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
  console.log(ohReally.substring(0, 10))
// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(15, 22))

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
  let someVariable = "  Lets do some fun!   Wohoo"
  //before trim()
  console.log(`Before Trim: ${someVariable}`)
  //after trim()
  console.log(`After Trim: ${someVariable.trim()}`)

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

  console.log(a < b)
  console.log(c !== b)
  console.log(d === d)
  console.log(d !== a)
  console.log(a < 15)
  console.log(a <  b < c)
  console.log(c > b && a !== d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
let spin= "My head is spinning!", i=0;
for(i; i<10; i++){
  console.log(spin);
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
let vision = "Teo's vision Spin! zoom zoom ", j=0;{
  for(j; j < 20; j++)
  console.log(vision);
}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let sorry = "I'm Sorry", k = 0;
while(k < 20){
  console.log(sorry)
  k++
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}
for (const things in whateverQueenBeySaid){
  console.log(`${things}`)
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for (const indeces in lana){
  console.log (indeces)
}
// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for(const ind of tia.entries()){
  console.log(ind)
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
perscholas.forEach(students)
function students(PS){
  console.log("PS:"+' '+PS)
}

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// a method which is used to add one or more elements at the end of an array and returns the new length of an array.

// pop()
//This method removes the last element of an array and returns that element. This method changes the lengthof the array.

// unshift()
//This method add one or more elemets at the beginning of an array and returns new length of an array

// shift()
//This method removes the first element of an array and changes the length of the array.

// concat()
//this is used to merge two or more arrays. this method doesn't change the length of an array, but instead returns a new array.

// splice()
//this method change the content of an array by removing and replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

// slice()
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// sort()
//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

//The time and space complexity of the sort cannot be guaranteed as it depends on the implementation

// includes()
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.


// indexOf()
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.


// length
//The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.



const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(" "))

// Remove orange
fruits.pop()
console.log(fruits)

// Add strawberry, kiwi, and grapes at the end
fruits.push("strawberry", "kiwi", "grapes")
console.log(fruits)

// Remove apple
fruits.shift();
console.log(fruits)

// Add mango at the beginning of the array
fruits.unshift("mango")
console.log(fruits)

// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon','grape fruit')
console.log(fruits)

// Remove banana and strawberry
let indexer = fruits.indexOf("banana", "strawberry")
fruits.splice(indexer, 2)
console.log(fruits)

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
let exoticFruits = ['Dragon fruit', 'Papaya', 'PineApple']
let exotic = fruits.concat(exoticFruits)
console.log(exotic)

// Print the last two exotic fruits without altering the newly concatenated array.
// exotic.slice(-7)
console.log(exotic.slice(-2))
// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort()
console.log(monalissaIsMessy)

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
mirrorMirrorOnTheWall.reverse()
console.log(mirrorMirrorOnTheWall)

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 

// filter method can not be used on simple. we can only use it on arrays. so i'm changing ReafaelNoBadWords to an array from string.

const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."

const arrayRafael = RafaelNoBadWords.split(' ');
const noBad = arrayRafael.filter(word => word !== 'badword');

console.log(noBad.join(' '));

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const iValue = 0;
console.log(numbersToAddUp.reduce((pValue,cValue)=> pValue+cValue,iValue))

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
let arr4 = [...numbersToAddUp];
// console.log(arr4)

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]


// Using the variable with the newly connected arrays, use spread operator to add something at the end.
arr3.push(...[7])

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
arr3.unshift(...["Tosi"])
console.log(arr3)


// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
];



// Anthony wants applecrumble. Print please!
console.log(donutShop[1][0][1]);
// Tosi wants ihatethis. :) Print!
console.log(donutShop[2][0][0][1][0])
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
let person = 'teo', gender = 'male', hunger = false
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
if (person === 'teo'){
  console.log("Teo is a person")
  if (gender === 'male'){
    console.log("You got it right!")
    if(hunger === true){
        console.log("Let's buy Teo some Tacos!")
    }else{
      console.log("He doesn't need to eat")
    }
  }else{
    console.log("Wrong. Teo is going to remove you from the class.")
  }
}else {
  console.log("Teo is not a Person")
}
// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
let doSome = 'notcoolest';
let result = (doSome === 'coolest') ? "You got that right" : "James wants to argue. he says he's the best."
console.log(result)

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting(){
  console.log("Hello, ma'amsir")
}
sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
 function myFunct(sting){
  console.log(`This is my ${sting}`);
 }
myFunct("Don't play with me haha.")
// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.

function add(num1, num2,num3){
  console.log(`Your numbers are ${num1},${num2},${num3}`)
}
add(12, 9, 24)
// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

const myClub = function fightClub(name){
  
  if(name === 'Teo' || name === 'teo'){
    return '1st rule: You do not talk about Fight Club.'
  } else if (name === 'Manara' || name === 'manara'){
    return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
  } else if(name === 'Liv'|| name ==='liv'){
    return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
  }else if (name === 'Devin' || name === 'devin'){
    return '4th rule: Only two guys to a fight.'
  }else{
    return 'No shirts'
  }
}

console.log(myClub('teo'))

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

function hello(){
  console.log('hello' +' '+nest('Goodbye'))
 function nest(a){
  return a;}
}
hello()

// Create a function expression with your first name as the variable and then print your first and last name
const touseef = function tosi(){
    console.log('Touseef' + ' A ' + 'Butt')
}
touseef()


// Create an arrow function that accepts a number and have it return that number doubled
const arrow = (nee) =>{
  return nee * 2; 
};
console.log(arrow(6))

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const human = {
//name is already defined somewhere
humanName: 'Touseef',
age: 27,
locationProperty: 'MA'
}

// Access the name using dot notation
const nme = human.humanName;
console.log(nme)
// Access the age using square brackets
let agge = human['age'];
console.log(agge)

// Use object destructuring to access location
const {locationProperty} = human;
console.log(locationProperty)

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0].ability);

// Print cut
console.log(bulbasaur.moves[2])

// Print Bulbahhhh!!!!!
bulbasaur.sound()

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur.order = [1]

// Print an array that contains every single properties in bulbasaur
console.log(Object.keys(bulbasaur))
// Print every single properties one by one in the console


Object.keys(bulbasaur).forEach(key => console.log(key))

// Print an array that contains every single values in bulbasaur
for (let propt in bulbasaur){
  console.log(bulbasaur[propt])
  }