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