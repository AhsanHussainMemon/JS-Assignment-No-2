// Assignment No 2


// CHAPTER NO 3

// Question No 1
// var age = "I am 23 Years Old;"
// alert(age);

// Question No 2

// var num = 14
// var visit = "You Have Visited This Site "
// alert(visit + num + " Times") 

// Question No 3

// var BirthYear = 2001
// var description = "My Birth Year Is " + BirthYear + "</br>"
// document.write (description)
// document.write (" Data Type Of My Decleared Variable Is" +  typeof BirthYear) 

// Question No 4

// var VisitorName = "<b> John Doe </b>"
// var ProductTitle =  "<b> XYZ Clothing Store </b>"
// var Quantity = "<b> 5 T-Shirt(s) </b>"

// document.write (VisitorName + " Ordered " + Quantity + " On " + ProductTitle  )


// CHAPTER NO 4

// Question No 1
// var name = "AHSAN HUSSAIN", age = 23, city = "Karachi";
// document.write ("NAME: " + name  +  " AGE: " + age , " CITY: " + city)

// Question No 2

// 5 Legal Variables
// var userName; // Start With a Letter 
// var $totalamount; // Start WIth $ Sign
// var _MyVar; // Start With Underscore Specially Used For Private Variables
// var age; // Simple Variable
// var User2; // Contain Letter And Number But The Number is Not In Starting


// 5 ILLegal Variables
// var 2user; Start With a Number
// var @amount; Start With @ Sign
// var user-name; Contain Hyphen 
// var var; Reserved Keyword In JavaScript And Cannot Be Used as a Variable Name.
// var First Name; Space B/W Name of Variable


// Question N0 3

// (a) 
// document.getElementById("a").innerText = "Rules for naming JS variables";

// // (b)
// document.getElementById("b").innerHTML = 
//     "Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b>, and <b>_</b>";

// //(c)
// document.getElementById("c").innerHTML = 
//     "Variables must begin with a <b>letter</b>, <b>$</b>, or <b>_</b>";

// //(d)
// document.getElementById("d").innerHTML = 
//     "Variable names are case <b>Sensitive</b>";

// //(e)
// document.getElementById("e").innerHTML = 
//     "Variable names should not be JS <b>Keywords</b>";

// CHAPTER NO 5

// Question No 1
// var num1 = 5 , num2 = 5;
// var sum = num1 + num2;
// document.write ("Sum Of 5 And 5 Is " + sum)

// Question No 2
// var num1 = 10 , num2 = 3;
// var sub = num1 - num2;
// document.write ("Subtraction Of 10 And 3 Is " + sub)

// var num1 = 10 , num2 = 3;
// var mul = num1 * num2;
// document.write ("Multiplication Of 10 And 3 Is " + mul)

// var num1 = 10 , num2 = 3;
// var mod = num1 % num2;
// document.write ("Modulus Of 10 And 3 Is " + mod)

// Question No 3
// (a_
// var number;

// // (b)
// document.write ("Value after variable declaration is: " + number + "<br>") ; 

// // (c)
// number = 5;

// // (d)
// document.write (" Initial value: "  + number + "<br>") ;

// // (e)
// number++;

// // (f)
// document.write ("Value after increment is: " + number + "<br>");

// // (g)
// number += 7;

// // (h)
// document.write ("Value after addition is: " + number + "<br>");

// // (i)
// number--;

// // (j)
// document.write ("Value after decrement is: " + number + "<br>");

// // (k)
// var remainder = number % 3;

// // (l)
// document.write ("The remainder is: " + remainder);

// Question No 4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("The Cost To Buy 5 Tickets To a Movie is: " + totalCost + " PKR");

//Question No 5
// document.write ("Table Of 4" + "<br>");
//  var number = 4; 
//  var Table = "";
//  for (var i = 1; i <= 10; i++) {
//     Table += number + " x " + i + " = " + (number * i) + "<br>";
//  }
//  document.write (Table);

// Question No 6
//  // (a)
//  var celsius = 25; 

//  // (b)
//  var fahrenheitFromCelsius = (celsius * 9/5) + 32;
//  document.write (celsius + "°C is " + fahrenheitFromCelsius + "°F" + "<br>");

//  // (c)
//  var fahrenheit = 70; 

//  // (d)
//  var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
//  document.write (fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");

// Question No 7
// document.write ("<h1>Shopping Cart</h1>" + "<br>")
// var priceItem1 = 650; 
// var priceItem2 = 100; 
// var quantityItem1 = 3; 
// var quantityItem2 = 7;
// var shippingCharges = 100; 
// var totalCostItem1 = priceItem1 * quantityItem1;
// var totalCostItem2 = priceItem2 * quantityItem2;
// var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;
// var receipt =
//               "Price of item 1: " + priceItem1 + " PKR<br>" +
//               "Quantity of item 1: " + quantityItem1 + "<br>" +
//               "Price of item 2: " + priceItem2 + " PKR<br>" +
//               "Quantity of item 2: " + quantityItem2 + "<br>" +
//               "Shipping Charges: " + shippingCharges + " PKR <br><br>" +
//               "<b>Total Cost Of Your Order Is: " + totalCost + " PKR</b>";

// document.write (receipt) ;


// Question No 8
// document.write ("<h1>Marks Sheet</h1>" + "<br>")
// var totalMarks = 980; 
// var marksObtained = 804; 
// var percentage = (marksObtained / totalMarks) * 100;

// document.write ("Total Marks: " + totalMarks + "<br>" +"Marks Obtained: " + marksObtained + "<br>" +"Percentage: " + percentage + "%");


// Question No 9
// document.write ("<h1>Currency In PKR</h1>" + "<br>")
// var usdToPkr = 104.80; 
// var sarToPkr = 28;     
// var usdAmount = 10; 
// var sarAmount = 25; 
// var totalPkr = (usdAmount * usdToPkr) + (sarAmount * sarToPkr);

// document.write ("Total Currency In PKR: " + totalPkr);

// Question No 10
// var initialNumber = 13; 
// var result = ((initialNumber + 5) * 10) / 2;
// document.write ("The Result Of The Arithmetic Operations Is: " + result);

// Question No 11
// document.write ("<h1>Age Calculator</h1>" + "<br>")
// var currentYear = 2024
// var birthYear = 2001;
// var age = currentYear - birthYear; 
// document.write  ("Current Year: " + currentYear + "<br>" + "Birth Year: " + birthYear + "<br>" + "Your Age Is: " + age) ;


// Question No 12
// document.write ("<h1>The Geometrizer</h1>" + "<br>")
// var radius = 20; 
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * Math.pow(radius, 2);

// document.write  ("Radius Of Circle: " + radius + "<br>");
// document.write  ("The circumference is: " + circumference + "<br>");
// document.write ("The area is: " + area);


// // Question No 13
// document.write ("<h1>The Life Time Supply Calculator</h1>" + "<br>")
// var favoriteSnack = "Chocolate Chip"; 
// var currentAge = 15; 
// var maximumAge = 65; 
// var dailyAmount = 3; 
// var yearsRemaining = maximumAge - currentAge;
// var totalAmount = yearsRemaining  * dailyAmount;
// document.write ("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");



// CHAPTER NO 6

// Question No 1
// var a = 10;  

// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("----------------------------------------<br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");


// Question No 2
// var a = 2;
// document.write ("--a: " + (--a) + "<br>");

// var a = 2;
// var b = 1;
// document.write ("--a - --b: " + (--a - --b) + "<br>");

// var a = 2;
// var b = 1;
// document.write ("--a - --b + ++b: " + (--a - --b + ++b) + "<br>");
   
// var a = 2;
// var b = 1;
// document.write ("--a - --b + ++b + b--: " + (--a - --b + ++b + b--) + "<br>");


// Question No 3
// var userName = prompt("Please Enter Your Name:");
// alert("Hello, " + userName + "! Welcome To SMIT!");

// Question No 4
        
// var number = prompt("Enter A Number:");
// if (!number) {
//     number = 5;
// }
// number = +number;
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (let i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// Question No 5
// (a) 
// var subject1 = prompt("Enter The Name Of First Subject:");
// var subject2 = prompt("Enter The Name Of Second Subject:");
// var subject3 = prompt("Enter The Name Of Third Subject:");

// // (b) 
// var totalMarksEach = 100;
// var totalMarks = totalMarksEach * 3;

// // (c) 
// var obtainedMarks1 = Number(prompt("Enter Obtained Marks For " + subject1 + ":"));
// var obtainedMarks2 = Number(prompt("Enter Obtained Marks For " + subject2 + ":"));
// var obtainedMarks3 = Number(prompt("Enter Obtained Marks For " + subject3 + ":"));

// // (d) 
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// // (e)
// document.write("<h2>Result</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksEach + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksEach + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksEach + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage + "%</th></tr>");
// document.write("</table>");
