class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next  = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        let temp = this.tail;
        if(!this.length) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--
        return temp;
    }

    unshift(value){
        let newNode = new Node(value)
        if(!this.length){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }

        this.length++;
        return this
    }

    shift(){
        if(!this.length) return undefined;
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index){
        let counter = 0;
        let current = this.head;
        if(index < 0 || index >= this.length) return null;
        if(index >= parseInt(this.length / 2)){
            current = this.tail;
            counter = this.length - 1;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
        } else {
            while(counter !== index){
                current = current.next;
                counter++;
            }
        }

        return current
    }

    set(index, value){
        let found = this.get(index);
        if(!found) {
            return false;
        } else {
            found.value = value;
        }

        return true
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        let prev = this.get(index - 1);
        let next = prev.next;
        let newNode = new Node(value);

        newNode.next = next;
        next.prev = newNode;
        prev.next = newNode;
        newNode.prev = prev;

        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let prev = this.get(index - 1);
        let deleteNode = prev.next;
        prev.next = deleteNode.next;
        deleteNode.next.prev = prev;
        deleteNode.next = null;
        deleteNode.prev = null;
        this.length--;
        return deleteNode;
    }
}

let ddl = new DoublyLinkedList()
ddl.push(10)
ddl.push(11)
ddl.push(12)
ddl.push(13)
ddl.push(14)