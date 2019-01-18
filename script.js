// Task 1
/[0-2][0-9]:[0-5][0-9]/g

// Task 2
/([-]?\d+|[-]?\d+\.\d+)[\s]?(\*|\/|-|\+)[\s]?([-]?\d+[\.]?\d+|[-]?\d+)/g

// Task 3
function createURL(templateURL, params) {
  let regEx = /({\bcountry\b})|({\bregion\b})/g;
  return templateURL.replace(regEx, addParams);

  function addParams(match) {
    match = match.replace(/[{}]/g, '');
    return params[match];
  }
}

let url = createURL(
  `/api/countries/{country}/regions/{region}/`,
  { country: `Ukraine`, region: `Kiev` }
);

console.assert(
  url === '/api/countries/Ukraine/regions/Kiev/'
);
