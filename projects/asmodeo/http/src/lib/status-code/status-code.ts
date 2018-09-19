import { STATUS_CODE } from './status-code.enum';

export class StatusCode {
  private _statusCode: STATUS_CODE | null = null;
  public get value(): STATUS_CODE {
    return this._statusCode;
  }

  constructor(code: STATUS_CODE | null) {
    if (this.validate(String(code))) {
      this._statusCode = code;
    }
  }

  private validate(code: string): boolean {
    return Object.values(STATUS_CODE).find(value => value === code);
  }
}
