import { ModelTransform } from './model-transform';

class Person {
  private _name;
  private _lastname;
  public get fullName(): string {
    return `${this._lastname}, ${this._name}`;
  }

  private _age;
  public get adult(): boolean {
    return this._age >= 18;
  }
  public get child(): boolean {
    return !this.adult;
  }

  constructor(input) {
    this._name = String(input.name).toLowerCase();
    this._lastname = String(input.lastName).toLowerCase();
    this._age = Number(input.age);
  }
}

describe('ModelTransform', () => {
  describe('Transform a single object', () => {
    const objTest = {
      name: 'Pilmee',
      lastName: 'Gates',
      age: 28
    };
    const result = ModelTransform.Transform(objTest, Person);

    it('Validate instance', () => {
      expect(result.fullName).toBe('gates, pilmee');
      expect(result.adult).toBeTruthy();
      expect(result.child).toBeFalsy();
    });
  });

  describe('Transform a array', () => {
    const objTest = [{
      name: 'Apellido1',
      lastName: 'Nombre1',
      age: 22
    }, {
      name: 'Apellido2',
      lastName: 'Nombre2',
      age: 40
    }, {
      name: 'Apellido3',
      lastName: 'Nombre3',
      age: 14
    }];
    const result = ModelTransform.Transform(objTest, Person);

    objTest.forEach((value, i) => it(`Validate instance: ${JSON.stringify(value)}`, () => {
      expect(result[i].fullName).toBe(`${value.lastName.toLowerCase()}, ${value.name.toLowerCase()}`);
      if (value.age >= 18) {
        expect(result[i].adult).toBeTruthy();
        expect(result[i].child).toBeFalsy();
      } else {
        expect(result[i].adult).toBeFalsy();
        expect(result[i].child).toBeTruthy();
      }
    }));
  });
});
