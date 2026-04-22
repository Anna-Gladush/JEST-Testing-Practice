import capitilize from './capitilize'
import reverseString from './reverseString'
import calculator from './calculator'
import CaesarCipher from './caesarCipher'

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
it('Shift equals 1', () => {
  expect(CaesarCipher('abc')).toBe('bcd')
})