// Question 1: InstagramPost constructor function
function InstagramPost(authorHandle, content, imageLink, views, likes) {
this.authorHandle = authorHandle;
this.content = content;
this.imageLink = imageLink;
this.views = views;
this.likes = likes;
}



// Question 2: Creating Instagram post objects
const igpost1 = new InstagramPost(
    "john_doe",
    "Beautiful sunset",
    "image1.jpg",
    6000,
    974
);

const igpost2 = new InstagramPost(
    "jane_smith",
    "Delicious brunch",
    "image2.jpg",
    4880,
    500
);




// Question 3: Factory functions for Musa and JAMB scores
function createPerson(name, age, location) {
return {
    name: name,
    age: age,
    location: location,
};
}

function createJambScores(eng, govt, lit, crk) {
return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
};
}

// Creating Musa object with JAMB scores
const musa = createPerson(
    "Musa Dawodu",
    19,
    "Lekki, Lagos State"
);

musa.jambScores = createJambScores(
    70,
    85,
    82,
    94
);




// Question 4: Different ways to clone an object
// Method 1: Using Object.assign()
const clone1 = Object.assign({}, musa);

// Method 2: Using the spread operator (ES6)
const cloned2 = { ...musa };

// Method 3: Using JSON.stringify() and JSON.parse()
const cloned3 = JSON.parse(JSON.stringify(musa));




// Question 5: Logging out presidential candidates using for...in loop
const presidentialCandidates = {
AAC: "Omoyele Sowore",
ACCORD: "Christopher Imumolen",
APC: "Bola Ahmed Tinubu",
LP: "Peter Obi",
NNPP: "Rabiu Kwankwaso",
PDP: "Atiku Abubakar",
};

for (const party in presidentialCandidates) {
    console.log(
        `${presidentialCandidates[party]} is the presidential candidate of ${party}`
    );
}

