///////////////////////////// Chapter 21 (Changing Case)////////////////////////////
////// Question 1////////
// //Answer////
// var allLower = userInput.toLowerCase();

                       //  **********//

////// Question 2////////
// //Answer////
// var x= "HELLO";
// x = x.toLowerCase();
// console.log(x)
                          //  **********// 

////// Question 3////////
// //Answer////
// var y = "world";
// y = y.toUpperCase();
// console.log(y);
                          //  **********//

////// Question 4////////
// //Answer////
// var q = "HELLO";
// var q1 = q.toLowerCase();
// console.log(q1);
                            //  **********//

////// Question 5////////
// //Answer////
// var array = ["ALI","KHAN","SHAH"];
// var lowerCase = array[1].toLowerCase(); 
// console.log(lowerCase);



                               //  **********//

////// Question 6////////
// //Answer////
// var city = "karachi";
// city = city.toUpperCase();
// console.log(city);


                                //  **********//

////// Question 7////////
// //Answer////
// var cityName = "kaRacHi";
// var cityName2 = cityName.charAt(0).toUpperCase() +cityName.substring(1).toLowerCase();
// console.log(cityName2);
 
                            //  **********//

// ///////////////////////////Chapter 22 - 25 (Strings)////////////////////////////////
////// Question 1////////
// // //Answer////
// var sameWords = "Captain";
// sameWords = sameWords.slice(0,1) + sameWords.slice(3);
// console.log(sameWords)

                             //  **********//
                             
////// Question 2////////
// //Answer////
// var sameWords = "captain";
// var numbersOfCharacters = sameWords.length;
// console.log(numbersOfCharacters);
                            //  **********//

////// Question 3////////
// //Answer////
// var animal = "elephant";
// var seg = animal.slice(2,6);
// console.log(seg);

                        //  **********//

////// Question 4////////
// // //Answer////
// var str1 = "capital";
// var str2 = str1.length;
// console.log(str2);


                       //  **********//

////// Question 5////////
// // //Answer////
// var seg = "Hello World";
// var seg1 = seg.length; 
// var seg3 = seg.slice(1,7)
// console.log(seg1);
// console.log(seg3);


                           //  **********//


////// Question 6////////
// //Answer////
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);
                            //  **********//

////// Question 7////////
// //Answer////
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);
                            //  **********//
////// Question 8////////
// //Answer////
// var str = "Let it go, let it go, can't hold it back anymore. ";
// var indx = str.lastIndexOf("go");
// console.log(indx)
                            //  **********//
////// Question 9////////
// //Answer////

                           //  **********//
////// Question 10////////
// //Answer////
// var  cap = "abcde";
// cap = cap.charAt(2);
// console.log(cap)

                           //  **********//
////// Question 11////////
// //Answer////
// var cha = "applicable";
// var numbersOfCharacters = cha.length;
// console.log(numbersOfCharacters);

                           //  **********//
////// Question 12////////
// //Answer////
// var x = "str";
// x = x.charAt(2);
// console.log(x);
                           //  **********//
////// Question 13////////
// //Answer////
// var input = "all the best";
// var cha = input.charAt(4);
// console.log(cha)
                          //  **********//

////// Question 14////////
// //Answer////
// if (myString .charAt(2) === targetChart){

// }
                          //  **********//
////// Question 15////////
// //Answer////
// nahi aaiya samajh       
            //  **********//

////// Question 16////////
// //Answer////
// var str = "I have 1 one apply and 2 oranges";
// var newStr = str.replace("1" , "one");

                        //  **********//
////// Question 17////////
// //Answer////
// var y = x.replace(abc/g, "xyz");



                           //  **********//
//////////////////////////Chapter 26 (Rounding Numbers)////////////////////////////////
////// Question 1////////
// //Answer////
// var numbersOfStars = Math.round(2.7)
// console.log(numbersOfStars)
                                //  **********//

// ////// Question 2////////
// // //Answer////
// var roundNum = Math.round(origNum);
// console.log(roundNum);
                                //  **********// 

////// Question 3////////
// //Answer////
// var roundNum = Math.round(origNum);
                                 //  **********//

////// Question 4////////
// //Answer////
// var roundNum = "6";
// var origNum = Math.round(roundNum);
// console.log(origNum)

                                 //  **********//

////// Question 5////////
// //Answer////
// var num = Math.floor(.5);
// console.log(num);



                                  //  **********//
// //////////////////////////////Chapter 27 (Random Numbers)///////////////////////////////
////// Question 1////////
// //Answer////
// var randomNum = Math.floor(Math.random()* 50) + 1;
// console.log(randomNum);
                                     //  **********//
////// Question 2////////
// //Answer////
// var randomNum = Math.random();
// console.log(randomNum); 

                                    //  **********//

////// Question 3////////
// //Answer////
// var betterNum  = (num * 6) + 1;
                                    //  **********//

////// Question 4////////
// //Answer////

// Function to simulate rolling a dice
// function rollDice(){
//     return Math.floor(Math.random() * 6) + 1; 
// }
//   var diceResult = rollDice();
//   console.log("The dice Rolled" , diceResult);

////// Question 4////////
// //Answer////
// Function to simulate a coin toss (head or tail)
// function tossCoin(){
//     var randomNum = Math.random();

//     if(randomNum < 0.5){
//         return "Head"
//     }else{
//         return "Tail"
//     }
// }
// var coinReuslt = tossCoin();
// console.log("The coin landed on ", coinReuslt)

                                    //  **********//
// /////////////////////////////Chapter 28, 29 (Converting Strings)////////////////////////
////// Question 1////////
// //Answer////
// var myInteger = parseInt("2");
// console.log(myInteger)
                                   //  **********//
////// Question 2////////
// //Answer////
// var str = parseInt("123");
// console.log(str);

                                   //  **********//
////// Question 3////////
// //Answer////
// var num1 = parseFloat("1.99");
// console.log(num1);
                                   //  **********//
////// Question 4////////
// //Answer////
// var number = 123;
// var stringNumber = number.toString();
// console.log(stringNumber)
                                   //  **********//
////// Question 5////////
// // //Answer////
// var numberASNummbers = 123;
// var numberAsString = numberASNummbers.toString();
// console.log(numberAsString)
                                 //  **********//

////// Question 6////////
// // //Answer////
// var number  = 42;
// var numberstr = number.toString();
// console.log(numberstr);

                                   //  **********//
////// Question 7////////
// // //Answer////
// var myInteger = parseInt("345");
// console.log(myInteger);





                                     //  **********//
/////////////////////////// ////Chapter 30 (Controlling the length of  decimals)//////////
////// Question 1////////
// // //Answer////
// var num = 10.54545454545;
// var newNum = num.toFixed(4);
// console.log(newNum)
                                      //  **********//

////// Question 2////////
// // //Answer////
// var num = 3.14566;
// var newNum = parseFloat(num.toFixed(2));
// console.log(newNum);
                                       //  **********//

////// Question 3////////
// // //Answer////
// if(num.toFixed(2).toString().length > 4){

// }



                                       //  **********//
////// Question 4////////
// //Answer////

// var number = 12.5454545454;
// var newNum = number.toFixed(2)
// alert(newNum)
                                       //  **********//

// /////////////////////////////Chapter 31 - 34 (Date & Time)/////////////////////////////
////// Question 1////////
// // //Answer////
// var dObj = new Date();
// console.log(dObj);
                                       //  **********//
////// Question 2////////
// //Answer////
// var dStr = new Date().toString();


                                        //  **********//
////// Question 3////////
// // //Answer////
// var day = new Date.getDay()
// console.log(day);
                                        //  **********//
////// Question 4////////
// //Answer////
// var dayName =  ["sun","Mon","Tue","wed","Thur","Fri","Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfDay = dayName[theDay]
// console.log(nameOfDay)






                                        //  **********//
////// Question 5////////
// //Answer////
// var d = new Date();
// var current = d.getTime();
// console.log(current)

                                      //  **********//
////// Question 6////////
// //Answer////
// var d = new Date("December, 31 ,2020");
// console.log(d);

                                     //  **********//

////// Question 7////////
// //Answer////
// var dateObjtect = new Date("1992,2,2");
// console.log(dateObjtect)
                                      //  **********//
////// Question 8////////
// //Answer////
// alert(Date.now()- new Date(1980,1,1).getTime());


                                       //  **********//
////// Question 9////////
// //Answer////
// var date = new Date();
// date.setFullYear(2023);

 
                                         //  **********//

////// Question 10////////
// //Answer////

// i don't understand
 

                                         //  **********//
////// Question 11////////
// //Answer////
// var dt = new Date("December,2,2");
// console.log(dt)
                                        //  **********//
////// Question 12////////
// //Answer////
// function changeValue(time){
//     var changeMinutes = prompt("Enter the minutes");
//     time.setMinutes(parseInt(changeMinutes))
//     return time;
// }

                                        //  **********//
////// Question 13////////
// //Answer////
// function changeHours(tiem, hours){
//   tiem.setHours(time.getHours() + hours)
//   return time
// }

// function changeHoura(time , hours){
//     time.setHours(time.getHours()+ hours)
//     return time
// }


                                        //  **********//

////// Question 14////////
// //Answer////
// function ageCalc(){
//   var dob = new Date(prompt("Enter your date of birth", jan,12,1998));
//   var dobMili = dob.getTime();
//   var today = new Date();
//   var todayMili = today.getTime();
//   var diff = todayMili-dobMili;
//   var accuracy = Math.floor(diff/(1000*30*30*24*30))
//   document.write(accuracy);
// }
// agaCalc();









                                        //  **********//
// /////////////////////////////Chapter 35 - 37 (Functions)//////////////////////////////
////// Question 1////////
// //Answer////
// function greeting(){
//   alert("Hello Jawad")
// }
// greeting()
                                        //  **********//

////// Question 2////////
// //Answer////
// function askName(){
// var userName = prompt("Enter your name");
//   return userName;
// }


                                         //  **********//

////// Question 3////////
// // //Answer////
// function callTwoFunction(){
//   function 1();
//   function 2();
// }
                                        //  **********//

////// Question 4////////
// //Answer////
// function askname(){
//   var userName= prompt("Enter your name ")
//   alert("userName")
// }
// askname()
                                        //  **********//

////// Question 5////////
// //Answer////
// 
// function concat(a,b,c){
//     var variable = 24;
//     var string = "Hello";
//     var number = 6;
//     console.log(variable,string,number)
// }

                                        //  **********//
                                        
////// Question 6////////
// //Answer////
// function concat(a,b){
//    var result = (a+b)
//    return result; 
// }
// var concatValue = concat("hello" ," world");
// console.log(concatValue)
                                        //  **********//
////// Question 7////////
// //Answer////
// function concat(a,b,c){
//     var result = (a*b*c)
//     return result;
// }
// var multiply = concat("2","3","4")
// console.log(multiply)
                                         //  **********//


////// Question 8////////
// //Answer////
// i did not understand
                                          //  **********//

////// Question 9////////
// //Answer////
// function concat(a,b){
    //    var result = (a+b)
    //    return result; 
    // }
    // var concatValue = concat("hello" ," world");
    // console.log(concatValue)

                                           //  **********//
////// Question 10////////
// //Answer////
// i dont understand

                                            //  **********//
////// Question 11////////
// //Answer////
// function first(b , a){

//     return b + a
// }
 
//  console.log(first(2,3))
                                              //  **********//
////// Question 12////////
// //Answer////
// i don't understand

                                               //  **********//
////// Question 13////////
// //Answer////
// function DateYear(){
//     var date = new Date()
//     date.setFullYear(year);
//     return(date);
// }
// var year = 2023;
// var date = setDAteYear();
// console.log(Date)
                                            //    / /  **********//

////// Question 14////////
// //Answer////
// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
  
//     var age = today.getFullYear() - birthDate.getFullYear();
  
//     var monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
  
//     return age;
//   }
//   var dateOfBirth = "1990-05-15";
// var age = calculateAge(dateOfBirth);
// console.log(age);


                                                   //  **********//
////// Question 15////////
// //Answer////
// function wordPresence(word,array){
//     return array.includes(word);
// }
// var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
// var word =  'raza';
// var result =wordPresence(word,array);
// console.log(result);



                                                   //  **********//

////// Question 16////////
// //Answer////
// function repeatLetter(letter,times){
//     return letter.repeat(times);
//   }
//   var letter = "abcd";
//   var repeatedLetter = repeatLetter(letter,10);
//   console.log(repeatedLetter)
                                                     //  **********//

////// Question 17////////
// //Answer////
// function reverseArray(arr) {
//     return arr.reverse();
//   }
  
 
//   var array = ['a', 'b', 'c', 'd', 'e'];
//   var reversedArray = reverseArray(array);
//   console.log(reversedArray);
  



                                                     //  **********//
/////////////////////////////// Chapter 38 (Local vs. Global Variables)//////////////////
////// Question 1////////
// //Answer////
// function a(){
    //     var carName = "civic";
    //    console.log(carName)
    // }
                                                      //  **********//

////// Question 2////////
// //Answer////
// var theSum = addNumbers();
// function addNumbers(){
//     var TheSun = 2+2;
//     return TheSun;
// }
// console.log(theSum)




                                                       //  **********//

/////////////////////////////// Chapter 39, 40 (Switch Statements)///////////////////////
////// Question 1////////
// //Answer////
// var fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("It's an apple.");
//     break;
//   case "banana":
//     console.log("It's a banana.");
//     break;
//   case "orange":
//     console.log("It's an orange.");
//     break;
//   default:
//     console.log("It's an unknown fruit.");
// }
// 
                                                    //  **********//  
////// Question 2////////
// //Answer////

// var cityName = prompt("Enter a city name:");

// switch (cityName) {
//   case "London":
//     alert("London is a match!");
//     break;
//   case "Paris":
//     alert("Paris is a match!");
//     break;
//   case "New York":
//     alert("New York is a match!");
//     break;
//   default:
//     alert("City not recognized.");
// }


////////////////// ================= THE END =================///////









































 