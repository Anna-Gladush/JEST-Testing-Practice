const avg = (arr) => {
  return arr.reduce((prev, curr) => prev + curr / arr.length, 0)
}
const min = (arr) => {
  return Math.min(...arr)
}
const max = (arr) => {
  return Math.max(...arr)
}
const analyzeArray = (arr) => {
  let object = {
   average: avg(arr),
   min: min(arr),
   max: max(arr),
   length: arr.length
}
  return object
}
export default analyzeArray