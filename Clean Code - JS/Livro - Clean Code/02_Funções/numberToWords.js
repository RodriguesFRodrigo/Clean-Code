// Ruim
function numberToWords(num) {
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  if (num < 0) return "negative " + numberToWords(-num);
  if (num === 0) return "zero";
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " : "") + ones[num % 10];
  if (num < 1000) return ones[Math.floor(num / 100)] + " hundred" + (num % 100 !== 0 ? " and " : "") + numberToWords(num % 100);
  if (num < 1000000) return numberToWords(Math.floor(num / 1000)) + " thousand" + (num % 1000 !== 0 ? " " : "") + numberToWords(num % 1000);
  if (num < 1000000000) return numberToWords(Math.floor(num / 1000000)) + " million" + (num % 1000000 !== 0 ? " " : "") + numberToWords(num % 1000000);
  return numberToWords(Math.floor(num / 1000000000)) + " billion" + (num % 1000000000 !== 0 ? " " : "") + numberToWords(num % 1000000000);
}
