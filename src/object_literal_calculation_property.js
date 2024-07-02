let i = 0;
const obj = {
  [['A', 'B', 'C']]: 'Some Value',
  [`prop${i}`]: i++,
  [`prop${i}`]: i++,
  [`prop${i}`]: i++,
  [`prop${i}`]: i++,
};

console.log(obj);
