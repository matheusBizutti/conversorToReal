import { Injectable } from '@angular/core';

@Injectable()
export class ControllService {

  private dollar: number = 3.97;

  constructor() { }

  setValueOfDollar(value: number) {

    this.dollar = value ? value : this.dollar;

  }

  getValueOfDollar(): number {

    return this.dollar;

  }

}
