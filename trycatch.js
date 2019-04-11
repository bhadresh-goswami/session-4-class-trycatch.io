try{

    let a = 10;
    let b = 0;
    //let c = a / b ;//may divide by zero exception

    console.log(`the value of a ${a}, b ${b} and c ${c}!`);

}
catch (e){
    console.log(e.message);
}

//employee condition salary <= 15000 $ not more then

class salaryError extends Error{
    constructor(errMessage){
        super(errMessage);
        this.name = "Salary Error!";
    }
}

try{

    for(var i = 0;i<50;i++){
        let sal = 14999 + i;//calc 
        if(sal>15000)
        {
            throw new salaryError(`Salary must be less then or equlas to 15000$, your salary is ${sal}`);
        }
        console.log(`your salary is ok, ${sal}!`);
    }

}catch (e){
    console.log(`an error in code ${e.message} with error name ${e.name}!`);
}