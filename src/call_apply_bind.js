const sum = (a, b, ...rest) => {
  console.log(rest)
  return a + b;
}

// console.log(sum.call(null, 1, 2, 3, 4, 5));
// console.log(sum(...[1, 2, 3])) // sum(1, 2, 3);
// console.log(sum.apply(null, [1, 5, 10, 20]));

function logger(...data) {
  if (this === global) {
    console.log('global context')
  }
  console.log(this.toString(), data);
}

// logger('Without bind', 1, 2, 3, 4);


const obj = {
  name: 'bind 1',
  toString() {
    return `${this.name}`;
  },
};

const obj2 = { ...obj, name: 'bind 2' };

const bindLogger = logger.bind(obj, 1, 2);
const bind2Logger = bindLogger.bind(obj2, 3, 4);


// bindLogger();
// bind2Logger();

obj.logger = logger;
obj2.logger = logger;
//
obj.logger(1, 2, 3);
obj2.logger(4, 5, 6);


console.log(obj.logger === obj2.logger);