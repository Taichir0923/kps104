// // class Node {
// //     constructor(value){
// //         this.value = value;
// //         this.next = null;
// //     }
// // }

// // class Queue {
// //     constructor(){
// //         this.first = null;
// //         this.last = null;
// //         this.size = 0
// //     }

// //     push(value){
// //         let newNode = new Node(value);
// //         if(!this.first){
// //             this.first = newNode;
// //             this.last = this.first;
// //         } else {
// //             this.last.next = newNode;
// //             this.last = newNode;
// //         }

// //         this.size++;
// //         return this.size;
// //     }

// //     shift(){
// //         if(!this.size) return undefined;
// //         let deleted = this.first;
// //         this.first = deleted.next;
// //         deleted.next = null;
// //         if(this.size === 1){
// //             this.first = null;
// //             this.last = null;
// //         }
// //         this.size--;
// //         return deleted.value
// //     }
// // }

// // let queue = new Queue();

// // queue.push(10)
// // queue.push(11)
// // queue.push(12)
// // queue.push(13)
// // queue.push(14)



// class BrowserHistory {
//     constructor(homepage){
//         this.histories = [homepage];
//         this.currentPageIndex = 0
//     }

//     visit(url){
//         this.histories.length = this.currentPageIndex + 1;
//         this.currentPageIndex++;
//         this.histories.push(url)
//     }

//     back(steps){
//         let newIndex = Math.max(0, this.currentPageIndex - steps);
//         this.currentPageIndex = newIndex;
//         return this.histories[newIndex];
//     }

//     forward(steps){
//         let newIndex = Math.min(this.histories.length - 1, this.currentPageIndex + steps);
//         this.currentPageIndex = newIndex;
//         return this.histories[newIndex]
//     }
// }

// let history = new BrowserHistory('google.com');


// class Stack {
//     constructor(){
//         this.stack = [];
//         this.size = 0;
//     }

//     push(val){
//         this.stack.push(val);
//         this.size++
//     }

//     pop(){
//         this.stack.pop();
//         this.size--
//     }

//     peek(){
//         return this.stack[this.size - 1];
//     }
// }
// // "(){}[{{}}]"     "[" && ]
// const isBalanced = brackets => {
//     let stack = new Stack();
//     for(char of brackets){
//         if(char === '[' || char === '(' || char === '{'){
//             stack.push(char)
//         } else if(char === ']' && stack.peek() === '[') {
//             stack.pop();
//         } else if(char === '}' && stack.peek() === '{') {
//             stack.pop();
//         } else if(char === ')' && stack.peek() === '(') {
//             stack.pop();
//         } else {
//             return false
//         }
//     }
//     if(stack.size > 0){
//         return false
//     } else {
//         return true
//     }
// }


// let arr = [[2, 1], [5, 6]]

// arr[0][0]

// const matrice = (matriceA, matriceB) => {
//     let result = Array.from({length: matriceA.length}, () => []);
//     for(let j = 0; j < matriceA.length; j++){
//         for(let i = 0; i < matriceA[j].length; i++){
//             result[j].push(matriceA[j][i] * 2 + matriceB[j][i])
//         }
//     }

//     return result
// }

// const multipleMatrices = (matriceA, matriceB, matriceC) => {
//     let  multiple = Array.from({length: matriceA.length}, () => []);
//     let  result = Array.from({length: matriceA.length}, () => []);
//     for(let i = 0; i < matriceA.length; i++){
//         for(let j = 0; j < matriceB[j].length; j++){
//             let sum = 0;
//             for(let k = 0; k < matriceA[i].length; k++){
//                 sum += matriceA[i][k] * matriceB[k][j];
//             }

//             multiple[i].push(sum)
//         }
//     }

//     for(let o = 0; o < multiple.length; o++){
//         for(let y = 0; y < multiple[o].length; y++){
//             result[o].push(multiple[o][y] + matriceC[o][y])
//         }
//     }

//     return result
// }

function determinante(a) {
    var ordem = a.length;

    if (ordem === 1) {
        return a[0][0];
    }

    if (ordem === 2) {
        return a[0][0] * a[1][1] - a[0][1] * a[1][0];
    }

    var det = 0;

    for (var j = 0; j < ordem; j++) {
        det += a[0][j] * cofator(a, j);
    }

    return det;
};

function cofator(a, coluna) {
    var sub_matriz = [],
        ordem = a.length,
        m = 0;

    for (var i = 1; i < ordem; i++) {
        sub_matriz[m] = [];

        for (var j = 0; j < ordem; j++) {
            if (j !== coluna) {
                sub_matriz[m].push(a[i][j]);
            }
        }
        m++;
    }
    return (coluna % 2 ? -1 : 1) * determinante(sub_matriz);
}