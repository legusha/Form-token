import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TokenService } from '../../services/token.service'
import { CompanyService } from '../../services/company.service';
import { Company } from '../../types/company.type'
import { FormToken } from '../../types/form-token.type';

@Component({
  selector: 'app-form-token',
  templateUrl: './form-token.component.html',
  styleUrls: ['./form-token.component.scss'],
})

export class FormTokenComponent implements OnInit {
  companyList: Company[] = [];
  public form: FormToken;

  @Output() eventFormSubmit = new EventEmitter();

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
      currencyType: new FormControl(tokenService.token.currencyType),
      supply: new FormControl(tokenService.token.supply),
      company: new FormControl(companyService.companyDefault),
    });
  }

  onSubmit() {
    this.eventFormSubmit.emit(this.form.value);
  }

  ngOnInit(): void {}
}
