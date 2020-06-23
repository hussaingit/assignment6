assignment no 6 (21-38)




  chapter 21-25.......

      Task no 1
    var firstName = prompt("Enter first name")
    var lastName = prompt("Enter last name")
    var fullName = firstName + " " + lastName
    document.write( "Welcome to " + fullName )
    
     Task no 2

    var favMob = prompt("Enter your favorite mobile")
    var str = favMob.length
    document.write("My favorite phone is :" +" "+ favMob + "<br>")
    document.write("Length of string :" + str)


         Task no 3

         var a = "Pakistani"
         var b = a.indexOf("n")
         document.write("String :"+ " " + a + "<br>")
         document.write("index of 'n':" +" "+ b)
        

          Task no 4

        var a = "Hello World"
        var b = a.lastIndexOf("l")
        document.write("String :"+" "+a+"<br>")
        document.write("Last index of 'l' :" +" "+b)

            Task no 5

            var a = "Pakistani"
          var b = a.charAt(3)
         document.write("String :"+ " " + a + "<br>")
          document.write("Character at index 3 :" +" "+ b)
    

               Task no 6

            var firstName = "Hussain"
            var lastName = "Ali"
            var Full =   firstName.concat( " "+lastName)
            document.write(Full)

                Task no 7

                var city = "Hyderabad"
                var update = city.replace("Hyder","Islam")
                document.write("City:"+city+"<br>")
                document.write("After replacement:"+update)

                Task no 8

                var message = "Ali and Sami are best friends. They play cricket and football together."
                var update1 = message.replace(/and/g,"&")
                document.write(update1)

                 Task no 9 

                var str = "472"
                var num = parseInt(str)
                document.write("Value :"+str+"<br>")
                document.write("Value :"+ "string" +"<br>")
                document.write("Value :"+num+"<br>")
                document.write("Value :"+ "number" +"<br>")
                
                Task no 10

                var input = prompt("Enter a word")
                var upCase = input.toUpperCase()
                document.write(upCase)

                Task no 11
                var input5 = prompt("Enter a word in lowercase")
            var  nameCapitalized = input5.charAt(0).toUpperCase() + input5.slice(1)
            alert(nameCapitalized)



                Task no 12

                var num = 35.36;
                var str = num.toString().replace(".","")
                document.write("Number:"+num+"<br>")
                document.write("Result:"+str)

                Task no 13
                   var input6  = prompt("Enter your name")
                   for (var i = 0;i<input6.length;i++) {
                       if(input6.charCodeAt(i)===33){
                       alert("Please enter a valid username")
                    }
                   else  if(input6.charCodeAt(i)===44){
                    alert("Please enter a valid username")
                 }
                     else  if(input6.charCodeAt(i)===46){
                        alert("Please enter a valid username")
                     }
                      else  if(input6.charCodeAt(i)===64){
                        alert("Please enter a valid username")
                     }
                       
                   }
                

                Task no 14


                var input = prompt("search by user input")
                var conv = input.toLowerCase()
                var A = ["cake","apple pie","cookies","chips","patties"]
                var index = A.indexOf(conv)
                
                    if (index!==-1) {
                        document.write(input+" "+"is"+" "+ "available" +" "+"at"+" "+"index"+ " "+ index+" "+"in"+" "+"our"+" "+"bakery")

                    } else  {
                    
                        document.write("we are sorry." +" "+input+ " "+"is not available" +  " "  + "in"+" "+"our"+" "+"bakery")
                    }
                
                    Task no 15


                    Task no 16
                    var uni = "university of karachi"
                   var char0 = uni.charAt(0)
                   var char1 = uni.charAt(1)
                   var char2 = uni.charAt(2)   
                   var char3 = uni.charAt(3)
                   var char4 = uni.charAt(4)
                   var char5 = uni.charAt(5)
                   var char6 = uni.charAt(6)
                   var char7 = uni.charAt(7)
                   var char8 = uni.charAt(8)
                   var char9 = uni.charAt(9)
                   var char10 = uni.charAt(10)
                   var char11 = uni.charAt(11)
                   var char12 = uni.charAt(12)
                   var char13 = uni.charAt(13)
                   var char14 = uni.charAt(14)
                   var char15 = uni.charAt(15)
                   var char16 = uni.charAt(16)
                   var char17 = uni.charAt(17)
                   var char18 = uni.charAt(18)
                   var char19 = uni.charAt(19)
                   var char20 = uni.charAt(20)
                    document.write(char0 +"<br>")
                    document.write(char1+"<br>")
                    document.write(char2+"<br>")
                    document.write(char3+"<br>")
                    document.write(char4+"<br>")
                    document.write(char5+"<br>")
                    document.write(char6+"<br>")
                    document.write(char7+"<br>")
                    document.write(char8+"<br>")
                    document.write(char9+"<br>")
                    document.write(char10+"<br>")
                    document.write(char11+"<br>")
                    document.write(char12+"<br>")
                    document.write(char13+"<br>")
                    document.write(char14+"<br>")
                    document.write(char15+"<br>")
                    document.write(char16+"<br>")
                    document.write(char17+"<br>")
                    document.write(char18+"<br>")
                    document.write(char19+"<br>")
                    document.write(char20+"<br>")
                    

                    

                
                  
                    Task no 17

                    var input1 = prompt("Enter word")
                    var lastChar =input1.charAt(input1.length-1)
                    document.write("User input :"+" "+input1+"<br>")
                    document.write("Last character of input :"+" "+lastChar)


                         Task no 18

                         var string = "The quick brown fox jumps over The lazy dog" 
                         
                    
                        var count = 0
                        var word1 = "The"
                        for (var i = 0;i<string.length;i++){
                            if (string.charAt(i)===word1)
                            count += 1
                            alert(count)
                        }

              
                        Chapter 26-30 

                        Task 1

                        var input2 = +prompt("Enter positive integer")
                        var round = Math.round(input2)
                        var floor = Math.floor(input2)
                        var ceil = Math.ceil(input2)
                        document.write("number:"+" "+input2+"<br>")
                        document.write("round off value:"+" "+round+"<br>")
                        document.write("floor value:"+" "+floor+"<br>")
                        document.write("ceil value:"+" "+ceil+"<br>")


                        Task no 2

                        var input2 = +prompt("Enter Negative integer")
                        var round = Math.round(input2)
                        var floor = Math.floor(input2)
                        var ceil = Math.ceil(input2)
                        document.write("number:"+" "+input2+"<br>")
                        document.write("round off value:"+" "+round+"<br>")
                        document.write("floor value:"+" "+floor+"<br>")
                        document.write("ceil value:"+" "+ceil+"<br>")
                    
                        Task no 3 

                        var d = -4
                        var e = 5
                        var dAbs = Math.abs(d)   
                        var eAbs = Math.abs(e)   
                        alert("The absolute value of "+" "+d+" "+ " is"+" "+ dAbs)
                        alert("The absolute value of "+" "+e+" "+ "is"+" "+ eAbs)

                     
                        Task no 4 

                        var d1 = 1
                        var e1 = 6
                        var result = Math.ceil(Math.random() * e1) +d1
                        alert(result)

                         Task no 5 
                        prompt("Enter Head or Tail")

                        var toss = Math.floor(Math.random() * 2) + 1
                        
                        if (toss=== 2) {
                            alert("2 \n random coin Value : Heads")
                        } else if (toss===1) {
                            alert("1 \n random coin Value : Tails")
                        }

                        Task no 6


                     
                        var e1 = 100
                        var result = Math.floor(Math.random() * e1) +1
                        alert(" random number between 1 and 100 :"+" "+ result)
                          
                        
                        Task no 7
                        
                        var input3 = prompt("Enter your weight in kilograms")
                        var result1 = parseInt(input3)
                        
                        console.log(result1)

                        Task no 8

                        var a1 = Math.floor(Math.random ()*10) +1
                        var input4 = +prompt("Enter a number between 1 and 10")
                        if (a1===input4) {
                            alert("congratulation")
                        } else {
                            alert("Try again!")
                        }


                        chapter 31-34

                        Task no 1

                        var current = new Date()
                        alert(current)

                        Task no 2

                        var current = new Date()
                        var currentMonth = current.getMonth()
                        if (currentMonth===5) {
                            alert("current month: June ")
                        } 
                        else  if (currentMonth===0){
                            alert("Current month : January")
                        }
                        else if (currentMonth===1) {
                            alert("current month: Febuary ")
                        } 
                        else  if (currentMonth===2){
                            alert("Current month : March")
                        }
                        else if (currentMonth===3) {
                            alert("current month: April ")
                        } 
                        else  if (currentMonth===4){
                            alert("Current month : May")
                        }
                        else if (currentMonth===6) {
                            alert("current month: July ")
                        } 
                        else  if (currentMonth===7){
                            alert("Current month : August")
                        }
                        else if (currentMonth===8) {
                            alert("current month: September ")
                        } 
                        else  if (currentMonth===9){
                            alert("Current month : October")
                        }
                         else if (currentMonth===10) {
                            alert("current month: November ")
                        } 
                        else  if (currentMonth===11){
                            alert("Current month : December")
                        }


                        Task no 3
                        
                        var current = new Date()
                         var currentDay = current.getDay()

                        
                         if (currentDay===0) {
                             alert("current Day: Sun ")
                         } 
                         else  if (currentDay===1){
                             alert("Current Day : Mon")
                         }
                         else if (currentDay===2) {
                             alert("current Day: Tuesday ")
                         } 
                         else  if (currentDay===3){
                             alert("Current Day : Wednesday")
                         }
                         else if (currentDay===4) {
                             alert("current Day: Thursday ")
                         } 
                         else  if (currentDay===5){
                             alert("Current Day : Friday")
                         }
                         else if (currentDay===6) {
                             alert("current Day: Sat ")
                         } 


                        Task no 4


                         var current = new Date()
                         var currentDay = current.getDay()
                         if (currentDay===0) {
                             alert("It's Fun day")
                         } else if (currentDay===6) {
                            alert("It's Fun day")
                         }
                         else {
                             alert("It's Working Day")
                         }


                        Task no 5


                        var current1 = new Date()
                         var currentDay = current1.getDate()

                          if (currentDay<16) {
                              alert("First fifteen days of the month")
                          } else {
                           alert("Last days of the month")   
                          }


                        Task no 6

                        var current2 = new Date()
                          var currentTime = current2.getTime()
                          var currentMinutes = currentTime/(1000*60)
                         document.write("Current Date:"+" "+current2+"<br>")
                         document.write("Elapsed milliseconds since January 1,1970:"+" "+currentTime+"<br>")
                         document.write("Elapsed minutes since January 1,1970:"+" "+currentMinutes+"<br>")

                        Task no 7

                       var current3 = new Date()
                       var currentHour = current3.getHours()
                       if (currentHour<12) {
                           alert("It's AM")
                       } else {
                           alert("It's PM")
                       }

                    Task no 8

                  var  LaterDate = new Date("December 31,2020")
                  alert("Later date :"+" "+LaterDate)


                    Task no 9



                    var  EarlyDate = new Date("June 18, 2015")
                   var TotalTime = EarlyDate.getTime()
                   var Days = TotalTime/(1000*60*60*24)
                   alert(Days+" "+"days have passed since 1st Ramadan,2015")

                    
                   Task no 10


             var   EarlyDate1 = new Date("January 01, 2015")
             var  time15 = EarlyDate1.getTime()
            alert("On reference date Sat june 20 2020 10:17:58 GMT+0500(PKT),\n "+" "+time15 +""+"seconds had passed since beginning 2015" )

                    
                  Task no 11

             function myFunction() {
         var d = new Date();
        e= d.setHours(d.getHours() - 1);

}
            myFunction()
           alert(e)

                Task no 12

                var current4 = new Date()
                var centuryOld = new Date(" June 20 ,1920")
                alert("Current date:"+" "+current4)
                alert("100 years back it was"+" "+centuryOld)
                  

                Task no 13
             

                var age = prompt("Enter your age in years")
                var yearBrth = 2020 - age
                alert(yearBrth)

                 Task no 14
                

                var a = "Hussain ali";
                var b = "March";
                var c = 400
                var d = 16
                var e = c*d
                var f = 350
                var g = e+f

                document.write("Customer name :"+" "+ a+"<br>")
                document.write("Month:"+" "+b+"<br>")
                document.write("Number of units :"+" "+c+"<br>")
                document.write("Chaeges per unit :"+" "+d+"<br>"+"<br>")
                document.write("Net Amount Payable (within Due Date) :"+" "+e+"<br>")
                document.write("Late payment surcharge :"+" "+f+"<br>")
                document.write("Gross Amount Payable (after Due Date) :"+" "+g+"<br>")
                      




                chapter 35-38 

                Task no 1
                  

            function date(Cdate) {
                alert(new Date())
            }
               date()


            Task no 2

            var firstName1 = "Hussain"
            var lastName2 = "Ali"
                  

            function greeting(greet) {
                alert( "Welcome  "+" "+ firstName1+" "+lastName2)
            }
                greeting()


            Task no 3


            var num1 = +prompt("Enter first number")
            var num2 = +prompt("Enter second number")
            function add(addition) {
                alert(num1+num2)
            }

             add()


            Task no 4 

            var numb1 = +prompt("Enter first number")
            var op = prompt("Enter operator")
            var numb2 = +prompt("Enter second number")
            function calc(cal) {
                if (op==="+") {
                    alert(numb1+numb2)
                } 
               else if (op==="-") {
                    alert(numb1-numb2)
                } 
               else if (op==="*") {
                    alert(numb1*numb2)
                } 
               else if (op==="/") {
                    alert(numb1/numb2)
                } 
                 else{
                     alert("Not a valid operator")
                 }   
                
                
            }
            calc()


            Task no 5


            function sqr(a){
                
                alert(a*a)
            }
             sqr(20)


            Task no 6

              function factorial(n) {
                return n ? n * factorial(n - 1) : 1;
              }
  
             alert( factorial(5) )
            
            

             Task no 7
                  var result 
           function counting(a,b){
               for(var i=a;i<=b;i++){
                    result = i
                    document.write(result+"<br>")
               }
              
        
           }
              counting(2,10)  




              Task no 8
                      
            
              function pythagorean(sideA, sideB){
              return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

              console.log(pythagorean(4, 3));
            


            Task no 9


            function area(w,h) {
                alert(w*h)
            }
             area(4,9)
            
        
         
             function area(w,h) {
               w = 4
               h = 9
                alert(w*h)
            }
             area()
         


            Task no 10 

            function isPalindrome(str){
                var normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
                if
               (  normalized.join('') === normalized.reverse().join('') )
            alert("It is Palindrome")
            else {
                alert("It is not Palindrom")
            }
            }
            isPalindrome("masala")


          Task no 11

            var str1 = "the"
            var str2 = "quick"
            var str3 = "brown"
            var str4 = "fox"

          
             result2 = str1.charAt(0).toUpperCase()  + str1.slice(1)
             var result3 = str2.charAt(0).toUpperCase() +str2.slice(1)
             var result4 = str3.charAt(0).toUpperCase() +str3.slice(1)
             var result5 = str4.charAt(0).toUpperCase() + str4.slice(1)
             var NetResult = result2+" "+result3+" "+result4+" "+result5
            alert(NetResult)
        
         
        
            Task no 12


           function findlongestword(str)
{
           var array1 = str.match(/\w[a-z]{0,}/gi);
            var result = array1[0];

          for(var x = 1 ; x < array1.length ; x++)
  {
          if(result.length < array1[x].length)
    {
            result = array1[x];
    } 
  }
           return result;
}
           console.log(findlongestword('Web Development Tutorial'));


        
            Task no 13

              function char_count(str, letter) 
{
             var letter_Count = 0;
             for (var position = 0; position < str.length; position++) 
 {
             if (str.charAt(position) == letter) 
      {
              letter_Count += 1;
      }
  }
              return letter_Count;
}

             console.log(char_count('w3resource.com', 'o'));



            Task no 14

            function calcCircumference(r) {
                
                alert(2*3.14*r)
            }

             calcCircumference(5)
             
            
             function calcArea(r1) {
                alert(3.14*r1*r1)
            }
            calcArea(9)