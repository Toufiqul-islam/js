/*
let a=10 ;
let b=30;
*/
/*
if(a>=95){
    console.table('A++');
}else if(a>=80){
    console.table('A');
}else if(a>=70){
    console.table('A');
}else if(a>=60){
    console.table('A-');
}else if(a>=50){
    console.table('B');
}else if(a>=40){
    console.table('C');
}else if(a>=33){
    console.table('D');
}else{
    console.table('fail');
}
*/
/*
switch(true){
    case (b>32 && b<40):
        console.log('D');
        break;
    case (b>39 && b<50):
        console.log('C');
        break;
    case (b>49 && b<60):
        console.log('B');
         break;
    case (b>59 && b<70):
        console.log('A-');
        break;
    case (b>69 && b<80):
        console.log('A');
        break;
    case (b>79 && b<101):
        console.log('A+');
        break;
    default:console.log('fail');
}
*/
/*
for(let i=0; i<51; i++){
    console.log(`${i*2}`);
}
*/
/*while loop; when condition are 3*/
/*
while(a<22){
    a++;
    console.log(a);
}
*/
/* do while loop*/
/*
do{
    a++;
    console.log(a);
}while(a<20);

for(let i=1; i<20; i++){
    a = a*i;
}
console.log(a);*/
/*
for(let i=1; i<20; i++){
    a = a*i;
    console.log(a);
}
*/
/*function*/
/*
function oddEven(x){
    if(x%2==0){
        console.log('x is even');
    }
    else console.log('x is odd');
}
oddEven(8);
function oddEven(x,y,z){
    for(let x; x<y; x++){
        a = x/3;
        console.log(a);
    }
}
oddEven(4,8);
*/
/*
function toufiq(x,y,z){
    if(x>y>z && x>z>y){
        console.log('x is bigest');
    }else console.log('x is bigest')
    if(y>z>x && y>x>z){
        console.log('y is bigest');
    }
    if(z>x>y && z>y>x){
        console.log('z is bigest');
    }
}
toufiq(4,5,6)
*/


/*
function toufiq(x,y,z){
    let max = math.max(x,y,z);
    let min = math.min(x,y,z);
    let addEven = {
        x: x % 2 === 0 ? 'even' : 'odd',
        y: y % 2 === 0 ? 'even' : 'odd',
        z: z % 2 === 0 ? 'even' : 'odd'
    }
    console.log(`maximum value: ${max}`);
    console.log(`minimum value: ${min}`);
    console.log(`x is: ${addEven.x}`);
    console.log(`y is: ${addEven.y}`);
    console.log(`z is: ${addEven.z}`);
}
toufiq(10,5,8)*/
/*Recursion*/
/*Closures*/
/*
function oddEven(x,y){
    function checker(){
        if(x<y){
            return console.log('y is big');
        }
        else return console.log('x is big');
    }
    checker();
    if(x%2==0){
        console.log('x is even');
    }
    else console.log('x is odd');
}
oddEven(8,24);
*/
/*
function ternarychack(x){
    (x%2==0)? console.log('even'):console.log('odd')
}
ternarychack(5);
*/
/*
function ternarychack(x){
    (x%2==0)? console.log('even'):console.log('odd')
}
ternarychack(5);
*/
/*
let ternar =function ternarycheck(x){
    (x%2==0)?console.log('even'):console.log('odd')
}
    ternar(5);
let ternary =(x)=>{
    (x%2==0)?console.log('even'):console.log('odd')
}
    ternary(6)
*/
/*
ternary operator
*/
/*
let a=80;
let b=10;
let c=3;
a>b?
    console.log("a is Greter")
    :
    (
        b>c?
        console.log("b is Greater")
        :
        console.log("C is greater")
    )
*/
/*
let rohim=40;
let korim=35;
let monir=45;
rohim>korim ?
console.log(` ${rohim} rohim is greater`)
:
(
    korim>monir?
    console.log(`${korim} korim is greater`)
    :
    console.log(`${monir} monit is greater`)
)
*/
/*
function myfunction( let i=0; i<10; i++ ){
    return i*6;
}
let b=myfunction(6)
console.log(`${b}`)*/
/*
function myfunction (a){
    for(let i=1; i<21; i=i+2){
    console.log(`${a}*${i}=${i*a}`);
}
}
myfunction(10)
*/
/*
class polygon{
    constructor(height, width, dapth){
        this.area = height * width;
        this.par = height / dapth;
    }
}
console.log(new polygon(4,3,2).par);
console.log(new polygon(4,3).area);
*/
/*
class farm{
    constructor(cow, a=20){
        this.milk = cow * a;
    }
}
console.log(new farm(50).milk);
*/
/*
class factory{
    constructor(a, x=5, y=4, ){
        this.carx = a/x;
        this.cary = a/y;
    }
}
console.log(new factory(100).carx);
console.log(new factory(100).cary);
*/
/*
class Car{
    constructor(piece){
        this.piece;
        this.car;
    }
    bmw(piece){
        let tyre = piece/5;
        let look = piece/3;
        let str = piece;
        if(tyre<look && look< str){
            this.car =console.log (tyre);
        }
        else this.car = console.log('not enough tyre');
    };
    audi(piece){
        let tyre1 = piece/4;
        let look1 = piece/4;
        let str1 = piece;
        if(tyre1<=look1 && look1< str1){
            this.car = console.log(tyre1);
        }
        else this.car = console.log('invalid no');
    };
}
const BMW = new Car;
const AUD = new Car;
console.log(AUD.audi(100),BMW.bmw(100));
*/
//09.03.2023
//using promises
//setTimeout
//setinterval
//Regular Expression
//H.O js Browser Bow
//H.O errors
/*
const myTimeout = setTimeout(newFunction, 500);
function mewFunction(a){
    for(let i=1; i<21; i=i+2){
    console.log(`${a}*${i}=${i*a}`);
}
}
newFunction(10);*/
/*
const clothing = ['shoes','shirts','socks','swealers'];

console.log(clothing.length);
*/
//const clothing = ['shoes','shirts','socks','swealers'];

//console.log(clothing.at(2));
//copywithin
/*
const copycat = ['a','b','c','d','e','f','g']
console.log(copycat.copyWithin(0,3,5))
console.log(copycat.copyWithin(0,4))
*/
const tryeEvery = (currentValue) => currentValue <40;
const array1 = [10,12,15,20,23,30,40,50];
console.log(array1.every(tryeEvery));

const tryeFill = [1,2,3,4,5,6,7,8,9,10];
console.log(tryeFill.fill(0,2,5,));
console.log(tryeFill.fill(6,7));
console.log(tryeFill.fill(8));

const tryeFilter = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = tryeFilter.filter((word) => word.length >6);
console.log(result);

const tryeFind = [20,25,30,35,40,45,50,55,60,65,70];
const pylam = tryeFind.find((konta) => konta > 30);
console.log(pylam);

const tryeFindIndex = [20,25,30,35,40,45,50,55,60,65,70];
const array3 = tryeFindIndex.find((konta) => konta > 30);
console.log(array3);

