class student{
    constructor(){
        console.log("an object is created!");
    }
    /*
    not supported
    function name(params) {
        
    }
    */
    setData(name,course,fees){
        this._name = name;
        this._course = course;
        this._fees = fees;
    }
    getData()
    {
        alert(`my name is ${this._name}, i select the ${this._course}, and paid ${this._fees}!`);
    }

    //setter and getter property
    get getName(){
        return this._name.toUpperCase();
    }

    set assignTax(tax){
        let finalFees = (this._fees * tax / 100) + this._fees;
        this._fees = finalFees;
    }
    get assignTax(){
        return this._fees;
    }
}




let std1 = new student();
let std2 = new student();
let std3 = new student();
let std4 = new student();

std1.setData("bhadresh","react",10000);
std2.setData("smit","js",19000);
std3.setData("abhishek","java",100000);
std4.setData("someone",".net",13000);

std1.getData();
std2.getData();
std3.getData();
std4.getData();

//std1.getName = 12;//an error

alert(std1.getName);

std1.assignTax = 10.0;
std2.assignTax = 12.00;
std3.assignTax = 15.00;
std4.assignTax = 5.0;

console.log(std1.assignTax);
console.log(std2.assignTax);
console.log(std3.assignTax);
console.log(std4.assignTax);