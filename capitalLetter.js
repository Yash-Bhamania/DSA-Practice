let array = ["the", "india", "is", "a", "greate", "country"];

let capitalArray = []


for (i = 0; i < array.length; i++) {
    let word = array[i]
    console.log(word);
    let capitalWord = word[0].toUpperCase() + word.slice(1)
    console.log(capitalWord);
    capitalArray.push(capitalWord)
    console.log(capitalArray);

}
console.log(capitalArray)

