class myerror extends Error{
    constructor(message){
        super(message);
        this._name = "My Error";
    }
}

function errorTest()
{
    throw new myerror("this is an error!");
}
try{
    errorTest();
}
catch(err){
    alert(err.message);
}