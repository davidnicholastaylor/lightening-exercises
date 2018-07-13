// // Given the following set of data about chicken birth rates, 
// you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. 
// Store the good years in a new array named `bestYears`.

// const bestYears = []
// const birthRates = [
//     { year: 1969, birthRate: 13}, 
//     { year: 1970, birthRate: 16}, 
//     { year: 1971, birthRate: 15}, 
//     { year: 1972, birthRate: 11}, 
//     { year: 1973, birthRate: 18}, 
//     { year: 1974, birthRate: 17}, 
//     { year: 1975, birthRate: 9}
//   ]

  // for (let i = 0; i < birthRates.length; i++) {
  //     const currentYear = birthRates[i];
  //     if (currentYear.birthRates[i] > 15) {
  //       bestYears.push(currentYear)
  //     }
  // }

  // console.log(bestYears);

// birthRates.forEach(function (currentYear) {
//     if (currentYear.birthRate > 15) {
//         bestYears.push(currentYear);
//     }
// })

// console.log(bestYears);

// for (currentYear of birthRates) {
//     if (currentYear.birthRate > 15) {
//        bestYears.push(currentYear)
//     }
// }

// console.log(bestYears);

// const politician = {
//     platform: {
//         money: ["I like it", "I have lots of it", "I don't want other people to have any"],
//         health: "i'm against it"
//     },
//     district: "Michigan 13"
// }

// // console.log(politician.platform.money[1])

// for (const policy of politician.platoform.money) {
//     console.log(policy)
// }