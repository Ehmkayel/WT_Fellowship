"use strict";

// Type Conversion 
let rawConnections = "250"; 
let connections = Number(rawConnections);
console.log("Connections:", connections);

// Create Profiles Data using Array of Objects
let profiles = [
  {
    name: "Morufat",
    headline: "Frontend Developer | MSc International Business",
    about: "Building tech & business bridges",
    skills: ["JavaScript", "React", "Next.js"],
    connections: 500,
    experience: 3,
  },
  {
    name: "John",
    headline: "Learning is key",
    about: "Love learning",
    skills: ["HTML"],
    connections: 50,
    experience: 0,
  },
  {
    name: "Ramadan",
    headline: "Quality Assuarance",
    about: "Love learning and fishing out bugs",
    skills: ["HTML"],
    connections: 150,
    experience: 8,
  },
];

//  Function Basics 
function gradeProfile(profile) {
  let score = 0;

  if (profile.headline.length > 0) score += 20;
  if (profile.about.length > 10) score += 20;
  if (profile.skills.length >= 3) score += 20;
  if (profile.connections >= 200) score += 20;
  if (profile.experience > 0) score += 20;

  return score;
}

// Create a getGradeLetter using Function Expression 
const getGradeLetter = function (score) {
  if (score >= 80) return "A";
  if (score >= 60) return "B";
  return "C";
};

// For Loop + Logical Operators 
for (let i = 0; i < profiles.length; i++) {
  let profile = profiles[i];
  let score = gradeProfile(profile);
  let grade = getGradeLetter(score);

  let status = (score >= 60 && "Strong Profile") || "Needs Improvement";

  console.log(
    `${profile.name}'s LinkedIn Score: ${score}, Grade: ${grade}, Status: ${status}`
  );
}

// -While Loop 
let index = 0;
while (index < profiles.length) {
  console.log(`Reviewing ${profiles[index].name}'s profile...`);
  index++;
}

// Array Methods 
let allSkills = profiles.flatMap((p) => p.skills);
console.log("All Skills Collected:", allSkills);

let topProfiles = profiles.filter((p) => gradeProfile(p) >= 80);
console.log("Top Profiles:", topProfiles);

let averageScore =
  profiles.map((p) => gradeProfile(p)).reduce((a, b) => a + b, 0) /
  profiles.length;
console.log("Average LinkedIn Score:", averageScore);

//  Keys, Values, Entries 
let sampleProfile = profiles[0];
console.log("Keys:", Object.keys(sampleProfile));
console.log("Values:", Object.values(sampleProfile));
console.log("Entries:", Object.entries(sampleProfile));
