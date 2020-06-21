// /* ==========================================================================================
//                               CHAPTER # 21 - 25 === "STRING METHODS"
// =============================================================================================*/



// Question (01)

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName + " " + lastName
alert("Your Full name is: ' " + fullName + " '");


// Question(02)

var favMobile = prompt('Enter your Favorite mobile phone model');
document.write('My favorite phone is:' + ' ' + favMobile + ' ' + ',' + 'length of string:' + favMobile.length);
 

// Question (03)

var pakistan = "Pakistani"
var letterIndex = pakistan.indexOf('n')
document.write("String: " + pakistan + "<BR> Index of 'n': " + letterIndex);



// Question (04)

var word = "Hello world";
var letterIndex = word.lastIndexOf('l');
document.write("String: " + word + "<BR> Last Index of 'l': " + letterIndex);



// Question (05)

var pak = "Pakistani";
var character = pak.charAt(3);
document.write("String: " + pak + "<BR> Charactor at Index of '3': " + character);



// Question (06)

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(' ' + lastName);
alert("Your Full name is: ' " + fullName + " '");



// Question (07)

var city = "Hyderabad";

var replace = city.replace('Hyder', 'Islam');

document.write("City: ", city, "<BR> After replacement: ", replace );


// QUestion (08)

var message = " “Ali and Sami are best friends. They play cricket and football together.” "
message.split("and").join("&")


// Question (09)

var word1 = "472"
document.write("Value: " + word1 + "<BR>" + "Type: " + typeof (word1) + "<BR>" + "Value: ", word1 = +word1, "<BR>" + "Type: " + typeof (word1), )


// Question (10)

var a = "peanuts"
var upper = a.toUpperCase()
document.write("User input: ", a, "<BR>", "Upper case: ", upper)


// Quesiton (11)

var input = prompt("Enter your name");
var firstLetter =  input[0].toUpperCase();
document.write(firstLetter + input.slice(1));


// Quesiton (12)

var num = prompt('Enter Dotted Number')
var result = num.split('.').join("")
document.write("Number: " , num , "<BR> Result: " , result )


// Question (13)

var name = prompt("Enter your name");;
name = name.toLocaleLowerCase()
var check = false

for (i = 0; i < name.length; i++) {
    if (name.slice(i, i + 1).charCodeAt() == 33 || name.slice(i, i + 1).charCodeAt() == 44  || name.slice(i, i + 1).charCodeAt() == 46 || name.slice(i, i + 1).charCodeAt() == 64 ) {
        check = true;
    } else {
        check = false;
    }
}

if (check == true) {
    alert("please enter a correct user name")
} else {
    name
}


// Question (14)

alert("Welcome To ABC Bakery");

var item = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcome to ABC Bakery! What you want to order sir/ma'am?")
var isFound = false //this is called flag
inputCart = inputCart.toLocaleLowerCase()

for (i = 0; i < item.length; i++) {
    if (inputCart === item[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale in our bakery");
}



// Question (15)

var str = prompt();
var flag = 0
var count = 0
var ceck = +str.slice(0, 1)

if (ceck.toString() != "NaN") {
    flag++
} else {
    for (i = 0; i < str.length; i++) {
        var cc = +str.slice(i, i + 1)
        if (cc.toString() == "NaN") {
            count++
        }
    }
}

if (flag == 1 || count == str.length) {
    alert("password does not meet above requirements")
} else {
    console.log("ok")
}


// Question (16)

var university = "University of Karachi";
var uni = university.split("")

for (i = 0; i < uni.length; i++) {
    document.write(uni[i] , "<BR>" );
}


// Question (17)

var userInput = prompt();
var checkLastInput = userInput.slice(userInput.length - 1);
document.write("User input " + userInput +"<BR>" + "Last character of input: " + checkLastInput)


// Question (18)

var b = "The quick brown fox jumps over the lazy dog";
var flag = 0;
var checked = "the "
var textcheck = b.toLocaleLowerCase()

for (i = 0; i < textcheck.length; i++) {
    dd = textcheck.slice(i, (checked.length) + i)

    if (checked == dd) {
        flag++
    }
}

document.write(b + "<BR> there are " + flag + " occurrence(s) of world 'the'")





// /* =====================================================================
//                      CHAPTER 26 - 30 == "MATH METHODS"
// ========================================================================*/


// Question (01)

var user = +prompt("Enter a Positive  Integer Number");
document.write("Number: " + user + "<BR>");
document.write("round off value: " + Math.round(user)+ "<BR>")
document.write("floor value: " + Math.floor(user)+ "<BR>")
document.write("ceil value: " + Math.ceil(user)+ "<BR>")



// Question (02)


var user1 = +prompt("Enter a Negative Floating Numbers");

document.write("Number: " + user1 + "<BR>");
document.write("round off value: " + Math.round(user1) + "<BR>");
document.write("floor value: " + Math.floor(user1) + "<BR>");
document.write("ceil value: " + Math.ceil(user1) + "<BR>");


// Question (03)

var userInput1 = +prompt("Enter a  Absolute value Number");

document.write("The Absolute value of: " + userInput1 + " is " + Math.abs(userInput1))


// Question (04)

var dice = Math.floor(6 * Math.random() + 1);

document.write("Random dice value: " + dice);



// Question (05)

var coin = Math.floor(2 * Math.random() + 1);

if (coin === 2) {
    alert(coin + " Random coin value: Head");
} else if (coin === 1) {
    alert(coin + " Random coin value: Tail");
}


// Question (06)

var random = Math.floor(100 * Math.random() + 1);

document.write("Random number between 1 and 100: " + random);



// Question (07)

var kg = prompt("Enter your weight")
kg = kg.toLowerCase()
var weight = kg.split("k")

Document.write("the weight of user is " + weight[0] + " Kilograms");


// Question (08)

var secretNum = Math.floor(Math.random() * 10);
var numInput = +prompt("Enter a number between 1 and 10");

if (numInput === secretNum) {
    alert("Congratulations!");
} else {
    alert("Please try again");
}



/* =====================================================================
                 CHAPTER 31 - 34 ==> "DATE METHODS"
========================================================================*/



// Question (01)

document.write(new Date());


// Question (02)

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var currentMonth = date.getMonth()

document.write("Current month: " + month[currentMonth])



// Question (03)

var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ]
var date = new Date()
var currentday = date.getDay()

document.write("Today is : " + ' ' + days[currentday] + " <BR>")

var three = days[currentday] = days[currentday].slice(0, 3)

document.write("today is in three words: " +' ' + days[currentday])


// // Question (04)

var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ]
var date = new Date()
var currentday = date.getDay()

if (days[currentday] === "sunday" || days[currentday] === "sataurday") {
    alert("Guys today is " + '"' + days[currentday] +  '"' + "It's fun day")
} else {
    alert("Today is " + '"' + days[currentday] +  '"' + " So please do work")
}


// Question (05)

var date = +prompt("Enter a date");

if (date === 1 && date <= 15) {
    alert("First fifteen days of month")
} else if (date > 15 && date <= 31) {
    alert("Last fifteen days of month")
} else {
    alert("Please enter a correct date")
}


// Question (06)

var myDate = new Date();
var oldDate = new Date(01 / 01 / 70);
var mints = myDate.getFullYear() - oldDate.getFullYear();

document.write("Current Date: " + myDate + "<BR>")
document.write("Elapsed milliseconds since January 1,1970 : " + mints * 365 * 24 * 60 * 60 + "<BR>")
document.write("Elapsed minutes since January 1,1970 : " + mints * 365 * 24 * 60);


// Question (07)

var currentTime = new Date()

currentTime = currentTime.getHours()
if (currentTime <= 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}


// // Question (08)

var laterDate = new Date("12/31/20");

document.write("Later Date: " + laterDate);


// Question (09)

var ramadanDay = new Date("June 18, 2015")
var nowDay = new Date()
var msRamadan = ramadanDay.getTime()
var msNowDay = nowDay.getTime()
var msDiff = msNowDay - msRamadan
var totalDiff = msDiff /(1000 *60 *60 *24)
totalDiff = Math.floor(totalDiff)

document.write(totalDiff + " Days have passed since 1st Ramadan, 2015" )



// Question (10)

var pastDate = new Date("jan 1,2015");
var newDate = new Date("dec 5, 2015");
var days = newDate.getTime() - pastDate.getTime();
var day1 = days / (1000 * 3600 * 24);
var finalTime = day1 * 86400

alert(
    "on the reference date : " + newDate + "\n" + finalTime + " seconds had passed since the beginning of 2015"
)



// Question (11)

var time = new Date();
var oneHour = new Date();
var oldHour = oneHour.setHours(oneHour.getHours() - 1);
var oldhund = new Date(oldHour)

document.write("Curent Date: " + time + "<BR> 1 hour ago, it was " + oldhund)



//Question (12)

var oneYear = new Date();
var oldyear = oneYear.setYear(oneYear.getFullYear() - 100);
var oldhund = new Date(oldyear);

document.write("Curent Date: " + oneYear + "<BR> 100 Year back, it was " + oldhund);



// Question (13)

var currYear = new Date();
var getUserdate = prompt("Enter you date of birth format like this ==> MM/d/yy");
var userDate = new Date(getUserdate);
var diff = currYear - userDate
var age = diff / (24 * 60 * 60 * 1000 * 365);
var bdYear = currYear.getFullYear() - age

document.write("Your age is " + Math.floor(age) + "<BR>" + "Your birthday year is " + Math.floor(bdYear))



// Question (14)

(a)

var name = "Maria";


// (b)

var date = new Date();
var month = date.getMonth();


// (c)

var unit = 410;


// (d)

var chargesUnit = 16


// (e)

var netAmount = unit * chargesUnit


// // (f)

var dueDateCharge = 500


// (g)

var grossAmount = netAmount + dueDateCharge

document.write("Customer Name " + name + "<BR>")
document.write("Month " + month + "<BR>")
document.write("Number of Units: " + unit + "<BR>")
document.write("Charges per init: " + chargesUnit + "<BR>")
document.write("Net Amount Payable(eithin Due Date): " + netAmount + "<BR>")
document.write("Late payment surcharge: " + dueDateCharge + "<BR>")
document.write("Gross Amount payable(after Due Date): " + grossAmount ) 




// /* =====================================================================
//                    CHAPTER 35 - 38 ==> "FUNCTION"
// ========================================================================*/



// Question (01)


function date() {
    document.write(new Date())
}
date()


//Question (02)

function fullName(firstName, lastName) {
    console.log("Hello !" + firstName + " " + lastName)
}
fullName("Maria", "Waseem")


//Question (03)

function add(a, b) {
    console.log(a + b)
}
add(2, 6)


//Question (04)

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
    }
}



// //Question (05)

function squares(num) {
    return num * num
}


//Question (06)

function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
factorial(5)


// //Question (07)

function counting() {
    var start = +prompt("Enter Counting start number")
    var end = +prompt("Enter Counting end number")
    for (var i = start; i <= end; i++) {
        document.write(i + "<BR>")
    }
}



// // //Question (08)

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}



//Question (09)


function areaRectangle(width, height) {
    return width * height
}
areaRectangle(4, 5)



//Question (10)

function reverseText(text) {
    alert(text.split('').reverse().join(''))
  }
  
  function isPalindrome(text) {
    var reverseText = ''
  
    for(var i = text.length - 1; i >= 0; i--) {
        reverseText += text[i]
    }    
    console.log('reverseText--->', reverseText)
  
    if(reverseText === text) {
        alert(text + ' is Palindrome')
    } else {
        alert(text + ' is not Palindrome')
    }
  }
  
  isPalindrome('madam')
  


//Question (11)

var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))



//Question (12)

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));



// Quesition (13)

function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function (l) {
        uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
    });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

// 
var count = 0
var letter = "JSResourceS.com"
for(var i = 0; i < letter.length ; i++){
     if(letter [i] == "o"){
        count=count+1    
}
}
console.log(count)


//Question (14)

function circum(radius) {
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + Math.floor(circle))
}
circum(3)

function area(radius) {
    var circle = Math.PI * (radius * radius)
    alert("The area is: " + Math.floor(circle))
}
area(3)




// ==========================the end=============================
