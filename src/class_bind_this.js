class User {
  #id;

  constructor(id) {
    this.#id = id;
    this.getUserData = this.getUserData.bind(this);
  }

  getUserData(val) {
    console.log(this);
    const id = this.#id;
    // console.log(`Send http request by user this.#id ${id} send data: ${val}`);
  }
}

class CustomerUser extends User {
  constructor(props) {
    super(props);


    this.getUserData = this.getUserData.bind(this);
  }

}

const user = new User('UserID');
// user.getUserData('Value');

// const handler = function (fn, val) {fn(val);}
const handler = (fn, val) => fn(val);
//
handler(user.getUserData, 'HandlerValue');
//
// const fn = user.getUserData;
//
// fn();
//

// console.log(user)
// console.log(new CustomerUser('Customer'))


(function () {
  'use strict'
  const v = 1;

  function func() {
    console.log(v)
  }


  const arrow = () => console.log(v);

  func()

  arrow();
})()