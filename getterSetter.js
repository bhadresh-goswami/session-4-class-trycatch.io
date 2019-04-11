class demo
{
    // constructor(val)
    // {
    //     this._val = val;
    // }
    get myVal(){
        return this._val;
    }
    set myVal(v){
        if( v % 2 == 0)
        {
            alert(`the value ${v} is even!`);
        }
        else{
            alert(`ths value ${v} is odd!`)
        }
        this._val = v;
        return this._val;
    }


}
let obj = new demo();
obj.myVal = 123;
alert(`${obj.myVal} is value of variable!`);