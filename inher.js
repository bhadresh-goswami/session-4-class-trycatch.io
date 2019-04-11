class parent{
    constructor(textVal){
        console.log(`print text value from parent ${textVal}!`);
    }
    func1(){
        console.log('from parent class!');
    }
}

class child extends parent{
    constructor(v1){
        super(v1);
    }
    func2(){
        console.log('hey! i am called from child!');
    }
}

let obj = new child("bhadresh gosai");
obj.func1();
obj.func2();