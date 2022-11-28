//Student Grade Generator
const Grade = (score) => {
    //Conditional statements
     while (score <=100 && score > 0 ) 
     if (score > 79 ) {
       return 'A';
     } else if (score >= 60 ) {
       return 'B';
     } else if (score >= 49 ) {
       return 'C';
     } else if (score >= 40 ) {
       return 'D';
     } else {
       return 'E'
   } 
   }
   // input the student's grade here
   console.log(Grade (65)); 
   
   
   
     //Speed Detector
     const car = (speed) => {
       //conditional statements
       if (speed <= 70) {
         return 'Ok';
         //if the speed is greater than 70
       } else if (speed > 70) {
         //calculation of points using the method of rounding points down to nearest integer as every 5 is equal to 1
         let points = Math.floor((speed - 70) / 5);
         if (points <= 12) {
           return`Points:${points}`;
         } else if (points > 12) {
           return 'License suspended';
         }
       }
     }
     // input the car speed here
     console.log(car(122));
   
   
   
     //Net Salary Calculator
    
   const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
   })
   let tax = (gross) => {
       if (gross <= 24000) {
           return 10/100
       }
       else if (gross > 24000 && gross <= 32333) {
           return 25/100
       }
       else {
           return 30/100
       }
   }
   let nhifDeduction = (gross) => {
       if (gross <= 5999) {
           return 150
       }
       else if (gross <= 7999) {
           return 300
       }
       else if (gross <= 11999) {
           return 400
       }
       else if (gross <= 14999) {
           return 500
       }
       else if (gross <= 19999) {
           return 600
       }
       else if (gross <= 24999) {
           return 750
       }
       else if (gross <= 29999) {
           return 850
       }
       else if (gross <= 34999) {
           return 900
       }
       else if (gross <= 39999) {
           return 950
       }
       else if (gross <= 44999) {
           return 1000
       }
       else if (gross <= 49999) {
           return 1100
       }
       else if (gross <= 59999) {
           return 1200
       }
       else if (gross <= 69999) {
           return 1300
       }
       else if (gross <= 79999) {
           return 1400
       }
       else if (gross <= 89999) {
           return 1500
       }
       else if (gross <= 99999) {
           return 1600
       }
       else {
           return 1700
       }
   }
   
   
   let nsfDeduction = 400
   
   
   const salary = (gross) => {
       console.log(gross - (gross*tax(gross)) - nsfDeduction - nhifDeduction(gross))
   }
   readline.question('Enter your gross salary: ', gross => {
     salary(gross)
     readline.close()
   })
   