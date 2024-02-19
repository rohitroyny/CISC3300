// Define the cats array
const cats = [
    { name: 'Charlie', adoptionStatus: 'available' },
    { name: 'Lily', adoptionStatus: 'not-available' },
    // ... (other cat objects)
    { name: 'Daisy', adoptionStatus: 'available' },
];

// Create an array to hold the names of available cats
let availableCats = [];

// Loop through the cats array
cats.forEach(cat => {
    // Check if the cat's adoption status is available
    if (cat.adoptionStatus === 'available') {
        // Add the cat's name to the availableCats array
        availableCats.push(cat.name);
    }
});

// Create a sentence about the newly adopted cats
let sentence = "I'm so excited to adopt these cats: " + availableCats.join(', ') + "!";

// Log the sentence to the console
console.log(sentence);
