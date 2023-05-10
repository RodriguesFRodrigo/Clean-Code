// Ruim
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join(""); // Funcionalidade 1: Obter a string revertida
  return str === reverseStr; // Funcionalidade 2: Verificar se é palindrome
}
console.log(`Is Peep Palindrome? ${isPalindrome("Pop")}`);

// Bom
function reverseString(str) { // Funcionalidade: Obter a string revertida
  return str.split("").reverse().join("");
}

function isPalindrome(str) { // Funcionalidade: Verificar se é palindrome
  const reverseStr = reverseString(str);
  return str === reverseStr;
}
console.log(`Is Peep Palindrome? ${isPalindrome("pop")}`);