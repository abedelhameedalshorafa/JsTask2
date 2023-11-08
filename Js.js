
////  part 1 /////

// const monthNumber = parseInt(prompt("Please enter your birthdate month (1-12):"));

// if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
//   let monthName;

//   switch (monthNumber) {
//     case 1:
//       monthName = "January";
//       break;
//     case 2:
//       monthName = "February";
//       break;
//     case 3:
//       monthName = "March";
//       break;
//     case 4:
//       monthName = "April";
//       break;
//     case 5:
//       monthName = "May";
//       break;
//     case 6:
//       monthName = "June";
//       break;
//     case 7:
//       monthName = "July";
//       break;
//     case 8:
//       monthName = "August";
//       break;
//     case 9:
//       monthName = "September";
//       break;
//     case 10:
//       monthName = "October";
//       break;
//     case 11:
//       monthName = "November";
//       break;
//     case 12:
//       monthName = "December";
//       break;
//   }

//   alert(`The input: ${monthNumber}\nThe output: ${monthName}`);
// } else {
//   alert("Invalid input. Please enter a number between 1 and 12.");
// }


//// part 2 ////

// let number=1;
// for(let i=1;i<=4;i++)
// {
//     let numbersRow="";
//     for(let j=1;j<=i;j++)
//     {
//         numbersRow += number + " ";
//         number++;
//     }
//     console.log(numbersRow);
// }

//// part 3 ////

// let numbers = "";
// for(let i=1;i<=1000;i++)
// {
//     if(i%13===0){
//         numbers+=i+" ";
//     }
// }
// console.log(numbers);


//// part 4 ////

// console.log(multiplication2(2,3));
// console.log(multiplication2(4,6));
// console.log(multiplication2(8,7));

// function multiplication2(num1,num2)
// {
//     let theResult=0;
//     if(num1>num2)
//     {
//         const temp=num1;
//         num1 = num2;
//         num2=temp;
//     }

//     for(let i=0;i<num2;i++)
//     {
//         theResult+=num1;
//     }
//     return theResult;
// }


//// part 5 ////

// const base=5;
// const height=10;
// const area=triangleArea(base,height)
// console.log(`the area of triangle is : ${area}`);
// function triangleArea(base,height)
// {
//     return 0.5*base*height;
// }



//// part 6 ////

// console.log(isPandigital(12345689170));

// function isPandigital(number){

//     const numberStr=number.toString();
//     const digitSet=new Set;

//     for(let i=0; i<numberStr.length ; i++)
//     {
//         const digit=numberStr[i];
//         if(digit<0 || digit>9)
//         {
//             return false;
//         }
//         digitSet.add(digit);
//     }
//     return digitSet.size===10;
// }



//// part 7 ////

// const drink = prompt("Please enter your favorite drink (banana , orange , apple , fruits, Bm) :");
// let price;

//   switch (drink) {
//     case "banana":
//         price = "20 dollars";
//         break;
//     case "orange":
//         price = "25 dollars";
//         break;
//     case "apple":
//         price = "30 dollars";
//         break;
//     case "fruits":
//         price = "35 dollars";
//         break;
//     case "Bm":
//         price = "40 dollars";
//         break;  
//   }

//   console.log(` the price of ${drink} is : ${price}`)



//// part 8 ////

// console.log(fullName("AbedElhameed" , "Alshorafa"));

// function fullName(firstName,secondName){
//     return `"${firstName} ${secondName}"`;
// }


/////////// Functions ///////////


//// part 1 ////

//arrow
// tellFortune=(jobTitle,location,partnerName,numKids)=>{
//     return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numKids} kids.`
// }

// console.log(tellFortune("Computer Engineer","Cairo","unknown",3));

// function tellFortune(jobTitle,location,partnerName,numKids){
//     return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numKids} kids.`
// }


//// part 2 ////

//arrow
// calculateDogAge=(humanAge)=>{
//     return`Your doggie is ${humanAge*7} years old in dog years!`;
// }

// console.log(calculateDogAge(1));
// console.log(calculateDogAge(4));

// function calculateDogAge(humanAge){
//     return`Your doggie is ${humanAge*7} years old in dog years!`;
// }


//// part 3 ////

//arrow 

// calculateSupply=(age,amount)=>{
//     return`You will need ${(100-age)*365*amount} cups of tea to last you until the ripe old age of 100`;
// }

// console.log(calculateSupply(30, 3));

// function calculateSupply(age,amount)
// {
//     return`You will need ${(100-age)*365*amount} cups of tea to last you until the ripe old age of 100`;
// }



//// part 4 ////

//arrow

// greet=(name)=>{
//     return`Hello ${name}`;
// }

// console.log(greet("Adam"));

// function greet(name){
//     return`Hello ${name}`;
// }


//// part 5 ////


// what is the error:
// function double(cat) {
//   return 2 * x;// x variable not a parameter should be 2* cat
// }

// function double(7) { // not valid parameter
//   return 2 * 7;
// }

// function double('7') { // not valid parameter 
//   return 2 * 'x';// didn't doubled the string by number 
// }


//// part 6 ////

// function double1(x) {
//     return 2 * x ;
// }
  
// function double2 (x){
// return 2 * x;
// }

// function double3(x) {
// return 2 * x;
// }
  

//// part 7 ////

//arrow
// cube=(number)=>{
//     return `${number*number*number}`;
// }

// console.log(cube(4));

// function cube(number){
//     return `${number*number*number}`;
// }


//// part 8 ////

//arrow
// multiply=(num1,num2)=>{
//     return `${num1*num2}`;
// }

// console.log(multiply(3,4));

// function multiply(num1,num2){
//     return `${num1*num2}`;
// }


//// part 9 ////

//arrow
// canIGetADrivingLicense=(age)=>{
//     if(age>=20)
//     {
//         return`yes you can`;
//     }
//     else
//     {
//         return`please come back after ${20-age} years to get one`;
//     }
// }

// console.log(canIGetADrivingLicense(17));

// function canIGetADrivingLicense(age){
//     if(age>=20)
//     {
//         return`yes you can`;
//     }
//     else
//     {
//         return`please come back after ${20-age} years to get one`;
//     }
// }


//// part 10 ////

//arrow
// sameLength=(str1,str2)=>{
//     return str1.length===str2.length;
// }

// console.log(sameLength("abed","omar"));

// function sameLength(str1,str2){
//     return str1.length===str2.length;
// }

//// part 11 ////

//arrow
// largerNubmer=(num1,num2)=>{
//     return num1>num2?num1:num2;
// }

// console.log(largerNubmer(8,7));

// function largerNubmer(num1,num2){
//     return num1>num2?num1:num2;
// }


//// part 12 ////

//arrow
// smallerNubmer=(num1,num2,num3)=>{
//     if(num1<num2&&num1<num3)
//     {
//         return num1;
//     }
//     else if(num2<num1&&num2<num3)
//     {
//         return num2;
//     }
//     else 
//     return num3;
// }

// console.log(smallerNubmer(4,2,2));

// function smallerNubmer(num1,num2,num3){
//     if(num1<num2&&num1<num3)
//     {
//         return num1;
//     }
//     else if(num2<num1&&num2<num3)
//     {
//         return num2;
//     }
//     else 
//     return num3;
// }


//// part 13 ////

//arrow
// shorterString=(str1,str2,str3,str4,str5)=>{
//     const strings=[str1,str2,str3,str4,str5];
//     let shortStr=strings[0];

//     for(let i=1; i<strings.length;i++){
//         if(strings[i].length<shortStr.length){
//             shortStr=strings[i];
//         }
//     }
//     return shortStr;
// }

// console.log(shorterString("air","school","car","by","github"));

// function shorterString(str1,str2,str3,str4,str5){
//     const strings=[str1,str2,str3,str4,str5];
//     let shortStr=strings[0];

//     for(let i=1; i<strings.length;i++){
//         if(strings[i].length<shortStr.length){
//             shortStr=strings[i];
//         }
//     }
//     return shortStr;
// }


//// part 14 ////


//arrow
// longerString=(str1,str2,str3,str4)=>{
//     const strings=[str1,str2,str3,str4];
//     let longStr=strings[0];

//     for(let i=1; i<strings.length;i++){
//         if(strings[i].length>longStr.length){
//             longStr=strings[i];
//         }
//     }
//     return longStr;
// }

// console.log(longerString("air","school","car","github"));

// function longerString(str1,str2,str3,str4){
//     const strings=[str1,str2,str3,str4];
//     let longStr=strings[0];

//     for(let i=1; i<strings.length;i++){
//         if(strings[i].length>longStr.length){
//             longStr=strings[i];
//         }
//     }
//     return longStr;
// }


//// part 15 ////

//arrow
// isEven=(number)=>{
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(4));

// function isEven(number){
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


//// part 16 ////

//arrow
// isOdd=(number)=>{
//     if(number%2==1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isOdd(143));

// function isOdd(number){
//     if(number%2==1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


//// part 17 ////

//arrow
// positive=(number)=>{
//     if(number<0)
//     {
//         return number *-1;
//     }
//     else 
//     return number;
// }

// console.log(positive(-5));

// function positive(number){
//     if(number<0)
//     {
//         return number *-1;
//     }
//     else 
//     return number;
// }


//// part 18 ////

//arrow
// fullName=(firstName,secondName)=>{
//     return `${firstName} ${secondName}`;
// }

// console.log(fullName("Abedelhameed","Alshorafa"));

// function fullName(firstName,secondName){
//     return `${firstName} ${secondName}`;
// }


//// part 19 ////

//arrow
// average=(num1,num2,num3,num4,num5)=>{
//     return (num1+num2+num3+num4+num5)/5;
// }

// console.log(average(5,7,9,3,5));

// function average(num1,num2,num3,num4,num5){
//     return (num1+num2+num3+num4+num5)/5;
// }


//// part 20 ////

//arrow
// randomNumber=()=>{
//     return Math.random();
// }

// console.log(randomNumber());

// function randomNumber(){
//     return Math.random();
// }

//// part 21 ////


//arrow
// randomBetweenNumbers=(min,max)=>{
//     return Math.random()*(max-min)+min;
// }

// console.log(randomBetweenNumbers(1,3));

// function randomBetweenNumbers(min,max){
//     return Math.random()*(max-min)+min;
// }


//// part 22 ////

//arrow
// scoreInUniversty=(grade)=>{
//     if(grade>=95&&grade<=100){
//         return "A";
//     }
//     else if(grade>=85&&grade<=94){
//         return "B";
//     }
//     else if(grade>=70&&grade<=84){
//         return "C";
//     }
//     else if(grade>=50&&grade<=69){
//         return "D";
//     }
//     else if(grade>=0&&grade<=45){
//         return "F";
//     }
// }

// console.log(scoreInUniversty(88));

// function scoreInUniversty(grade){
//     if(grade>=95&&grade<=100){
//         return "A";
//     }
//     else if(grade>=85&&grade<=94){
//         return "B";
//     }
//     else if(grade>=70&&grade<=84){
//         return "C";
//     }
//     else if(grade>=50&&grade<=69){
//         return "D";
//     }
//     else if(grade>=0&&grade<=45){
//         return "F";
//     }
// }

//// part 23 ////

// let countNumber=0;
//arrow
// counter=()=>{
//     return ++countNumber;
// }

// console.log(counter());
// console.log(counter());

// function counter(){
//     return ++countNumber;
// }


//// part 24 ////

// let countNumber=0;
// //arrow
// counter=()=>{
//     return ++countNumber;
// }

// resetCounter=()=>{
//     let counterNum=countNumber;
//     countNumber=0;
//     return`${counterNum} and the counter reset now`
// }

// console.log(counter());
// console.log(counter());
// console.log(resetCounter());
// console.log(counter());
// console.log(counter());


// function counter(){
//     return ++countNumber;
// }

// function resetCounter(){
//     let counterNum=countNumber;
//     countNumber=0;
//     return`${counterNum} and the counter reset now`
// }