function anagrams(str1, str2) {
    const firstFrequencyConter = {};
    const secondFrequencyCounter = {};

    let firstConstructedString = ""
    let secondConstructedString = ""

    for(const char of str1) {
        firstFrequencyConter[char] = (firstFrequencyConter[char] || 0) + 1;
    }

    for(const char of str2) {
        secondFrequencyCounter[char] = (secondFrequencyCounter[char] || 0) + 1;
    }

    for (key in firstFrequencyConter) {
        firstConstructedString += key
    }

    for (key in secondFrequencyCounter) {
        secondConstructedString += key
    }

    const sortedFirstConstructedString = firstConstructedString.split("").sort();
    const secondSecondConstructedString = secondConstructedString.split("").sort();

   return sortedFirstConstructedString.join("") === secondSecondConstructedString.join("")

}

console.log(anagrams("cosmin", "nimsoc"))