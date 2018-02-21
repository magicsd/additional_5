module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split('');

  if ((arr.length % 2)) return false;

  // let brackets = [];
  // for (let i = 0; i < bracketsConfig.length; i++) {
  //   brackets.push(bracketsConfig[i][0]);
  // }
  // if (!brackets.includes(arr[0])) return false;

  for (let i = 0; i < bracketsConfig.length; i++) {

    if (arr[0] === bracketsConfig[i][1]) return false;
    if (arr[arr.length-1] === bracketsConfig[i][0]) return false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === bracketsConfig[i][0]) {
        // позиция ближайшей закрывающией скобки
        if (arr[j] != arr[j+1]) {
          let closingBracket = arr.indexOf(bracketsConfig[i][1], j);
          if (!(closingBracket - j) % 2) return false;

          // проверяем между скобками
          let arr2 = arr.slice(j, closingBracket + 1);
          if (arr2.length % 2) return false;
        }
      }
    }

    return true;
  }
}
