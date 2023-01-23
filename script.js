let url = "https://github.com/barisemreyalcin";
let repoName = "In This Course I Will Learn String Methods";

// Length of the String
let lengthString;
lengthString = url.length;
console.log("Length of the String:", lengthString);

// Word number of repoName
let numberOfWords;
numberOfWords = repoName.split(" ").length;
console.log("Word number of repoName:", numberOfWords);

// Check if url starts with "https",
let wordStart;

if (wordStart = url.startsWith("https")) {
    console.log("Url starts with 'https'")
}else {
    console.log("Url does not start with 'https'")
}

// Check if the repoName contains "String"
let containString;

if (containString = repoName.indexOf("String") > -1) {
    console.log("repoName contains 'String' word")
}else{
    console.log("repoName does not contain 'String' word")
}

// Create a new String below by using url and repoName variables
// https://github.com/barisemreyalcin/in-this-course-i-will-learn-string-methods

repoName = repoName.toLowerCase().replaceAll(" ","-");
repoName = `${url}/${repoName}`;
let newString = repoName;
console.log("New String:", newString)