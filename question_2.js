var splitString = function(s) {
  const splitUtil = (s, num) => {
    if (s.length == 0) {
      return false;
    }
    if (num - 1 == Number(s)) {
      return true;
    }

    let flag = true;

    for (let i = 0; i < s.length; i++) {
      const otherNumber = s.slice(0, i + 1);
      if (num - 1 == Number(otherNumber)) {
        flag = splitUtil(s.slice(i + 1), num - 1);
        break;
      }
      flag = false;
    }
    return flag || splitUtil(s.slice(1), num * 10 + Number(s[0]));
  };
  return splitUtil(s.slice(1), Number(s[0]));
};
console.log(splitString('1234'));
console.log(splitString('050043'));
console.log(splitString('9080701'));
console.log(splitString('10009998'));
