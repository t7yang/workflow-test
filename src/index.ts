export class Foo {
  constructor(private readonly name: string) {}

  bar() {
    console.log(this.name);
    return this.name;
  }
}
