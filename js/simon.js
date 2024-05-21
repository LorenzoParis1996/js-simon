const numOnPage = document.querySelector('h1');
const randomNums = [];

for (let n = 0; n < 5; n++) {
    const nums = Math.floor(Math.random() * 100);
    randomNums.push(nums);
    numOnPage.innerHTML = randomNums;

}