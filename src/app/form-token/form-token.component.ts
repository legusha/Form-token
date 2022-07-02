import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form-token.component.html',
  styleUrls: ['./form-token.component.scss'],
})
export class FormTokenComponent implements OnInit {
  companyList = [
    { name: 'My company' },
    { name: 'Other company' },
    { name: 'Another company' },
  ]

  form = new FormGroup({
    company: new FormControl(this.companyList[0]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
