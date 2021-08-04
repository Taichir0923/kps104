// // let x = prompt('Ehnii too');
// // let y = prompt('2 dahi too');
// // let z = prompt('3 dahi too');
// // let arr = [x,y,z];
// // function countZeroNums(){
// //     let counter = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i] == 0){
// //             counter++;
// //         }
// //     }
// //     return counter;
// // }
// // console.log(countZeroNums());
// // function zereg(a,b){
// //     return a**b;
// // }

// // function oron(num){
// //     return num.toString().length;
// // }

// // function sum(num){
// //     let sum = 0;
//     // let numArr = num.toString().split('');
//     // for(let i = 0; i < numArr.length; i++){
//     //     sum += parseInt(numArr[i]);
//     // }
// //     return sum;
// // }


// // function findEvenDigits(num){
// //     let counter = 0;
// //     let numArr = num.toString().split('');
// //     for(let i = 0; i < numArr.length; i++){
// //         if(parseInt(numArr[i]) % 2 === 0){
// //             counter += parseInt(numArr[i]);
// //         }
// //     }
// //     return counter;
// // }

// // function palidrome(num){
// //     result = false;
// //     let numArr = num.toString().split('').reverse().join('');
// //     if(num === parseInt(numArr)) result = true;
// //     return result;
// // }

// // function divider(num){
// //     let result = 0;
// //     for(let i = 1; i <= num; i++){
// //         if(num%i === 0){
// //             result++;
// //         }
// //     }

// //     if(result === 2) return num + ': is a primary number';

// //     return result;
// // }

// // function sumRange(num){ //10
// //     if(num === 1) return 1;
// //     return num + sumRange(num - 1); //9
// // }

// // return 8

// // function findMedian(list1, list2){
// //     let median = 0;
// //     let sortedArray = list1.concat(list2).sort(function(a,b) {
// //         return a - b;
// //     });

// //     if(sortedArray.length % 2 === 0){
// //         median = (sortedArray[sortedArray.length/2] + sortedArray[sortedArray.length/2 - 1])/2;
// //     } else {
// //         median = sortedArray[Math.floor(sortedArray.length/2)];
// //     }

// //     return median;
// // }
// // [95, 2, 6, 78, 42, 52];
// // [2, 95, 6, 78, 42, 52];
// // [2, 6, 95, 78, 42, 52];
// // [2, 6, 78, 95, 42, 52];
// // [2, 6, 78, 42, 95, 52];
// // [2, 6, 78, 42, 52, 95];

// // [2, 6, 42, 78, 52, 95];
// // [2, 6, 42, 52, 78, 95];

// // let a = 5;
// // let b = 6;
// // let temp = a; // 5

// // a = b; // 6
// // b = temp; // 5

// // let temp = arr[i];
// // arr[i] = arr[i+1];
// // arr[i+1] = temp
// // function bubbleSort(arr){
// //     let change;
// //     for(let i = arr.length; i > 0; i--){
// //         for(let j = 0; j < i - 1; j++){
// //             change = false;
// //             if(arr[j] > arr[j+1]){
// //                 let temp = arr[j];
// //                 arr[j] = arr[j+1];
// //                 arr[j+1] = temp;
// //                 change = true;
// //             }
// //             console.log(change)
// //         }
// //         if(change === false) break;
// //         console.log('One Loop Complete...');
// //     }

// //     return arr;
// // }


// // selection Sort
// // [95, 2, 6, 78, 42, 52];
// // [2, 95, 6, 78, 42, 52];
// // [2, 6, 95, 78, 42, 52];
// // [2, 6, 42, 78, 95, 52];
// // [2, 6, 42, 52, 95, 78];
// // [2, 6, 42, 52, 78, 95]
// // function selectionSort(arr){
// //     for(let i = 0; i < arr.length; i++){
// //         let lowest = i;
// //         for(let j = i + 1; j < arr.length; j++){
// //             if(arr[j] < arr[lowest]){
// //                 lowest = j;
// //             }
// //         }
// //         let temp = arr[i];
// //         arr[i] = arr[lowest];
// //         arr[lowest] = temp;
// //         console.log(arr)
// //     }

// //      return arr
// // }


// // Insertion Sort 
// // [95, 6, 78, 42, 2, 52];
// // [6, 95, 78, 42, 2, 52];
// // [6, 78, 95, 42, 2, 52];
// // [6, 42, 78, 95, 2, 52];
// // [2, 6, 42, 78, 95, 52];
// // [2, 6, 42, 52, 78, 95];

// // function insertionSort(arr){
// //     for(let i = 1; i < arr.length; i++){
// //         let currentVal = arr[i];
// //         let j = i - 1;
// //         while(j >= 0 && arr[j] > currentVal){
// //             arr[j+1] = arr[j];
// //             j--;
// //         }
// //         arr[j+1] = currentVal
// //     }
// //     return arr;
// // }

// // let arr = [95, 6, 2, 78, 42, 2, 52];
// // arr.push(26);
// // arr.forEach(function(el, index){
// //     console.log(index + ': ' + el)
// // })

// // let newArr = arr.findIndex(function(el){
// //     return el === 78;
// // })

// // for(num in arr){
// //     console.log(num)
// // }

// // let i = 0;
// // do {
// //     console.log('hi');
// //     i++
// // } while(i < 10)

// // [95, 6, 78, 42, 2, 52]
// // [95, 6, 78] [42, 2, 52]
// // [95, 6] [78]  ---- [42, 2] [52];
// // [95][6]  --  [78] -----  [42][2]  --  [52];

// // [6, 95][78] ------ [2, 42][52];
// // [6, 78, 95] ------ [2, 42, 52];
// // [2, 6, 42, 52, 78, 95]

// // function mergeArray(arr1, arr2){
// //     let result = [];
// //     let i = 0;
// //     let j = 0;
// //     while(i < arr1.length && j < arr2.length){
// //         if(arr1[i] < arr2[j]){
// //             result.push(arr1[i]);
// //             i++;
// //         } else {
// //             result.push(arr2[j]);
// //             j++;
// //         };
// //     };

// //     while(i < arr1.length){
// //         result.push(arr1[i]);
// //         i++;
// //     }

// //     while(j < arr2.length){
// //         result.push(arr2[j]);
// //         j++;
// //     }

// //     return result;
// // }

// // function mergeSort(arr){
// //     if(arr.length <= 1) return arr;
// //     let middle = Math.floor(arr.length/2);
// //     let zuun = mergeSort(arr.slice(0, middle));
// //     let baruun = mergeSort(arr.slice(middle));

// //     return mergeArray(zuun, baruun);
// // }


// // function getDigit(num, i){
// //     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// // };

// // function countDigits(num){
// //     if(num === 0) return 1;
// //     return num.toString().length;
// //     // return Math.floor(Math.log10(Math.abs(num))) + 1
// // }

// // function mostDigits(arr){
// //     let maxDigit = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         maxDigit = Math.max(maxDigit, countDigits(arr[i]));
// //     }

// //     return maxDigit;
// // }

// // function radixSort(arr){
// //     let maxDigit = mostDigits(arr);
// //     for(let i = 0; i < maxDigit; i++){
// //         let bucketDigits = Array.from({length: 10}, function(){
// //             return [];
// //         });

// //         for(let j = 0; j < arr.length; j++){
// //             bucketDigits[getDigit(arr[j], i)].push(arr[j]);
// //         }

// //         arr = [].concat(...bucketDigits);
// //     }

// //     return arr;
// // }

// // ES6
// // 

// // let word1 = 'hi';
// // let word2 = 'there';

// // ES5
// // console.log(word1 + ' ' + word2)


// // ES6
// // console.log(`${word1} ${word2}. Greeting from ES6`);

// // const mergeArray = (arr1, arr2) => {
// //     let result = [];
// //     let i = 0;
// //     let j = 0;
// //     while(i < arr1.length && j < arr2.length){
// //         if(arr1[i] < arr2[j]){
// //             result.push(arr1[i]);
// //             i++;
// //         } else {
// //             result.push(arr2[j]);
// //             j++;
// //         };
// //     };

// //     while(i < arr1.length){
// //         result.push(arr1[i]);
// //         i++;
// //     }

// //     while(j < arr2.length){
// //         result.push(arr2[j]);
// //         j++;
// //     }

// //     return result;
// // }

// // const mergeSort = arr => {
// //     if(arr.length <= 1) return arr;
// //     let middle = Math.floor(arr.length/2);
// //     let zuun = mergeSort(arr.slice(0, middle));
// //     let baruun = mergeSort(arr.slice(middle));

// //     return mergeArray(zuun, baruun);
// // }

// // const getDigit = (num, i) =>{
// //     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// // };

// // const countDigits = (num) => {
// //     if(num === 0) return 1;
// //     return num.toString().length;
// //     // return Math.floor(Math.log10(Math.abs(num))) + 1
// // }

// // const mostDigits = (arr) => {
// //     let maxDigit = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         maxDigit = Math.max(maxDigit, countDigits(arr[i]));
// //     }

// //     return maxDigit;
// // }


// // const radixSort = arr => {
// //     let maxDigit = mostDigits(arr);
// //     for(let i = 0; i < maxDigit; i++){
// //         let bucketDigits = Array.from({length: 10}, () => []);

// //         for(let j = 0; j < arr.length; j++){
// //             bucketDigits[getDigit(arr[j], i)].push(arr[j]);
// //         }

// //         arr = [].concat(...bucketDigits);
// //     }

// //     return arr;
// // }
// // this
// // console.log(this)

// // let obj = {
// //     ner: 'Narada',
// //     nasTootsoh: function(){
// //         console.log(this);
// //     }
// // }

// // obj.nasTootsoh()
// // let num = 15;
// // num.toString();
// // let ner = 'Narada';
// // ner.split('');

// // let arr = new Array(15, 16, 17, 18);
// // ES5

// // const Person = function(fullname, email, phoneNumber, profession){
// //     this.fullname = fullname;
// //     this.email = email;
// //     this.phoneNumber = phoneNumber;
// //     this.profession = profession;
// // }

// // Person.prototype.getName = function(){
// //     return this.fullname;
// // }

// // Person.prototype.setName = function(arg){
// //     this.fullname = arg;
// //     return this.fullname;
// // }

// // // let obj = {}
// // let user = new Person('Narada', 'narada@mail.com', 99552233, 'Designer');

// // const Question = function(question, answers, correctAnswer){
// //     this.question = question;
// //     this.answers = answers;
// //     this.correctAnswer = correctAnswer
// // }

// // Question.prototype.printQuestion = function(){
// //     console.log(this.question);
// //     for(let i = 0; i < this.answers.length; i++){
// //         console.log(`${i}: ${this.answers[i]}`);
// //     }
// // };

// // Question.prototype.checkAnswer = function(answer){
// //     if(this.correctAnswer === answer){
// //         console.log('Зөв хариуллаа. Баяр хүргэе')
// //     } else {
// //         console.log('Буруу хариуллаа. Дахин оролдоно уу..')
// //     }
// // }

// // let q1 = new Question('Монгол жилийн хэдэн улиралтай вэ?', [2, 1, 4, 3], 2);
// // let q2 = new Question('Нар хэдэн дагуултай вэ?', [3, 9, 4, 3], 1);
// // let q3 = new Question('АНУ-ын нийслэл хот аль нь вэ?', ["Вашингтон", "Нью-Йорк", "Чикаго", "Берлин"], 0);
// // let q4 = new Question('Монгол хэдэн улстай хил залгадаг вэ?', [2, 1, 4, 3], 3);
// // let q5 = new Question('Нэг жилд хэдэн сар байдаг вэ?', [11, 12, 13, 14], 1);

// // let questions = [q1, q2, q3, q4, q5];
// // let random = Math.floor(Math.random() * questions.length);

// // // questions[random].printQuestion()

// // function quiz(){
// //     questions[random].printQuestion();
// //     let ans = prompt('Зөв хариултыг сонго');
// //     questions[random].checkAnswer(parseInt(ans));

// //     questions.splice(random, 1);
// //     quiz();
// // };

// // quiz();

// // q1.printQuestion();

// // let ans = prompt('Зөв хариултыг сонго');

// // q1.checkAnswer(parseInt(ans));

// // ES6

// class Person {
//     constructor(fullname, email){
//         this.fullname = fullname;
//         this.email = email;
//     }

//     getName(){
//         return this.fullname;
//     }

//     setName(arg){
//         this.fullname = arg;
//         return this.fullname
//     }

//     static test(){
//         console.log('Testing static method')
//     }
// }

// // class Teacher extends Person {
// //     constructor(fullname, email, workField){
// //         super(fullname, email);
// //         this.workField = workField
// //     }
// // }

// // let user = new Person('Steve jobs', 'steve@mail.com');
// // let teacher = new Teacher('Teacher', 'teacher@example.com', 'education')

// function getDigit(num, i){
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function countDigits(num){
//     return num.toString().length;
// }

// function convert(num){
//     let loop = countDigits(num);
//     let underTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let ten = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//     if(loop === 1) return underTen[num];
//     if(loop < 6){
//         for(let i = loop - 1; i >= 0; i--){
//             if(i === 0) console.log(underTen[getDigit(num, i)]);
//             if(i === 1) console.log(ten[getDigit(num, i)]);
//             if(i === 2) console.log(underTen[getDigit(num, i)] + ' hundred')
//             if(i === 3 && getDigit(num, i) !== 0) console.log(underTen[getDigit(num, i)] + ' thousand')
//             if(i === 4 && getDigit(num, i - 1) !== 0) {
//                 console.log(ten[getDigit(num, i)])
//             } else if(i === 4) {
//                 console.log(ten[getDigit(num, i)] + ' thousand')
//             }
//         }
//     } 
// }

// const box = document.querySelector('.box')