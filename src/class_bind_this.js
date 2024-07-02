class User {
  #id;

  constructor(id) {
    this.#id = id;
    this.getUserData = this.getUserData.bind(this);
  }

  getUserData(val) {
    const id = this.#id;
    console.log(`Send http request by user id ${id} ${val}`);
  }
}

class CustomerUser extends User {}

const user = new User('User');
user.getUserData();

const handler = (fn, val) => fn(val);

handler(user.getUserData);

const fn = user.getUserData;

fn();

new CustomerUser('Customer').getUserData(34);
