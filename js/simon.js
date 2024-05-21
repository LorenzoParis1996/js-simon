const numOnPage = document.querySelector('h1');
const randomNums = [];

for (let n = 0; n < 5; n++) {
    const nums = Math.floor(Math.random() * 100);
    randomNums.push(nums);
    numOnPage.innerHTML = randomNums;

}

console.log(randomNums);

setTimeout(guessNumbers, 5000);

function guessNumbers() {
    numOnPage.innerHTML = '';
    console.log('tempo scaduto');
    let userNumbers = [];

    setTimeout(() => {
        for (let n = 0; n < 5; n++) {
            let userNumber = Number.parseInt(prompt('ricorda i numeri appena apparsi uno alla volta'), 10);
            userNumbers.push(userNumber)
        };
        console.log(userNumbers);

        for (let i = 0; i < 5; i++) {
            if (randomNums[i] === userNumbers[i]) {
                document.querySelector('h1').innerHTML += ' numero corretto: ' + userNumbers[i];
            } else {
                document.querySelector('h1').innerHTML += ' numero di simon: ' + randomNums[i];
            }

        }

    }, 100);
}