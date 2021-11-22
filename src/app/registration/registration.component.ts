import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  firstname: string = null;
  lastname: string = null;
  email: any = null;
  gender: any = null;
  female: any = null;
  isMarried: any = null;
  password: any = null;
  phone: number = null;
  age: number = null;
  ngOnInit() {}
  constructor() {}

  onSubmit(contactForm) {
    console.log(contactForm.value);
  }
}
