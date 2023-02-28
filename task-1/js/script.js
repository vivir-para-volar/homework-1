import * as stringManipulation from "./string-manipulation.js";

console.log(stringManipulation.upperCaseFirst("abScD"));

console.log(
  stringManipulation.correctSpaces(
    `Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.`
  )
);

console.log(
  stringManipulation.countWords(
    "Текст, в котором слово текст несколько раз встречается и слово тоже"
  )
);

console.log(
  stringManipulation.countUniqueWords(
    "Текст, в котором слово текст несколько раз встречается и слово тоже"
  )
);
