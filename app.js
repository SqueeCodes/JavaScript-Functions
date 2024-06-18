// function calcPerimeter(legnth, width) {
//     return 2 * length + 2 * width;
// }
// console.log(calcPerimeter(10,20));

// function calcArea(base, height) {
//     return 0.5 * base * height
// }
// console.log(calcArea(20, 20))


// function addTOString(string) {
//     return string + 'frontend'
// }
// console.log(addTOString('apple'));

// function sumGreaterThan100(num1, num2) {
//     return num1 + num2 >= 100
// }
// console.log(sumGreaterThan100(20, 10))

// function lessThanOrEquals(numnuts) {
//     return numnuts <= 0
// }

// console.log(lessThanOrEquals(-1))

// function oppositeBoolean(bool) {
//     return !bool;
  
// }

// console.log(oppositeBoolean(true));

// function isNotZero(number) {
//     return number !== 0
// }
// console.log(isNotZero(2))

// function calcRemainder(num1, num2) {
//     return num1 % num2
// }
// console.log(calcRemainder(10, 7))

// function isOdd(numnuts) {
//     return numnuts % 2 !== 0
// }
// console.log(isOdd(3))

// function isEven(numnuts) {
//     return numnuts % 2 === 0 ? 1 : -1;
// }
// console.log(isEven(2))

// function isLoggedInAndSubscribed(loggedIn, subscribed) {
//     return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
// }
// console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))

"intermediate challenges "

// function falseyOrTruthy (elem1, elem2) {
//     return !!elem1 ? elem1 : elem2
// }
// console.log(falseyOrTruthy(12, undefined))

// function lengthArray(arr) {
//     return arr[arr.length -1];
// }
// console.log(lengthArray([1, 2, 3, 4, 10]))

// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i];
//     }
//     return sum;

// }

// console.log(arrSum([2, 2, 2]));

// function progeressiveSum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum
// }
// console.log(progeressiveSum(4))

// function calcTime(seconds) {
//     timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;
//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     return timerMinutes + ':' + timerSeconds;
// }
// console.log(calcTime(90))


// function getMax(arr) {
// let maxIndex = arr[0]

//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] > maxIndex) {
//             maxIndex = arr[i];
//             }
//         }
//     return maxIndex

// }
// console.log(getMax([-100, -400, -200]))

// function reverseString(str) {
//     let flipIt = '';
//     for (let i = str.length - 1; i >= 0 ; --i) {
//         console.log(str[i])
//     }
//     return null
// }
// console.log(reverseString('abc'))

// function arrReverse(str) {
//     return str.split('').reverse().join('');


// }
// console.log(arrReverse('David'));

// function convertToZeros(arr) {
//   return new Array(arr.length).fill(0)
// }
// console.log(convertToZeros([5, 100, 0]))

// function convertToZeros(arr) {
//     return arr.map(elem => 0)
// }
// console.log(convertToZeros([1, 2, 3, 4, 5]))

// function removeApples(arr) {
//     noApples = ([])
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'apple')
//             noApples.push(arr[i]);
//     }
//     return noApples
// }
// console.log(removeApples(['banana', 'apple', 'ornch', 'apple']));

// function removeFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
// }

// function removeFalsy(arr) {
//     let truthyArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//             truthyArr.push(arr[i]);
//         }
//     }
//     return truthyArr;
// }
// console.log(removeFalsy(['banana', 'ornch', 'apple', false, '', null, undefined, NaN]))

// function convertToBoolean(arr) {
//     return arr.map(elem => !!elem)
// } 
// console.log(convertToBoolean([500, 0, "David", "", []]))


"advanced challenges"

// function showRating(rating) {
//     let ratings = "";
//     for ( let i = 0; i < Math.floor(rating); ++i) {
//         ratings += "*";
//         if (i !== Math.floor(rating) -1) {
//             ratings = ratings + " ";

//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings += " ."
//     }
//     return ratings
// }
// console.log(showRating(3.5));

// function sortLowToHigh(numbers) {
//         return numbers.sort((a, b) => a - b);
// }
// console.log(sortLowToHigh([1, 5, 0, 10, 4, 69]))

// function sortLowToHigh(numbers) {
//     return numbers.sort((a, b) => {
//         return b.price - a.price
//     });
// }
// console.log(
//     sortLowToHigh([
//     {id:1, price: 50},
//     {id:2, price: 0},
//     {id:3, price: 500},
// ])
// );
async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  const result = await promise.json()

  const posts = result.filter(element => element.userId === userId)

  console.log(posts)
}


postsByUser(5);