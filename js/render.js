export class Person {
  constructor(name, age) {
    this.name = name;
		this.age = age;

		this.salom = function() {
			return this.name + 'ga salomlar, ' + 'siz ' + this.age +' yutdingiz'
		}
  };
}

