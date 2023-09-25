// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function age(humanAge) {

  let calcAge = humanAge * 7
  let output = `${humanAge} žmogaus metai yra ${calcAge} šuns metai.`

  console.log(output)
}

age(5)

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function books(num) {
  let calcDays = Math.floor(365 / num)
  let output = `Norint perskaityti ${num} knygų per metus, vienai knygai perskaityti turėsi ${calcDays} dienas.`

  console.log(output)
}

books(10)

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną parametrą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function days(num) {
  let calcWeeks = Math.round(num / 7)
  let output = `${num} dienos yra ${calcWeeks} savaitės.`

  console.log(output)
}

days(35)

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną parametrą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(num) {
  let calcYears = (num / 365).toFixed(2)
  let output = `${num} dienos yra ${calcYears} metai.`

  console.log(output)
}

daysToYears(30)

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną parametrą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours (num) {
  let calcHours = num * 365 * 24
  let output = `${num} metai turi ${calcHours} valandas.`

  console.log(output)
}

yearsToHours(5)

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours(num) {
  let calcHours = num * 30 * 24
  let output = `${num} mėnesiai turi ${calcHours} valandas.`

  console.log(output)
}

monthsToHours(3)

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes (num) {
  let calcMinutes = num * 30 * 24 * 60
  let output = `${num} mėnesiai turi ${calcMinutes} minutes.`

  console.log(output)
}

monthsToMinutes(2)

// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du parametrą: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function convertDays(days, format) {
  
  switch (format) {
    case `minutes`:
      return `${days} days - ${days * 24 * 60} minutes`
    case `hours`:
      return `${days} days - ${days * 24} hours`
    case `weeks`:
      return `${days} days - ${(days / 7).toFixed(1)} weeks`
    case `months`:
      return `${days} days - ${(days / 30).toFixed(1)} months`
    case `years`:
      return `${days} days - ${(days / 365).toFixed(2)} years`
    default:
      return `Invalid format`
  }
}

console.log(convertDays(2, `hours`))

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du parametrą: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function numberDivision(enterNum, divitionNum) {

  let remainder = enterNum % divitionNum

  if (remainder === 0) {
    return `${enterNum} dalinasi iš ${divitionNum}.`
  }
  return `Skaičius ${enterNum} nesidalina iš ${divitionNum}. Liekana yra ${remainder}.`
  
}

console.log(numberDivision(2, 3))

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function evenCount(text) {
  if (typeof text !== `string`) {
    return `Error: Įvesti duomenys turi būti tekstas`
  }

  let letterCount = text.length

  if (letterCount % 2 === 0) {
    return `Žodis ${text} turi porinį skaičių raidžių`
  } 
  return `Žodis ${text} turi neporinį skaičių raidžių`
}

console.log(evenCount(`laba`))

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du parametrą: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

// function symbolFromText(text, position) {

//   let textLength = text.length

//   if (position > textLength) {
//     return `Tekstas "${text} turi ${textLength}" simbolius, o jūs nurodėte grąžinti ${position}.`
//   }
  
//   let index = position - 1
//   let symbol = text.at(index)

//     return `Teksto "${text}" turi ${position} simbolis yra "${symbol}".`
// }

// console.log(symbolFromText(`Geras`, 3))

function getSymbol(str, num) {
  if (num === 0) {
    return 'ERROR: reikia įvesti teigiamą arba neigiamą skaičių. Nulis nėra galimas variantas.'
  }

  if (!str || !num) {
    return 'ERROR: neteisingai įvesti duomenys'
  }

  if (typeof str !== 'string') {
    return 'ERROR: pirmas parametras privalo būti tekstas (string).'
  }

  if (isNaN(num)) {
    return 'ERROR: antras parametras privalo būti skaičius (number).'
  }

  let strLength = str.length

  // let convertedNum = num
  // if (num < 0) {
  //   convertedNum = num * -1
  // }

  let convertedNum = num < 0 ? num : num * -1

  if (convertedNum > strLength) {
    return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${convertedNum}`
  }

  if (num < 0) {
    let backSymbol = str.at(num)

    return `Teksto "${str}" ${convertedNum} simbolis skaičiuojant nuo galo yra "${backSymbol}"`
  }
  
  let index = num - 1
  // let symbol = str[index]
  // let symbol = str.charAt(index)
  let symbol = str.at(index)

  return `Teksto "${str}" ${num} simbolis yra "${symbol}".`
}

console.log(getSymbol('labas', 3))
console.log(getSymbol('labas', 5))
console.log(getSymbol('labas', 8))
console.log(getSymbol('labas', -8))
console.log(getSymbol('labas', -3))
console.log(getSymbol('labas'))
console.log(getSymbol(4, 5))
console.log(getSymbol('labas', 0))