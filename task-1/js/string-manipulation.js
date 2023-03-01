// Первая буква большая, а остальные маленькие
function upperCaseFirst(str) {
  if (typeof str !== "string") throw new Error("Некорректные данные");

  str = str.trim();
  if (str === "") return str;

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Правильная расстановка пробелов
function correctSpaces(str) {
  if (typeof str !== "string") throw new Error("Некорректные данные");

  str = str
    .split(" ")
    .filter((item) => item)
    .join(" ")
    .replaceAll(",", ", ")
    .replaceAll(".", ". ")
    .replaceAll("!", "! ")
    .replaceAll("?", "? ")
    .replaceAll(":", ": ")
    .replaceAll(";", "; ")
    .replaceAll(" ,", ",")
    .replaceAll(" .", ".")
    .replaceAll(" !", "!")
    .replaceAll(" ?", "?")
    .replaceAll(" :", ":")
    .replaceAll(" ;", ";")
    .replaceAll("  ", " ")
    .trim();

  return str;
}

// Количество слов
function countWords(str) {
  if (typeof str !== "string") throw new Error("Некорректные данные");

  str = str.trim();
  if (str === "") return 0;

  return str.split(" ").filter((item) => item).length;
}

// Подсчёт уникальных слов
function countUniqueWords(str) {
  if (typeof str !== "string") throw new Error("Некорректные данные");

  const words = deleteAllSigns(str)
    .toLowerCase()
    .split(" ")
    .filter((item) => item);

  const uniqueWords = {};

  words.forEach((word) => {
    if (word in uniqueWords) {
      uniqueWords[word]++;
    } else {
      uniqueWords[word] = 1;
    }
  });

  let result = "";
  for (let word in uniqueWords) {
    let count = uniqueWords[word];
    result += `${word} - ${count} ${getWordForm(count)}\n`;
  }

  return result;
}

// Вспомогательная функция удаления всех знаков
function deleteAllSigns(str) {
  return str
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("!", "")
    .replaceAll("?", "")
    .replaceAll(":", "")
    .replaceAll(";", "");
}

// Вспомогательная функция получения формы слова "раз"
function getWordForm(num) {
  const tempNumber = num % 100;
  if (tempNumber >= 12 && tempNumber <= 14) {
    return "раз";
  }
  if (tempNumber % 10 >= 2 && tempNumber % 10 <= 4) {
    return "раза";
  }
  return "раз";
}

export { upperCaseFirst, correctSpaces, countWords, countUniqueWords };
