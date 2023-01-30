//everything in JS is object
//object: key : has to be Unique
//      : value : can be duplicate


//eg 1

const reena={
    firstName: 'Reena',
    lastName:'Sharma',
    YOB : 1990,
    profession: 'Instructor',
    canVote:true,
}

//accessing the values

console.log(reena.YOB)//dot Notation 
console.log(reena['YOB'])//bracket notation //preferred
console.log(typeof reena)






//eg 2
const reena1={
    firstName :'Reena',
    lastNAme: 'Sharma',
    YOB:2000,
    profession:'Teacher',
    canVote: true,
    ageCal: function(YOB){
        const age=2023-YOB
        return age 
        }
}

console.log(reena1.firstName)
console.log(reena1.ageCal(1990))
console.log(reena1['ageCal(2021)'])//wrong syntax
console.log(reena1['ageCal'](2021))



///Introduced to concept of this
//we are taking the YOB value from the current object, using this
const reena2={
    firstName :'Reena',
    lastNAme: 'Sharma',
    YOB:2000,
    profession:'Teacher',
    canVote: true,
    ageCal: function(){
        const age=2023-this.YOB
        console.log("this",this )
        return age 
        }
}

console.log(reena2.firstName)
console.log(reena2.YOB)
console.log(reena2.ageCal())


//object

let student ={
    fName:'Reena',
    lName:'Sharma',
    pin : 400421,
    age:18,
    marks:[80,43,66,87,78,77],
    result:function(){
        sum=0
        for(i=0;i<this.marks.length;i++){
            sum=sum+this.marks[i]
        }
        return sum
    }
}

console.log(typeof student)
console.log(student.fName)
console.log(student.result())
console.log(student['result']())