const CaesarCipher = (str, shift=1) => {
  const letters = str.split('');
  let arr = []
  letters.forEach(letter => {
    const code = letter.charCodeAt();
    let letter_code;
    if ((code + shift) > 90 && (65 <= code && code <= 90)) {
      letter_code = 65 + code + (shift - 1) - 90;
    } else if ((code + shift) > 122 && (97 <= code && code <= 122)) {
      letter_code = 97 + code + (shift - 1) - 122;
    } else if ((65 <= code && code <= 90) || (97 <= code && code <= 122)) {
      letter_code = code + shift;
    } else {
      letter_code = code;
    }
    arr.push(String.fromCharCode(letter_code))
  })
  // const w = ['a', 'A', 'z', 'Z'];
  // [97, 65, 122, 90]
  // w.forEach(lett => arr.push(lett.charCodeAt()))
  return arr.join('')
}
export default CaesarCipher