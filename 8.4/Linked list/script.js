class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }

        this.length++;
        return this.length;
    }

    pop(){
        if(!this.head) return undefined;
        let pre = this.head;
        let newTail = pre;
        while(pre.next){
            newTail = pre;
            pre = pre.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return pre.value;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this.length;
    }

    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        oldHead.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return oldHead.value
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, value){
        let found = this.get(index);
        if(!found){
            return false;
        } else {
            found.value = value;
            return true
        }
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        let newNode = new Node(value);
        let prev = this.get(index - 1);
        let next = prev.next;
        prev.next = newNode;
        prev.next.next = next;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = null;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this
    }

    print(){
        let result = [];
        if(this.length <= 1) return result;

        let current = this.head;

        while(current !== null){
            result.push(current.value);
            current = current.next;
        }

        return result;
    }
}


const combineLists = (l1, l2) => {
    let list1 = new SinglyLinkedList();
    let list2 = new SinglyLinkedList();
    let result = new SinglyLinkedList();

    l1.forEach(el => list1.push(el))
    l2.forEach(el => list2.push(el))

    if(list1.length > list2.length){
        for(let i = list2.length; i < list1.length; i++){
            list2.push(0)
        }
    }

    for(let j = 0; j < list1.length; j++){
        let el1 = list1.get(j);
        let el2 = list2.get(j);
        result.push(el1.value + el2.value)
    }
    let current = result.head
    // console.log(result.print())
    while(current.next){
        if(current.value >= 10){
            current.next.value += +current.value.toString()[0];
            current.value = +current.value.toString()[1];
        }
        current = current.next;
    }

    if(result.tail.value >= 10){
        result.push(0);
        let preTail = result.get(result.length - 2);
        result.tail.value += +preTail.value.toString()[0];
        preTail.value = +preTail.value.toString()[1];
    }

    return result.print()
}