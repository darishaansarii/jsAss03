// ---------------------------------------------WORD PDF START------------------------------------------------

// ---------------------------------------------CHAPTER 10 START----------------------------------------------

// Question 01:
var city="Karachi";
if(city=="Karachi") {
    console.log("The City of Lights!");  
}

// Question 02:
var x=+prompt("The value of x is:"), y=+prompt("The value of y is:");
if(x==y) {
    var z=+prompt("The value of z is:");
    var num=z;
}

// Question 03:
var zipCode=+prompt("Write zip code of the city:");
if(zipCode==10010) {
    alert("Karachi");
}
else {
    alert("Please write correct city.");
}

// Question 04:
var num=+prompt("Write a numerical value:");
if(num===5) {
    num=1;
}

// ---------------------------------------------CHAPTER 10 END----------------------------------------------

// ---------------------------------------------CHAPTER 11 START----------------------------------------------

// Question 01:
var x=4, y=3;
if(x!=y) {
    console.log(`${x} is not equal to ${y}.`);
}

// Question 02:
if(x>=y) {
    console.log(`${x} is greater than or equal to ${y}.`);
}

// Question 03:
if(x!=3) {
    x=5;
}

// Question 04:
if(3!==4) {
    alert("Congratulations!");
}

// Question 05:
var firstName=prompt("Enter your first name:");
if(firstName!=="Jihan") {
    alert("No match!");
}

// ---------------------------------------------CHAPTER 11 END----------------------------------------------

// ---------------------------------------------CHAPTER 12 START----------------------------------------------

// Question 01:
if(x>=y) {
    alert(`${x} is greater than or equal to ${y}.`);
}
else {
    alert(`${x} is less than ${y}.`);
}

// Question 02:
var maths, cs, phy;
maths=+prompt("Enter the marks of Mathematics:");
cs=+prompt("Enter the marks of Computer Science:");
phy=+prompt("Enter the marks of Physics:");
var obtNo=maths+cs+phy, per=obtNo/300*100, grade;

if(per>=80 && per<=100) {
    grade="A+";
}

else if(per>=70 && per<=79) {
    grade="A";
}

else if(per>=60 && per<=69) {
    grade="B";
}

else if(per>=50 && per<=59) {
    grade="C";
}

else {
    grade="Fail";
}

document.write(`<h1>MARKSHEET</h1><p>The marks of Mathematics are: ${maths} <br> The marks of Computer Science are: ${cs} <br> The marks of Physics are: ${phy} <br><br> <b>Obtained Marks: ${obtNo}</b> <br> <b>Percentage: ${per}</b> <br> <b>Grade: ${grade}</b></p>`);

// Question 03:
var a=+prompt("The value of a is:");
if (a === 10) {
    alert("a is 10");
}
else {
    alert(`The correct value of a is: ${a}.`);
}

// Question 04:
var city=prompt("Enter a city:");
if(city==="Karachi") {
    alert("It is Karachi!");
}

else if(city==="Lahore") {
    alert("It is Lahore!");
}

else {
    alert("It is neither Karchi nor Lahore!");
}

// ---------------------------------------------CHAPTER 12 END----------------------------------------------

// ---------------------------------------------CHAPTER 13 START----------------------------------------------

// Question 01:
var a, b, c, d;
a=5, b=a, c=3, d=3;
if(a==b && c==d) {
    console.log("The value of a and b is same. Likewise, c and d are also same.");
}

// Question 02:
var a, b, c, d;
a=5, b=a, c=4, d=3;
if(a==b || c!=d) {
    console.log("The value of a and b is same. But c and d are different.");
}

// Question 03:
var name=prompt("Enter name:"), age=+prompt("Enter age:");
if((name==="Hamza" || name=="Arsalan") && age<60) {
    console.log("This statement shows that your age is less than 60 and your name is either Hamza or Arsalan.");
}

// Question 04:
var a=3, b=2;
if(a<b || a>b) {
    alert(`${a} is either greater than or less than ${b}.`);
}

// Question 05:
var fName="Darisha", lName="Ansari";
var guess_fName=prompt("Guess first name:");
var guess_lName=prompt("Guess last name:");

if(guess_fName===firstName && guess_lName===lName) {
    alert("You won!");
}

// ---------------------------------------------CHAPTER 13 END----------------------------------------------

// ---------------------------------------------CHAPTER 14 START----------------------------------------------

// Question 01:
var password=prompt("Enter password:");
if(password.length!=0) {
    if(password.length<=5) {
        alert("Password must be greater than 5!");
    }
    else {
        alert("Okay!");
    }
}

// Question 02:
var a=1, c="Max";
if (a === 1) { 
    if (c === "Max") {
        alert("Okay!");
    }
}

// Question 03:
if (a===1 && c==="Max") {
    alert("Okay!");
}

// Question 04:
var num1=3, num2=3;
if (num1===num2) {
    if(num1<=num2) {
        alert("num1 is equal to num2.");
    }
}

// ---------------------------------------------CHAPTER 14 END----------------------------------------------

// ---------------------------------------------WORD PDF END------------------------------------------------


// ------------------------------------------CHAPTERS 12-13 PDF START---------------------------------------

// Quuestion 01:
var char=prompt("Enter a number, character or a string:");
var ascii = char.charCodeAt(0);
if(ascii>=65 && ascii<=90) {
    alert("It is an uppercase character!");
}
else if(ascii>=97 && ascii<=122) {
    alert("It is a lowercase character!");
}
else if(ascii>=48 && ascii<=57) {
    alert("It is a number!");
}
else {
    alert("It is a special character!");
}

// Question 02:
var num1, num2;
num1=+prompt("Enter number 1:");
num2=+prompt("Enter number 2:");

if(num1>num2) {
    alert(`${num1} is greater than ${num2}.`);
}
else if(num1<num2) {
    alert(`${num1} is less than ${num2}.`);
}
else {
    alert(`${num1} is equal to ${num2}.`);
}

// Question 03:
var num=+prompt("Enter a number:");
if(num>0) {
    alert("The number you entered is positive.");
}
else if(num<0) {
    alert("The number you entered is negative.");
}
else {
    alert("The number you entered is zero.");
}

// Question 04:
var char=prompt("Enter a charcter:");
if(char.length===1) {
   if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u') {
        alert("True!");
   }
   else {
        alert("False!");
   }
}
else {
    alert("Please enter a single character!");
}

// Question 05:
    // a
    var corr_pass="Pakistan123";

    // b
    var user_pass=prompt("Enter your password:");

    // c
    if(corr_pass.length>1) {
        if(user_pass===corr_pass) {
            alert("“Correct! The password you entered matches the original password :)");
        }
        else {
            alert("Incorrect Password!");
        }
    }
    else {
        alert("Please enter your password!");
    }

// Question 06:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// Question 07:
var time=+prompt("Enter time in 24 hours format:");

if(time>=0 && time<=2400) {
    if(time>=0 && time<1200) {
        alert("Good Morning!");
    }
    else if(time>=1200 && time<1700) {
        alert("Good Afternoon!");
    }
    else if(time>=1700 && time<2100) {
        alert("Good Evening!");
    }
    else if(time>=2100 && time<2359) {
        alert("Good Night!");
    }
}
else {
    alert("Please enter a valid time.");
}

// ------------------------------------------CHAPTERS 12-13 PDF END---------------------------------------

// ------------------------------------------CHAPTERS 09-11 PDF START---------------------------------------

// Question 01:
var city=prompt("Enter a city:");
if(city==="Karachi") {
    alert("Welcome to the City of Lights!");
}

// Question 02:
var gender=prompt("Enter your gender:");
if(gender==="male") {
    alert("Good Morning Sir!");
}
else if(gender==="female") {
    alert("Good Morning Ma'am! Have a great day :)");
}

// Question 03:
var traf_color=prompt("Enter the color of traffic light:");
if(traf_color==="red") {
    alert("Must stop!");
}
else if(traf_color==="yellow") {
    alert("Ready to move!");
}
else if(traf_color==="green") {
    alert("Move now!");
}

// Question 04:
var fuel=prompt("Enter the remaining fuel in litres:");
if(fuel<0.25) {
    alert("Please refill the fuel in your car!");
}

// Question 05:
var a = 4;
if (++a === 5){
alert("given condition for variable a is true"); //will be displayed
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true"); //will not be displayed
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true"); //will not be displayed
}
if (c === 13){
alert("condition 2 is true"); //will be displayed
}
if (++c < 14){
alert("condition 3 is true"); //will not be displayed
}
if(c === 14){
alert("condition 4 is true"); //will be displayed
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True"); //will be displayed
}
if (false){
alert("False"); //will not be displayed
}

 if("car" < "cat"){
alert("car is smaller than cat"); //will be displayed
}

// Question 06:
var eng, math, sci;
eng=+prompt("Enter marks of english");
math=+prompt("Enter marks of maths");
sci=+prompt("Enter marks of science");
var obt=eng+math+sci;
var per=obt / 300 *100;
var grade, remarks;

if(per>=80 && per<=100) {
    grade="A+";
    remarks="Excellent!";
}
else if(per>=70 && per<80) {
    grade="A";
    remarks="Good!";
}
else if(per>=60 && per<70) {
    grade="B";
    remarks="You need to improve!";
}
else if(per<60) {
    grade="Fail";
    remarks="Soory!";
}
document.write(`<h1>Marksheet:</h1>Total marks: 300<br>Marks obtained: ${obt}<br>Percentage: ${per}%<br>Grade: ${grade}<br>Remarks: ${remarks}.`);

// Question 07:
var hidden=6, guess=+prompt("Guess a number between 1-10:");
if(guess===hidden) {
    alert("Bingo! You guessed the correct number :)");
}
else if(guess===(hidden+1)) {
    alert("Close enough to the correct answer!");
}

// Question 08:
var num=+prompt("Enter a number:");
if(num%3===0) {
    alert("The number you entered is divisible by 3.");
}

// Question 09:
var num=+prompt("Enter a number:");
if(num%2===0) {
    alert(`${num} is an even number!`);
}
else  {
    alert(`${num} is an odd number!`);
}

// Question 10:
var temp=+prompt("Enter temperature:");
if(temp>40) {
    alert("It is too hot outside.");
}
else if(temp>30) {
    alert("The weather today is normal.");
}
else if(temp>20) {
    alert("The weather today is cool.");
}
else if(temp>10) {
    alert("OMG! The weather today is so cool.");
}

// Question 11:
    // a
    var a=+prompt("Enter first number:");

    // b
    var b=+prompt("Enter second number:");

    // c
    var add, sub, mul, div, rem;
    add=a+b;
    sub=a-b;
    mul=a*b;
    div=a/b;
    rem=a%b;

    document.write(`<h1>Calculator:</h1>Addition of ${a} and ${b} is: ${add}.<br>Subtraction of ${a} and ${b} is: ${sub}.<br>Multiplication of ${a} and ${b} is: ${mul}.<br>Division of ${a} and ${b} is: ${div}.<br>Remainder of ${a} and ${b} is: ${rem}.<br>`);
// ------------------------------------------CHAPTERS 09-11 PDF END---------------------------------------
