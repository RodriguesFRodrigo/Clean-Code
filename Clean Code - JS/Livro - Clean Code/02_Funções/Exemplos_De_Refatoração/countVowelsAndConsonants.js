// Função que retorna o número de vogais e consoantes em uma string
function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  const letters = str.toLowerCase().split("");

  letters.forEach(function (letter) {
    if (/[aeiou]/.test(letter)) {
      vowels++;
    } else if (/[a-z]/.test(letter)) {
      consonants++;
    }
  });

  return { vowels, consonants };
}