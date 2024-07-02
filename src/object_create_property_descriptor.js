(function () {
  'use strict';
  const obj = Object.create(
    {},
    {
      name: {
        writable: true,
        enumerable: true,
        value: 'Bob',
        configurable: true,
      },
    }
  );

  for (const item in obj) {
    console.log(`key: ${item}`);
  }
  obj.name = 'Changed';

  delete obj.name 
 
  console.log(obj.name);
})();
