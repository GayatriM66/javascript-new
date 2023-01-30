//this function wont work for strings

// let testNum2 = (num) => {
//     if (num % 2 == 0) {
//         console.log(num, " is an even number")
//     }
//     else {
//         console.log(num, " is an odd number")
//     }
// }
// testNum2(20)
// testNum2(13)
// testNum2("hello")    



//function calling function 

//Age calculator
//ask user to enter YOB-> year of Birth
//age as o/p

//DRY - > do not repeat yourself(main motive of function )


// function age_calculate(YOB){
//     const age=2023-YOB
//     console.log(age," is the age")
// }

// age_calculate(1990)






//prgrm1
//Eligibility for Driving age
//must be >=18



function cal_age(YOB){
    const age=2023-YOB
        return age
}

function driver_Eligibility(YOB){
    const age= cal_age(YOB)    //function calling another function

    if(age>=18){
        console.log(age, "You are eleigible for Driving.")
    }
    else {
        console.log(age , "You are not eligible for Driving.")
    }
}

driver_Eligibility(1980)
driver_Eligibility(2013)

































