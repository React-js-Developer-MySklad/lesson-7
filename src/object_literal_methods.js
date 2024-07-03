const obj = {
  someValue: 1,

  get value() {
    return this.someValue;
  },

  set value(val) {
    this.someValue = val;
  },

  methodName() {
    return this.someValue + this.value;
  },
};

obj.value = 2;
console.log(obj.someValue)
console.log(obj.value);
console.log(obj.methodName());
