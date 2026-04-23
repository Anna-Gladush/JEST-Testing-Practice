import capitilize from './capitilize';
import reverseString from './reverseString';
import calculator from './calculator';
import CaesarCipher from './caesarCipher';
import analyzeArray from './analyzeArray';

// Capitilize
it('Capitilizes first letter in one word', () => {
  expect(capitilize('hello')).toBe('Hello')
})
it('Capitilizes first letter in a sentence', () => {
  expect(capitilize('hello, friend')).toBe('Hello, friend')
})

// Reverse string
it('Reverses the string (one word)', () => {
  expect(reverseString('hello')).toBe('olleh')
})
it('Reverses the string (sentence)', () => {
  expect(reverseString('hello, friend.')).toBe('.dneirf ,olleh')
})

// Calculator
it('Adds two numbers', () => {
  expect(calculator.add(1, 5)).toEqual(6);
})
it('Substracts one number from another', () => {
  expect(calculator.substract(9, 5)).toEqual(4);
})
it('Divides numbers', () => {
  expect(calculator.divide(42, 7)).toEqual(6);
})
it('Multiplies numbers', () => {
  expect(calculator.multiply(4, 7)).toEqual(28);
})

// Caesar Cipher
it('Caesar cipher: 1 word, shift equals 1', () => {
  expect(CaesarCipher('abc')).toBe('bcd')
})
it('Caesar cipher: 1 word, shift equals 3', () => {
  expect(CaesarCipher('HeLLo', 3)).toBe('KhOOr')
})
it('Caesar cipher: 1 word, shift equals 3, wrapping from z to a', () => {
  expect(CaesarCipher('xyz', 3)).toBe('abc')
})
it('Caesar cipher: 1 word, shift equals 3, wrapping from z to a', () => {
  expect(CaesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

// analyzeArray
it('Returns an object with the following properties: average, min, max, and length', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
})
})