import { Injectable } from '@angular/core';
import { Company } from './token.type';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  companyList: Company[] = [
    { name: 'My company' },
    { name: 'Company 2' },
    { name: 'Company 3' },
  ]
  companyDefault: Company = this.companyList[0];


  constructor() { }
}
