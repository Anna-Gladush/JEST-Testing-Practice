const reverseString = (str) => {
  let words = str.split(' ');
  let arr = [];
  words.forEach(word => {
    arr.push(word.split('').reverse().join(''));
  });
  return arr.reverse().join(' ')
}
export default reverseString;