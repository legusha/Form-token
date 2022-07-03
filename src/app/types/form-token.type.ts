import {FormControl, FormGroup} from '@angular/forms';
import {Company} from './company.type';

export type FormToken = FormGroup<{
  name: FormControl<string | null>,
  symbol: FormControl<string | null>,
  maxSupply: FormControl<number | null>,
  currencyType: FormControl<string | null>,
  supply: FormControl<boolean | null>,
  company: FormControl<Company | null>,
}>;
