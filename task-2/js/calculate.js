function sum(firstNum, secondNum) {
  validateData(firstNum, secondNum);

  return BigInt(firstNum) + BigInt(secondNum);
}

function subtract(firstNum, secondNum) {
  validateData(firstNum, secondNum);

  return BigInt(firstNum) - BigInt(secondNum);
}

function multiply(firstNum, secondNum) {
  validateData(firstNum, secondNum);

  return BigInt(firstNum) * BigInt(secondNum);
}

function divide(firstNum, secondNum) {
  validateData(firstNum, secondNum);

  let bigIntSecondNum = BigInt(secondNum);
  if (bigIntSecondNum === 0n) {
    throw new Error("На ноль делить нельзя");
  }

  return BigInt(firstNum) / bigIntSecondNum;
}

// Вспомогательные функции для проверки параметров

function validateData(firstNum, secondNum) {
  if (!checkNum(firstNum) || !checkNum(secondNum)) {
    throw new Error("Некорректные данные");
  }
}

function checkNum(num) {
  return (
    Number.isFinite(num) ||
    (typeof num === "string" && num !== "" && isBigInt(num))
  );
}

function isBigInt(str) {
  let validChars = "0123456789";
  let isValid = true;

  for (let char of str) {
    if (!validChars.includes(char)) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

export { sum, subtract, multiply, divide };
