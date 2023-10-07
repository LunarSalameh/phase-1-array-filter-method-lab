// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
    let copiedArray = [...array];
    return array.filter(copiedArray => copiedArray.toLowerCase() == name.toLowerCase())
}

console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));
console.log(findMatching(drivers, "Susan"));

function fuzzyMatch(array, letters) {
    /*   let newArray = [...array]
       let splitLetters = letters.split('');
       let nameBySplittedLetters = [];
       let j = 0;
       for (let i = 0; i < newArray.length; i++) {
           let splitted = newArray[i].split('');
           if (splitted[0] == splitLetters[0] && splitted[1] == splitLetters[1]) {
               nameBySplittedLetters[j++] = splitted.join("");
           }
       }
       return nameBySplittedLetters;*/
    const splitLetters = letters.split(0, 2);
    let newArray = [...array];
    return array.filter(newArray => newArray.slice(0, 2) == splitLetters);

}
let nameBySplittedLetters = fuzzyMatch(drivers, 'Sa');
console.log(nameBySplittedLetters);

const driver = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function matchName(array, string) {
    let newArray = [...array];
    return array.filter(newArray => newArray.name == string);
}

console.log(matchName(driver, "Bobby"));