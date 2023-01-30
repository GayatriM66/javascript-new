//Arrow function is a new way of writing a function from 2015
//usually used for a short code.



////normal function vs arrow function 
//arrow function-> One line or few line , OOP : wont work
//normal function -> for lengthy code , OOP : ok



//program for odd number
//function expression
let x = 34

let test = function test_odd_num(x) {
    if (x % 2 == 0) {
        console.log("Its an even number")
    }
    else {
        console.log("odd number")
    }
}

//test_odd_num(10)      //error-> test_odd_num is not defined
test(20)





//arrow function 
let greet = () => console.log("Good Morning...!!!")
greet()






//ex1
let testNum = (num) => {
    console.log("the given number is ", num)
    console.log("Good Job...!!1")
}

testNum(22)




//ex2
let testNum2 = (num) => {
    if (num % 2 == 0) {
        console.log(num, " is an even number")
    }
    else {
        console.log(num, " is an odd number")
    }
}
testNum2(20)
testNum2(13)




////ex3
//Print the table of 8 using arrow function 
let number = (num) => {
    for(let i=1;i<11;i++){
        console.log(num*i)
    }
}
//number(8)















