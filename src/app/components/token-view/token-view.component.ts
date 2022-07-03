import {Component, Input, OnInit} from '@angular/core';
import {FormToken, FormTokenView} from '../../types/form-token.type';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-token-view',
  templateUrl: './token-view.component.html',
  styleUrls: ['./token-view.component.scss']
})
export class TokenViewComponent implements OnInit {
  @Input('formToken') formToken: FormToken | null = null;
  formTokenView: FormTokenView | null = null;
  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.formToken) {
      const currencyList = this.tokenService.currencyList;
      this.formTokenView = {
        ...this.formToken,
        currency: currencyList[this.formToken.currencyType]
      }
      console.log(this.formTokenView)
    }
  }

}
