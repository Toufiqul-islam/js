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
