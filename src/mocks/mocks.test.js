// const axios = require('axios')
let url;

const fetchData = async (id) => {
  const results = await axios.get(url);
  return results.data
}
const forEach = ((items, callback) => {
  for (let i = 0;  i < items.length; i ++) {
    callback(items[i])
  }
});

// const mock = (x) => 42 + x
xit('mock callback', () => {
  const mockCalledback = jest.fn(x => 42 + x);

  forEach([0,1], mockCalledback);

  expect(mockCalledback.mock.calls.length).toBe(2);
  // returns an array of all calls
  // get first parameter that is passed into callback
  expect(mockCalledback.mock.calls[0][0]).toBe(0);
  // expect(mockCalledback.mock.calls[1][0]).toBe(1);

  expect(mockCalledback.mock.results[0].value).toBe(42);

})

xit('mock return', () => {
  const mock = jest.fn();

  mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce('hello');

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe('hello');
})

xit('mock axios', async () => {
  jest.spyOn(axios, 'get').mockReturnValueOnce({
    data: {
      id: 1,
      todo: 'Get 1M subs'
    }
  })
  const results = await fetchData(1)
  expect(results.todo).toBe('Get 1M subs')
})