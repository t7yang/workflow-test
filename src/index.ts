export class Foo {
  constructor(private readonly name: string) {}

  bar() {
    console.log(this.name);
    return this.name;
  }

  baz() {
    return this.name + 'cool!!!';
  }

  foo() {
    console.log('this is self method!!');
  }
}
