import {FormControl, FormGroup} from '@angular/forms';
import { Company } from './company.type';
import { Currency } from './token.type';

export type FormTokenGroup = FormGroup<{
  name: FormControl<string | null>,
  symbol: FormControl<string | null>,
  maxSupply: FormControl<number | null>,
  currencyType: FormControl<string | null>,
  supply: FormControl<boolean | null>,
  company: FormControl<Company | null>,
}>;

export type FormToken = {
  name: string,
  symbol: string,
  maxSupply: number,
  currencyType: string,
  supply: boolean,
  company: Company,
}

export type FormTokenView = {
  name: string,
  symbol: string,
  maxSupply: number,
  currencyType: string,
  currency: Currency
  supply: boolean,
  company: Company,
}
