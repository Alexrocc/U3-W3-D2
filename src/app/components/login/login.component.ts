import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm = {
    username: '',
    password: '',
  };
  @ViewChild('form', { static: true }) form!: NgForm;

  constructor() {}

  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status) => {
      console.log(status);
    });
  }

  submitForm() {
    console.log('Login successful: ', this.form);
  }
}
