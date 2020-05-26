export interface IFoo {
  id?: number;
  bar?: string;
}

export class Foo implements IFoo {
  constructor(public id?: number, public bar?: string) {}
}
