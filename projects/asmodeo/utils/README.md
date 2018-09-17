<p align="center">
  <img width="200" height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVu61xHpSytwgeRVwDVtXy8tho2E70-WrA0yFYokEQtjLYMUW">
</p>

# @asmodeo
[![Build Status](https://travis-ci.org/pilmee/asmodeo.svg?branch=master)](https://travis-ci.org/pilmee/asmodeo) 
[![Dependencies Status](https://david-dm.org/pilmee/asmodeo.svg)](https://david-dm.org/pilmee/asmodeo.svg) 
[![License: MIT](https://img.shields.io/npm/l/package.json.svg)](https://opensource.org/licenses/MIT) 
[![Greenkeeper badge](https://badges.greenkeeper.io/pilmee/asmodeo.svg)](https://greenkeeper.io/) 
[![Total alerts](https://img.shields.io/lgtm/alerts/g/pilmee/asmodeo.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/pilmee/asmodeo/alerts/)

This library contains some reusable code blocks for different applications.

## @asmodeo/utils
### How to install:

```
npm i @asmodeo/utils
```


### ModelTransform

"ModelTransform" is a class that transforms an object or array into the destination class that is sent to it.

```typescript
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

const result = ModelTransform.Transform({ name: 'Pilmee', lastName: 'Gates', age: 21 } , Person));

console.log(result.fullName); // gates, pilmee
console.log(result.adult); // true;
console.log(result.child); // false
```
The idea is to help build models of objects that abstract the validations and other operations that may be necessary or require scope to only instantiate the model.


#### How to use:
Angular example:

```typescript
import { Component, OnInit } from '@angular/core';
import { ModelTransform } from '@asmodeo/utils';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

import { BEPerson, PersonService } from './person.service';
import { Person, IPerson } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public persons = [];

  constructor(
    private _PersonService: PersonService
  ) {}

  ngOnInit() {
    this._PersonService.get()
      .pipe(
        map<BEPerson[], IPerson[]>((person) => ModelTransform.Transform<BEPerson, IPerson>(person, Person))
      )      
      .subscribe((persons) => this.persons = persons);
  }
}
```

## License:
MIT
