let score1 = 85;
let score2 = 72;
let score3 = 91;
let score4 = 64;
let score5 = 78;

let total = 0;
let passed = 0;
let failed = 0;

console.log("Student Scores:");
console.log(score1);
console.log(score2);
console.log(score3);
console.log(score4);
console.log(score5);

console.log("");

// Student 1
if (score1 >= 90) {
    console.log("Student 1: " + score1 + " - Excellent - Passed");
    passed++;
} else if (score1 >= 80) {
    console.log("Student 1: " + score1 + " - Very Good - Passed");
    passed++;
} else if (score1 >= 75) {
    console.log("Student 1: " + score1 + " - Good - Passed");
    passed++;
} else {
    console.log("Student 1: " + score1 + " - Failed - Failed");
    failed++;
}

// Student 2
if (score2 >= 90) {
    console.log("Student 2: " + score2 + " - Excellent - Passed");
    passed++;
} else if (score2 >= 80) {
    console.log("Student 2: " + score2 + " - Very Good - Passed");
    passed++;
} else if (score2 >= 75) {
    console.log("Student 2: " + score2 + " - Good - Passed");
    passed++;
} else {
    console.log("Student 2: " + score2 + " - Failed - Failed");
    failed++;
}

// Student 3
if (score3 >= 90) {
    console.log("Student 3: " + score3 + " - Excellent - Passed");
    passed++;
} else if (score3 >= 80) {
    console.log("Student 3: " + score3 + " - Very Good - Passed");
    passed++;
} else if (score3 >= 75) {
    console.log("Student 3: " + score3 + " - Good - Passed");
    passed++;
} else {
    console.log("Student 3: " + score3 + " - Failed - Failed");
    failed++;
}

// Student 4
if (score4 >= 90) {
    console.log("Student 4: " + score4 + " - Excellent - Passed");
    passed++;
} else if (score4 >= 80) {
    console.log("Student 4: " + score4 + " - Very Good - Passed");
    passed++;
} else if (score4 >= 75) {
    console.log("Student 4: " + score4 + " - Good - Passed");
    passed++;
} else {
    console.log("Student 4: " + score4 + " - Failed - Failed");
    failed++;
}

// Student 5
if (score5 >= 90) {
    console.log("Student 5: " + score5 + " - Excellent - Passed");
    passed++;
} else if (score5 >= 80) {
    console.log("Student 5: " + score5 + " - Very Good - Passed");
    passed++;
} else if (score5 >= 75) {
    console.log("Student 5: " + score5 + " - Good - Passed");
    passed++;
} else {
    console.log("Student 5: " + score5 + " - Failed - Failed");
    failed++;
}

// Calculate total
total = score1 + score2 + score3 + score4 + score5;

// Calculate average
let average = total / 5;

// Find highest score
let highest = score1;

if (score2 > highest) {
    highest = score2;
}

if (score3 > highest) {
    highest = score3;
}

if (score4 > highest) {
    highest = score4;
}

if (score5 > highest) {
    highest = score5;
}

// Find lowest score
let lowest = score1;

if (score2 < lowest) {
    lowest = score2;
}

if (score3 < lowest) {
    lowest = score3;
}

if (score4 < lowest) {
    lowest = score4;
}

if (score5 < lowest) {
    lowest = score5;
}

// Display results
console.log("");
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
