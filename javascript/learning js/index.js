// 1. Ways to print in JavaScript

/* 
    alert('me');
    document.write("This is document write")
*/

// 2. Javascript console API : Application programming interface

/*    
    console.log("hello world", 4 + 6, "another log");
    console.warn("This is a warning");
    console.error("This is an error");
    console.assert(4==(6-2))
*/

// 3. JavaScript Variables

  //Containers to store datavalues
 /*
    var number1 = 34;
    var number2 = 56;
    var sum = number1 + number2;
    console.log(number1 + number2);
    console.log("number1 is "+ number1 + " and number2 is " + number2 + " and their sum is " + sum);
*/

// 4. Datatypes in JavaScript

/*
    // Numbers
        var num1 = 343;
        var num2 = 562;
    // Strings
        var str1 = "this is a string";
        var str2 = 'this is also a string';
    // Objects
        var marks = {
            ravi: 34,
            shubham: 33,
            harry: 99
        };
    // Booleans
            var a = true;
            var b = false;
        console.log(a,b);

    var und = undefined;
    console.log(und);

    var n = null;
    console.log(n);

    /* At a very high level there are two types of data typed in JavaScript
        1. Primitive datatypes
            1.undefined
            2.null
            3.number
            4.string
            5.boolean
            6.symbol
        2. Reference datatypes
            1.arrays
            2.objects
    */
/*            
        var arr = [1,2,"OH YEAH",4,5];
        console.log(arr[2]);
*/

// 4. Operator in JavaScript

/*
    // Arithmatic Operators
    var a = 34;
    var b = 53;
    console.log("The value of a + b is", a+b );
    console.log("The value of a - b is", a-b );
    console.log("The value of a * b is", a*b );
    console.log("The value of a / b is", a/b );
    

    // Assignment Operator
    var c = b;
    c += 7;
    console.log(c);
    c -= 3;
    console.log(c);
    
    // Comparison Operators
    var x = 32;
    var y = 311;
    console.log(x == y);
    console.log( x < y);
    console.log( x > y);
    

    // Logical Operators

    // logical and
    console.log(true && true);
    console.log(true && false);
    console.log(false && false);
    // logical OR
    console.log(true || true);
    console.log(true || false);
    console.log(false || false);
    // Logical NOT
    console.log(!true)
    console.log(!false)



    // Function in JavaScript
    // DRY = DON'R REPEAT YOURSELF
    function avg(a1, b1){
        return ( a1 + b1)/2;
    }
    
    c1 = avg(2,4);
    c2 = avg(12,422);
    console.log(c1, c2);
    
    // Condtional in JavaScript
    var age = prompt("Give you age");
    if (age >33){
        console.log("You can drink rasna water.");
    }
    else if( age>26){
        console.log("Bache nhi rhe");
    }
    else if( age>22){
        console.log("kya mtlb choti bchi ho kya");
    }
    else if( age>18){
        console.log("bawa 18 cross");
    }
    else{
        console.log("bachhe reh gye");
    }
*/

// Loops in JavaScript

/*
    var arr1 = [1,2,3,4,5,6,7];
    console.log(arr1);
    for(var i = 0; i < arr1.length; i++){
        console.log(arr1[i]);
    }

    arr1.forEach(function(element){
        console.log(element);
    })
    var arr2 = [1,2,3,4,5,6,7];
    let j = 0;
    while (j<arr2.length){
        console.log(arr2[j]);
        j++;
    }
    
    do{
        console.log(arr2[j]);
        j++;
    }while(j<arr2.length);
    
    for(var i = 0; i < arr2.length; i++){
        if( i == 2){
            break;
        }
        console.log(arr2[i]);
    }
    
    for(var i = 0; i < arr2.length; i++){
        if( i == 2){
            continue;
        }
        console.log(arr2[i]);
    }



    let myArr = ["fan", "camera", 34, null, true];

    // Array Methods
    console.log(myArr.length);
    myArr.pop();
    console.log(myArr.length);
    myArr.push("Harry");
    console.log(myArr);
    myArr.shift();
    console.log(myArr);
    const newLen = myArr.unshift("new");
    console.log(myArr);
    console.log(newLen);

    let myArrString = myArr.toString();
    console.log(myArrString);
*/

/*
    // String methods in JavaScript
    let myLovelyString = "Harry is a good boy, food good";
    console.log(myLovelyString.length);
    console.log(myLovelyString.indexOf("Harry"));
    console.log(myLovelyString.lastIndexOf("good"));
    console.log(myLovelyString.slice(6,15));
    //Replaces only thr first occurance
    let d = myLovelyString.replace("Harry","Rohan");
    console.log(d);
    d = d.replace("good","bad");
    console.log(d);
*/

/*
    // Dates in JavaScript
    let myDate = new Date();
    console.log(myDate.getTime());
    console.log(myDate.getFullYear());
    console.log(myDate.getDay());
    console.log(myDate.getMinutes());
    console.log(myDate.getHours());
*/

/*
    // DOM [Document Object Model] Manipulation
   let elem = document.getElementById('click');
   console.log(elem);
   let elemClass = document.getElementsByClassName('container')
   console.log(elemClass);
   elemClass[0].style.background = 'white';
   elemClass[0].classList.add('bg-primary');
   elemClass[0].classList.add('text-success');
   elemClass[1].style.background = 'black';
   elemClass[1].style.color = 'white';

   console.log(elem.innerHTML);
   console.log(elem.innerText);
   console.log(elemClass[0].innerHTML);
   console.log(elemClass[0].innerText);

    tn= document.getElementsByTagName("div");
    console.log(tn);
    createdElement = document.createElement('p');
    createdElement.innerHTML = 'This is a created para';
    tn[0].appendChild(createdElement);
    createdElement2 = document.createElement('b');
    createdElement2.innerHTML = 'This is a created bold';
    tn[0].replaceChild(createdElement2, createdElement);

    // removeChild(element); --> removes an element

    
    // Selecting using Query
    var sel = document.querySelector('.container');
    console.log(sel);
    sel = document.querySelectorAll('.container');
    console.log(sel);
*.

/*
    // Events in JavaScript
    function clicked(){
        console.log('Button was clicked.');
    }

    window.onload = function(){
        console.log('The document was loaded');
    }

    firstContainer.addEventListener('click', function(){
        console.log('clicked on container');
    })
    firstContainer.addEventListener('mouseover', function(){
        console.log('hovered on container');
    })
    firstContainer.addEventListener('mouseout', function(){
        console.log('Mouse out of container');
    })
    let prevHTML =  document.querySelectorAll('.container')[1].innerHTML;
    firstContainer.addEventListener('mouseup', function(){
        document.querySelectorAll('.container')[1].innerHTML = prevHTML;
        console.log('mouse up when clicked on container');
    })
    firstContainer.addEventListener('mousedown', function(){
        document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked.</b>"
        console.log('mouse down when clicked on container');
    })

*/
    // SetTimeOut and setInterval