(function () {
  'use strict';

  const obj = Object.create(
    {},
    {
      name: {
        writable: false,
        enumerable: false,
        value: 'Bob',
        configurable: false,
      },
    }
  );

  for (const item in obj) {
    console.log(`key: ${item}`);
  }
  obj.name = 'Changed';

  delete obj.name 
 
  console.log(obj);
})();
