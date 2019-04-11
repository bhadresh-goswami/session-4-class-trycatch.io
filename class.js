class userClass{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    getData() {
        alert(`My name is ${this._name} and age is ${this._age}!`);
    }
}

let user1 = new userClass('bhadresh',29);
user1.getData();

