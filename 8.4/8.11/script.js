// this
function myFunction(){
    console.log(this);
}

myFunction()

let obj = {
    ner: "Narada",
    getName: function(){
        return this.ner;
    },

    setNameAndAge(name, age){
        this.ner = name;
        this.age = age
    }
}

let obj1 = {
    ner: 'Jean'
}

let obj2 = {
    ner: 'Jake'
}

const ner = obj.setNameAndAge.call(obj1, "Sarah", 23)

// call, bind, apply
// BIND, APPLY