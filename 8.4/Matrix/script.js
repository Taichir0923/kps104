// function determine(matrix){
//     let hemjees = matrix.length;

//     if(hemjees === 1) return matrix[0][0];

//     if(hemjees === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

//     let result = 0;

//     for(let i = 0; i < hemjees; i++){
//         result += matrix[0][i] * helper(matrix, i);
//     }

//     return result;
// }

// function helper(matrix, column){
//     let subMatrix = [];
//     let hemjes = matrix.length;
//     let subIndex = 0;

//     for(let j = 1; j < hemjes; j++){
//         subMatrix[subIndex] = [];
        
//         for(let k = 0; k < hemjes; k++){
//             if(k !== column){
//                 subMatrix[subIndex].push(matrix[j][k])
//             }
//         }

//         subIndex++;
//     }
//     return (column % 2 ? -1 : 1) * determine(subMatrix)
// }

// let nas = 18

// nas >= 18 ? console.log('adult') : console.log('child')

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    return undefined
                }
            }
        }
    }
}

let tree = new BinarySearchTree()