const x = " a``` {const x } ```";

// Extract content inside curly braces
const extractedContent = x.match(/\{([^}]+)\}/)[0];
console.log(extractedContent)