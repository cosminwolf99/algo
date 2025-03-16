function charCounter(chars) {
    const charCount = {};

    for (char of chars) {
        charCount[char] = ++charCount[char] || 1;
    }

    return charCount
}

console.log(charCounter("hello"));

