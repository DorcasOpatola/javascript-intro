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
Subjects for Bolatito: Government, Economics, Literature, History



