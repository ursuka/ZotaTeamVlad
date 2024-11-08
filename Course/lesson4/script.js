const a = 1;
const b = 2;
console.log(1 + 2);

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
  }
  console.log(i);
}

const factorial = (num) => {
  if ((num === 0) | (num === 1)) {
    return 1;
  }

  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }

  return num;
};

const primeNum = (num) => {
  let isPrime = true;
  if (num === 1) {
    console.log("1 nu este numar prim");
  } else if (num > 1) {
    for (let i = 2; i < num / 2; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${num} este prim`);
    } else {
      console.log(`${num} nu este prim`);
    }
  } else {
    console.log(`${num} nu este prim`);
  }
};

const reversStr = (str) => {
  return str.split("").reverse().join("");
};

const biggestNumArr = (arr) => {
  let bigNum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > bigNum) {
      bigNum = element;
    }
  }
  return bigNum;
};

const polidrom = (str) => {
  let charArr = [];
  for (let i = str.length - 1; (i) => 0; i--) {
    const element = str[i];
    charArr.push(element);
  }
  console.log(charArr);

  if (charArr.reverse().join("") === str) {
    console.log(`${str} este polidrom`);
  } else {
    console.log(`${str} nu este polidrom`);
  }
};

const sumConcat = (sum) => {
  let newSum = 0;
  for (let i = 0; i < String(sum).length; i++) {
    const element = String(sum)[i];
    newSum = newSum + Number(element);
  }
  return newSum;
};

const sumArr = (arr)=>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum = sum + element
    }
    return sum;
}