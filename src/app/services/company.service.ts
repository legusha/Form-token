import { Injectable } from '@angular/core';
import {Company} from './company.type';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyList: Company[] = [
    { name: 'My company' },
    { name: 'Company 2' },
    { name: 'Company 3' },
  ]
  companyDefault: Company = this.companyList[0];


  constructor() { }
}