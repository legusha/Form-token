import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TokenService } from '../services/token.service'
// import { Token } from "../services/token.type";
import { Company } from '../services/company.type'
import { CompanyService } from "../services/company.service";

@Component({
  selector: 'app-form',
  templateUrl: './form-token.component.html',
  styleUrls: ['./form-token.component.scss'],
})
export class FormTokenComponent implements OnInit {
  companyList: Company[] = [];

  public form: FormGroup<{
    name: FormControl<string | null>,
    symbol: FormControl<string | null>,
    maxSupply: FormControl<number | null>,
    blockchain: FormControl<number | null>,
    supply: FormControl<boolean | null>,
    company: FormControl<Company | null>,
  }>;

  constructor(private tokenService: TokenService, companyService: CompanyService) {
    this.companyList = companyService.companyList;
    this.form = new FormGroup({
      name: new FormControl(tokenService.token.name, [
          Validators.required,
          Validators.minLength(3)
      ]),
      symbol: new FormControl(tokenService.token.symbol, [
        Validators.required,
        Validators.minLength(3)
      ]),
      maxSupply: new FormControl(tokenService.token.maxSupply, [
        Validators.required,
        Validators.min(1)
      ]),
      blockchain: new FormControl(tokenService.token.blockchain),
      supply: new FormControl(tokenService.token.supply),
      company: new FormControl(companyService.companyDefault),
    });
  }

  ngOnInit(): void {
  }

}
