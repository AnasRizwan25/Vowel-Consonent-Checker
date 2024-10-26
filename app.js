let para = document.querySelector('#js-para');
let vowel = [];
let consonent = [];

function toAdd() {

  let text = document.querySelector('#js-text').value.trim();
  let vowels = 'aeiou';

  let haveCheck = [...text.toLowerCase()].some((value) => {
    return vowels.includes(value);
  });

  if(text != ''){

    if (haveCheck) {
      vowel.push(text);
      para.innerText = `You just type a vowel sentence: ${text}`;
    } else {
      consonent.push(text);
      para.innerText = `You just type a consonent sentence: ${text}`;
    }
    console.log('Vowel: ', vowel);
    console.log('Consonent: ', consonent);
  }

  
}