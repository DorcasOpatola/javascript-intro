// Question 3: Using if…else conditional statement to write a program to help Bolatito determine the subjects to take for a session in respect to her class group. 

let classGroup = "Arts";
let subjects;

if (classGroup === "Science") {
  subjects = "Physics, Chemistry, Biology, Technical Drawing";
} 
else if (classGroup === "Social Science") {
  subjects = "Accounting, Commerce, Marketing, Geography";
} 
else if (classGroup === "Arts") {
  subjects = "Government, Economics, Literature, History";
} 
else {
  subjects = "English, Mathematics";
}

console.log("Subjects for Bolatito: " + subjects);

// Output
// Subjects for Bolatito: Government, Economics, Literature, History



// Question 5: A program that takes a positive number (num) and finds the power of 2 nearest to that number.
function findNearestPowerOf2(num) {
  let smallerPower = 1;
  let largerPower = 2;
  
    //find the nearest powers of 2
  while (largerPower <= num) {
    smallerPower = largerPower;
    largerPower *= 2;
  }
  
    // determine the nearest power of 2
  let pwr = (num - smallerPower <= largerPower - num) ? smallerPower : largerPower;
  console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");
}

