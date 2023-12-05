import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  genders = ['Male', 'Female'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userInfo: this.fb.group({
        name: this.fb.control(null, { validators: [Validators.required] }),
        surname: this.fb.control(null, { validators: [Validators.required] }),
        password: this.fb.control(null, { validators: [Validators.required] }),
        passwordConfirm: this.fb.control(null, {
          validators: [Validators.required],
        }),
      }),
      gender: this.fb.control('uomo'),
      profileImg: this.fb.control(''),
      biography: this.fb.control(''),
      username: this.fb.control(null, { validators: [Validators.required] }),
    });
  }

  formControl(name: string) {
    return this.form.get(name);
  }

  errorControl(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  submit() {
    console.log('Sign up successful! ', this.form);
    this.form.reset();
  }
}
