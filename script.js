// Task 1
let regExTask1= /([0-1][0-9]|[2][0-3]):[0-5][0-9]/g;
console.log(`Task 1 test: 23:59 return ${regExTask1.test('23:59')}`);

// Task 2
let regExTask2 = /(-?\d+|-?\d+\.\d+)\s?(\*|\/|-|\+)\s?(-?\d+\.?\d+|-?\d+)/g;
console.log(`Task 2 test: 2 + 2 return ${regExTask2.test('2 + 2')}`);

// Task 3
function createURL(templateURL, params) {
  let regEx = /{\w+}/g;
  return templateURL.replace(regEx, addParams);

  function addParams(match) {
    match = match.replace(/[{}]/g, '');
    return params[match];
  }
}

let url = createURL(
  `/api/countries/{country}/regions/{region}/user/{userId}/`,
  { country: `Ukraine`, region: `Kiev`, userId: `100` }
);

console.assert(
  url === '/api/countries/Ukraine/regions/Kiev/user/100/'
);
