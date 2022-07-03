import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-title',
  templateUrl: './form-token-title.component.html',
  styleUrls: ['./form-token-title.component.scss']
})
export class FormTitleComponent implements OnInit {
  @Input('actionText') actionText = '';

  constructor() { }

  ngOnInit(): void {
  }

}
