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
      return `${days} days - ${days / 7} weeks`
    case `months`:
      return `${days} days - ${days / 30} months`
    case `years`:
      return `${days} days - ${days / 365} years`
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

  if (enterNum % divitionNum === 0) {
    return `${enterNum} dalinasi iš ${divitionNum}.`
  } else {
    return `Skaičius ${enterNum} nesidalina iš ${divitionNum}. Liekana yra ${remainder}.`
  }
}

console.log(numberDivision(2, 3))

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function evenCount(text) {

  let letterCount = text.length

  if (letterCount % 2 === 0) {
    return `Žodis ${text} turi porinį skaičių raidžių`
  } else {
    return `Žodis ${text} turi neporinį skaičių raidžių`
  }
}

console.log(evenCount(`laba`))

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du parametrą: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.