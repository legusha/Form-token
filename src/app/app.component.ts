import { Component } from '@angular/core';
import {FormToken} from './types/form-token.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formTokenTitle = 'Create your own crypto token';
  formTokenCreate = true

  eventTokenCreate(formToken: FormToken) {
    this.formTokenTitle = 'Your crypto token data';
    this.formTokenCreate = false
    console.log(formToken)
  }
}
