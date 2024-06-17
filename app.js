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


function getMax(arr) {
let maxIndex = arr[0]

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > maxIndex) {
            maxIndex = arr[i];
            }
        }
    return maxIndex

}
console.log(getMax([-100, -400, -200]))