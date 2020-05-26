export interface IFoo {
  id?: number;
}

export class Foo implements IFoo {
  constructor(public id?: number) {}
}
