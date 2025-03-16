function constructNote(message, letters) {
const frequency = {};
const frequencyM = {};

for (let i = 0; i < letters.length; i++) {
    frequency[letters[i]] = ++frequency[letters[1]] || 1;
}

for (let i = 0; i < message.length; i++) {
    frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
  }

  for (let key in frequencyM) {
     if (!frequency[key]) return false;
     if (frequencyM[key] > frequency[k]) return false;
  }

  return true
}


console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true