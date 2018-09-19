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

## @asmodeo/http
### How to install:

```
npm i @asmodeo/http
```
```
npm i @asmodeo/http --save
```

### enum: STATUS_CODE
Contains the status code values.

#### Example:
```typescript
import { STATUS_CODE } from '@asmodeo/http';

console.log(STATUS_CODE.OK); // 200
console.log(STATUS_CODE.ACCEPTED); // 202
console.log(STATUS_CODE.UNAUTHORIZED); // 401
console.log(STATUS_CODE.INTERNAL_SERVER_ERROR); // 500
```

### model: StatusCode
Contains the status code validations and object instantiate.

#### Example:
```typescript
import { StatusCode } from '@asmodeo/http';

const _statusCode_ = new StatusCode(200);

console.log(_statusCode_.value); // 200
console.log(_statusCode_.ok); // true
console.log(_statusCode_.continue); // false 200

// ...

console.log(StatusCode.isBadRequest(200)); // false
console.log(StatusCode.isBadRequest(400)); // true
```
